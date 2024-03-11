import express from "express";
import "dotenv/config";

const app = express();

app.listen(() => {
  console.log(`Server running in port ${process.env.PORT}`);
});
