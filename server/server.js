const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log(`Access from IP: ${ip}`);
  // Log IP to a file
  fs.appendFileSync(
    "access.log",
    `Accessed at ${new Date().toISOString()} - IP: ${ip}\n`
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
