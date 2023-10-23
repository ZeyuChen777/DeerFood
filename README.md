# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

##Project
1. Add Header
    1. Generate Component
    2. Add Html
    3. Add css

2. List Foods
    1. Create Food Model
    2. Create data.ts
        1. Add sample foods
    3. Add images to assets
    4. Create Food Service
    5. Create Home Component
        1. Add ts
        2. Add html
        3. Add css

3. Search
    1. Add method to Food service
    2. Add search route
    3. Show search result in Home component
    4. Generate search component
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add css

4. Tags Bar 
    1. Create Tag model
    2. Add sample tags to data.ts
    3. Food service
        a. Add get all tags method
        b. Add get all foods by tag method
    4. Add tags route
    5. Show tag result in Home component
    6. Generate Tags component
        a. Add to home component
        b. Add ts
        c. Add html
        d. Add css

5. Food Page
    1. Add method to food service
    2. Generate Food Page Component
        1. Add Route
        2. Add ts
        3. Add html
        4.  Add css

6. Cart Page
   1. Create CartItem Model
   2. Create Cart Model
   3. Generate Cart service
   4. Add to Cart Button in Food Page
   5. Generate Cart page component
      1. Add Route
      2. Add ts
      3. Add html
      4. Add css

7. Not Found!
    1. Generate Component
       1. Add ts
       2. Add html
       3. Add css
    2. Add To Pages
       1. Home Page
       2. Food Page
       3. Cart Page

8. Connect To Backend
    1.  Create backend folder
    2.  npm init
    3.  npm install typescript
    4.  Create tsconfig.json
    5.  Create .gitignore
    6.  Copy data.ts to backend/src
    7.  npm install express cors
    8.  Create server.ts
        1. install @types
        2. Add Apis
    9.  npm install nodemon ts-node --save-dev
    10. Add urs.ts to frontend
    11. Add HttpClient module
    12. Update food service

9. Login Page
    1.  Generate Component
        1.  Add to routes
        2.  Add ts 
        3.  Add html
            1.  Import Reactive Forms Module
        4.  Add Css
    2.  Add Login Api
        1.  Use json
        2.  Add jsonwebtoken
        3.  Test Using Postman
    3.  Generate User Service
        1.  Generate User model
        2.  Add User Subject
        3.  Add Login Method   
            1.  Add User Urls
            2.  Generate IUserLogin interface
            3.  Add ngx-toastr
                1.  Import Module
                2.  Import BrowserAnimationsModule
                3.  Add styles in angular.json
    4.  Add to Header
        1. Add Local Storage methods
        2. Add Logout Method
           1. Add to Header    

10. Make Components For Login Page
    1. Input Container
    2. Input Validation
    3. Text Input
    4. Default Button   

11. Connect Login API To MongoDB Atlas
    1. Moving Apis into routers
    2. Create MongoDB Atlas
    3. Create .env file
    4. Install
       1. mongoose
       2. dotenv
       3. bcryptjs
       4. express-async-handler
    5. Connect to MongoDB Atlas
    6. Use MongoDB instead of data.ts in apis

12. Register User
    1.  Add Register api
    2.  Add Register service method
    3.  Add Register link 
    4.  Add Register Component

13. Loading
    1.  Add Image 
    2.  Add Component
    3.  Add Service
    4.  Add Interceptor

14. Checkout Page
    1. Create Order Model
    2. Create Checkout Page Component
        1. Add To Router
    3. Add User to User Service
    4. Add Cart to Cart Service
    5. Create Order Items List Component
    6.  Adding Map To The Checkout Page
        1.  Add Leaflet npm package
            1.  Add @types/leaflet
            2.  Add Css to angular.json
        2.  Add AddressLatLng to Order Model
        3.  Create Map component
            1.  Add to checkout page
            2.  Add TS
                1.  Change app-map selector to map
            3.  Add Html
            4.  Add CSS
        4.  Add Auth Guard
    7.  Save Order
        1. Add Order Model
        2. Add Order Status Enum
        3. Add Auth Middleware
        4. Add Order Router
           1. Add create API
        5. Add Order Urls to urls.ts
        7. Add Order Service
           1. Add create Method
        8. Add Auth Interceptor 

15. Payment Page
    1. Generate Component
    2. Add 'getOrderForCurrentUser' api
    3. Add Order Service method
    4. Connect Component to Service
    5. Make the map component readonly

16. Adding Paypal
    1. Generate Component
    2. Add to payment page
    3. Get Paypal client Id
    4. Add Paypal JS to index.html
    5. Set up Paypal button
    6. Add Pay api to order router
    7. Get Paypal sandbox account

17. Order Track Page
    1.  Generate Component
        1.  Add to routes
    2.  Add API
        1.  Add to urls.ts
    3.  Add method to order.service
    4.  Add HTML
    5.  Add CSS