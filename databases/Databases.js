import { Sequelize } from "sequelize";
// Nyambungin db ke BE
const db = new Sequelize("RECOVER_YOUR_DATA", "root", "", {
 host: "35.225.111.238",
 dialect: "mysql",
});
export default db;
