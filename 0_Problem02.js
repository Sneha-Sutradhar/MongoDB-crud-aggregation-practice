db.contacts.insertOne({
  contact_id: 1,
  first_name: "Rahul",
  last_name: "Sharma",
  phone: "9999999999",
  email: "rahul@gmail.com",
  city: "Mumbai"
});

db.contacts.insertMany([
  { contact_id: 2, first_name: "Neha", last_name: "Patel", phone: "8888888888", email: "neha@gmail.com", city: "Delhi" },
  { contact_id: 3, first_name: "Amit", last_name: "Verma", phone: "7777777777", email: "amit@gmail.com", city: "Mumbai" },
  { contact_id: 4, first_name: "Pooja", last_name: "Rao", phone: "6666666666", email: "pooja@gmail.com", city: "Bangalore" },
  { contact_id: 5, first_name: "Kiran", last_name: "Das", phone: "5555555555", email: "kiran@gmail.com", city: "Mumbai" },
  { contact_id: 6, first_name: "Anu", last_name: "Singh", phone: "4444444444", email: "anu@gmail.com", city: "Chennai" }
]);

db.contacts.find({ city: "Mumbai" });

db.contacts.find({}, { _id: 0, first_name: 1, last_name: 1, phone: 1 });

db.contacts.deleteOne({ contact_id: 6 });
