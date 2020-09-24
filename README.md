# SerenAppy - A Meditation Web App 

A live demo can be found [here](https://gmanprodev.github.io/SerenAppy-Web-App/)

![Desktop Demo](assets/images/serenappy_responsive_image.jpg)

## Introduction

SerenAppy is a meditation web app which has been built for a local community Health & Wellbeing centre. It will be used during meditation sessions in conjuction with yoga classes.

It presents a landing page with options for how long the user wishes to mediatate for (time) and what visual and audio experience the user prefers (season). The user can select from the following options:
### Time
* 2 minutes
* 5 minutes
* 10 minutes
* 20 minutes 
* 30 minutes
* 60 minutes

### Season
* Spring
* Summer
* Autumn
* Winter

The time selection sets how long the video and audio will last before it stops and the season selection will set the video and audio that the user would associate with the season chosen.

If only one selection is made the user will see a alert box prompting them to choose a time and season option.

The main purpose of the web app is to allow public funded health & well being initiatives and bodies to access an easy to use mediataion tool for people from all walks of life.

The web app can be viewed on Desktop, Tablet and Mobile devices.


## Table of Content

1. [UX](#ux)
    * [Goals](#goals)
        * [SerenAppy goal](#serenapy-goal)
        * [Business goals](#business-goals)
        * [Customer goals](#customer-goals)
    * [User Stories](#user-stories)
        * [The Tradesman](#the-tradesman)
        * [The potential customer](#the-potential-customer)
         * [The UX designer](#the-ux-designer)
    * [Minimum Viable Product](#minimum-viable-product)
    * [Design](#design)
        * [Colors](#colors)
        * [Font](#font)
    * [Wireframes](#wireframes)
2. [Features](#features)
    * [Existing Features](#existing-features)
        * [Elements seen on every page](#elements-seen-on-every-page)
        * [Other elements](#other-elements)
    * [Features left to implement](#features-left-to-implement)
    * [Bugs and Fixes for Future Releases After Testing](#bugs-and-fixes-for-future-releases-after-testing)
3. [Technologies Used](#technologies-used)
4. [Testing](#testing)
5. [Deployment](#deployment)
    * [Hosting on GitHub Pages](#hosting-on-github-pages)
    * [How to run this project locally](#how-to-run-this-project-locally)
6. [Credits](#credits)
    * [Media](#media)
    * [Acknowledgements](#acknowledgements)
        * [Examples and Tutorials and Samples](#examples-and-tutorials-and-samples)
        * [Pages used for information](#pages-used-for-information)
        * [I received advice and encouragement from](#i-received-advice-and-encouragement-from)
7. [Disclaimer](#disclaimer)

## UX

### Goals

#### SerenAppy goal

The goal of this web app is to allow public funded health & well being initiatives and bodies to access an easy to use mediataion tool for people from all walks of life.

**Target audience is:**

* People who are passionate about mental and physical wellbeing.
* Publically funded organisations who promote mental and physical health.
* People who are struggling with any kind of anxiety.
* Participants of yoga and general mindfulness excerise classes. 
* Any age group.
 

#### Business goals

* To be used by as many public funded organisations as possible.
* Interactive web-app.
* Fully functional web app.
* Intuitive design.
* Easy to navigate.


#### Customer goals

* Meditation
* Find examples of previous completed work by the Tradesman.
* Find contact information for the Tradesman.

Both business and customer goals are addressed through user stories.


### User Stories

#### Local Health and Well-being Centre

* As a Well-being centre, I want my web app to display calm natural colours.
* As a Well-being centre, I want my web app to display simple to follow instructions.
* As a Well-being centre, I want my web app to be responsive on all devices.
* As a Well-being centre, I want a strong focus on mobile usability as most users will be veiwing the web app on mobile devices.
* As a Well-being centre, I want my web app to be interactive and offer real time feedback.
* As a Well-being centre, I want to be able to receive feedback and messages from users.
* As a Well-being centre, I want my web app to load quickly.
* As a Well-being centre, I want my web app to use as little of the users data as possible.
* As a Well-being centre, I want my web app to allow users to engage with us through different social media routes.
* As a Well-being centre, I want my web app to display easy to use audio and timer function controls.
* As a Well-being centre, I want my web app to display clear high resolution images.
* As a Well-being centre, I want my web app to be usable for both left and right handed users.
* As a Well-being centre, I want my web app to have a low risk of accidently clicking more than one button at once on smaller screens sizes.


#### The potential customer

* As a customer, I want to know how the web app works and easy to follow instructions.
* As a customer, I want to know when I take the wrong action or something doesn't work.
* As a customer, I want the web app to be interactive with real time feedback.
* As a customer, I want the the web app to be easy to use and navigate, particularly on mobile devices.
* As a customer, I want to be able to easily get back to the main page, pause or rest the audio and timer if I'm distracted.
* As a customer, I want to be able to contact the well-being centre via email and social media platforms.
* As a customer, I want to be able to listen to my own choice of audio.
* As a customer, I want the web app to be available in different languages.
* As a customer, I want the web app to have built in volume controls.

#### The UX designer

* As a UX designer, I want to track the user behaviour so that I can improve the user experience.
    * As a UX designer, I want to track the user behaviour so that I can identify the possible user confusion over navigating the web app.
    * As a UX designer, I want to find which Time and Season selection buttons are used the least by users so that the options can be updated if needed.
* As a UX designer, I want to focus on the mobile design as most users will be using the web app on a mobile device.
* As a UX designer, I want the web app to be intercative and give real time feedback when a user executes an action.
  



### Minimum Viable Product

All the User Stories have been assessed against value and complexity on the chart below. Due to the relatively short time for the implementation of the website, only the MVPs will be implemented in the first release of the web page.

[User Stories evaluation](documentation/mvp/user_stories.md)


**Explanation of the chart**

* The top right area of the chart has been given the higher priority of implementation because it represents the most important features including:
  * Contact & Quote Form
  * Reviews & Testimonials
  * Services Available
  * Gallery of Previous Completed Work
  * Layout, Branding & Design
  * Responsive Website
* The top left area of the chart represents the features which have a low complexity and a high value. These can be addressed in secondary phase as most of them can be easily resolved through creation of a About or Contact Page.
* The features with low complexity and low value will be addressed lastly as they didn't represent a must have feature for the first release and are very easy to implement.
* The features with high complexity and medium value have been postponed for future updates/releases.

![chart](documentation/mvp/value_chart.jpg)


### Design

#### Colors

Following colors have been used:
* ![#ffaa00](https://placehold.it/15/ffaa00/000000?text=+) #ffaa00 (Orange) 
* ![#000000](https://placehold.it/15/000000/000000?text=+) #000000 (Black) 
* ![#589500](https://placehold.it/15/589500/000000?text=+) #589500 (Medium Dark Green) 
* ![#008500](https://placehold.it/15/008500/000000?text=+) #008500 (Dark Green) 
* ![#d836c4](https://placehold.it/15/d836c4/000000?text=+) #d836c4 (Cerise Pink) 
* ![#decb1f](https://placehold.it/15/decb1f/000000?text=+) #decb1f (Yellow Gold) 
* ![#bcf46e](https://placehold.it/15/bcf46e/000000?text=+) #bcf46e (Light Green - different opacities used)  




The stand out colour for this web page is Green (different shades) which according to [Color Psychology](https://www.colorpsychology.org/green/) is associated with growth and renewal. This concept is very relevant for a company and a website associated with gardens, change and nature.

Other than the different shades of green, I used orange for the header dividers, all icons when hover is active and a visual guide to which page the user is currently looking at, black for all text and pink to show active buttons. All these colours can be seen on every page to keep consistency for the user, other than pink which was only used to show when a button has been clicked on.

#### Font

The Fonts I used for this project are **Josefin Sans** and **Montserrat** with the font weights: 
* 400 - for most of the subtext.
* 700/bold - for headers and titles.

The [Montserrat](https://fonts.google.com/specimen/Montserrat) font was chosen for its easy readability and common use.

The [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans) font was chosen for its playful look and matched the gamification style of the website.

### Wireframes

I decided that it would be more helpful to have mockups than simple wireframes. The mockups were done in [figma](https://www.figma.com/). 

Link to the mockups can be found [here](https://www.figma.com/file/5SeQOD7OjUwOVG342bqycX/Mr-Digbee?node-id=0%3A1). The mockups were designed for the mobile first approach. The tablet and desktop versions only have minor differences in comparison with the mobile version.
I also created a prototype of how the mockup pages would interact with each other, you can access the prototype [here](https://www.figma.com/proto/5SeQOD7OjUwOVG342bqycX/Mr-Digbee?node-id=18%3A45&scaling=min-zoom). 

If you are unable to access the mockup links above please see the mockup images [here](https://github.com/Gmanprodev/Mr-Digbee/tree/master/documentation/wireframes).

## Features

### Existing Features

#### Elements seen on every page

* **Layout and Style**
    * Through research I noticed that most Gardening Sevices websites were very plain, very wordy and extremely difficult to navigate. With this in mind I set out with the intention to build the complete opposite, you will find the site simple, easy to navigate, more visual, less wordy and a style that can be described as gamification.

* **Navigation bar**
    * Has a `fixed` position to ensure that the user can access it at any time.
    * Mr Digbee logo and brand name in the left corner which also serves as a link to go back to the landing page. The logo disappears and the brand name remains in place if the screen width is below 768px.
    * Links that can be accessed are placed on the right side. They collapse if the screen width is below 1200px.
    * Navigation links `bounce` on `hover` and are highlighted by an orange background when in use.

* **Footer**
    * Copyright information.
    * Website built by information (linked to Marc Gulliver Linkedin profile).
    * Website address (linked to website landing page).
    * Social media links - facebook, Twitter, Instagram and Youtube (linked to relevant login page).
    * Phone Number (linked to click-to-call function).
    * Email Address (linked to mailto function).

* **Hero Image**
    * Each page has the same hero image, which on screen widths greater than 767px the image stays `fixed` and on screen widths below 767px the image scrolls with the rest of the content. Most pages have a text over the hero image which identifies which page the user is currently on.

* **Call to Action**
    * Most pages have Call to Action text with a 'quote' button. This is mainly displayed at the top of the page set over the hero image. The button displays in Orange and changes to Pink when on `hover` and clicked on. Every 'quote' button takes the user to the same contact page with a form to fill out.

* **Images**
    * All images (other than the Reviews section) have a Orange border which changes to a subtle Yellow Gold colour on `hover`.

#### Other elements

* **Landing page**
    * Has a Services section which is separate from the main menu and has six different services. These services are represented by icons and text, the icons are Dark Green and change to Orange and `bounce` when `hover` and clicked on. All icons link to individual pages explaining that service. This Services section can also be found on all services pages. At the bottom of the page there is a Reviews section which includes a Bootstrap carousel, the carousel has a rounded image of the reviewer, text including name and location and review, arrow indicators and slider indicators. The arrow indicators disappear on screen width below 992px.

* **About Us page**
    * Has text and an image showing work that has been completed.

* **Location page**
    * Has company address and interactive google map to show the company location.

* **Completed Projects page**
    * Has a gallery containing 15 images, by clicking on an image the image will show on a full screen. Images were re-sized to 728x485 to enhance the visual appearence and flow to the page.

* **Contact Us page**
    * Has a form which asks for contact information and a message. The form boxes have Orange borders rather than a background colour to identify the text areas.

* **Service pages**
    * Has two columns of text, listing the services avaialble and a Bootstrap carousel with images of completed work relevant to that service page. At the bottom of the page is the Services menu where you can navigate to another service page.

### Features left to implement

* **Prices page** - To enable potential customers to estimate what a project or piece of work may cost.
* **Payment Procedure page** - To enable customers to understand what the costs involved before, during and on completion of the project or work.
* **Tracking User Behaviour** - Use an analytics tool such as [Hotjar](https://www.hotjar.com/) to view user behaviour.
* **Most and Least Visited Pages on the Site** - Use an analytics tool such as [Hotjar](https://www.hotjar.com/) to understand where the traffic is going on the site.


### Bugs and Fixes for Future Releases After Testing

* **Bootstrap Carousel** - After some research I found there to be a bug on ios13 (apple products) that makes each carousel slide move in twice. I believe this can be fixed with writing additional JavaScript for future releases.
* **Favicon** - The DevTool Console showed an error as I didn't have time to install a Favicon for the first release. This will be part of the next release. 
* **Colour Contrasts** - The Lighthouse Audit Chrome extension highlighted that the colours used on the site are too similar and could cause an issue for accessability. These issues will be addressed in the next release.
* **Website Address in Footer** - The website address for mrdigbee does not currently exist and does not link to another page. This will be addressed in the next release.
* **Social Media Links in Footer** - The social media icons are linked to the correct pages, however these are currently generic login pages. These will direct you to the company specific pages in future releases.
* **Mobile Lanscape View** - On some pages, when viewing on a mobile in landscape orientation, the call to action section at the top of the page can be cut off by the Navigation bar and the footer content is pushed on top of each other. This will be fixed on the next release.

## Technologies Used

### Languages

* HTML - Base language for this project.
* CSS - used for styling the HTML code.
* JavaScript - used in conjunction with Bootstrap.

### Libraries

* [Bootstrap](https://getbootstrap.com/) - used for responsive grid system, navigation and carousel.
* [JQuery](https://jquery.com/) & [Popper](https://popper.js.org/) - were used in conjunction with the Bootstrap library.
* [FontAwseome](https://fontawesome.com/) - used for all icons on the site.
* [Google Fonts](https://fonts.google.com/) - used for the Josefin Sans and Montserrat fonts.
* [Hover.css](https://ianlunn.github.io/Hover/) - used to animate the naviagtion links, services icons and social media icons.

### Tools

* [Gitpod](https://www.gitpod.io) - used as IDE for this project.
* [Git](https://git-scm.com/) - used for version control.
* [Github](https://github.com/) - used to host repository and live website.
* [Figma](https://www.figma.com/) - used for creation of mockups.
* [Am I Responsive](http://ami.responsivedesign.is/) - used for testing purposes as well as creating the image to display the web pages on different devices.
* [Google Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - used for testing and debugging.
* [PageSpeed insights](https://developers.google.com/speed/pagespeed/insights/) - used for testing the loading speed of the site.
* [Lighthouse Audit](https://developers.google.com/web/tools/lighthouse) - used to test whether the site meets the standards expected.
* [w3 html validator](https://validator.w3.org/) - used to test and validate my html code.
* [w3 css validator](https://jigsaw.w3.org/) - used to test and validate my css code.
* [Browserstack](https://www.browserstack.com/) - used to test my site on different browsers.
* [Color Scheme Designer](http://colorschemedesigner.com/) - used to test colour combinations.


## Testing

Testing information can be found [here](documentation/testing/testing.md).

## Deployment

This web page was developed in Gitpod and pushed to the remote repository, GitHub. The live page is hosted on GitHub Pages. 

**Used commands during deployment:**
* `git add .` - to add the files to the staging area.
* `git commit -m "text message here"` - to commit the files.
* `git push` - to push to origin master branch on to GitHub.
* `git status` - to see the current status of the files.

### Hosting on GitHub Pages

* Log into GitHub.
* From the list of repositories choose [Mr Digbee](https://github.com/Gmanprodev/Mr-Digbee).
* Go to settings.
* Scroll down to GitHub Pages section.
* Select as a source **master branch**.
* The page is now automatically refreshed and the project is deployed.
* To access the project scroll down again to GitHub Pages section and click on the provided link.

For more detailed information regarding deployment to GitHub Pages click [here](https://pages.github.com/).

### How to run this project locally

**Clone this project from GitHub:**

* Go to [Mr Digbee](https://github.com/Gmanprodev/Mr-Digbee) GitHub repository.
* Click on "Clone or download" green button.
* Copy the URL to the repository.
* Open the terminal in your IDE.
* Choose the working directory where you would like to have the cloned repository.
* Type git clone, and add the URL you copied from Github: `git clone https://github.com/Gmanprodev/Mr-Digbee.git`
* Press Enter and your local clone will be created.

For more information regarding cloning of a repository click [here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

## Credits

### Content

All content on the web page was written by me with the exception of the text on the About Us page which I adapted from [dellerandsons](http://www.dellerandsons.co.uk) and [charleshoare](http://www.charleshoare.co.uk).

### Media

**All Images**
   * All of the images shown on the site were found on Google Images. 
   * No authorisation has been granted to use these images as this site is for educational purposes only.
   * If this site were to be used by the company, Mr Digbee, then the images would be replaced along with the correct authorisation before the release.



### Acknowledgements

#### Examples and Tutorials and Samples

* [Code Institute](https://github.com/Gmanprodev/Bootstrap) - used the 'Whiskey Drop' page as the initial code structure for my project. The only element of this code that still remains in it's original state is the hero image section.
* [alexnexton](https://alexnexton.github.io/MS1-OneArena/) - used to view and understand the code for the location interactive map.
* [inesnago](https://inesnago.github.io/my-cv-final/) - used to view and understand the code for a contact form.
* [zahra Sadiq](https://zahrasadiq.github.io/Milestone1-StreetFoodiesTour/index.html) - used to compare my navigation bar and fix navigation link margins.
* [Figma Tutorial](https://www.youtube.com/watch?v=3q3FV65ZrUs) - used this tutorial to learn how to use Figma.
* Inspiration resources for writing this README file:
    * [Itamichan](https://github.com/Itamichan/CG_photography)
    * [SuzanneNL](https://github.com/SuzanneNL/SKtraining)
   

#### Pages used for information

* [W3schools](https://www.w3schools.com/)
* [W3C](https://www.w3.org/)
* [Stack overflow](https://stackoverflow.com/)
* [CSS-Tricks](https://css-tricks.com/)
* [MDN web docs](https://developer.mozilla.org/)
* [Codepen](https://codepen.io/)

#### I received advice and encouragement from
   * Seun Owonikoko (my mentor)
   * Eventyret_mentor (via slack channels)
   * Tutor Support (CI online webchat)
   * Anukje-byllsa (fellow student)
   * Carlos (fellow student)
   * SuzanneNL (fellow student)
   * Anthony (fellow student)
   * Malia (fellow student)

## Disclaimer

**This web page was created for educational purpose only.** 