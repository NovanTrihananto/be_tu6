import { Sequelize } from "sequelize";
// Nyambungin db ke BE
const db = new Sequelize("notes", "root", "", {
 host: "35.225.111.238",
 dialect: "mysql",
});
export default db;
