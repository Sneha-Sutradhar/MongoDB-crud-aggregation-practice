db.parcels.insertOne({
  parcel_id: 1,
  sender_name: "Rahul",
  receiver_name: "Amit",
  weight: 2,
  shipping_cost: 200,
  booking_date: new Date("2026-04-01"),
  delivery_status: "Pending"
});

db.parcels.insertMany([
  { parcel_id: 2, sender_name: "Neha", receiver_name: "Pooja", weight: 1, shipping_cost: 150, booking_date: new Date("2026-04-02"), delivery_status: "Shipped" },
  { parcel_id: 3, sender_name: "Amit", receiver_name: "Kiran", weight: 3, shipping_cost: 300, booking_date: new Date("2026-04-03"), delivery_status: "Pending" },
  { parcel_id: 4, sender_name: "Pooja", receiver_name: "Anu", weight: 2, shipping_cost: 250, booking_date: new Date("2026-04-04"), delivery_status: "Delivered" },
  { parcel_id: 5, sender_name: "Kiran", receiver_name: "Raj", weight: 4, shipping_cost: 400, booking_date: new Date("2026-04-05"), delivery_status: "Pending" },
  { parcel_id: 6, sender_name: "Anu", receiver_name: "Priya", weight: 1, shipping_cost: 100, booking_date: new Date("2026-04-06"), delivery_status: "Shipped" }
]);

db.parcels.find({ delivery_status: "Pending" });

db.parcels.find({}, { _id: 0, sender_name: 1, receiver_name: 1, shipping_cost: 1 });

db.parcels.deleteOne({ parcel_id: 6 });
