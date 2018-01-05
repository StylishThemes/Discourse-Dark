# Contributing to Discourse-Dark

1. [Getting Involved](#getting-involved)
2. [How To Report style issues](#how-to-report-style-issues)
3. [Core Style Guide](#style-guide)
4. [Getting Started](#getting-started)

## Getting Involved

There are a number of ways to get involved with the development of this Dark theme. Even if you've never contributed to an Open Source project before, we're always looking for help identifying missing styles or other issues.

## How to Report Style issues

### I don't know CSS

If you don't know CSS very well and have found a missing style, please include as much as possible of following information when opening an issue:

* Screenshot of the problem; include the element(s) in the console if at all possible
  * To select an element, target it with your mouse then right-click and choose "Inspect Element"
  * Please include both the HTML view and the element with the problem in the screenshot (see [issue #119](https://github.com/StylishThemes/GitHub-Dark/issues/119) for an example)
* A URL to the page (if public).

### I rock at CSS & GitHub!

* Follow the style guide below
* Make any needed changes, then send us a pull request
* Please include a url to the page (if public)

## Style Guide

* Use the provided `.editorconfig` file with your code editor. Don't know what that is? Then check out http://editorconfig.org/.
* Limit to the [K&R Style](https://en.wikipedia.org/wiki/Indentation_style#K.26R), and **2 SPACE INDENTATION** (no tabs, and not more, and not less than 2 spaces).

  * K&R Example:
    ```css
    element[attr='value'] {
    ··property: value;
    }
    ```

  * **Not Allman**
    ```css
    element[property='value']
    {
    ··property: value;
    }
    ```

  * Strict space between the `selector` and the `{`:
    ```css
    /* good */
    element[attr='value'] { }

    /* bad */
    element[attr='value']{ }
    ```

  * 2 Space indentation
    ```css
    /* good */
    ··property: value;

    /* bad */
    ····property: value;
    ----property: value;
    ·property: value;
    ```

* Try to wrap lines at around 80 characters.
* Try to limit the style size:
  * Don't add any image URI's to the css; instead add the image into the `/images` directory; then point to using the following url: `http://stylishthemes.github.io/Discourse-Dark/images/`{my-image.png}.
  * If possible, reduce any added selectors. Remember that Stylus requires an `!important` flag to override default styling, so a selector starting from the body isn't always necessary.
  * Don't add any inline comments. If you want to make a comment, add it as a note in the commit.
  * If your css definition already exists within the style, do not add it again! Add your selector to the existing definition.
* Insert any new css selectors in the available slot immediately before the style definition, or on a new line as needed.
* If you want to add a new userstyle or usercss variable, please open an issue and discuss it with us first.

## Getting Started

* Download, fork or clone this repository.
* It's easiest to try out your changes within the Stylus editor.
  * The live preview option (available soon) will make it easy to see your style changes as you make them.
  * Once done, make the same changes to the `discourse-dark.user.css` file in the repo and save. It might be easiest to copy &amp; paste the entire style from the Stylus editor.
