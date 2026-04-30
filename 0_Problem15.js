db.reading.insertMany([
  { record_id: 1, member_name: "Rahul", book_title: "Book A", genre: "Fiction", pages_read: 150, total_pages: 300, start_date: new Date("2024-01-01"), completion_date: null, is_completed: false },
  { record_id: 2, member_name: "Neha", book_title: "Book B", genre: "Non-Fiction", pages_read: 200, total_pages: 200, start_date: new Date("2024-02-01"), completion_date: new Date("2024-03-01"), is_completed: true },
  { record_id: 3, member_name: "Amit", book_title: "Book C", genre: "Fiction", pages_read: 50, total_pages: 250, start_date: new Date("2022-01-01"), completion_date: null, is_completed: false },
  { record_id: 4, member_name: "Pooja", book_title: "Book D", genre: "Sci-Fi", pages_read: 300, total_pages: 300, start_date: new Date("2024-01-15"), completion_date: new Date("2024-02-15"), is_completed: true },
  { record_id: 5, member_name: "Kiran", book_title: "Book E", genre: "Fiction", pages_read: 120, total_pages: 400, start_date: new Date("2024-03-01"), completion_date: null, is_completed: false }
]);

db.reading.find({
  is_completed: false,
  pages_read: { $gt: 100 }
});

db.reading.updateMany(
  { completion_date: { $ne: null } },
  { $set: { is_completed: true } }
);

db.reading.deleteMany({
  start_date: { $lt: new Date("2023-01-01") },
  is_completed: false
});

db.reading.find({
  genre: "Fiction",
  is_completed: true
});
