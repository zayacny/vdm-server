const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');

// enable CORS for all origins
app.use(cors());

const MONGODB_URI = 'mongodb+srv://zayacny:alabama-neworlean-texas@cluster0.g4tults.mongodb.net/VDM-project?retryWrites=true&w=majority';
// connect to DB via mongoose
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB database!");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB database: ", error.message);
  });
// define mongoose schema
const filmSchema = new mongoose.Schema({
  name: String,
  year: Number,
  link: String,
  director: String,
  img: String,
  originalName: String,
  rateImdb: Number,
  country: String,
  genre: String,
  duration: String,
  storyLine: String
})
//define model
const Film = mongoose.model('Film', filmSchema)

/** IMPLEMENTATION VIA NAtive MONGODB Connection ***********************************************************************/
// const { MongoClient } = require('mongodb');

// //Connection URL
// const uri = 'mongodb+srv://zayacny:alabama-neworlean-texas@cluster0.g4tults.mongodb.net/VDM-project?retryWrites=true&w=majority';

// //Database Name
// const dbName = 'VDM-project';

// // Create a new MongoClient
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function getFilms(client) {
//   const db = client.db(dbName);
//   const collection = db.collection('films');

//   return await collection.findOne({ name: 'Titanic' }, function(err, docs) {
//     if (err) {
//       console.log('Error finding documents:', err);
//     } else {
//       console.log('Found the following documents:');
//       console.log(docs);
//     }
//   });
// };

// async function main() {
//   try {
//     // Use connect method to connect to the server
//     await client.connect()
//     let result = await getFilms(client);
//     console.log('Done!', result)
//   } catch (error) {
//     console.log('Error :', error)
//   } finally {
//   await setTimeout(() => {client.close()}, 3000) // todo change to 1500
//   }
// };

// main().catch(console.error)
/** ********************************************************************************************* */

app.get("/films-list", async (req, res) => {
  try {
    // find all films in collection
    const films = await Film.find();
    res.json(films);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
);

app.get("/film-data/:filmName", async (req, res) => {
  try {
    // find where name is equal to ":filmName"
    const film = Film.find({name: req.params.filmName})
    if(film == null) return res.status(404).json({message: 'Film not found.'})
  } catch (error) {
    return res.status(500).json({ message: err.message });
  }
  res.json(film);
});

app.listen(3003, () => console.log("Server is listening on port 3003."));
