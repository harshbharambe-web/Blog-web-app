const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

// ✅ MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ✅ VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ✅ STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

// ✅ PORT (IMPORTANT FOR RENDER)
const PORT = process.env.PORT || 3000;

// ✅ SAMPLE DATA (FIXED UUID)
let post = [
  {
    id: uuidv4(),
    username: "TechExplained",
    content: "Technology is shaping business growth rapidly..."
  },
  {
    id: uuidv4(),
    username: "HealthyHabitsBlog",
    content: "Maintaining a balanced lifestyle is essential..."
  }
];

// ✅ ROOT ROUTE (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.redirect("/posts");
});

// ── LOGIN ─────────────────────────
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", (req, res) => {
  res.redirect("/posts");
});

// ── POSTS INDEX ───────────────────
app.get("/posts", (req, res) => {
  res.render("Post.ejs", { post });
});

// ── NEW POST FORM ────────────────
app.get("/posts/new", (req, res) => {
  res.render("form.ejs");
});

// ── CREATE POST ──────────────────
app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  post.push({ id, username, content });
  res.redirect("/posts");
});

// ── SHOW POST ────────────────────
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let posts = post.find((p) => p.id === id);

  if (!posts) return res.status(404).send("Post not found");

  res.render("show.ejs", { posts });
});

// ── EDIT FORM ────────────────────
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let posts = post.find((p) => p.id === id);

  if (!posts) return res.status(404).send("Post not found");

  res.render("edit.ejs", { posts });
});

// ── UPDATE POST ──────────────────
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;

  let foundPost = post.find((p) => p.id === id);
  if (!foundPost) return res.status(404).send("Post not found");

  foundPost.content = newContent;

  res.redirect(`/posts/${id}`);
});

// ── DELETE POST ──────────────────
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;

  post = post.filter((p) => p.id !== id);

  res.redirect("/posts");
});

// ✅ START SERVER (IMPORTANT FIX)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
