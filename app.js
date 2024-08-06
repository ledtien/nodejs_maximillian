// const http = require("http");

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { engine } = require("express-handlebars");
// const routes = require("./routes");

const app = express();

//this is handlebars not built-in
// app.engine(
//   "handlebars",
//   engine({ layoutsDir: "views/layouts", defaultLayout: "main" })
// );

//this is ejs engine built-in
app.set("view engine", "ejs");

// this a pug engine built-in
// app.set("view engine", "pug");

app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/add-product", (req, res, next) => {
//   res.send(
//     "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></input></form>"
//   );
// });

// app.post("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).send("<h1>Page not found!</h1>");
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { title: "Page Not Found" });
});

// app.use("/", (req, res, next) => {
//   res.send("<h1>hello this is response from express</h1>");
// });

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
