const { extractJWTToken } = require("../services/middle-ware-service");
const {creteUser,getUserByEmail} = require('../Database-queries/user-database-queries')


const userSyncHandler = async (req, res, next) => {
    if (req.headers.authorization) {
      const tokenInformation = extractJWTToken(req.headers.authorization);
      const user = await getUserByEmail(tokenInformation.email);
  
      if (!user) {
        const createdUser = await creteUser({name:tokenInformation.name, surname:tokenInformation.surname,email:tokenInformation.emailF});
        req.user = createdUser;
      } else {
        req.user = user;
      }
    }
  
    next();
  };

  module.exports = { userSyncHandler };
  