# Job Application Tracker

## Project Overview
This project is built using HTML, Tailwind CSS, DaisyUI and Vanilla JavaScript.

It allows users to:
- Track job applications
- Mark as Interview or Rejected
- Toggle status
- Delete jobs
- View dashboard counts

## JavaScript Questions

1️⃣ Difference between getElementById, getElementsByClassName, querySelector & querySelectorAll

In my project, I used different DOM selection methods.

getElementById() selects only one element using its id.

getElementsByClassName() selects multiple elements using class name and returns HTMLCollection.

querySelector() selects the first matching element using CSS selector.

querySelectorAll() selects all matching elements and returns a NodeList.

The main difference is how many elements they return and what type of collection they provide.

2️⃣ How to create and insert a new element into the DOM?

To create a new element, we use document.createElement().

Example:

const div = document.createElement("div");
div.innerText = "New Job Card";
document.body.appendChild(div);

In my project, I dynamically created job cards using this method and inserted them inside a container.

3️⃣ What is Event Bubbling?

Event Bubbling is a JavaScript mechanism where an event starts from the target element and moves upward to its parent elements.

For example, when I click a button inside a div, the click event first runs on the button, then on the parent div.

4️⃣ What is Event Delegation? Why useful?

Event Delegation is a technique where we attach an event listener to a parent element instead of multiple child elements.

In my project, I used event delegation to avoid multiple event listeners on every job card button.

It improves performance and prevents duplicate event binding.

5️⃣ Difference between preventDefault() and stopPropagation()

preventDefault() stops the default browser behavior (like form submission).

stopPropagation() stops the event from bubbling to parent elements.

Both are used to control event behavior but serve different purposes.
