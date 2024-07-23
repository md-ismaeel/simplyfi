// server.js
const express = require("express");
const mongoose = require("mongoose");
const User = require("./Model/user");
const Article = require("./Model/article");
const Like = require("./Model/like");
const View = require("./Model/view");
const Notification = require("./Model/notifications");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/userDetails");

// CRUD operations for Users
app.post("/users", async (req, res) => {
    console.log(req.body)
    const user = new User({ ...req.body });
    await user.save();
    res.status(201).send(user);
});

app.get("/users", async (req, res) => {
    const users = await User.find();
    res.send(users);
});

// CRUD operations for Articles
app.post("/articles", async (req, res) => {
    const article = new Article(req.body);
    await article.save();
    res.status(201).send(article);
});

app.get("/articles", async (req, res) => {
    const articles = await Article.find().populate("author");
    res.send(articles);
});

// Like an article
app.post("/articles/:id/like", async (req, res) => {
    const like = new Like({ user: req.body.userId, article: req.params.id });
    await like.save();
    const article = await Article.findById(req.params.id);
    article.likes += 1;
    await article.save();

    // Send notification to the author
    const notification = new Notification({
        user: article.author,
        article: article._id,
        message: `Your article "${article.title}" has been liked.`,
    });
    await notification.save();

    res.status(201).send(like);
});

// View an article
app.post("/articles/:id/view", async (req, res) => {
    const view = new View({ user: req.body.userId, article: req.params.id });
    await view.save();
    const article = await Article.findById(req.params.id);
    article.views += 1;
    await article.save();
    res.status(201).send(view);
});

// Get notifications for a user
app.get("/users/:id/notifications", async (req, res) => {
    const notifications = await Notification.find({ user: req.params.id });
    res.send(notifications);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
