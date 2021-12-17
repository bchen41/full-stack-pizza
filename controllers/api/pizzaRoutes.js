const router = require("express").Router();
const { Pizzas } = require("../../models");
const { Addons } = require("../../models");

router.get("/", async (req, res) => {
  const pizzaModels = await Pizzas.findAll();
  const pizzas = [];
  for (var i = 0; i < pizzaModels.length; i++) {
    const pizza = pizzaModels[i].toJSON();
    let addOns = await defineAddOns(pizza.addons_ids);
    pizza.addOns = addOns;
    pizzas.push(pizza);
  }
  res.status(200).json(pizzas);
});

router.get("/:id", async (req, res) => {
  const pizzaId = req.params.id;
  if (!pizzaId || isNaN(parseInt(pizzaId))) {
    res.status(400);
  }
  // get row of pizza
  const pizzaModel = await Pizzas.findByPk(pizzaId);
  const pizza = pizzaModel.toJSON();

  let addOns = defineAddOns(pizza.addons_ids);

  pizza.addOns = addOns;
  res.status(200).json(pizza);
});

/**
 * addons_ids is a string of addon database Ids -> ex. "[1, 2, 4, 6, 7]"
 * parse addons_ids if not null to return the array -> ex. [1, 2, 4, 6, 7]
 * from addons table, find all addons where id IN(1, 2, 4, 6, 7) defined&returned as addOns
 * addOns is either an empty array or array of addOn objects -> ex.
 * [{id: 1, addon_name: standard, addon_type: pizza, price: 9.00, calories: 100}]*/
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

router.post("/", (req, res) => {});
/// heyyyyy

module.exports = router;
