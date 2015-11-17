# Image Board

## Description

Create an image board that saves submissions to tiny-lr server.

## Objectives

### Learning Objectives

After completing this assignment, you should…

* Be able to use AJAX, DOM events, and Element Creation using jQuery


### Performance Objectives

After completing this assignment, you be able to effectively use

* jQuery AJAX
* jQuery Selectors
* jQuery Append
* jQuery to Create Elements

## Details

### Deliverables

* A repo containing at least:
  * `public/index.html`
  * `src/app.js`
  * Build Tools including `Brocfile.js`

### Requirements

* No JSHint warnings or errors

## Normal Mode
Using the tools you've learned in class, create a responsive image board that allows you to add images and captions via a url.
The images that are added to the image board should be saved to tiny-lr server, so that when you reload the page, they are not lost.
Below are screenshots of what your app should look like.

In addition, you should have:
- The navbar should have a button that, slides down the edit image form

### Mobile
![Mobile](mobile.png)

### Desktop
![Desktop](desktop.png)

### Add Image Form
![Add](add.png)

## Hard Mode

- The form to add an image should properly validate the image URL by at minimum
  checking for a http:// or https:// prefix and require a non-empty description.
- Create a username field and allow filtering by `username`

## Tasks


```
#### Getting Started
* [ ] Create a new issue with tasks
* [ ] Create a new repository
* [ ] Create and commit boilerplate project
  * [ ] package.json
  * [ ] bower.json
  * [ ] public/index.html
  * [ ] src/app.js
  * [ ] sass/app.scss
  * [ ] Brocfile.js
* [ ] HTML Boilerplate

#### Accordion
* [ ] Checkpoint: Create the markup to represent the accordion
  * [ ] Markup: Nav Bar
  * [ ] Markup: New Photo Form
  * [ ] Markup: Example Photo in List
  * [ ] Complete: Commit & Push `public/index.html`
* [ ] Style Desktop
  * [ ] Checkpoint: Navbar
    * [ ] Style: Navbar Background
    * [ ] Style: Navbar Icon
    * [ ] Complete: Commit & Push `sass` directory
* [ ] Style Expanded Form
  * [ ] Style: Form Background
  * [ ] Style: Inputs
  * [ ] Style: Cancel Button (or link)
  * [ ] Style: "Add Image" Button
  * [ ] Complete: Commit & Push `sass` directory
* [ ] Style Photo List
  * [ ] Style: List Background
  * [ ] Style: Image Size
  * [ ] Style: Image Caption
  * [ ] Complete: Commit & Push `sass` directory
* [ ] Javascript: Toggle Form
  * [ ] Slide down form on click in navbar
  * [ ] Complete: Commit & Push `public` and `src` directories
* [ ] Javascript: Submit Images on Form Submit
  * [ ] Capture Input From Inputs
  * [ ] Save data to `http://tiny-lr.herokuapp.com/collections/photos-<your-initials>`
  * [ ] Slide up form after submit
  * [ ] Reset form after submit
  * [ ] Complete: Commit & Push `public` and `src` directories
* [ ] Javascript: Cancel Form
  * [ ] Slide up form
  * [ ] Reset form
  * [ ] Complete: Commit & Push `public` and `src` directories
* [ ] Javascript: Show Existing Images
  * [ ] Create new item in photo list
  * [ ] Append item to existing list
  * [ ] Complete: Commit & Push `public` and `src` directories
* [ ] Javascript: Add newly submitted item to list
  * [ ] After form submitted and data back from server, add to list
  * [ ] Complete: Commit & Push `public` and `src` directories
```

## Notes

This will mimic a lot of the work we did for our contact book today in class.
