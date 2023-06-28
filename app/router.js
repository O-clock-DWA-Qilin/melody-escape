import express from "express";
import {controllers} from "./controllers.js";
export const router = express.Router()

router.get('/', controllers.accueil)
router.get('/:room', controllers.room)




