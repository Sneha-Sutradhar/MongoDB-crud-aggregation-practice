db.reviews.insertMany([
  { review_id: 1, course_name: "MongoDB Basics", student_name: "Rahul", rating: 5, review_text: "Great", review_date: new Date("2025-01-01"), likes_count: 20, is_verified_purchase: false },
  { review_id: 2, course_name: "Python", student_name: "Neha", rating: 4, review_text: "Good", review_date: new Date("2024-02-01"), likes_count: 5, is_verified_purchase: true },
  { review_id: 3, course_name: "MongoDB Advanced", student_name: "Amit", rating: 5, review_text: "Excellent", review_date: new Date("2025-03-01"), likes_count: 30, is_verified_purchase: false },
  { review_id: 4, course_name: "Java", student_name: "Pooja", rating: 1, review_text: "Bad", review_date: new Date("2023-01-01"), likes_count: 2, is_verified_purchase: false },
  { review_id: 5, course_name: "MongoDB Intro", student_name: "Kiran", rating: 5, review_text: "Nice", review_date: new Date("2025-04-01"), likes_count: 15, is_verified_purchase: false }
]);

db.reviews.find({
  rating: { $gt: 4 },
  likes_count: { $gt: 10 }
});

db.reviews.updateMany(
  { course_name: { $regex: "MongoDB" } },
  { $set: { is_verified_purchase: true } }
);

db.reviews.deleteMany({
  review_date: { $lt: new Date("2024-01-01") },
  rating: 1
});

db.reviews.find(
  {},
  { _id: 0, course_name: 1, student_name: 1, rating: 1 }
).sort({ rating: -1 });
