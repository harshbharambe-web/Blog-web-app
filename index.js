const express = require("express");
let app = express();
let port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));  // ← app.use not app.set

let post = [
  {
  id: "uuidv4()", username: "TechExplained", content: "In today’s fast-moving digital era, understanding how emerging technologies like artificial intelligence, blockchain, and cloud computing shape business growth is essential. This article examines current trends and their practical impact on enterprises, offers expert-backed insights into strategic adoption, and discusses future opportunities for innovators and startups alike. Readers will gain actionable guidance on integrating advanced tech solutions into existing systems while maintaining operational stability and driving competitive advantage."
},
{
  id: "uuidv4()", username: "HealthyHabitsBlog", content: "Maintaining a balanced lifestyle in an age of constant distractions can be challenging. This comprehensive piece explores evidence-based approaches to nutrition, sustainable fitness routines, and the psychology of habit formation. We include interviews with health professionals, practical daily routines, and real-life success stories to help readers build habits that support long-term wellbeing, emotional resilience, and physical vitality."
},
{
  id: "uuidv4()", username: "FinanceInsights", content: "With economic uncertainty affecting families and businesses around the world, personal finance literacy has never been more valuable. In this in-depth article, we break down essential financial planning principles, including budgeting, investing fundamentals, retirement strategies, and risk management. Real examples illustrate how individuals can make informed financial decisions while mitigating debt and maximizing wealth creation over time."
},
{
  id: "uuidv4()", username: "TravelProDiary", content: "Traveling isn’t just about sightseeing — it’s about embracing new cultures, expanding perspectives, and creating unforgettable experiences. This detailed guide covers hidden travel destinations across Europe, tips for immersive cultural experiences, budgeting strategies for long-term travel, and safety advice for first-time explorers. We also include expert commentary from seasoned globetrotters to help you plan trips that truly enrich the soul."
},
{
  id: "uuidv4()", username: "MindfulLeadership", content: "Leadership in modern workplaces demands more than managerial skills — it requires emotional intelligence, adaptability, and the ability to inspire teams through change. This article explores the core traits of effective leaders, how to cultivate a growth-focused company culture, and communication frameworks that strengthen trust and collaboration. Case studies illustrate how top leaders navigated challenges and fostered innovation in their organizations."
},
{
  id: "uuidv4()", username: "EcoLivingGuide", content: "Sustainable living starts with mindful choices that reduce environmental impact without sacrificing quality of life. In this comprehensive post, we examine practical methods to minimize waste, choose eco-friendly products, and make energy-efficient decisions at home. We also include interviews with sustainability experts and tips for community involvement that supports broader environmental goals."
},
{
  id: "uuidv4()", username: "CreativeMarketing", content: "In the digital age, successful marketing hinges on strategic storytelling, customer insight, and data-driven decision-making. This article breaks down modern marketing techniques that help brands connect with audiences authentically, leveraging content strategy, social media engagement, and performance analytics. Real campaign case studies show how thoughtful execution and creativity drive measurable business impact."
},
{
  id: "uuidv4()", username: "ParentingToday", content: "Parenting in the 21st century involves balancing emotional support with healthy structure. This long-form piece discusses techniques for promoting emotional intelligence in children, managing technology use, and nurturing confidence through encouragement and consistent communication. We also highlight expert advice from psychologists and educators to help families navigate common challenges with empathy and clarity."
},
{
  id: "uuidv4()", username: "FitnessJourneyBlog", content: "Achieving fitness goals requires a blend of physical training, nutritional awareness, and mental strength. This extensive guide outlines workout routines for different levels, essential nutrition principles to support performance, and wellness practices that avoid injury and burnout. Interviews with fitness professionals and tailored plans offer readers practical steps to succeed on their fitness journey."
},
{
  id: "uuidv4()", username: "CulinaryCulture", content: "Food is more than sustenance — it reflects history, culture, and creativity. This article dives deep into world cuisines, traditional cooking techniques, and the cultural significance of regional dishes. Renowned chefs share insights and recipes, while food historians explore how culinary traditions evolve with time and influence global dining trends."
},
{
  id: "uuidv4()", username: "CareerGrowthHub", content: "In a competitive job market, professionals must strategically build skills, networks, and opportunities. This article provides a roadmap for career progression, including resume optimization, interview preparation, and networking strategies that open doors to advancement. We also share success stories from individuals who navigated career hurdles to achieve professional fulfillment."
},
{
  id: "uuidv4()", username: "DesignMindset", content: "Design thinking is a powerful approach to solving complex problems and fostering innovation. This long-form blog post introduces the principles of design thinking, illustrates each stage with practical examples, and provides exercises for improving creative problem-solving in teams. Readers will learn how to apply design methodologies to business challenges and everyday decisions for better outcomes."
},
{
  id: "uuidv4()", username: "ScienceExploration", content: "Scientific breakthroughs continually shape how we live, work, and understand the universe. In this comprehensive article, we explore recent advances in genetics, space exploration, and renewable energy. By translating complex research into accessible insight, this post helps readers appreciate the real-world implications of scientific progress and the opportunities it creates for future breakthroughs."
},
{
  id: "uuidv4()", username: "HomeImprovementGuide", content: "Improving your home boosts both comfort and long-term property value. This detailed guide covers renovation planning, budget considerations, and design principles that balance aesthetics with practicality. Featuring professional tips and step-by-step project ideas, this post helps homeowners take on DIY tasks with confidence while avoiding common mistakes and maximizing impact."
},
{
  id: "uuidv4()", username: "HistoryUnlocked", content: "History offers valuable lessons that shape our present and future. In this long-form exploration, we examine pivotal events, influential figures, and their lasting effects on modern society. By weaving narrative with analysis, this article engages readers with insightful commentary and encourages deeper understanding of the forces that have shaped our world."
}
];

// ── LOGIN ──────────────────────────────────────────
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", (req, res) => {
  // Add real auth logic here later
  res.redirect("/posts");
});

// ── POSTS INDEX ────────────────────────────────────
app.get("/posts", (req, res) => {
  res.render("Post.ejs", { post });
});

// ── NEW POST FORM ──────────────────────────────────
app.get("/posts/new", (req, res) => {
  res.render("form.ejs");
});

// ── CREATE POST ────────────────────────────────────
app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  post.push({ id, username, content });
  res.redirect("/posts");
});

// ── SHOW POST ──────────────────────────────────────
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let posts = post.find((p) => p.id === id);
  if (!posts) return res.status(404).send("Post not found");
  res.render("show.ejs", { posts });
});

// ── EDIT FORM ──────────────────────────────────────
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let posts = post.find((p) => p.id === id);
  if (!posts) return res.status(404).send("Post not found");
  res.render("edit.ejs", { posts });
});

// ── UPDATE POST ────────────────────────────────────
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let foundPost = post.find((p) => p.id === id);
  if (!foundPost) return res.status(404).send("Post not found");
  foundPost.content = newContent;
  res.redirect(`/posts/${id}`);
});

// ── DELETE POST ────────────────────────────────────
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  post = post.filter((p) => p.id !== id);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
