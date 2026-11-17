const express = require("express");

function crearRouterReservas(controladorReservas, validarReserva) {
  const router = express.Router();

  router.use((req, res, next) => {
    res.locals.seccion = "Reservas de salas";
    next();
  });

  router.get("/", controladorReservas.listar);

  router.get("/nueva", controladorReservas.mostrarNueva);

  router.get("/:id/editar", controladorReservas.mostrarEditar);

  router.get("/:id", controladorReservas.mostrarDetalle);

  router.post("/", validarReserva, controladorReservas.crear);

  router.post("/:id/editar", controladorReservas.editar);

  return router;
}

module.exports = crearRouterReservas;
