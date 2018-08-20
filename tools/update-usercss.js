#!/usr/bin/env node
"use strict";

const fs = require("fs-extra");
const path = require("path");

const {replaceHolders, maxSize, pad} = require("./utils");
const pkg = require("../package.json");

const files = {
  defaults: path.join(__dirname, "..", "defaults.json"),
  usercss: path.join(__dirname, "..", pkg.main),
  template: path.join(__dirname, "usercss-template.css"),
};

const defaults = require(files.defaults);

function addVars(template, usercss) {
  const vars = defaults.variables;
  const keys = Object.keys(vars);
  const typeLen = maxSize(keys.map(key => vars[key].type));
  const labelLen = maxSize(keys.map(key => vars[key].label));
  const keyLen = maxSize(keys.map(key => key));
  const variables = keys.map((key) => {
    const e = vars[key];
    const v = e.type !== "dropdown" ?
      e.value :
      `{\n  ${Object.keys(e.value)
        .map(o => `${o} "${o}" <<<EOT\n  ${e.value[o]} EOT;`)
        .join("\n  ")}\n}`;
    return `@advanced ${pad(typeLen, e.type)} ${pad(labelLen, e.label)} ` +
      `"${key}"${pad(keyLen - key.length)} ${v}`;
  }).join("\n");
  return replaceHolders(
    pkg,
    usercss
      .replace(/\/\*\s==UserStyle[\s\S]+==\/UserStyle== \*\/\s+/i, template)
      .replace("{{preprocessor}}", defaults.preprocessor || "uso")
      .replace("{{variables}}", variables)
  );
}

function exit(err) {
  if (err) console.error(err);
  process.exit(err ? 1 : 0);
}

fs.readFile(files.template, "utf8")
  .then(template =>
    fs
      .readFile(files.usercss, "utf8")
      .then(usercss => addVars(template, usercss))
  )
  .then(css => fs.writeFile(files.usercss, css))
  .then(() => console.log("\x1b[32m%s\x1b[0m", `${pkg.title} usercss update complete`))
  .catch(exit);
