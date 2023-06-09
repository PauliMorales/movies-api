const express = require('express');
const routerActor = require('./actor.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/actors', routerActor)
router.use('/directors', routerActor)
router.use('/genres', routerActor)
router.use('/movies', routerActor)

module.exports = router;