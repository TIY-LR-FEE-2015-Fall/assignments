# Positioning Exercise

## Description

This exercise will test your knowledge of CSS positioning

## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand how CSS positioning works.

### Performance Objectives

After completing this assignment, you will be able to effectively use

* `position: relative;`
* `position: absolute;`

## Details

### Deliverables

* A project using basic broccoli build tools including
  - `public` directory with `index.html` and `app.css`
  - `bower.json` file with dependency of Normalize
  - `package.json` file with dependencies
    *	`broccoli`
    *	`broccoli-merge-trees`
  - `.gitignore` to make sure you don't commit things you don't need
  - `Brocfile.js` - Setting up merge tools


## Normal Mode

Recreate the following block using HTML and CSS with the build tools we learned today.
You should use Broccoli Merge Trees to pull in Normalize from Bower.
This technique can also be used to pull in Font Awesome (the bower package is called `font-awesome`).

![Exercise](exercise.png)

## Tasks

```
* [ ] Create a new Issue with these tasks!
* [ ] Use the `git` cli to initialize a new project
* [ ] Checkpoint: Created and committed boilerplate [as listed in the Gitbook](https://rtablada.gitbooks.io/lr-fall-2015/content/resources/project-structure.html)
* [ ] Use the `hub` cli to create a repository called `07-positioning-exercies`
* [ ] Use the `git` cli to create a branch called `develop`
* [ ] In Github, open a PR _from_ `develop` _into_ `master`
* [ ] Setup build tools
  * [ ] Use Bower to install `font-awesome` and `normalize-css`
  * [ ] Merge `public` directory with directories from bower versions of `normalize-css` and `font-awesome`
* [ ] Checkpoint: Create the markup to represent the pictured site
  * [ ] Markup: "In This Lesson"
  * [ ] Markup: "CSS" List
  * [ ] Markup: "Share"
  * [ ] Markup: Number
  * [ ] Complete: Push `public/index.html`
* [ ] Add styles for page
  * [ ] Checkpoint: Style the Layout of the site
    * [ ] Style Main box
    * [ ] Style "In This Lesson"
    * [ ] Style "CSS" List
    * [ ] Style "Share"
    * [ ] Style Number
    * [ ] Complete: Push `public/index.html`
```

## Additional Resources

* [Default Project Structure](https://rtablada.gitbooks.io/lr-fall-2015/content/resources/project-structure.html)
* [Broccoli Merge Trees Docs](https://github.com/broccolijs/broccoli-merge-trees)
