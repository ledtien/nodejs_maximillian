const products = [];

exports.getAddProduct = (req, res, next) => {
  // res.send(
  //   "<form action='/admin/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></input></form>"
  // );
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    title: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  // console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  // res.send("<h1>hello this is response from express</h1>");
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  //   const products = adminData.products;
  let haveData = products.length > 0 ? true : false;
  res.render("shop", {
    isData: haveData,
    prods: products,
    title: "Shop",
    path: "/",
    activeShop: true,
    productCSS: true,
  });
};
