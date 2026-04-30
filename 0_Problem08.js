db.giftcards.insertOne({
  card_id: 1,
  recipient_name: "Amit",
  sender_name: "Rahul",
  amount: 1000,
  purchase_date: new Date("2026-04-01"),
  expiry_date: new Date("2027-04-01"),
  is_used: false
});

db.giftcards.insertMany([
  { card_id: 2, recipient_name: "Neha", sender_name: "Pooja", amount: 2000, purchase_date: new Date("2026-03-01"), expiry_date: new Date("2027-03-01"), is_used: false },
  { card_id: 3, recipient_name: "Kiran", sender_name: "Amit", amount: 1500, purchase_date: new Date("2025-01-01"), expiry_date: new Date("2026-01-01"), is_used: true },
  { card_id: 4, recipient_name: "Anu", sender_name: "Neha", amount: 2500, purchase_date: new Date("2026-02-01"), expiry_date: new Date("2027-02-01"), is_used: false },
  { card_id: 5, recipient_name: "Raj", sender_name: "Kiran", amount: 1800, purchase_date: new Date("2026-01-01"), expiry_date: new Date("2027-01-01"), is_used: false },
  { card_id: 6, recipient_name: "Priya", sender_name: "Anu", amount: 1200, purchase_date: new Date("2025-06-01"), expiry_date: new Date("2026-06-01"), is_used: true }
]);

db.giftcards.find({
  is_used: false,
  expiry_date: { $gt: new Date() }
});

db.giftcards.find({}, { _id: 0, recipient_name: 1, amount: 1, expiry_date: 1 });

db.giftcards.deleteOne({ card_id: 6 });
