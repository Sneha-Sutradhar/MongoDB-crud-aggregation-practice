db.subscriptions.insertMany([
  { sub_id: 1, user_name: "Rahul", plan_type: "Basic", monthly_fee: 199, start_date: new Date("2024-01-01"), renewal_date: new Date("2024-12-31"), is_active: true },
  { sub_id: 2, user_name: "Neha", plan_type: "Premium", monthly_fee: 499, start_date: new Date("2025-02-01"), renewal_date: new Date("2026-02-01"), is_active: true },
  { sub_id: 3, user_name: "Amit", plan_type: "Standard", monthly_fee: 299, start_date: new Date("2023-05-01"), renewal_date: new Date("2024-05-01"), is_active: false },
  { sub_id: 4, user_name: "Pooja", plan_type: "Basic", monthly_fee: 199, start_date: new Date("2024-06-01"), renewal_date: new Date("2025-06-01"), is_active: true },
  { sub_id: 5, user_name: "Kiran", plan_type: "Premium", monthly_fee: 499, start_date: new Date("2022-01-01"), renewal_date: new Date("2023-01-01"), is_active: false }
]);

db.subscriptions.find({ is_active: true, plan_type: "Premium" });

db.subscriptions.updateMany(
  { plan_type: "Basic" },
  { $inc: { monthly_fee: 100 } }
);

db.subscriptions.deleteMany({
  is_active: false,
  renewal_date: { $lt: new Date("2025-01-01") }
});

db.subscriptions.find(
  {},
  { _id: 0, user_name: 1, plan_type: 1, monthly_fee: 1 }
).sort({ monthly_fee: -1 });
