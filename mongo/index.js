import { MongoClient } from "mongodb";

async function main() {
  const uri = "mongodb://localhost:27017";

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("letscode");
    const collection = db.collection("users");

    const myUser = {
      name: "John",
      age: 30,
      city: "New York",
      state: "NY",
      country: "USA",
      address: {
        street: "Wall Street",
        zip: "10001",
        building: "1A",
      },
      categories: ["books", "movies", "music", "games"],
    };

    const result = await collection.insertOne();
    console.log(result.insertedId);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
