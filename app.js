const express = require ("express");
const path = require("path");
const app = express();
const port = 3030;
 
/* config*/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"./views"));

/* middleware*/
app.use(express.static ("public"));

/* routes*/
const otherRoutes = require("./routes/others.routes")
/* routes*/
app.use("/",otherRoutes)

/* server*/
app.listen(port, () => console.log(`http://localhost${port}`));

