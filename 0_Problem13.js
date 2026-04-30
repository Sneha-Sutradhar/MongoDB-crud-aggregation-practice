db.polls.insertMany([
  { poll_id: 1, question: "Fav Color?", options: ["Red", "Blue"], votes: [10, 20], created_date: new Date("2024-01-01"), end_date: new Date("2026-01-01"), is_active: true },
  { poll_id: 2, question: "Best Food?", options: ["Pizza", "Burger", "Pasta"], votes: [15, 25, 10], created_date: new Date("2022-01-01"), end_date: new Date("2023-01-01"), is_active: false },
  { poll_id: 3, question: "Fav Sport?", options: ["Cricket", "Football", "Tennis", "Hockey"], votes: [30, 20, 10, 5], created_date: new Date("2025-01-01"), end_date: new Date("2026-12-01"), is_active: true },
  { poll_id: 4, question: "Best Movie?", options: ["A", "B"], votes: [5, 7], created_date: new Date("2021-01-01"), end_date: new Date("2022-01-01"), is_active: false },
  { poll_id: 5, question: "Fav App?", options: ["IG", "YT", "WA"], votes: [50, 60, 40], created_date: new Date("2024-06-01"), end_date: new Date("2026-06-01"), is_active: true }
]);

db.polls.find({
  is_active: true,
  end_date: { $gt: new Date() }
});

db.polls.updateMany(
  { end_date: { $lt: new Date() } },
  { $set: { is_active: false } }
);

db.polls.deleteMany({
  created_date: { $lt: new Date("2023-01-01") },
  is_active: false
});

db.polls.find({
  $expr: { $gt: [ { $size: "$options" }, 3 ] }
});
