// middleware to verify user logged in before restricted route access given
const withAuth = (req, res, next) => {
    if (!req.session.userId) {
      res.redirect("/login");
  
      } else {
        next();
      }
    };
  
    module.exports = withAuth;