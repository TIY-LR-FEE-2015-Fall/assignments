# Timeline

## Description

This assignment serves to reinforce layout and positioning with CSS.
This should stretch your ability to position things quite a bit.

## Objectives

- exercise control of CSS positioning
- reinforce concepts of layout and `display` types

### Learning Objectives

After completing this assignment, you should be able to create the below layout in HTML and CSS from scratch.

## Details

### Deliverables

* A repo containing at least:
    - `index.html`
    - `app.css`

## Normal Mode

Recreate the following layout in HTML and CSS:

![](./timeline.png)

## Boilerplate Code

Start your application with the below listed boilerplate HTML and CSS as it will give you a head start on the assignment.

### `index.html`

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Timeline</title>
  <link rel="stylesheet" href="app.css">
</head>
<body>
  <ul class="timeline">

  </ul>
</body>
</html>
```

### `app.css`

```css
.timeline {
  list-style: none;
  margin-left: 200px;
  border-left: #575bb4 solid 4px;
  border-image:
      linear-gradient(to bottom, #575bb4, #8e92f5) 1 100%;
}
```

## Tasks

```
* [ ] Create a new Issue with these tasks!
* [ ] Use the `git` cli to initialize a new project
* [ ] Checkpoint: Created and committed `index.html` and `app.css` boilerplate
* [ ] Use the `hub` cli to create a repository called `04-timeline`
* [ ] Use the `git` cli to create a branch called `develop`
* [ ] In Github, open a PR _from_ `develop` _into_ `master`
* [ ] Use CDN to link to Font Awesome
* [ ] Create the markup to represent the pictured site
  * [ ] Checkpoint: Create markup to represent one item in the timeline
    * [ ] Markup: Date
    * [ ] Markup: Time
    * [ ] Markup: Icon
    * [ ] Markup: Title
    * [ ] Markup: Description
  * [ ] Checkpoint: Duplicate the first item to create multiple items to style
  * [ ] Complete: Push `index.html`
* [ ] Add styles for page
  * [ ] Checkpoint: Move Date & Time to left of Timeline
  * [ ] Checkpoint: Move Icon to Show On Top of Timeline
  * [ ] Checkpoint: Style Description and Title
  * [ ] Checkpoint: Style Arrow pointing at icon
```

## Additional Resources

- Font Awesome CDN: https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css
- http://learnlayout.com/
- List of HTML tags: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
- List of HTML attributes: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
- All the CSS properties! https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
