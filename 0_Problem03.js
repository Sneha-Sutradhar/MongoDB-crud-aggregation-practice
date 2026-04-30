db.tasks.insertOne({
  task_id: 1,
  title: "Complete Assignment",
  description: "MongoDB tasks",
  due_date: new Date("2026-05-10"),
  priority: "High",
  is_completed: false
});

db.tasks.insertMany([
  { task_id: 2, title: "Study", description: "Math", due_date: new Date("2026-05-12"), priority: "Medium", is_completed: false },
  { task_id: 3, title: "Shopping", description: "Groceries", due_date: new Date("2026-05-11"), priority: "Low", is_completed: true },
  { task_id: 4, title: "Workout", description: "Gym", due_date: new Date("2026-05-09"), priority: "High", is_completed: false },
  { task_id: 5, title: "Call", description: "Friend", due_date: new Date("2026-05-08"), priority: "Low", is_completed: true },
  { task_id: 6, title: "Project", description: "Coding", due_date: new Date("2026-05-15"), priority: "High", is_completed: false }
]);

db.tasks.find({ is_completed: false });

db.tasks.find({}, { _id: 0, title: 1, due_date: 1 });

db.tasks.deleteOne({ task_id: 5 });
