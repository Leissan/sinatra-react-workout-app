
# Workout App

This is an app for created for those who like to keep track of their core workouts, as well as add new workouts to the routine! It is a single page React application where I applied my knowledge of:
* React frontend that interacts with a database  via Sinatra API
* Sinatra API backend that uses Active Record to access and persist data in the database
* Creating models with one-to-many relationship
* full CRUD capabilities for the model
* front end State management

# Description

* When you open up an app, you will see a home page with the name of the app, inspirational quote and a cute image of a cat working out
* This app will have clickable links on top of the page which will take you to either see a list of exercises which you can dleete one by one as you are completing them, or to the list of all workouts. There you can click into each workout to find the associated exercises, edit and delete exercises as you go, and create a new exercise. You can also add and delete a custom workout.

This React app makes fetch requests to my Sinatra backend.


## Usage

```react

npm start

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)