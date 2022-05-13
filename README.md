# Library
## Table of Contents 
- [[README#Introduction|Introduction]]
- [[README#About The Task|About The Task]] 
	- [[README#About The Task#Screenshots|Screenshots]]
		- [[README#About The Task#Screenshots#Desktop|Desktop]]
		- [[README#About The Task#Screenshots#Mobile|Mobile]]
	- [[README#About The Task#Instructions|Instructions]]
- [[README#How To Use|How To Use]]
- [[README#Reflections|Reflections]]
- [[README#Further Links|Further Links]]

## Introduction 

This task was completed as part of [The Odin Project](https://www.theodinproject.com)'s JavaScript curriculum, with the goal of teaching students about Objects and Object Constructors in JavaScript. The task is to create a library app, where you can enter books that you have (or have not) read, and not only display them on the page, but create book Objects. Functionality such as deleting books and updating their read status needs to be implemented, not only on the DOM elements, but on the Objects themselves. 
## About The Task
### Screenshots 
#### Desktop 

![[Desktop Screenshot.png]]

#### Mobile 

![[Mobile Screenshot.jpg]]

### Instructions

The original instructions on [The Odin Project's page](https://www.theodinproject.com/lessons/javascript-library) are as follows: 

1.  If you haven’t already, set up your project with skeleton HTML/CSS and JS files.
2.  All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:
    
    ```javascript
    let myLibrary = [];
    
    function Book() {
      // the constructor...
    }
    
    function addBookToLibrary() {
      // do stuff here
    }
    ```
    
3.  Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
4.  Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.
5.  Add a button on each book’s display to remove the book from the library.
    1.  You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
6.  Add a button on each book’s display to change its `read` status.
    1.  To facilitate this you will want to create the function that toggles a book’s `read` status on your `Book` prototype instance. 

## How To Use

1. Click on the "Add Book to Library" button
 ![[Add Book Screenshot.png]]
 
2. Clicking on this will bring up a modal with a form to enter a book into the library. Fill this in, and press submit to add the book. 
![[Modal Screenshot.png]]

3. Once submitted, the form will close, and the book will appear on the page. 
![[Read Screenshot.png]]

4. You can edit whether or not you have read the book by clicking on the "I've read this" / "I haven't read this yet" button on the entry 
![[Not Read Screenshot.png]]

5. You can delete the entry by clicking on the 'x' in the top right corner of an entry. 

## Reflections

I really enjoyed this task. I struggled a bit with actually laying out the page, just not knowing how I wanted things to look. I went through a few steps in coming up with the design. Initially I was going for an Apple Newsstand vibe, but then I found it a bit too difficult to implement. I was then inspired by looking at Safari's Reading List section every time I opened a new tab, and got the entry design roughly from that. Finally, I used the colour scheme from the different levels of Finder to pull it all together. That honestly took the longest part of it all. 

Objects seem pretty straight forward, coming from Ruby; they are just functions that create 'pseudo-classes'. I struggled with Scope a bit. It wasn't until I read ahead in the curriculum that I discovered you actually need to return the thing you want to expose for it to work. That was a big headache relieved. On the whole, a relatively simple topic to wrap my head around. 

## Further Links

[My Github](https://github.com/shaun-b1)
[Live Project](https://shaun-b1.github.io/Library/)
