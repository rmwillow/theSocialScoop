const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//cookies
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};



app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });
// set up handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setting the middleware
app.use(express.static(path.join(__dirname, "public")));

// turn on routes
// app.use(routes);
app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

