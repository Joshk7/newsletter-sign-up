# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Solution URL](https://github.com/Joshk7/newsletter-sign-up)
- Live Site URL: [Live Site URL](https://newsletter-sign-up-gules.vercel.app)

## My process

I started this challenge by laying out the base html and styles for both the sign up and success sections on mobile and then added styles for desktop. After that, I added hover and focus states for the bottom button. Once all that was done, I finally added an error message and styles for that.

With all the html and css setup, I started work with JavaScript to make the form validation work. An important part of the JavaScript is to compare the value of the email input to regex.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned a little bit about form validation, specifically for emails. Intrinsically, emails contain and @ symbol with many possibilities to the left and right.

```js
const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
```

Additionally, I needed to add a check if the current email within the email form input is valid.

```js
const isValidEmail = () => {
    const validity = email.value.length !== 0 && emailRegExp.test(email.value);
    return validity;
};
```

Once that logic is in place, the rest of the javascript is mostly responsible for changing text content and styles whenever an event handler is triggered.

### Continued development

I could go into further detail on validating the email input since I only used a regex test and checked to see if the form input value has length greater than 0.

### Useful resources

- [Client Side Form Validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation#livesample_fullscreen=extending_built-in_form_validation) - This was really helpful for understanding how to create custom form validation with JavaScript.

## Author

- Website - [Joshua Kahlbaugh](https://joshuakahlbaugh.pages.dev/)
- Frontend Mentor - [@Joshk7](https://www.frontendmentor.io/profile/Joshk7)
