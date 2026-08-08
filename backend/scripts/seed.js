// Seeds the database with demo restaurants, dishes and a demo user.
// Usage: npm run seed   (re-runnable — clears and re-inserts demo data)
require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config");
const { Restaurant } = require("../models/restaurant");
const { Dish } = require("../models/dish");
const { User } = require("../models/user");

const img = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

const restaurants = [
  {
    name: "Campus Tandoor",
    address: "Hall 3 Market, IIT Kanpur",
    email: "tandoor@example.com",
    phone: "9000000001",
    open_time: "10:00",
    close_time: "23:00",
    upi: "tandoor@upi",
    img: img("photo-1517248135467-4c7edcad34c4"),
    dishes: [
      { name: "Paneer Tikka", price: 180, veg: true, prep_time: "20 min", rating: 4.6, featured: true, img: img("photo-1567188040759-fb8a883dc6d8") },
      { name: "Butter Chicken", price: 240, veg: false, prep_time: "25 min", rating: 4.8, featured: true, img: img("photo-1603894584373-5ac82b2ae398") },
      { name: "Garlic Naan", price: 40, veg: true, prep_time: "10 min", rating: 4.4, featured: false, img: img("photo-1601050690597-df0568f70950") },
      { name: "Dal Makhani", price: 160, veg: true, prep_time: "20 min", rating: 4.5, featured: false, img: img("photo-1546833999-b9f581a1996d") },
    ],
  },
  {
    name: "Noodle House",
    address: "Hall 12 Canteen, IIT Kanpur",
    email: "noodles@example.com",
    phone: "9000000002",
    open_time: "11:00",
    close_time: "22:30",
    upi: "noodles@upi",
    img: img("photo-1555396273-367ea4eb4db5"),
    dishes: [
      { name: "Hakka Noodles", price: 120, veg: true, prep_time: "15 min", rating: 4.3, featured: true, img: img("photo-1585032226651-759b368d7246") },
      { name: "Chilli Chicken", price: 190, veg: false, prep_time: "20 min", rating: 4.5, featured: true, img: img("photo-1525755662778-989d0524087e") },
      { name: "Veg Momos", price: 90, veg: true, prep_time: "12 min", rating: 4.2, featured: false, img: img("photo-1626074353765-517a681e40be") },
      { name: "Fried Rice", price: 130, veg: true, prep_time: "15 min", rating: 4.1, featured: false, img: img("photo-1512058564366-18510be2db19") },
    ],
  },
  {
    name: "Cafe Brew",
    address: "Lecture Hall Complex, IIT Kanpur",
    email: "brew@example.com",
    phone: "9000000003",
    open_time: "08:00",
    close_time: "21:00",
    upi: "brew@upi",
    img: img("photo-1554118811-1e0d58224f24"),
    dishes: [
      { name: "Cold Coffee", price: 80, veg: true, prep_time: "5 min", rating: 4.7, featured: true, img: img("photo-1461023058943-07fcbe16d735") },
      { name: "Veg Sandwich", price: 70, veg: true, prep_time: "10 min", rating: 4.0, featured: false, img: img("photo-1528735602780-2552fd46c7af") },
      { name: "Chocolate Brownie", price: 60, veg: true, prep_time: "5 min", rating: 4.6, featured: true, img: img("photo-1606313564200-e75d5e30476c") },
      { name: "Masala Maggi", price: 50, veg: true, prep_time: "8 min", rating: 4.4, featured: false, img: img("photo-1612929633738-8fe44f7ec841") },
    ],
  },
];

const demoUser = {
  name: "Demo User",
  email: "demo@example.com",
  phone: "9999999999",
  password: "demo1234",
};

async function seed() {
  await mongoose.connect(config.mongoUri, { dbName: config.dbName });
  console.log("Connected — seeding demo data");

  await Promise.all([
    Restaurant.deleteMany({ email: /@example\.com$/ }),
    User.deleteMany({ email: demoUser.email }),
  ]);

  for (const { dishes, ...data } of restaurants) {
    const restaurant = await new Restaurant({
      ...data,
      passwordHash: bcrypt.hashSync("demo1234", 10),
    }).save();
    await Dish.deleteMany({ restaurant: restaurant._id });
    await Dish.insertMany(
      dishes.map((d) => ({ ...d, restaurant: restaurant._id }))
    );
    console.log(`  • ${data.name} (${dishes.length} dishes)`);
  }

  await new User({
    name: demoUser.name,
    email: demoUser.email,
    phone: demoUser.phone,
    passwordHash: bcrypt.hashSync(demoUser.password, 10),
  }).save();
  console.log(`  • demo user ${demoUser.phone} / ${demoUser.password}`);

  await mongoose.connection.close();
  console.log("Done");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
