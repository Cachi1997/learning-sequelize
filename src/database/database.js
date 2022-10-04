import Sequelize from "sequelize"

export const sequelize = new Sequelize(
    "projectsdb", 
    "database-username", 
    "database-password", 
    {
        host: "localhost",
        dialect:"postgres"
    }
);

