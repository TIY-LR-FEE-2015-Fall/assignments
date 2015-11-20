# Run Timer with Backbone

## Description

Using Backbone Models and Views, build the following Run Timer.
Your designer has given you a clickable prototype as well as mockups for the new run timer they want to build.
Using what you know of Backbone, make a styled and functional app based on these assets.

## Objectives

### Learning Objectives

After completing this assignment, you should...

* Understand how to use Backbone.js to build a CRUD app

### Performance Objectives

After completing this assignment, you be able to effectively use

* Backbone Views
* Backbone Models
* Backbone Collections
* Backbone Router

## Details

### Deliverables

* A repo containing at least:
  * `public/index.html`
  * `src/**.js`
  * `sass/**.scss`
  * Build Tools

> **NOTE** Use the `yo backbone-broccoli` generator to get started

### Requirements

* No JSHint warnings or errors

## Normal Mode

Recreate the following app based on the following screenshots and clickable prototype.

This app should use the [tiny-lr server](http://tiny-lr.herokuapp.com) or a similar API to persist runs over time.
If using the tiny-lr server name your collection like:

```
http://tiny-lr.herokuapp.com/collections/runs-<your initials>
```

### [Clickable Prototype](https://invis.io/3U50MD2TC)

* https://invis.io/3U50MD2TC

### Index Page

This page lists all existing runs

![Index Page](Run List.png)

### New Run

Each run should have a run time (HH:MM:SS), Race Date (you can use a `type="date"` input), Race Notes (allowing notes for how the race went).

> The second screenshot shows input into one of the fields.

![New Run](New Run.png)
![New Run](New Run Copy.png)

### Run Details

This shows the date, time, and notes for a single run.

![Run Details](Run Details.png)

> **NOTE** These screens do not show an edit view, but your app should have an edit screen similar to the "New Run" screen

## Description

By the end of this application you should be able to see all runs, create new runs, see the details for a run, and edit runs.

> **NOTE** This app doesn't allow you to delete runs

## Brand/Design Resources

> You should store these as SASS variables for use around your app styles.


### Colors

* Button Grey - #ddd
* Button Green - #80cbc4
* Header Bar Blue - #00bbd3
* Title White - #fff
* Regular Text - rgba(255, 255, 255, 0.6)
* Placeholder Text - rgba(255, 255, 255, 0.4)
* Green Text - #92cbc5
* Button Text Grey - #1c1c1c

### Typography

* Font Family - Roboto
* Icon Font - Font Awesome
* Base Line Height - 18px

## Taskss

```md
#### Index Screen
* [ ] Setup Models and Collections
  * [ ] Create Run Model with defaults for `time`, `date`, and `notes`
  * [ ] Set `urlRoot` on Run Model to point to tiny-lr server
  * [ ] Create Run Collection with `url` pointed to tiny-lr server
* [ ] Setup Routes Map in `src/router.js`
  * [ ] Create Route for Index Page
  * [ ] Create Route for New Run Page
  * [ ] Create Route for Run Detail Page (should take a dynamic id)
  * [ ] Create Route for Run Edit Page (should take a dynamic id)
  * [ ] Complete: Commit & Push `src` directory
* [ ] List Route
  * [ ] Checkpoint: Create the Markup For The Index Page (RAW HTML)
    * [ ] Markup: Nav Bar
    * [ ] Markup: List of Runs
    * [ ] Markup: Run Date
    * [ ] Markup: New Run Button
    * [ ] Complete: Commit & Push `public/index.html`
  * [ ] Checkpoint: Style Index Page
    * [ ] Style: Nav Bar
    * [ ] Style: List of Runs
    * [ ] Style: Run Date
    * [ ] Style: New Run Button
    * [ ] Complete: Commit & Push `sass` directory
  * [ ] Checkpoint: Create View for Index List
    * [ ] View should be represented by a `ul`
    * [ ] View should render when collection is updated from the server data
    * [ ] View should render a List Item view for every item in the collection
    * [ ] Complete: Commit & Push `src` directory
  * [ ] Checkpoint: Create View for List Item
    * [ ] View should be represented by a `li`
    * [ ] Use template string to render HTML for date and time to match mockup HTML
    * [ ] View should rerender on model changes
    * [ ] Complete: Commit & Push `src` directory
  * [ ] Checkpoint: Show List View on Home Route
    * [ ] Remove mockup HTML from `index.html` (Leave nav bar)
    * [ ] Create shared collection instance across all routes
    * [ ] Fetch collection when app loads
    * [ ] Create new instance of List View with passed in collection
    * [ ] Render List View to `#outlet`
    * [ ] Complete: Commit & Push `src` directory
* [ ] New Run Route
  * [ ] Checkpoint: Create the Markup For The New Run (RAW HTML)
    * [ ] Markup: Form
    * [ ] Markup: Inputs
    * [ ] Markup: Buttons
    * [ ] Complete: Commit & Push `public/index.html`
  * [ ] Checkpoint: Style Index Page
    * [ ] Style: Form
    * [ ] Style: Inputs
    * [ ] Style: Buttons
    * [ ] Complete: Commit & Push `sass` directory
  * [ ] Checkpoint: Create View for New Run Form
    * [ ] View should be represented by a `form`
    * [ ] View should render when model is changed
    * [ ] View should respond to `submit` event
    * [ ] On `submit`
      * [ ] Save Current Model
      * [ ] After save, redirect to detail route for new model id
    * [ ] Complete: Commit & Push `src` directory
  * [ ] Checkpoint: Show New Run Form on `new` url
    * [ ] Remove mockup HTML from `index.html` (Leave nav bar)
    * [ ] Create new instance of Run model on `new` route
    * [ ] Create new instance of New Run Form with passed in Run Model
    * [ ] Render New Run Form to `#outlet`
    * [ ] Complete: Commit & Push `src` directory
```

## Additional Resources

* http://backbonejs.org/
* https://github.com/jashkenas/backbone/wiki/Backbone%2C-The-Primer
