var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    scores: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

  Users.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  Users.addHook("beforeCreate", function(users) {
    users.password = bcrypt.hashSync(users.password, bcrypt.genSaltSync(10), null);
  });

  return Users;
};
