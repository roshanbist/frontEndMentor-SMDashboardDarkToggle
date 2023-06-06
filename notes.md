# Functional Requirements and Notes

Light/Dark Mode toggle -- takes system pref by default, but can override with toggle

What HTML markup (accessible) -- https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button--switch/

Use fieldset, legend, radio inputs

Switching between light/dark modes via JS and Prefers-color-scheme media query -- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme

https://piccalil.li/tutorial/create-a-user-controlled-dark-or-light-mode/

Three option toggle: light/dark/system pref
-- https://codepen.io/renddrew/pen/bRomab?editors=1100
-- https://codepen.io/SaraSoueidan/pen/jpBbrq

CSS Variables (custom properties) -- https://css-tricks.com/updating-a-css-variable-with-javascript/

Accessibility

- Use correct heading tags
- Screenreader-only text for card titles/username -- https://www.accessibility-developer-guide.com/examples/hiding-elements/visually/

NVDA hotkeys:
https://webaim.org/resources/shortcuts/nvda

- Ctrl will stop speech immediately
- Caps Lock is NVDA key
- NVDA + Q will quit NVDA
- NVDA + B will read entire page from top to bottom
- Press H to navigate through headline tags (other elements have hotkeys)
- D will navigate through region/landmark
  - Landmarks/region are recognized by <header> or <main> tags, role="rolename" or aria-label
  - When NVDA recognizes a landmark/region, if no role or aria-label, it will read the first content
- Press NVDA + down arrow to narrate rest of page from current position
- Pressing Shift + H will navigate backwards
- Go to Top?
- Skip to content?

Outline for video:

- Accessibility overview
- Install NVDA
  - basic controls, Ctrl, navigating headlines and regions and down
- SaraSoueidan.com website
- Try to read FEM site
- Add:
  - title, fill in "yout name here" in footer
  - role="contentinfo" to footer
  - aria-label="" for platform overview and platform details
  - Add screenreader-only h3 tags for card titles

--

Semantic HTML and accessibility -- https://www.youtube.com/watch?v=qSNUi7pRmWg
Inclusive cards -- https://inclusive-components.design/cards/

---

For using gulp in this project, to convert the scss to css and make the workflow better, we install bunch of packages

- install gulp-cli
  command : npm install gulp-cli -g

- install sass
  command: npm install sass

- create package.json file
  command : npm init -y

- install babel-core, auto prefixer, postcss and browser-sync, cssnano, dart-scss, gulp, gulp-babel

  - cssnano is for minifying css
  - dart-sass support new syntax @use, @forward
  - gulp-terser is used to minify javascript files
    command: npm install @babel/core @babel/preset-env postcss autoprefixer browser-sync cssnano dart-sass gulp gulp-babel gulp-postcss gulp-sass gulp-terser

- command to start project type: gulp
