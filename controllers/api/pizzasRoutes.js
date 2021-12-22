const router = require("express").Router();
const { Pizzas, Addons } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const pizzaModels = await Pizzas.findAll();
    const pizzas = [];
    for (var i = 0; i < pizzaModels.length; i++) {
      const pizza = pizzaModels[i].toJSON();
      let addOns = await defineAddOns(pizza.addons_ids);
      pizza.addOns = addOns;
      pizzas.push(pizza);
    }
    res.status(200).json(pizzas);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const pizzaId = req.params.id;
    if (!pizzaId || isNaN(parseInt(pizzaId))) {
      res.status(400);
    }
    // get row of pizza
    const pizzaModel = await Pizzas.findByPk(pizzaId);
    const pizza = pizzaModel.toJSON();

    let addOns = await defineAddOns(pizza.addons_ids);

    pizza.addOns = addOns;
    res.status(200).json(pizza);
    console.log(pizza);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const pizzaOrder = req.body;
    pizzaOrder.addons_ids = JSON.stringify(pizzaOrder.addons_ids);
    const pizzaModel = await Pizzas.create(pizzaOrder);
    res.status(200).json(pizzaModel);
  } catch (err) {
    res.status(500).json(err);
  }
});

async function defineAddOns(addons_ids) {
  let addOns = [];
  if (addons_ids) {
    try {
      const addOnIds = JSON.parse(addons_ids);
      addOns = await Addons.findAll({
        where: {
          id: addOnIds,
        },
        raw: true,
      });
    } catch (err) {
      console.error(err);
    }
  }
  return addOns;
}

module.exports = router;
