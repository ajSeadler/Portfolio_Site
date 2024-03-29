// server.js

import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import ProjectGrid from "./ProjectGrid";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  const projects = projects; 
  const markup = renderToString(<ProjectGrid />);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SSR Project Grid</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <div id="root">${markup}</div>
      <script src="client.js" defer></script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
