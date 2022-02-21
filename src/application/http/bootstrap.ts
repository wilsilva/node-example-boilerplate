import server from "./server";

const app = server.build();

app.listen(3000, () => {
  if (process.env.NODE_ENV !== "prod") {
    console.log("Server running on port 3000");
  }
});
