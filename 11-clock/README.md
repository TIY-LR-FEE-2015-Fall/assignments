# color-clock

## Description

This assignment serves to reinforce JS fundamentals with `setInterval`, writing to the DOM, practicing CSS animations, positions, and transforms, and finally breaking down complex problems into simple sequences in code.

## Objectives

### Learning Objectives

After completing this assignment, you should:

* Have mastery of general JS syntax
* Be able to write a series of functions that achieve a series of steps
* Use `document.querySelector` and `addEventListener` to modify DOM elements

### Performance Objectives

After completing this assignment, you should be able to effectively use:

* The install tools and processes given to you to build a site with SCSS and JS
* gh-pages

## Details

### Deliverables

* A repo containing at least:
    * Standard Boilerplate with Broccoli build tools
    * `public/app.js` file with scripts to make clock work
    * No `onclick` or other similar attributes in HTML

### Requirements

* All functions should be complete and produce the expected output
* The clock should modify the colors of the background based on the time

Create a new Github repo, setup your project files, and recreate the following screencapture as a webpage.

![](./clock.gif)

### Tasks

```
#### Getting Started
  * [ ] Create a new issue with tasks
  * [ ] Create a new repository
  * [ ] Create and commit boilerplate project
    * [ ] package.json
    * [ ] bower.json
    * [ ] public/index.html
    * [ ] public/app.js
    * [ ] sass/app.scss
    * [ ] Brocfile.js
  * [ ] HTML Boilerplate
  * [ ] Add structure using HTML

#### Make it Tick
  * [ ] `console.log` the current time on page load.
  * [ ] `console.log` the current time every second.
  * [ ] Display the current time every second in the dom
  * [ ] Create a function to add leading zeros ("1" -> "01")
  * [ ] Display the current time (Hours, Mins, Sec), padded with zeros to be exactly two digits
    long, every second.
  * [ ] `console.log` the percentage of a minute that the current seconds
    represents (e.g., if 30 seconds have elapsed, `console.log` 0.5)
  * [ ] Using the percent above, dynamically modify the length of the timer bar.
  * [ ] `console.log` an RFB color that is based on the current time every second.
  * [ ] Dynamically update the background color of the page using the color.
  * [ ] Display the generated color's hex value on hover.
  * [ ] Mission Complete!
```
