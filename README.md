# Generic Course - Institutional Page

Welcome to the Institutional Page of Generic Course! This project represents a generic institutional website with information about courses, FAQs, and student testimonials.

## Content

### HTML Structure

The HTML file (`index.html`) provides the basic structure of the page, including the header, main sections, and footer. It also includes links to external stylesheets and JavaScript files.

### Head Section
```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/styles/reset.css">
    <link rel="stylesheet" href="./src/styles/globalStyle.css">
    <link rel="stylesheet" href="./src/styles/style.css">
    <link rel="stylesheet" href="./src/styles/modal.css">
    <link rel="stylesheet" href="./src/styles/header.css">
    <link rel="stylesheet" href="./src/styles/main.css">
    <link rel="stylesheet" href="./src/styles/footer.css">
    <title>Página Institucional Genérica</title>
</head>
```
The head section includes meta tags for character set and viewport, links to various stylesheets, and the title of the page.

### Header
```html
<header class="flex" id="header">
    <!-- ... -->
</header>
```
The header contains the logo and a button to join the next class.

### Main Section
```html
<main class="flex" id="main">
    <!-- ... -->
</main>
```
The main section includes information about the course, FAQs, and student testimonials.

### Footer
```html
<footer class="footer__conteiner flex">
    <h3>Generic Course</h3>
</footer>
```
The footer displays the name of the course.

### Modal
```html
<dialog id="modal">
    <!-- ... -->
</dialog>
```
A modal is included for user registration.

### Scripts
```html
<script src="./src/scripts/script.js"></script>
```
The JavaScript file `script.js` is linked to provide interactivity.

## Stylesheets

Multiple stylesheets are used to style different sections of the page, ensuring a clean and organized design.

## How to Contribute

Feel free to fork this repository and contribute to the project. If you have suggestions or improvements, submit a pull request.

Thank you for exploring the Generic Course Institutional Page! If you have any questions, feel free to reach out.
