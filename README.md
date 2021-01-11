To run this application locally, make sure you have node installed on your device, which can be installed on https://nodejs.org/en/download/. Open the root directory you clone this project to in your newly installed node.js command line and type 'npm run start' to view the application at http://localhost:3000/ in your preferred browser.

## Implementation details

* This front end application was built with React, making use of reusable components, Material UI and Sass as a CSS preprocessor. 
* The application is split up into components that can be found in the src/components folder, which use the json object stored in src/data. The root component is Blog.js which contains most of the state within the application, which is manipulated using React hooks. Blog-post.js contains the structure of an individual blog post, filter.js contains the structure of the checkboxes that allow a user to filter out blogs, and search.js includes the searchbar that allows users to search for blogs. 
* Best practices for accessibility were followed such as appropriate aria-labels, form labels, colour contrasts and semantic HTML which was tested with a screen reader.
* In order to improve performance, a pagination feature was built to limit the number of blog posts rendered to the user at any one time.
* Some unit tests for the exported functions were written using Jest.
