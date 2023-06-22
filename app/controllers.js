import {SalonContent, accueilContent, hallContent, caveContent, caveIntContent, grenier} from './partials.js'

export const controllers = {
    accueil : (req, res) => {
        res.send(`${accueilContent}`)
    },

    hall : (req, res) => {
        res.send(`${hallContent}`)
    },

    salon : (req, res) => {
        res.send(`${SalonContent}`)
    },

    cave : (req, res) => {
        res.send(`${caveContent}`)
    },

    caveInt : (req, res) => {
        res.send(`${caveIntContent}`)
    },

    grenier : (req, res) => {
        res.send(`${grenier}`)
    },
}