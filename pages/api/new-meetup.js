import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://sharattha:m0g8E0IgynhZvAZx@cluster0.w61zdlj.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close(); // Close the MongoDB connection

      res.status(201).json({
        message: "Data Updated!",
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        message: "An error occurred while processing the request.",
      });
    }
  }
}

export default handler;
