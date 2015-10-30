# Sk8 Site - Wireframe => HTML

## Description
Without fail, a front-end developer will need to convert a wireframe into a fully functioning website, and something that works well on mobile and tablet devices.

For this assignment, you'll be creating this below wireframe and turning into a site that not only renders well from a normal desktop size, but also transitions and is very usable on smaller viewports.

![Powell Peralta](assets/powell_peralta.jpg)

## Objectives

### Learning Objectives

After completing this assignment, you should…

* Have solid understanding of HTML/CSS/SASS
* Understand principles of responsive web design and be able to effectively execute a solid flow of content from desktop to mobile (breaking down columns, hiding content, etc)
* Be able to leverage developer tools to test on mobile devices.

### Performance Objectives

After completing this assignment, you be able to effectively use

* From a high fidelity wireframe, you should be able to, with a high degree of accuracy, create an html prototype of said design.
* @media queries
* SASS
* HTML
* Setup build tools for compiling SASS

## Details

### Deliverables

* A repo containing at least:
  * `public/index.html`
  * `scss/<sass files>.scss`

## Tasks

```
* [ ] Create a new Issue with these tasks!
* [ ] Use the `git` cli to initialize a new project
* [ ] Checkpoint: Created and committed boilerplate [as listed in the Gitbook](https://rtablada.gitbooks.io/lr-fall-2015/content/resources/project-structure.html)
* [ ] Checkpoint: Download image assets: https://gist.githubusercontent.com/rtablada/9613c4c7b101e0038ca2/raw/2d000309ad6cd6d24ed880978a8d30873c0cc65d/gistfile1.txt
* [ ] Use the `hub` cli to create a repository called `09-skate-shop`
* [ ] Commit Code to `master` branch and push to Github
* [ ] Use the `git` cli to create a branch called `develop`
* [ ] Setup build tools
  * [ ] Use NPM to install (with `--save-dev` flag) `broccoli`, `broccoli-sass`, and `broccoli-merge-trees`
  * [ ] Use Bower to install `font-awesome`,  `normalize-css`, `neat`, (optionally `yoga`)
  * [ ] Set up SASS to compile `sass/app.scss` and allow importing from `bower_components/font-awesome/scss`, `bower_components/bourbon/app/stylesheets`, `bower_components/neat/app/stylesheets` and `bower_components/normalize-css`
  * [ ] Import `font-awesome` in `app.scss` and set the font_path variable
  * [ ] Import `bourbon` in `app.scss`
  * [ ] Import `neat` in `app.scss`
  * [ ] Merge `public` directory with directories from the bower version of `font-awesome` if not using CDN font path
  * [ ] Complete: Commit & Push `Brocfile.js`, `sass/app.scss`, `bower.json`, and `package.json` files
* [ ] In Github, open a PR _from_ `develop` _into_ `master`
* [ ] Checkpoint: Create the markup to represent header
  * [ ] Markup: "Subscribe"
  * [ ] Markup: Social Icons
  * [ ] Markup: Navbar
  * [ ] Markup: Hero Photo Slider
    * [ ] Markup: Logo
    * [ ] Markup: Photo
    * [ ] Markup: Selector (look at `radio` on MDN)
  * [ ] Complete: Commit & Push `public/index.html`
* [ ] Checkpoint: Create markup for Article Grid
  * [ ] Markup: Title
  * [ ] Markup: Info
  * [ ] Markup: Text
  * [ ] Markup: Read More
  * [ ] Complete: Commit & Push `public/index.html`
* [ ] Checkpoint: Create markup for Skater Pics
  * [ ] Markup: Arrow
  * [ ] Markup: Small Pic
  * [ ] Markup: Tall Pic
  * [ ] Markup: Wide Pic
  * [ ] Complete: Commit & Push `public/index.html`
* [ ] Checkpoint: Create markup for Skateboards
  * [ ] Markup: One Skateboard Item
  * [ ] Complete: Commit & Push `public/index.html`
* [ ] Checkpoint: Create the markup to represent contact Form
  * [ ] Markup: Left Side
    * [ ] Markup: Title
    * [ ] Markup: Text
    * [ ] Markup: Social Links
  * [ ] Markup: Right Side
    * [ ] Markup: Name input
    * [ ] Markup: Email input
    * [ ] Markup: Message textarea
    * [ ] Markup: Submit Button
  * [ ] Complete: Commit & Push `public/index.html`
* [ ] Checkpoint: Style header
  * [ ] Markup: "Subscribe"
  * [ ] Markup: Social Icons
  * [ ] Markup: Navbar
  * [ ] Markup: Hero Photo Slider
    * [ ] Markup: Logo
    * [ ] Markup: Photo
    * [ ] Markup: Selector (look at `radio` on MDN)
  * [ ] Complete: Commit & Push `sass/*`
* [ ] Checkpoint: Style Article Grid
  * [ ] Markup: Title
  * [ ] Markup: Info
  * [ ] Markup: Text
  * [ ] Markup: Read More
  * [ ] Complete: Commit & Push `sass/*`
* [ ] Checkpoint: Style Skater Pics
  * [ ] Markup: Arrow
  * [ ] Markup: Small Pic
  * [ ] Markup: Tall Pic
  * [ ] Markup: Wide Pic
  * [ ] Complete: Commit & Push `sass/*`
* [ ] Checkpoint: Create markup for Skateboards
  * [ ] Markup: One Skateboard Item
  * [ ] Complete: Commit & Push `sass/*`
* [ ] Checkpoint: Style contact Form
  * [ ] Markup: Left Side
    * [ ] Markup: Title
    * [ ] Markup: Text
    * [ ] Markup: Social Links
  * [ ] Markup: Right Side
    * [ ] Markup: Name input
    * [ ] Markup: Email input
    * [ ] Markup: Message textarea
    * [ ] Markup: Submit Button
  * [ ] Complete: Commit & Push `sass/*`
```

## Normal Mode

* Create a web page from the given Powell Peralta wireframe.
* The finished prototype must be responsive and adjust in a usable way to mobile devices.

## Resources

http://bourbon.io
http://neat.bourbon.io
