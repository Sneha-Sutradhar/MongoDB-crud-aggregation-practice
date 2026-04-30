db.workouts.insertOne({
  workout_id: 1,
  exercise_name: "Running",
  duration_minutes: 30,
  calories_burned: 300,
  date: new Date("2026-04-01"),
  intensity: "High"
});

db.workouts.insertMany([
  { workout_id: 2, exercise_name: "Cycling", duration_minutes: 45, calories_burned: 400, date: new Date("2026-04-02"), intensity: "Medium" },
  { workout_id: 3, exercise_name: "Yoga", duration_minutes: 60, calories_burned: 200, date: new Date("2026-04-03"), intensity: "Low" },
  { workout_id: 4, exercise_name: "Weightlifting", duration_minutes: 50, calories_burned: 350, date: new Date("2026-04-04"), intensity: "High" },
  { workout_id: 5, exercise_name: "Swimming", duration_minutes: 40, calories_burned: 450, date: new Date("2026-04-05"), intensity: "High" },
  { workout_id: 6, exercise_name: "Walking", duration_minutes: 30, calories_burned: 150, date: new Date("2026-04-06"), intensity: "Low" }
]);

db.workouts.find({ intensity: "High" });

db.workouts.find({}, { _id: 0, exercise_name: 1, duration_minutes: 1, calories_burned: 1 });

db.workouts.deleteOne({ workout_id: 6 });
