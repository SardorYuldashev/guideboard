const { ForbiddenError } = require("../errors");

const hasRole = (roles) => {
  return (req, res, next) => {
    const { role } = req.user;

    if (!roles.includes(role)) {
      throw new ForbiddenError(`Sizda bu yo'lga kirishga ruxsat yo'q`);
    };

    next();
  };
};

module.exports = hasRole;