class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/exercises" do
    exercises = Exercise.all
    exercises.to_json(include: :workout)
  end

  get '/workouts' do
    workouts = Workout.all
    workouts.to_json(include: :exercises)
  end


  post "/workouts/:workout_id/exercises" do
    workout=Workout.find_by(params[:workout_id])
    
    exercise = workout.exercises.create(
      exercisename: params[:exercisename],
      description: params[:description],
      repetitions: params[:repetitions],
      
      #workoutname: workout.workoutname
      #difficulty: workout.difficulty
      )
      exercise.to_json(include: :workout)
  end

  post "/workouts" do
    workouts = Workout.create(
      workoutname: params[:workoutname],
      difficulty: params[:difficulty]
    )
    workouts.to_json
  end
  

  patch "/exercises/:id" do
    exercise = Exercise.find(params[:id])
    exercise.update(
      exercisename: params[:exercisename],
      description: params[:description],
      repetitions: params[:repetitions]
    )
    exercise.to_json
  end

  delete "/exercises/:id" do
    exercise = Exercise.find(params[:id])
    exercise.destroy
    exercise.to_json
  end

end
