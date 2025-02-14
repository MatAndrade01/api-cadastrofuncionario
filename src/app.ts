import express from 'express';
import router from "./router/routes";

function creatApp() {
    const app = express();

    app.use(express.json());


    return app;
};

export default creatApp;