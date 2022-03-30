require("dotenv").config();

export class App {

    // --- Server settings
    static PORT: number = Number(process.env.PORT);

    //---Database settings
    static DB_HOST = process.env.DB_HOST || "localhost";
    static DB_PORT = process.env.DB_PORT || "localhost";
    static DB_USER = process.env.DB_USER || "root";
    static DB_PASSWORD = process.env.DB_PASSWORD || "";
    static DB_DATABASE = process.env.DB_DATABASE || "trello";

}
