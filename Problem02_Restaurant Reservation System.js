db.reservations.insertMany([
  { reservation_id: 1, customer_name: "Arjun", phone: "99999", reservation_date: new Date("2026-07-05"), reservation_time: "19:00", table_number: 1, number_of_guests: 5, special_requests: ["Vegan"], order_status: "Pending", total_bill_amount: 1500 },
  { reservation_id: 2, customer_name: "Meera", phone: "88888", reservation_date: new Date("2026-06-10"), reservation_time: "20:00", table_number: 2, number_of_guests: 2, special_requests: ["Window"], order_status: "Completed", total_bill_amount: 800 },
  { reservation_id: 3, customer_name: "Rahul", phone: "77777", reservation_date: new Date("2025-05-01"), reservation_time: "18:00", table_number: 3, number_of_guests: 6, special_requests: ["Birthday"], order_status: "Pending", total_bill_amount: 2000 },
  { reservation_id: 4, customer_name: "Pooja", phone: "66666", reservation_date: new Date("2024-07-01"), reservation_time: "21:00", table_number: 4, number_of_guests: 4, special_requests: ["Vegan"], order_status: "Cancelled", total_bill_amount: 1200 },
  { reservation_id: 5, customer_name: "Kiran", phone: "55555", reservation_date: new Date("2026-08-01"), reservation_time: "19:30", table_number: 5, number_of_guests: 7, special_requests: ["Anniversary"], order_status: "Pending", total_bill_amount: 2500 }
]);

db.reservations.find({
  reservation_date: { $gt: new Date("2026-07-01") },
  number_of_guests: { $gt: 4 }
});

db.reservations.updateMany(
  { reservation_date: { $lt: new Date("2025-06-01") } },
  { $set: { order_status: "Completed" } }
);

db.reservations.deleteMany({
  order_status: "Cancelled",
  reservation_date: { $lt: new Date("2024-08-01") }
});

db.reservations.find({ special_requests: "Vegan" });
