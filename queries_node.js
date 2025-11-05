/**
 * queries_node.js
 * Run with: node queries_node.js
 *
 * Prereqs:
 *   npm init -y
 *   npm install mongodb
 *
 * Connection:
 *   - Set MONGODB_URI in your environment (recommended)
 *       Windows (PowerShell):  $env:MONGODB_URI="mongodb+srv://<user>:<pass>@<cluster>.mongodb.net"
 *       macOS/Linux (bash):    export MONGODB_URI="mongodb+srv://<user>:<pass>@<cluster>.mongodb.net"
 *   - Or replace FALLBACK_URI below.
 */

const { MongoClient } = require("mongodb");

const DB_NAME = "plp_bookstore";
const COLL_NAME = "books";

// Use environment variable first, then fallback string (edit this for local or Atlas)
const FALLBACK_URI = "mongodb://127.0.0.1:27017"; // change to your Atlas SRV if needed
const uri = process.env.MONGODB_URI || FALLBACK_URI;

async function run() {
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 10000 });
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(DB_NAME);
    const col = db.collection(COLL_NAME);

    // ------------------------------
    // Task 2: Basic CRUD Operations
    // ------------------------------

    console.log("\n-- Find all Programming books --");
    console.log(await col.find({ genre: "Programming" }).toArray());

    console.log("\n-- Books published after 2010 --");
    console.log(await col.find({ published_year: { $gt: 2010 } }).toArray());

    console.log("\n-- Books by Martin Fowler --");
    console.log(await col.find({ author: "Martin Fowler" }).toArray());

    console.log("\n-- Update price of 'Clean Code' to 49.99 --");
    await col.updateOne({ title: "Clean Code" }, { $set: { price: 49.99 } });
    console.log(await col.find({ title: "Clean Code" }).toArray());

    console.log("\n-- Delete book titled 'NoSQL Distilled' --");
    await col.deleteOne({ title: "NoSQL Distilled" });
    console.log("Remaining count:", await col.countDocuments());

    // ------------------------------
    // Task 3: Advanced Queries
    // ------------------------------

    console.log("\n-- In-stock books published after 2010 --");
    console.log(await col.find({ in_stock: true, published_year: { $gt: 2010 } }).toArray());

    console.log("\n-- Projection: title, author, price --");
    console.log(await col.find({}, { projection: { _id: 0, title: 1, author: 1, price: 1 } }).toArray());

    console.log("\n-- Sort by price ascending --");
    console.log(await col.find().sort({ price: 1 }).toArray());

    console.log("\n-- Sort by price descending --");
    console.log(await col.find().sort({ price: -1 }).toArray());

    const pageSize = 5;
    console.log("\n-- Page 1 (first 5 books) --");
    console.log(await col.find().sort({ title: 1 }).skip(0).limit(pageSize).toArray());

    console.log("\n-- Page 2 (next 5 books) --");
    console.log(await col.find().sort({ title: 1 }).skip(pageSize).limit(pageSize).toArray());

    // ------------------------------
    // Task 4: Aggregation Pipeline
    // ------------------------------

    console.log("\n-- Average price by genre --");
    console.log(await col.aggregate([
      { $group: { _id: "$genre", avgPrice: { $avg: "$price" }, count: { $sum: 1 } } },
      { $sort: { avgPrice: -1 } }
    ]).toArray());

    console.log("\n-- Author with the most books --");
    console.log(await col.aggregate([
      { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
      { $sort: { totalBooks: -1 } },
      { $limit: 1 }
    ]).toArray());

    console.log("\n-- Books by decade --");
    console.log(await col.aggregate([
      { $project: { decade: { $concat: [ { $toString: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } }, "s" ] } } },
      { $group: { _id: "$decade", count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]).toArray());

    // ------------------------------
    // Task 5: Indexing
    // ------------------------------

    console.log("\n-- Create index on title --");
    await col.createIndex({ title: 1 });

    console.log("\n-- Create compound index on author + published_year --");
    await col.createIndex({ author: 1, published_year: -1 });

    console.log("\n-- Explain() example for query by title --");
    // The Node.js driver supports explain on find cursors:
    const cursor = col.find({ title: "Clean Code" });
    const explanation = await cursor.explain("executionStats");
    console.dir(explanation, { depth: null });

    console.log("\n-- Current indexes --");
    console.log(await col.indexes());

    console.log("\n✅ All tasks completed.");
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
    console.log("🔌 Disconnected.");
  }
}

run();
