[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Fashion Blog

Hone your skills in HTML & CSS by building a page that is based on a mock up!

## Prerequisites

- HTML & CSS
- Flexbox and Grid

## Instructions

You do not have the necessary rights to update this repository. Therefore, you
must fork it, make changes to your fork, and then send a pull request to the
owners of this repository:

1. Fork and clone this repository.
1. Change into the new directory and create a development branch to work on.
1. Fulfill the listed requirements.

When you have fulfilled the requirements below, make a pull request on this
repository to turn in your work.

Unless otherwise specified on the calendar or by an instructor, homework is due
the next morning by 9:00am ET.

### Prep for JavaScript Data Types

Once you've completed the requirements, review this [short video](https://www.youtube.com/watch?time_continue=4&v=_r_LCMBvxmg&feature=emb_logo) on JavaScript Data Types so you're ready for the upcoming lectures.

## Requirements

Faithfully reproduce the mockup in HTML & CSS.

![goal](./mock.png)

### Build Your HTML

1. Create your html boilerplate in the `index.html` file.
1. Add a new file called `styles.css` and link it to the HTML file.
1. In the body of your HTML, use [`header`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header), [`main`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main), and [`footer`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) tags to clearly define the different parts of the page.
1. Use an `h1` tag for the site title and an `h2` for the subtitle inside the page header.
1. Use [`nav`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) tags inside the page header to create an accessible navigation. Follow the example in the [W3C Web Accessibility Initiative (WAI) Guidelines](https://www.w3.org/WAI/tips/developing/#provide-meaning-for-non-standard-interactive-elements) to format your navigation:
   1. Wrap each link in an anchor tag
   1. Wrap each anchor tag in a list item
   1. Wrap all of the list item tags in an unordered list tag
   1. Place the unordered list inside the the nav tag and give it attributes for `aria-label="Main Navigation"` and `role="navigation"`
1. Mark up both of the blog posts using the [`article`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) tag.
1. Use this [W3C WAI Guideline](https://www.w3.org/WAI/tips/developing/#use-mark-up-to-convey-meaning-and-structure) example, to help you structure your blog post content. Follow the pattern! Make sure there is a `p` tag that contains some lorem ipsum text (Remember you can create this with Emmet by typing `p>lorem` and pressing tab)!
1. Make sure your images all have `alt` attributes so that they are accessible.
1. Inside the page footer, use the same technique you used earlier to create a semantic and accessible navigation, using a wrapping `nav` tag, unordered list and the aria attributes.
1. Add a copyright in the `footer`. For the &copy; symbol, use an [html entity](https://www.w3schools.com/html/html_entities.asp).

_Make sure to add and commit your changes when you've got the html done!_

### Style Your Page

1. Use a [`border`](https://www.w3schools.com/css/css_border.asp) only on the left side of the page's `html` element. It should have a width of `5px` and a color of `lightgray`.
1. Set the `body` element's `min-height` to be at least 100% of the [viewport height](https://alligator.io/css/viewport-units/). Also, use the `font-family` property to set the entire page to use `sans-serif` fonts.
1. Give the `body` a `max-width` of `1000px` and center it on the page with the margin auto technique.
1. The border is too close to our text and we've got an issue with [margin-collapse](https://medium.com/@joseph0crick/margin-collapse-in-css-what-why-and-how-328c10e37ca0) at the top of the page! Add `padding` to the `header`, `main` and `footer` elements of `1rem` on the top and bottom and `2rem` on the left and right to fix these issues.
1. For the `h1` on the page we want the color to be `tomato`.
1. Set all of the images to have a `width` of `100%`.
1. For your site navigation, you'll need to remove all of the padding on the `ul` elements and then set it's `list-style-type` to `none`. It would be a good idea to use a class to style the navigation so that you can still make a bulleted list on your page. Use Flexbox to style the `ul` for the navigation elements. On the top navigation use the `space-between` rule to have the menu items spread across their container evenly. Set the color for the anchors inside the main navigation to be `lightgray` and the footer navigation to be `tomato`.
1. Style the title of each of your blog posts so that they are larger.
1. Style the 'continues...' anchor tags so that they are aligned to the right and are bold and tomato colored.
1. Set the margin on the bottom the `article` tags to be `4rem`. Also, add a `1px` solid border in `lightgray` to the bottom of each one and give each padding on the bottom of `2rem`.
1. For the `p` tag inside your `article`, use the [pseudo-element ::first-letter](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter) to style the drop cap and set it's color to `lightgray`.
1. Style the copyright so it is `lightgray`.

_Awesome job, add, commit and push changes to create your pull request!_

### Bonus

- Use [Google Fonts](https://fonts.google.com/).
