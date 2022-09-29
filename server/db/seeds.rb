puts "🌱 Seeding spices..."


warm_up = Workout.create(workoutname: "Warm-up", difficulty: "Easy")
upper_body = Workout.create(workoutname: "Upper body", difficulty: "Medium")
core = Workout.create(workoutname: "Core", difficulty: "Harder")
glutes = Workout.create(workoutname: "Glutes", difficulty: "Medium")

Exercise.create(exercisename: "Jumping jacks", description: "Jump on the spot while coordinating the swinging of the arms and legs", repetitions: 20, workout_id: warm_up.id)
Exercise.create(exercisename: "Shoulder-arm circles", description: "Extend your arms to the sides and draw small circles in the air with your hands", repetitions: 10, workout_id: warm_up.id)
Exercise.create(exercisename: "Hip rotations", description: "Rotate the thigh and knee outward away from the body", repetitions: 10, workout_id: warm_up.id)

Exercise.create(exercisename: "Push-ups", description: "Raise and lower your body with the straightening and bending of the arms while keeping the back straight and supporting the body on the hands and toes", repetitions: 10, workout_id: upper_body.id)
Exercise.create(exercisename: "Alternating punches", description: " Stand with one foot slightly in front of the other and bring both hands into a fist just below your chin. Extend and punch one arm out at a time in front of you creating a straight line from your shoulder to your hand", repetitions: 20, workout_id: upper_body.id)
Exercise.create(exercisename: "Floor tricep dips", description: "From a seated position place both palms on the floor behind your hips with elbows bent. From here, push your hips up off the floor by extending your elbows before lowering yourself back down.", repetitions: 10, workout_id: upper_body.id)

Exercise.create(exercisename: "Planks", description: "Get down into pushup position, feet behind you, hands under your shoulders. Lock out your arms and legs, squeeze your core muscles, and hold your body stiff (like a plank!) for as long as you can.", repetitions: 10, workout_id: core.id)
Exercise.create(exercisename: "Side planks", description: "From plank position, rotate onto one side. Prop yourself up on your elbow and one foot with your body straight and stiff. Don’t forget to squeeze your core as you hold this position for as long as you can.", repetitions: 10, workout_id: core.id)
Exercise.create(exercisename: "Mountain Climbers", description: "Get down into plank position. With your arms locked and your body tight, drive one knee at a time off the floor, up toward your chest, and then back to its original position. Repeat in quick succession.", repetitions: 20, workout_id: core.id)

Exercise.create(exercisename: "Bridge", description: "Lie on your back. Bend your knees and lift your hips until your body forms a straight line from knees to head.", repetitions: 20, workout_id: glutes.id)
Exercise.create(exercisename: "Fire hydrant", description: "Start on all fours. Lift one leg up to the side. Go only as high as you can without shifting your torso to the side. Repeat with the other leg.", repetitions: 10, workout_id: glutes.id)
Exercise.create(exercisename: "Donkey kicks", description: "Get on all fours. Lift one heel up towards the ceiling while keeping your knee bent. Repeat with the other leg", repetitions: 15, workout_id: glutes.id)


puts "✅ Done seeding!"
