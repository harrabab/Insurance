# Project Title
Easy Quotes Insurance


# link for the website
https://harrabab.github.io/harrabab/index.html

### Html Files

* index.html
* auto_insurance_form.html
* home_insurance_form.html

### Css Files

* home_style.css (home.html)
* auto_home_insurance_form_style.css (auto_insurance_form.html, home_insurance_form.html)

### Javascript Files

* home_script.js (home.html)
* script_auto_insurance.js (auto_insurance_form.html) 
* script_home_insurance.js (home_insurance_form.html)

### Functionality

Home page is the first page of the Easy quote (insurance quote site), from this page we can navigate to Home insurance page, Auto insurance page, Blog, Faq. 

* This page is developed with mobile first approach it has a specific design for small, medium and large devices. In home page Slider is used to display images when you decrease the screen size less than 992px.
* This page is bilingual you have option to view page in English and French.
* Whatever language we select from the dropdown will be stored in the local storage and that language will automaticaly be selected when we open auto_insurance_form.html, home_insurance_form.html.


Home Insurance Form Page is the page where submit home insurance form in this we have to fill our personal information and validate the information. After validating  fill the property information and validate and at last submit the information to get the quote.

* This page is developed with mobile first approach it has a specific design for small, medium and large devices.
* This page is bilingual you have option to view page in English and French.
* Validation
    *  First name and Last name should not have special characters and should have more than 4 character.
    *  Age of the person should be greater than 18.
    *  Property Type is populated by an array.
    *  Ownership Type is populated by an array.
    *  Total no. claims made in last three year is poplated using array. 
    *  Date when the property was built should be there.  
    *  You need to select Property Type,  Ownership Type, Total no. claims 
    *  You have to answer is your basement finished or not
    *  Firstly you need to validate your personal information only then you can validate your property information.
    *  After you validate both pesonal and property information you can get the quote button enable
    *  Progress bar increase to 50% when you validate your personal information and 100% when you validate your personal and property          information.
    
 * Google api to auto populate address.
 
Auto Insurance Form Page is the page where submit auto insurance form in this we have to fill our personal information and validate the information. After validating  fill the property information and validate and at last submit the information to get the quote.

* This page is developed with mobile first approach it has a specific design for small, medium and large devices.
* This page is bilingual you have option to view page in English and French.
* Validation
    *  First name and Last name should not have special characters and should have more than 4 character.
    *  Age of the person should be greater than 18.
    *  Issuing province is populated by an array.
    *  Licence class is populated by an array.
    *  When did you lease or buy it should be selected.
    *  Purchase condition is populated by an array.
    *  Annual distance is populated by an array.
    *  Do you use this vehicle to carry paying passengers or for deliveries need to select one option.
    *  Do you use this vehicle for any other business purposes need to select one option.
    *  Do you install winter tires from november until April? select one option.
* Google api to auto populate address.


### Html Files

* auto_insurance_landing.html
* claim_page.html
* insurance_select.html

### Css Files

* insurance_selectstyles.css ( auto_insurance_landing.html , insurance_select.html )
* claimstyles.css ( claim_page.html )

### Javascript Files

* landing_select.js ( auto_insurance_landing.html , insurance_select.html )
* claim_script.js ( claim_page.html )

### Functionality

*  Auto Insurance Landing page contains information about auto insurance and types of insurance we are providing.
* Blog section displays topics related to auto insurance and useful links section provides direct access to auto insurance page.
* Content section showing brief information about 3 types of insurance with flip functionality.This page also displays counter as well         with number of happy and satisfied customers who have already bought insurance. In the background Gradient functionality is used.
* System is responsive for all 3 types of screen. Big , medium and small.


Claim contains information about claims.
There are 2 types of claim
* Home Claim
* Auto claim

