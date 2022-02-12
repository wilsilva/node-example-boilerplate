import express from "express";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => res.status(200).json({ message: "Hello world" }));

app.post("/courses", (req, res) => {
  const { name } = req.body;
  return res.json({ name });
});

app.listen(3000, () => console.log("Server running on port 3000"));
