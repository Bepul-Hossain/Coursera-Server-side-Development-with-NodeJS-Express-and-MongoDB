const express = require("express");
const bodyParser = require("body-parser");
const authenticate= require('../authenticate')
const Promotions = require("../models/promotions");
const cors = require("./cors");

const promosRouter = express.Router();

promosRouter.use(bodyParser.json());

promosRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.cors,(req, res, next) => {
    Promotions.find({})
      .then(
        (promotions) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(promotions);
        },
        (err) => {
          next(err);
        }
      )
      .catch((err) => next(err));
  })
  .post( cors.corsWithOptions,authenticate.verifyUser,(req, res, next) => {
    Promotions.create(req.body)
      .then(
        (promotion) => {
          console.log("promotion created ", promotion);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(promotion);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .put( cors.corsWithOptions,authenticate.verifyUser,(req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotions");
  })
  .delete( cors.corsWithOptions,authenticate.verifyUser,(req, res, next) => {
    Promotions.remove({})
      .then(
        (promoRemove) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(promoRemove);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

promosRouter
  .route("/:promoId")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.cors,(req, res, next) => {
    Promotions.findById(req.params.promoId)
      .then(
        (promotion) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(promotion);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post(cors.corsWithOptions,authenticate.verifyUser,(req, res, next) => {
    res.statusCode = 403;
    res.end(
      "POST operation not supported on /promotions/" + req.params.promotionId
    );
  })
  .put(cors.corsWithOptions,authenticate.verifyUser,(req, res, next) => {
    Promotions.findByIdAndUpdate(
      req.params.promoId,
      { $set: req.body },
      { new: true }
    )
      .then(
        (promotion) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(promotion);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete(cors.corsWithOptions,authenticate.verifyUser,(req, res, next) => {
    Promotions.findByIdAndRemove(req.params.promoId)
      .then(
        (promoDelete) => {
          (res.statusCode = 200),
            res.setHeader("Content-Type", "application/json");
          res.json(promoDelete);
        },
        (err) => next(err)
      )

      .catch((err) => next(err));
  });

module.exports = promosRouter;
