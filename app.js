const express = require('express');
var app = express();
app.set("view engine", "ejs");
app.use((req, res, next) => {
    console.log("MiddleWare Started");
    console.log("host:", req.hostname)
    console.log("path:", req.path)
    console.log("method:", req.method)
    next();//go to next middleware
});

app.use((req, res, next) => {
    console.log("The Next Middleware");
    next();
});
//to find files inside the public folder without specifing the entire path
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
//middleware is viewing the request.body & this works to navigate all url.

app.get('/', (req, res) => {
    // res.sendFile("./views/index.html", { root: __dirname })
    res.render("./blogs/ejsIndex");
})
app.get('/about', (req, res) => {
//     res.sendFile("./blogs/ejsAbout", { root: __dirname })
res.render("./blogs/ejsAbout.ejs");
})

// app.get('/404', (req, res) => {
//     res.sendFile("./views/404.html", { root: __dirname })
// })

app.use((req, res) => {
    res.sendFile("./views/404.html", { root: __dirname })
});
app.listen(3000,);