import app from "./app.js";
import { sequelize } from "./database/database.js";


async function main()  {
    try {
        //Esto es solo para testear si conecta a la base
        // await sequelize.authenticate();
        // console.log('Connection has been established successfully.');
        
        await sequelize.sync({force: false});

        const PORT = 3000;
        app.listen(PORT, () => {
            console.log(`Server is up and running on port ${PORT}`);
        })
    
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    
}

main();
