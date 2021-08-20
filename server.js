const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const handlebars = require("handlebars");
const routes = require('./controllers');



const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({
  helpers: {
    format_date: date => {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    },
    ifEquals: (arg1, arg2, options) => {
      return arg1 == arg2 ? options.fn(this) : options.inverse(this);
    },
    ifNotEquals: (arg1, arg2, options) => {
      return arg1 !== arg2 ? options.fn(this) : options.inverse(this);
    },
    ifNullEmptyZero: (arg1, options) => {
      return !arg1 || arg1 == 0 ? options.fn(this) : options.inverse(this);
    },
    ifGreaterThan: (arg1, arg2, options) => {
      return arg1 > arg2 ? options.fn(this) : options.inverse(this);
    },
    selectRating: (arg1) => {
      console.log("arg1: " + arg1);
      if (arg1 == 1) {
        return new handlebars.SafeString("<option value=''></option><option value='5'></option><option value='4'></option><option value='3'></option><option value='2'></option><option value='1'selected></option>")
      } else if(arg1 == 2) {
        return new handlebars.SafeString("<option value=''></option><option value='5'></option><option value='4'></option><option value='3'></option><option value='2'selected></option><option value='1'></option>")
      } else if(arg1 == 3) {
        return new handlebars.SafeString("<option value=''></option><option value='5'></option><option value='4'></option><option value='3' selected></option><option value='2'></option><option value='1'></option>")
      } else if (arg1 == 4) {
        return new handlebars.SafeString("<option value=''></option><option value='5'></option><option value='4' selected></option><option value='3'></option><option value='2'></option><option value='1'></option>")
      } else if (arg1 == 5) {
        return new handlebars.SafeString("<option value=''></option><option value='5' selected></option><option value='4'></option><option value='3'></option><option value='2'></option><option value='1'></option>")
      }
      return new handlebars.SafeString("<option value='' selected></option><option value='5'></option><option value='4'></option><option value='3'></option><option value='2'></option><option value='1'></option>")
    }
  }
});

// set up handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setting the middleware
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
// app.use(routes);
app.use(require('./controllers/'));


// turn on connection to db and server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});