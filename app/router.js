import express from "express";
import {controllers} from "./controllers.js";
// Importe tous les export present dans le fichier controllers.js et les rassemblent dans l'objet 'controllers'
export const router = express.Router()

router.get('/', controllers.accueil)
router.get('/hall', controllers.hall)
router.get('/salon', controllers.salon)
router.get('/cave', controllers.cave)
router.get('/cave-interieur', controllers.caveInt)
router.get('/grenier', controllers.grenier)




