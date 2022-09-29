class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :description
      t.string :repetitions
      t.integer :workout_id
    end

  end
end
