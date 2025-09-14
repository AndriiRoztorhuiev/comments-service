const { configDotenv } = require("dotenv");
configDotenv();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require("../models");

(
    async () => {
        try {
            await db.sequelize.authenticate();
            console.log('Connected to the database');
        } catch (err) {
            console.error('Database connection error', err.stack);
        }

        const app = express();
        const PORT = process.env.PORT || 3000;

        app.use(cors());
        app.use(bodyParser.json());

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });


        app.get('/', (req, res) => {
            res.send('Hello World! The server is up and running.' + "\n" + new Date());
        });

        app.get('/comments', async (req, res) => {
            const comments = await db.Comments.findAll({});
            res.json(comments);
        });

        app.post('/comments', async (req, res) => {
            const { content } = req.body;
            if (!content) return res.status(400).json({ error: "Content is required" });

            const comment = await db.Comments.create({ content });
            res.status(201).json(comment);
        });
    }
)();


