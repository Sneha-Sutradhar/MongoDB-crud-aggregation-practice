db.feedback.insertMany([
  { feedback_id: 1, guest_name: "Rahul", hotel_name: "Hotel A", room_number: 101, stay_dates: "Jan", cleanliness_rating: 5, service_rating: 4, overall_rating: 5, comments: "Great", feedback_date: new Date("2025-01-01"), would_recommend: true },
  { feedback_id: 2, guest_name: "Neha", hotel_name: "Hotel B", room_number: 102, stay_dates: "Feb", cleanliness_rating: 2, service_rating: 2, overall_rating: 2, comments: "Bad", feedback_date: new Date("2024-01-01"), would_recommend: false },
  { feedback_id: 3, guest_name: "Amit", hotel_name: "Hotel A", room_number: 103, stay_dates: "Mar", cleanliness_rating: 4, service_rating: 5, overall_rating: 5, comments: "Nice", feedback_date: new Date("2025-03-01"), would_recommend: true },
  { feedback_id: 4, guest_name: "Pooja", hotel_name: "Hotel C", room_number: 104, stay_dates: "Apr", cleanliness_rating: 1, service_rating: 1, overall_rating: 1, comments: "Worst", feedback_date: new Date("2022-01-01"), would_recommend: false },
  { feedback_id: 5, guest_name: "Kiran", hotel_name: "Hotel B", room_number: 105, stay_dates: "May", cleanliness_rating: 3, service_rating: 3, overall_rating: 3, comments: "Okay", feedback_date: new Date("2025-04-01"), would_recommend: false }
]);

db.feedback.find({
  overall_rating: { $lt: 3 },
  would_recommend: false
});

db.feedback.updateMany(
  { overall_rating: { $gt: 4 } },
  { $set: { would_recommend: true } }
);

db.feedback.deleteMany({
  feedback_date: { $lt: new Date("2023-01-01") },
  overall_rating: 1
});

db.feedback.aggregate([
  {
    $group: {
      _id: "$hotel_name",
      avg_cleanliness: { $avg: "$cleanliness_rating" },
      avg_service: { $avg: "$service_rating" }
    }
  }
]);
