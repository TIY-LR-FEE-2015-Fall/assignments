# backbone-exercises

## Description

Achieve Backbone mastery by completing five Backbone apps.

Getting started: use the `backbone-project` command that we've created then reset your git remote by running `git remote rm origin` and then `hub create` to create a new Github repo.

## Objectives

### Learning Objectives

After completing this assignment, you should

* Be comfortable with the process of finishing a Backbone app from scratch

## Details

### Deliverables

* Plan of attacks for each exercise
* Pull Requests for each app named `develop-a`, `develop-b`, `develop-c`, `develop-d`
* Remember to `git checkout master` between every app.

### Requirements

* No JSHint warnings or errors
* No JSCS warnings or errors

## Normal Mode
Complete as many of the five apps as possible, copying code from previous
assignments only when absolutely necessary (making sure you understand when you are copying or asking questions about each step).

Each exercise should have its own `develop` branch

* a) Create a form for a person. It should have a first name, last name,
address, and phone number.  It should save the person to tiny-lr server.

* b) Create a "blog reading app", where you have a list of blog posts on the
side and when you click on a post title, it opens that post in another view.
Hint: which blog post is selected is "application state". You can use this collection here: http://tiny-lr.herokuapp.com/collections/blog.
This should not have any create or destroy functionality! ONLY READ!

* c) Create a bookmarking app where you can save URLs. It should have a form
where you enter the URL, a title, and a "tag". There should be a list of all
the URLs, as well as a list of all the tags (this should be generated
dynamically from the link collection). When you click on a tag, the link list
should show only those tags. Hint: which tag is selected is "application
state", so could appear in your URL and/or have a view model to represent it.
You can filter a collection with `collection.filter(...)`, but be aware that
it returns an array of models, not a new collection.

* d) Create a complete blog CMS from scratch, allowing you to create, read,
update, and delete blog posts.
