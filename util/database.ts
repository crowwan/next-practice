import { MongoClient } from "mongodb";
const url = "mongodb+srv://crowlast:crowlast1215@board.c3sh4ji.mongodb.net/";
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!(global as any)._mongo) {
    (global as any)._mongo = new MongoClient(url).connect();
  }
  connectDB = (global as any)._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}
export { connectDB };
