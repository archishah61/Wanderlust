const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

async function main() {
    await mongoose.connect("mongodb://localhost:27017/wanderlust")
}

main()
    .then(() => {
        console.log("connected to  DB")
    })
    .catch((err) => {
        console.log(err)
    })

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "67a3429462599c68769bf84e" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();