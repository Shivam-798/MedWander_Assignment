// server/models/FormData.js
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('DynamicFormBuilder', 'root', 'Physics3.14', {
  host: 'localhost',
  dialect: 'mysql',
});

const FormData = sequelize.define('FormData', {
  formType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export { sequelize, FormData };
