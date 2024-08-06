const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/users") {
    res.setHeader("Content-type", "text-html");
    res.write("<html>");
    res.write("<header><title>My Page Hello World</title></header>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>user1</li><li>user2</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-users" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("data", () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split("=")[1];
      //   fs.writeFile("message.txt", message, (error) => {
      res.statusCode = 302;
      res.setHeader("Location", "/");
      console.log(user);
      return res.end();
      //   });
    });
  }

  res.setHeader("Content-type", "text-html");
  res.write("<html>");
  res.write("<header><title>My Page</title></header>");
  res.write(
    "<body><form action='/create-users' method='POST'><input type='text' name='username'><button type='submit'>Submit</button></input></form></body"
  );
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;
