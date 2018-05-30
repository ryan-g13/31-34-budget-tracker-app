401 JS --  Lab 31 Budget Tracker
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Submit a pull request to this repository
  * Submit a pull request from your working branch to the master branch of your own forked repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  
## Requirements  
#### Configuration  
Your lab directory must include  
* **README.md** -- with a documention about your lab
* **.babelrc** -- with all dependencies and dev-dependencies 
* **.eslintrc.json** -- with the class .eslintrc.json file
* **.gitignore** -- with a robust gitignore
* **.eslintignore** -- with the class .eslintignore
* **package.json** -- with all dependencies and dev-dependencies 
* **webpack.common.js** -- with webpack config
* **webpack.dev.js** -- with webpack config
* **src/** -- containing the front end code
* **src/main.js** -- containing the entire app
* **src/style** -- containing your sass
* **src/style/main.scss** -- for importing and including reset and base

## Feature Tasks 
#### Category 
* in this app a category should contain at least the following properties
  * `id` a uuid
  * `timestamp` a date from when the category was created
  * `name` a string that is the name of the category
  * `budget` a number that is the total amount of $ in the category 
  * feel free to add more to your categories if you want

#### redux
###### reducer
* create a category reducer in your your reducer directory
* this reducer should support the following interactions 
  * `CATEGORY_CREATE`
  * `CATEGORY_UPDATE`
  * `CATEGORY_DESTORY`

###### action creaters
* you should create an action creater for each interaction supported by your category reducer

#### Components
Create the following components and structure them according to the following diagram.  
```
Provider
  App 
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [CategoryItem]
           CategoryForm  -- for updating categories
```

###### App Component 
The App component should setup the single page applicaion routes

###### Dashboard Component 
* should be displayed on the `/` route
* should use react-redux's `connect` to map state and dispatchable methods to props
* should display a `CategoryForm` for adding categories to the app state
* should display a `CategoryItem` for each category in the app state

###### CategoryForm Component
* should expect an `onComplete` prop to be a function
  * that function should be invoked with the CategoryForms State when the form is submitted
* should support an optional `category` prop that will initialize the state of the form

###### CategoryItem Component
* should display the category's name and budget
* should receive a category prop from Dashboard
* should display a delete button
  * `onClick` the category should be removed from the application state
* should display a CategoryForm  
  * `onComplete` the form should update the component in the application state

##  Documentation  
Write a description of the project in your README.md
