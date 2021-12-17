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
    addon_name: "puff pastry",
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
    addon_name: "cheese filled",
    addon_type: "crust",
    price: 0,
    calories: 200,
  },
  {
    addon_name: "double cheesey filled",
    addon_type: "crust",
    price: 0,
    calories: 250,
  },
  {
    addon_name: "Spinach",
    addon_type: "vegetable",
    price: 0,
    calories: 0,
  },
  {
    addon_name: "Onion",
    addon_type: "vegetable",
    price: 0,
    calories: 0,
  },{
    addon_name: "Mushrooms",
    addon_type: "vegetable",
    price: 0,
    calories: 0,
  },{
    addon_name: "Olives",
    addon_type: "vegetable",
    price: 0,
    calories: 0,
  },
  {
    addon_name: "tomatoes",
    addon_type: "vegetable",
    price: 0,
    calories: 0,
  },
  {
    addon_name: "Jalapenos",
    addon_type: "vegetable",
    price: 0,
    calories: 0,
  },
  {
    addon_name: "beef",
    addon_type: "meat",
    price: 0,
    calories: 150,
  },
  {
    addon_name: "ham",
    addon_type: "meat",
    price: 0,
    calories: 100,
  },
  {
    addon_name: "bacon",
    addon_type: "meat",
    price: 0,
    calories: 200,
  },
  {
    addon_name: "sausages",
    addon_type: "meat",
    price: 0,
    calories: 150,
  },
  {
    addon_name: "chicken",
    addon_type: "meat",
    price: 0,
    calories: 50,
  },
  {
    addon_name: "pepperjack",
    addon_type: "cheese",
    price: 0,
    calories: 150,
  },
  {
    addon_name: "mozarella",
    addon_type: "cheese",
    price: 0,
    calories: 150,
  },
];

const crustAddons = addonsData.filter((ad) => ad.addon_type === "crust");
