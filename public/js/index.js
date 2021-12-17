const addonsData = [
  {
    addon_name: "standard",
    addon_type: "pizza",
    price: 9,
    calories: 100,
  },
  {
    addon_name: "thin",
    addon_type: "crust",
    price: 0.5,
    calories: 100,
  },
  {
    addon_name: "regular",
    addon_type: "crust",
    price: 0,
    calories: 150,
  },
  {
    addon_name: "marinara",
    addon_type: "sauce",
    price: 0,
    calories: 50,
  },
  {
    addon_name: "marinara",
    addon_type: "sauce",
    price: 0,
    calories: 50,
  },
  {
    addon_name: "marinara",
    addon_type: "sauce",
    price: 0,
    calories: 50,
  },
  {
    addon_name: "marinara",
    addon_type: "sauce",
    price: 0,
    calories: 50,
  },
  {
    addon_name: "marinara",
    addon_type: "sauce",
    price: 0,
    calories: 50,
  },
];

const crustAddons = addonsData.filter((ad) => ad.addon_type === "crust");
