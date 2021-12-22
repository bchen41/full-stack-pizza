// grab previous orders for user
const userOrders = async () => {
  const response = await fetch("/api/orders");
  if (!response.ok) {
    alert("Failed to retrieve user orders");
  }
  const orders = await response.json();
  const $orderTableEl = $("#orders-table");
  let num = 0;
  for (let order of orders) {
    let totalPrice = 0;
    let totalCalories = 0;
    num++;

    // console.log(order);
    for (let pizza of order.pizzas) {
      const pizzaInfoResponse = await fetch("/api/pizzas/" + pizza.id);
      const pizzaInfo = await pizzaInfoResponse.json();
      totalPrice += pizzaInfo.addOns.reduce(
        (a, b) => a + parseFloat(b.price),
        0
      );
      totalCalories += pizzaInfo.addOns.reduce((a, b) => a + b.calories, 0);
    }
    $orderTableEl.append(`
        <tr>
            <td>#</td>
            <td>${num}</td>
            <td>${new Date(order.createdAt).toLocaleString("en-US", {
              timeZone: "EST",
            })}</td>
            <td>${order.pizzas.length}</td>
            <td>${totalPrice.toFixed(2)}</td>
            <td>${totalCalories}</td>
        </tr>
    `);
  }
};

setTimeout(userOrders, 0);
