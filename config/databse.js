import mongoose from "mongoose"

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on('connected', function () {
    console.log(`Connect to MongoDB ${db.name} at ${db.host}:${db.port}`)
})
