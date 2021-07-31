# Fitlit Wellness Tracker

#### [Project Spec](https://frontend.turing.edu/projects/fitlit.html)

##### Week 8 (Mod2) at Turing School of Software and Design

## Project Description

Run our application and spin up a local server to fetch mock user data to populate a wellness tracker page with a random user's data on page load! 

This project:
  - implements the fetch API to access data from a local server.
  - uses array prototype methods to itterate through and manipulate data.
  - uses the Fetch API to make network requests to API endpoints in order to retrieve data.
 
### Built-By:

* [Stephanie Magdic](https://github.com/stephaniemagdic)

* [Sarah Rudy](https://github.com/sarahrudy)


### Technologies Used 

* JavaScript (ECMAScript 2009)
* HTML5
* CSS
* NPM packages/dependencies: 
  * [chart.js](https://www.chartjs.org/)
  * [Webpack](https://www.npmjs.com/package/webpack): a helpful developer tool (npm package we install as a dev dependency)
* Mocha test framework and Chai TDD assertion library

### Architecture

* dist directory
  * [bundle.js](https://www.simplethread.com/javascript-modules-and-code-bundling-explained/): our minified file that webpack creates for our browser!
  * index.html 
* src directory
  * ES6 class files
    * Class Structure Example:
      * UserSleepRepository: holds sleep data for `all` users. Has methods that uses/manipulates all users data. 
      * UserSleepData: holds sleep data for `one` user. Has methods that uses/manipulates just one user's data.  
  * scripts.js: holds our application logic, including fetching data from our local server and manipulating the dom.
* test directory
* README.md

## Instructions for running and viewing

### Set-up:

Note: You must run both your local server and the fitlit application at the same time to use this application.

#### Step 1: Run your local server.
  * Go to the [fitlit-API](https://github.com/turingschool-examples/fitlit-api) and follow the instructions in the README.md to run your local server.
  * Make sure that the server is running in your terminal by checking that you see the following message in your terminal. `FitLit API is now running on http://localhost:3001 !`
#### Step 2: Run the fitlit application/client.
  * You can access the fitlit wellness tracker by `cloning this repository`, navigating to and `opening up your terminal`, and running the command `npm start` in your cloned project directory. This will run the bundle.js file, which will compile and run the application.
  * You should see the following message in your terminal: `running at http://localhost:8080/`
  * Copy and paste this url link (`http://localhost:8080/`) in your browser to view the application. 
  
`Note`: Make sure to run `npm install` in your terminal after cloning the repository to install dependencies needed for the application to run!

### How to Navigate our application:  
  
* **See User Info:**  
  * Random users information will display including email the user's name, email address, stride length and step goal!

* **Average Step Goal of All Users:**  
  * The cacluation of the average step goal of all users.

* **View Hydration Data:** 
  * The current random user's daily ounces of water consumed, weekly water consumtion, and the user's average consumption.

* **View Sleep Data!:**  
  * Daily, weekly, and average hours slept and sleep quality.

* **Repeat: Refresh the page to see a new user's wellness data!:**  


### Snapshot Examples of Responsive Design
 ###### Please run the application to view the entire dashboard.
#### [Generate Random User on Page Load Gif: Click to View](https://i.ibb.co/DzZs9hd/short.gif) 
#### [Responsive Design Gif: Click to View](https://i.ibb.co/vDZpXcZ/mobile-scroll.gif) 

#### Desktop View: 
![Img](https://i.ibb.co/Kq4Y1tf/Screen-Shot-2021-07-20-at-3-16-06-PM.png)
#### Mobile View:
![Img](https://i.ibb.co/JHK42cj/Screen-Shot-2021-07-20-at-2-57-36-PM.png)
![Img](https://i.ibb.co/XFVmjMW/Screen-Shot-2021-07-20-at-2-57-01-PM.png)

### Project Challenges 
 * Charts.js was a new experience for us. It was helpful to learn how to research and incorporate new technologies into our project. We had to think through which pieces of data would be best displayed using the npm package based on UX principles and wireframes.
 
### Project Wins
 * Throughout the project we learned how to divide and conquer in order to come back to productively use our time togther. We learned a lot from the strategy including what productive and well-thought-out solo and paired programming could look like, which included learning and researching concepts before coming together so we could come with well thought-out ideas. We also learned to make the big decisions together and start major pieces of functionality as a team before dividing and conquering.

### Future Iterations
  * In the future, we would like to create a date input field to allow users to search for data on specific days/weeks.
    * Note: Methods and tests are already included in classes in order to sort through and gather this data and display it on the page.
