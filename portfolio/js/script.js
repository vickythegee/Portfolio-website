/* =========================================================
   script.js: your JavaScript lives here
   Loaded with "defer" in index.html, so the whole page exists
   by the time this file runs.

   Weeks 1-6 were HTML and CSS only. Work through the TODOs
   below as the course reaches each topic, one week at a time.
   ========================================================= */

"use strict";

// Tells CSS that JavaScript is running (lets you style JS-only parts safely).
document.documentElement.classList.add("js");

/* ---------------------------------------------------------
   WEEK 8: Syntax, variables, functions
   TODO: store your details in variables and a function
         const owner = "Your Name";
         function greet(name) { return `Hello, I'm ${name}`; }
         console.log(greet(owner));
   --------------------------------------------------------- */

/* ---------------------------------------------------------
   WEEK 9: Control flow, arrays and objects
   TODO: make an array of project objects:
         const projects = [
           { title: "Landing Page", tags: ["HTML5", "CSS"], link: "#" },
         ];
         Use a loop or forEach to go through it.
   --------------------------------------------------------- */

/* ---------------------------------------------------------
   WEEK 10: The DOM
   TODO: 1. Put the current year in the footer:
            document.querySelector("#year").textContent = new Date().getFullYear();
         2. Dark mode: un-hide #theme-toggle and set
            document.documentElement.dataset.theme = "dark";
            (the dark colours already exist in css/variables.css)
   --------------------------------------------------------- */

/* ---------------------------------------------------------
   WEEK 11: Events
   TODO: 1. Click event on #theme-toggle to switch themes.
         2. Highlight the current .nav__link while scrolling.
         3. Remember the chosen theme with localStorage.
   --------------------------------------------------------- */

/* ---------------------------------------------------------
   WEEK 12: Dynamic DOM manipulation
   TODO: 1. Hamburger button that toggles the mobile menu.
         2. Build the project cards from your projects array
            using document.createElement() and appendChild().
         3. A modal popup that shows more project details.
   --------------------------------------------------------- */

/* ---------------------------------------------------------
   WEEK 13: Forms and APIs
   TODO: 1. Validate #contact-form on "submit":
            check name, email and message, show text in
            #name-error, #email-error and #message-error,
            and call event.preventDefault() when invalid.
         2. Use fetch() to load your GitHub repos:
            https://api.github.com/users/YOUR-USERNAME/repos
            and display them in the Projects section.
   --------------------------------------------------------- */
