# Testing

[back to README.md file](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/README.md)

## Table of Content

1. [DevTools](#devtools)
2. [Manual Testing](#manual-testing)
3. [Automated Testing](#automated-testing)
    * [Code Validation](#code-validation)
    * [Browser Validation](#browser-validation)
    * [Lighthouse Audit](#lighthouse-audit)
4. [User testing](#user-testing)
    * [My Mentor](#my-mentor)
    * [Peer-code-review](#peer-code-review)
    * [User review](#user-review)



## DevTools

* Testing the responsiveness of the web app.
    * As an outcome I added a number of media queries in order to ensure the website is still user friendly on different screen sizes.
    * I used Bootstrap to ensure I have reactive columns on different screen sizes.
* Testing the css is targeting the relevant html code.
    * As an outcome the webiste is responsive on all screen sizes.
* Console Debugging
    * As an outcome I was able to see whether my Javascript functions were being called and were executing properly by displaying a console.log value in my console.
    * I noted that a Favicon was missing and was able to fix this with adding a favicon script and images. 


## Manual Testing

* Landing Page
   * Verify that when the page loads it hides the meditation page `div`.
   ![Hidden Meditation Page On Load](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/hidden_meditation_page.gif?raw=true) 

   * Verify that by clicking the logo in the header it refreshes the landing page and that the nav bar is fixed when on scroll.
   ![Clicking The Logo Refreshes The Page](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/logo_click_page_resfresh.gif?raw=true) 


   * Verify that the nav bar moves with the rest of the page on scroll (screen heights less than 580px to ensure there is enough content on the page at any one time).
   ![Navbar Absolute Position](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/navbar_absolute_position.gif?raw=true)

   * Verify that by `hover` and clicking on the all the landing page buttons the background and text colours change to show which selection the user has made.
   ![Interactive Button Colours](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/interactive_button_colours.gif?raw=true)

   * Verify that in the footer the social media icons change colour and `bounce` when on hover, also that the icons are linked to the relevant log in pages and these open in a new browser tab. 
   ![Footer Links Hover](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/footer_links_hover.gif?raw=true)
   ![Footer Links Hover](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/facebook_link.gif?raw=true)
   ![Footer Links Hover](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/twitter_link.gif?raw=true)
   ![Footer Links Hover](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/instagram_link.gif?raw=true)
   ![Footer Links Hover](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/youtube_link.gif?raw=true)
   
   * Verify that the SerenAppy website address in the footer changes colour when on `hover` and clicked and loads the landing page. 
   ![Website Link](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/website_link.gif?raw=true)
   
   * Verify that the web app built by Marc Gulliver changes colour when on `hover` and clicked and opens my LinkedIn profile in a new browser tab.
   ![LinkedIn Link](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/linkedin_link.gif?raw=true)

   * Verify that the "How To Use SerenAppy" button at the top of the page launches the modal and displays the instructions, also that both close buttons shut down the modal.
   ![Instructions Modal](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/instructions_modal.gif?raw=true)

   * Verify that the @ icon in the footer changes colour on `hover` and when clicked and opens the contact form modal and that the close button shuts down the modal.
   ![Contact Modal](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/contact_modal.gif?raw=true)

   * Verify that the contact form modal validates the users input before the user can submit the form.
   ![Form Validation](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/form_validation1.jpg?raw=true)
   ![Form Validation](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/form_validation2.jpg?raw=true)
   ![Form Validation](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/form_validation3.jpg?raw=true)
   ![Form Validation](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/form_validation4.jpg?raw=true)
   ![Form Validation](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/form_validation5.jpg?raw=true)
   ![Form Validation](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/form_validation6.jpg?raw=true)

   * Verify that the contact form submit button activates a success alert when emailjs successfully sends the form information to my Gmail account.
   ![Email Success](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/submit_success.gif?raw=true)

   * Verify that the when the contact form is successfully sent all the form fields are automatically cleared.
   ![Clear Input Fields](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/clear_fields.gif?raw=true)

   * Verify that the contact form information has been sent to my Gmail account by emailjs.
   ![Emailjs Received](https://github.com/Gmanprodev/SerenAppy-Web-App/blob/master/documentation/testing/test-images/emailjs_received.jpg?raw=true)

   * Verify that the contact form submit button activates a error alert when emailjs is unsuccessful.
   ![Email Error](?raw=true)



   * Verify that the 'mrdigbee' email address in the footer opens up a mailto function.
   * Verify that the '07720428665' contact phone number in the footer opens up a click-to-call function.
   * Verify that the social media icons change colour to Orange and `bounce` when on `hover`.
   * Verify that all pages and content are responsive on differnt devices and screen sizes.
   * Verify that the Services section on all pages performs the following functions as follows:
      * Icons in the Services section change colour to Orange and `bounce` when on `hover`.
      * Each individual icon in the Sevices section is linked to the relevant page.
      * The icon which corresponds to the page that the user is viewing remains Orange.

* Landing Page
   * Verify that the Reviews section carousel slides automatically, slides in both directions when the control arrows and the slide indicators are clicked.
   * Verify that the Reviews section carousel control arrows become a darker colour when on `hover`and the slide indicators change to white to show which slide the user is viewing.
   * Verify that the carousel control arrows disappear on smaller screen sizes and leave the slide indicators to control the slides.

* About Us Page
   * Verify that the 'Free, no obligation quote' text links to the Contact Us page and contact form.
   * Verify that the image underneath the about us text has a border that changes to a lighter yellow gold colour on `hover`and that the image opens in a separate window when clicked on.

* Location Page
   * Verify that the Google map is interactive and that the following interavtive functions work correctly:
      * Zoom in and out function.
      * Clicking on 'view larger map' opens in a separate Google maps page.
      * Clicking 'directions' opens in a separate Google maps page.
      * Clicking on the satelite imagery box chamhes the map to a satelite view whilst remaining on the Location page and by clicking the same box the map view returns.

* Completed Projects Page
   * Verify that all images have a border which changes to a lighter yellow gold colour on `hover` and that the images open in a separate window when clicked on.
   * Verify that the images show as 3 columns.

* Contact Us Page
   * Verify that all form fields can have data entered in them.
   * Verify that the Email Address field will only accept an appropriate email format and that a message will prompt you if the data entered is invalid.
   * Verify that the Phone Number field will only accept numbers and has to be 11 digits and that a message will prompt you if the data entered is invalid.
   * Verify that the 'Get Quote' button directs you to the CI data dump page which shows you what data has been recieved and opens in a separate window.

* All Services Pages
   * Property Maintenance Page
   * Flowers & Trees Page
   * Window Cleaning Page
   * Painting & Decorating Page
   * Landscaping Page
   * Lawn Mowing Page
      * Verify that the carousel slides automatically, slides in both directions when the control arrows and the slide indicators are clicked.
      * Verify that the carousel control arrows become a darker colour when on `hover`and the slide indicators change to white to show which slide the user is viewing.
      * Verify that the carousel control arrows disappear on smaller screen sizes and leave the slide indicators to control the slides.
      * Verify that all images have a border which changes to a lighter yellow gold colour on `hover` and that the images open in a separate window when clicked on.

#### Conclusion

   * I found that there were a number of images which weren't linked correctly - this issue has been fixed for the first release.
   * I found that the contact form email address field was accepting any text and not a valid email format - this issue has been fixed for the first release.
   * I found that the contact form phone number field was accepting any text and not a valid UK phone number - this issue has been fixed for the first release.



## Automated Testing

### Code Validation

   * I used the [W3C Markup Validation Service](https://validator.w3.org/) to validate my html code.
   * I used the [W3C CSS Validation Service](https://jigsaw.w3.org/) to validate my css code.
   * I used the [Free Formatter](https://www.freeformatter.com/) website to format my html code.

### Browser Validation

   * Chrome - works correctly. Click [here](test-images/chrome_test.jpg) for the test image.
   * Explorer - works correctly. Click [here](test-images/explorer_test.jpg) for the test image.
   * Safari - works correctly. Click [here](test-images/safari_test.jpg) for the test image.
   * Firefox - works correctly. Click [here](test-images/firefox_test.jpg) for the test image.
   * Opera - works correctly. Click [here](test-images/opera_test.jpg) for the test image.

### Lighthouse Audit

   * Click [here](lighthouse_report.pdf) for the full report.
   * No reccommendations in this report have been implemented in the first release but will be looked at in future releases.

#### Conclusion

   * The code validators highlighted 2 errors:
      * Using an a tag to wrap a button - this issue has been fixed for the first release.
      * Missing a h1 tag inside a new section - this issue has been fixed for the first release. 
   * The carousel issue in the Opera browser will be looked at in future releases.
   * The suggestions given in the Lighthouse report will be implemented in the second release.



## User testing

### My Mentor

Generally very positive feedback and was very complimentary about the colours and how it put a smile on her face evrytime she used the website.

#### Suggested Improvements

* Change the burger menu icon to the colour Orange - implemented.
* Add left padding to the collapsed dropdown menu so the text isn't hugging the screen edge - implemented.
* In addition to the Social media icons in the footer linking to separate pages, also link the other footer info - implemented.
* Create more distance between the content and where the section border radius begins (seat), so that the border and content isn't making contact - implemented.
* Reduce the size of the image on the About Us page - implemented.
* Increase the google map size on the Location page and create @media query for smaller screen sizes - implemented.

### Peer-Code-Review

The feedback was that people enjoyed using the site and it was fun and easy to navigate. Everyone loved the colours and how if made them feel.

#### Suggested Improvements:

   * Add left paddign to the collapsed dropdown menu so the text isn't hugging the screen edge - implemented.
   * Footer Social Media links all go to the generic login pages and not the company pages - I've left this for a later release as at this moment in time the Mr Digbee business doesn't have any Social Media footprint.
   * The contact form should have more padding to allow more space between the content and the section border radius - implemented.
   * The contact form sends without a valid email address and phone number - implemented.
   * Remove the call to action (header) at the top of the servivce pages so you can immedialtely see the information you've clicked for rather than scrolling again - this is a single user prefrence and I will look to implement this on a later release once I have a larger quantity of user feedback.
   * One image on the Flowers & Trees page had a broken link and needed fixing - implemented.
   * The section border radius on all pages were blending into one another and needed space between them, the navigation bar and the footer - implemented.
   * On a mobile device in landscape orientation the content overlaps one another - I am aware of this and given there are very few users who will navigate this site in a mobile landscape orientation I will fix this in a future release.
   * On a Iphone the carousel slides the same content in twice - I am aware of this and through my research I have concluded that this is due to a bug in ios 13 and cannot be fixed at this stage.
   * The Orange and Green colours in the footer have very low contrast which could be an issue for accessability - Will look to make changes in the future releases.


### User Review

The general feedback was positive. Most people commenting on how much fun it was visually and easy to navigate.


#### Suggested Improvements:

   * Maybe better to have the Services section in the Navigation bar with the rest of the links - Will look to implement in a future release if there is enough user feedback.
   * On a mobile device in landscape orientation the content overlaps one another - I am aware of this and given there are very few users who will navigate this site in a mobile landscape orientation I will fix this in a future release.
   * On an Iphone the carousel slides the same content in twice - 

#### Conclusion

   * I am aware of the Iphone bug and through my research I have concluded that this is due to a bug in ios 13 and cannot be fixed at this stage.
   * I will use an analytics platform on the first release, such as [Hotjar](https://www.hotjar.com/), to collect feedback form a larger range of users and use that data to implement changes related to the way users navigate the site.