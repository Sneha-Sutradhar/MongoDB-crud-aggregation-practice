db.bookings.insertMany([
  { booking_id: 1, event_name: "Concert", event_date: new Date("2026-12-01"), venue: "Hall A", customer_name: "Rahul", ticket_type: "VIP", number_of_tickets: 2, total_price: 2000, booking_date: new Date("2026-01-01"), payment_status: "Paid" },
  { booking_id: 2, event_name: "Play", event_date: new Date("2023-01-01"), venue: "Hall B", customer_name: "Neha", ticket_type: "General", number_of_tickets: 1, total_price: 500, booking_date: new Date("2023-01-01"), payment_status: "Pending" },
  { booking_id: 3, event_name: "Concert", event_date: new Date("2026-11-01"), venue: "Hall A", customer_name: "Amit", ticket_type: "Student", number_of_tickets: 3, total_price: 1500, booking_date: new Date("2026-02-01"), payment_status: "Paid" },
  { booking_id: 4, event_name: "Seminar", event_date: new Date("2024-01-01"), venue: "Hall C", customer_name: "Pooja", ticket_type: "VIP", number_of_tickets: 1, total_price: 1000, booking_date: new Date("2023-12-01"), payment_status: "Paid" },
  { booking_id: 5, event_name: "Expo", event_date: new Date("2022-01-01"), venue: "Hall D", customer_name: "Kiran", ticket_type: "General", number_of_tickets: 2, total_price: 800, booking_date: new Date("2022-01-01"), payment_status: "Pending" }
]);

db.bookings.find({
  event_date: { $gt: new Date("2026-10-01") },
  payment_status: "Paid"
});

db.bookings.updateMany(
  {
    event_date: { $lt: new Date() },
    payment_status: "Paid"
  },
  { $set: { payment_status: "Refunded" } }
);

db.bookings.deleteMany({
  payment_status: "Pending",
  booking_date: { $lt: new Date("2024-01-01") }
});

db.bookings.aggregate([
  {
    $group: {
      _id: "$event_name",
      total_tickets: { $sum: "$number_of_tickets" }
    }
  }
]);
