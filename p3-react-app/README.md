# Son Fitness

## Introduction

The Son Fitness app is a fitness app that lets the user search for their favorite exercises. They can either search it manually or browse through the pages in the Exercises page. This app can also create workouts from the list of exercises available.

## Features

- **Browse Exercises:** Users can browse or search for specific exercise or they can search it by bodypart category. Each exercise has a GIF that shows the form on how an exercise is done.
- **View Exercise Details:** Users can click on a specific exercise to know more about how it targets specific muscles and also they can see the GIF of the exercise clearly.
- **Create Workout:** Son Fitness app also let's the users create their own workout, all exercises that can be searched or seen from the Exercise page can be added to a workout. Users can specify their desired reps, sets and weight.

## Notes

As this app is designed to be frontend-only, without a database, any workouts made or edited will only be temporary. Once the page is reloaded, the app will revert to its original state. This is also applicable to the registration/login form in the app, since user details can't be saved with frontend-only. Lastly, the list of exercises came from an API called ExerciseDB from RapidAPI, this API has limited calls only since this is the free version being used.
