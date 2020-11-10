const express = require("express");

const Cliente = require("../models/Cliente");

const router = express.Router();

router.get("/", async (req, res) => {
  const clientes = await Cliente.findAll();

  res.render("pages/home", {
    totalClientes: clientes.length,
  });
});

router.get("/contato", (req, res) => {
  res.render("pages/contato", {
    contato: {
      email: "guilhermelonghini@gmail.com",
      telefone: "(44) 98847-3908",
    },
  });
});

module.exports = router;