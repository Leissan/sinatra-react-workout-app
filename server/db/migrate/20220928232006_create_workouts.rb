class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :workoutname
      t.string :difficulty
    end
  end
end
