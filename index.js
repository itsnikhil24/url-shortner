const express = require("express");
const urlroute = require("./routes/url");
const { connecty } = require("./connection.js");
const URL = require("./models/url.js");


const app = express();
const PORT = 8001;
app.use(express.json());
app.use("/url", urlroute);

connecty("mongodb://localhost:27017/data")
    .then(() => console.log("MongoDb connected"));

app.get("/:shortid", async (req, res) => {
    const shortid = req.params.shortid; // Match field name from schema
    const entry = await URL.findOneAndUpdate(
        { shortId: shortid }, // Corrected field name
        { $push: { visitHistory: { timestamp: Date.now() } } },
        // { new: true } // Ensure updated document is returned
    );
    res.redirect(entry.redirectURL);

})

app.listen(PORT, () => { console.log(`Server running on port :${PORT}`) })





