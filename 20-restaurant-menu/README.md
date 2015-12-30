# Restaurant

## Description

Buid a working online ordering system and CMS (Content Management System) for a local Restaurant

## Objectives

### Learning Objectives

After completing this assignment, you should:

- Understand how to design and execute a frontend application given ambiguous requirements by a client.
- Understand how Ember and Ember CLI give you the tools to structure larger single page applications

### Performance Objectives

After completing this assignment, you should be able to:

- Write tests, outline of responsibilites, and plan of attack as needed as part of the planning process when making a complex frontend application.
- Execute client requirements to make a complete application.

## Details

### Deliverables

* A publicly available build of your site on Surge.sh

### Requirements

* No JSHint warnings or errors

## Normal Mode

Imagine a local restaurant has come to you and asked you to help them build a web presence.
They don't know anything about the Internet, but they know they need a web page and a way for users to order online.
They want an interactive menu that displays all of their food choices with prices, descriptions, etc.
They want the customer to be able to select menu items and create an order with a total price.
Orders should submit to the server so they can be tracked and fulfilled.

For staff members, the restaurant also want a way to change their menu and view orders that have been created.

Create an Ember CLI app, an API-Kit API for data persistance,
to create a dynamically updating menu page and back of house app.
See Additional Resources below for an example online menu.
For normal mode you can immediately add an item to the order instead of having a comments or asking how many should be in the order.
Also for normal mode, you should be able to go to an "admin" section to CRUD menu items and view orders.

> **NOTE** While Testing isn't a requirement of this project,
you should feel comfortable writing, using, and maintaining tests for an application.
Mirage mocks will be provided if you would like to use them in development or tests.

You are encouraged to use Material Lite, Materialize, Foundation, or Bootstrap to help style the application.
However, there will likely be custom styles on top of this.

### Tasks
#### Getting Started
- [ ] Create a new Ember CLI application
  * [ ] Update to Ember 2.2
  * [ ] Update to Ember Data 2.2
  * [ ] Install Material Lite
  * [ ] Install Ember Simple Auth
  * [ ] Install Ember CLI Mirage
- [ ] Launch API to Heroku
- [ ] Connect Application Adapter to Heroku API
- [ ] Setup templates for the different dynamic portions of the application

#### Menu
- [ ] Fetch the menu items
- [ ] Define a Model to represent menu items
- [ ] Categorize Menu Items
- [ ] For each category show category name
- [ ] Define a Component to represent a single menu item when ordering
- [ ] Define a Model to represent an order
- [ ] Create an order service to manage adding order items
- [ ] `console.log` the order when I click on the "Add To Cart"

#### Order Sidebar
- [ ] Create an Order Component to show the current order being built
- [ ] Add an instance of the Order Component to your `menu` template
- [ ] Show each item in your order in your component template
- [ ] In your order model, define a `subtotal` computed property that shows the price of all of the added items
- [ ] Show the `subtotal` for your order in your Order Component template
- [ ] Save order from cart service when user submits cart

#### Back of House
- [ ] Create a back of house index for all menu items
  * [ ] Show table consisting of `name`, `price`, and an Edit Link
- [ ] Create a back of house create view for new menu items with inputs for all fields
- [ ] Create a back of house edit view for existing menu items
- [ ] Create a back of house action for destroying existing menu items
- [ ] Create a back of house index for orders showing the total price
- [ ] Create a back of house detail view for seeing the purchased items for a single order

## Hard Mode
- Allow staff members to mark an order as completed

## Additional Resources
- [Order Up](https://orderup.com/restaurants/nuvo-burrito/delivery/categories/0)
- [Assignment](http://obese-finger.surge.sh)
- [Assignment Admin](http://obese-finger.surge.sh/admin)
