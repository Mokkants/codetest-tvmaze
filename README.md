## To run the app in production mode run:

### `docker build . -t tv-maze-app`
### `docker run -p 3000:3000 tv-maze-app`


## In order to run the application locally run:

### `yarn`

Installs all the dependencies defined in `package.json`

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

## Approach

- My primary focus was code quality and maintainbility over styling, I aimed for a solid foundation for the project.


## How I would have kept going with the project:

- Connect the search field with searchTerm in the state so on refresh we can see what the search prompt was
- Add a spinner when loading results / clearer feedback when pending request
- Add a placeholder image in case there's no image in the API result for a show
- Connect to a cloud database such as Firestore for storing user data
- Implement authentication so users can be associated with data


## Time constraints

- Configuring the libraries used in the project took a fair amount of time away from development
- Creating a refined application both visually and in code from scratch takes a long time so this submission remains rough around and the edges and test coverage is not ideal