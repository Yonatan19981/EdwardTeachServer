import express from "express";
import { connectToDatabase } from "./services/database.service"
import { usersRouter } from "./routes/users.router";

const app = express();
const port = 8080; // default port to listen

connectToDatabase()
    .then(() => {
        app.use("/users", usersRouter);

        app.listen(port, () => {
            console.log(`Server started at http://127.0.0.1:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });