import express from "express";
import cors from "cors";
import UserRoute from "./routes/Userroute.js";
import db from "./databases/Databases.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/notes", NoteRoute); // semua route dari NoteRoute akan diakses lewat /notes

// Optional: route default untuk cek apakah server jalan
app.get("/", (req, res) => {
    res.send("Welcome to the Notes API!");
});

// Cek koneksi database saat server start
async function startServer() {
    try {
        await db.authenticate();
        console.log("✅ Database connected");

        // Sync database
        await db.sync({ alter: true }); // Ubah ke force: true jika ingin reset tabel

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
        console.error(error.stack);
    }
}

startServer();