Content section showing information regarding frequently asked questions about home and auto claims.This page also displays Form with validation of information user have entered.
This form is visible as pop-up section when user clicks on button
Home claim form contains following validations
* Validation
    *  All Fields are mandatory. Asterix to display all fields are required
    *  Email field with proper format of email address need to be there
    *  As this website is only for Canadian users so Phone number should be in format of Canadian phone number. 
    *  If user enters invalid format of phone number , error message will display proper format of phone number
    
    
 
Insurance select page contains Form.Which Redirects to auto insurance page.
This form contains following fields
*  Address Field  with google Places API
*  Postal code Field
*  Type of insurance
As this website is for Canada , this API will fetch only addresses of Canada. 
When user enters first 3-4 letter of his/her address, API will display list of related address.
Once user selects address from list, System will automatically fetch postal code from selected address and display postal code in postal code field.
If user unable to find address through API suggestion , user can manually enter address and postal code to related fields.


Jasandeep Kaur Contribution

### Html Files
faq.html
contact_us.html
home_landing.html

### Css Files
faq.css
contact_us.css
home_landing.css

### Javascript Files
faq.js

### Functionality
In faq page, i have added questions related to both home and auto insurance and also added content related to particular questions. In left section various discount and deals are displayed and in the right side bog section is display.
For frequently asked questions, accordion is used with the help of javascript , on click a particular question content related to that question is displayed in the panel.
In Home landing page, form is displayed for postal code and type of insurance and validation is added on both the fields so that user will not go further without filling the required fields and validation is added using regular expression.
In Contact us page, form is added with various fields so that user need to enter these fields if they have any query related to both types of insurance. Regular expression is used in the validation so that user can enter data in the fields in a particular order.
⦁	in name field user can enter only characters not numeric data.
⦁	email is entered in a particular format like example@gmail.com if the user doesnot follow this pattern then it will display an error message.
⦁	phone number field user can enter numeric data not characters.
⦁	in message field characters to used.
Also map is added which display the  location of the insurance company. In the left section flip-cards are used: front side display the images related to home and car insurance and back side of flip cards display the deals related to the particular insurance and in the right section blog and need help is shown as in need help contact information is displayed like phone number etectera.


### Html Files
home_insurance_quote_results.html
blog.html
auto_insurance_quote_results.html

### CSS Files
auto_home_quote_results.css
insurance_blog.css

### Javascript Files
auto_home_qr_script.js
blog_script.js

### Functionality:
### Blog Page:
Blog page is the page which contains all the details on insurance trends and gives details on 4 points people should keep on mind who owns house/vehicle:
* 2 Things to do at a home before a Vacation Abroad.
* What does your home insurance policy cover,exacly?
* Three Questions you should ask before buying auto insurance
* Three things you can do to help keep your auto insurance costs down

### Auto-Quote-Results:
Auto Insurance Quote Results is the final page of the application the user navigates who takes vehicle insurance. This page covers the Coverage options as follows:
* Liability(limit/deductibles): 
* Liability to non-owned automobiles(s):
* Collision
* Comprehensive
* Loss Of Use
* Family Protection
* This page also give details of applied discounts of the user and the contact information so that the user can reach to complete the quote. The premium per month and year is displayed along with coverage options.
* The user’s limits and deductibles are made available using a view limits and deductibles button on the load of the page.

### Home-Quote-Results:
Home Owners Quote Results page is the final page of the application, the user navigates who takes home insurance from Easy Quotes. The premium per month and year is displayed along with the contact info.
Validation:
* Email address validation is done on this page and the error is raised whenever a invalid email id is entered by the user.
* Phone number validation is done and the error is raised whenever the user enters a invalid phone number.
* Contact us by option is added so that the mode of communication is selected by the user.
* Bundling options are given so that the user can bundle home along with auto and get a discount of upto 50$.If the user wishes to bundle a link is provided to navigate to home page of Auto Insurance quote.
* The contact us is displayed along with the mailing address and phone number so that the user can contact the company.




  


## Author

* **Harrabab Singh**


