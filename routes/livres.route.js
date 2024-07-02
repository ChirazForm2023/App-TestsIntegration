const express = require("express");
const router = express.Router();
const livresData = require("../data/livres.json");
const { check, validationResult } = require("express-validator");
const { save } = require("../services/save.service");

router.get("/", (req, res) => {
  res.json(livresData);
});
router.post(
  "/",
  [
    check("titre", "le titre du livre est obligatoire").not().isEmpty(),
    check("auteur", "l'auteur du livre est obligatoire").not().isEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    //ajout d'un livre puisqu'il nya pas d'erreur

    const { titre, auteur } = req.body;
    livresData.push({
      titre,
      auteur,
      id: Math.random(),
    });
    //on doit sauvegarder l'ajout
    const isSaved = save(livresData);
    console.log(isSaved);
    if (!isSaved) {
      return res.status(500).json({
        error: true,
        message: "impossible d'enregistrer Livres",
      });
    }
    res.json({
      message: "Succès",
    });
  }
);

module.exports = router;
