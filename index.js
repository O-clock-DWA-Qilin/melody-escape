import express from 'express';
import * as dotenv from 'dotenv'
import { router } from './app/router.js';

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}/`);
});
app.use(express.static('./public'));
app.use(router)