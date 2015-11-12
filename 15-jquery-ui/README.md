# jQuery Practice

## Description

Practice DOM traversal and manipulation

## Objectives

### Learning Objectives

After completing this assignment, you should...

* Be familiar with the different jQuery DOM traversal and manipulation methods
* Be familiar with jQuery event listeners
* Understand how to modify styles dynamically by adding classes

### Performance Objectives

After completing this assignment, you should be able to...

* Start a new jQuery project using bower
* Create UI with CSS (SASS) and HTML
* Use modules to start various applications

## Details

### Deliverables

* A repo containing at standard boilerplate with files for each mode:

  * `public/accordion.html`
  * `public/keyboard.html`
  * `public/calendar.html`

### Requirements

* Todos/Plan of Attacks for each Mode

## Easy Mode

Recreate the accordion below using CSS, JavaScript, and jQuery.


![](images/accordion.gif)
![](images/accordion.png)

## Normal Mode

Recreate the keyboard below using CSS, JavaScript, and jQuery.
Without worrying about Shift or CapsLock state.

![](images/keyboard.gif)
![](images/keyboard.png)

## Hard Mode

Add Shift and CapsLock to the keyboard

## Bonus Mode

Recreate the calendar below using CSS, JavaScript, and jQuery.

![](images/calendar.gif)
![](images/calendar.png)

### Tasks

```
#### Getting Started
* [ ] Create a new issue with tasks
* [ ] Create a new repository
* [ ] Create and commit boilerplate project
  * [ ] package.json
  * [ ] bower.json
  * [ ] public/accordion.html
  * [ ] public/keyboard.html
  * [ ] src/accordion.js
  * [ ] src/keyboard.js
  * [ ] sass/app.scss
  * [ ] sass/accordion.scss
  * [ ] sass/keyboard.scss
  * [ ] Brocfile.js
* [ ] HTML Boilerplate
* [ ] Use `@import` statements from the `app.scss` file to include `accordion` and `keyboard`

#### Accordion
* [ ] Checkpoint: Create the markup to represent the accordion
  * [ ] Markup: Parent Acordion
  * [ ] Markup: Header Rows
  * [ ] Markup: Sub Lists
  * [ ] Complete: Commit & Push `public/accordion.html`
* [ ] Style "Fully Closed" Accordion
  * [ ] Checkpoint: Style Header Row
    * [ ] Style: Hide sublists
    * [ ] Style: Accordion Width
    * [ ] Style: Icon
    * [ ] Style: Text
    * [ ] Style: "Side Bubble"
    * [ ] Style: cleanup
    * [ ] Complete: Commit & Push `sass` directory
* [ ] Style "Fully Closed" Accordion
  * [ ] Style: Show sublists
  * [ ] Style: Sublist items
  * [ ] Style: Sublist item text
  * [ ] Style: Sublist item numbering
  * [ ] Style: Sublist item bubble
  * [ ] Complete: Commit & Push `sass` directory
* [ ] Javascript: Setup and Slide Down
  * [ ] Use `require` to load `accordion` module
  * [ ] Call loaded `accordion` module function
  * [ ] Make it slide down sublists
  * [ ] Complete: Commit & Push `public` and `src` directories
* [ ] Javascript: Slide Neighbors
  * [ ] Find neighbor of current showing tab
  * [ ] Slide to hide neighbor sublists when inactive
```
