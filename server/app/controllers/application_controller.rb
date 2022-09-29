class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/exercises" do
    exercises = Exercise.all
    exercises.to_json
  end

  post "/exercises" do
    exercise = Exercise.create(
      name: params[:name],
      description: params[:description],
      repetitions: params[:repetitions],
      workout_id: params[:workout_id]
      )
      exercise.to_json
  end

  patch "/exercises/:id" do
    exercise = Exercise.find(params[:id])
    exercise.update(
      name: params[:name],
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