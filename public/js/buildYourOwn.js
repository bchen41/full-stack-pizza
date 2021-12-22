const buildYourOwnHandler = async function () {
  const response = await fetch("/api/addons");
  const data = await response.json();
  if (!data || !data.length) {
    alert("Failed to retrieve addon data");
  }

  const crustAddOns = data.filter((d) => d.addon_type === "crust");
  const sauceAddOns = data.filter((d) => d.addon_type === "sauce");
  const otherAddOns = data.filter(
    (d) =>
      d.addon_type !== "crust" &&
      d.addon_type !== "sauce" &&
      d.addon_type !== "pizza"
  );
  console.log(otherAddOns);
  createRadioQuestion("Crust", crustAddOns);
  createRadioQuestion("Sauce", sauceAddOns);
  createMultiSelect(otherAddOns);

  $("#save-form-btn").on("click", placeOrder);
};

const placeOrder = async (event) => {
  // get form values
  const addOns = [1];
  const $crustSelected = $(`input[name="Crust"]:checked`);
  const $sauceSelected = $(`input[name="Sauce"]:checked`);
  const $otherAddOnsSelected = $("ul.multiselect-container > li.active input");
  if ($crustSelected) {
    addOns.push(parseInt($crustSelected.attr("value")));
  }
  if ($sauceSelected) {
    addOns.push(parseInt($sauceSelected.attr("value")));
  }
  if ($otherAddOnsSelected) {
    for (let other of $otherAddOnsSelected) {
      addOns.push(parseInt(other.value));
    }
  }
  // create the order via /api/order POST
  const response = await fetch("/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  const order = await response.json();

  const pizzaResponse = await fetch("/api/pizzas", {
    method: "POST",
    body: JSON.stringify({
      order_id: order.id,
      addons_ids: addOns,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (!pizzaResponse.ok) {
    alert("Failed to create pizza!");
  }
  location.reload();
};

const createRadioQuestion = (questionName, choices) => {
  const form = $("#build-pizza-form");
  const choicesEl = choices.map(
    (c) => `
    <div class="form-check">
      <input class="form-check-input" type="radio" name="${questionName}" id="gridRadios-${c.id}" value="${c.id}">
      <label class="form-check-label" for="gridRadios-${c.id}">
        ${c.addon_name}
      </label>
    </div>
  `
  );

  form.append(`
    <div class="row pad-bottom-10">
      <legend class="col-form-label col-sm-2 pt-0">${questionName}</legend>
      <div class="col-sm-10">
        ${choicesEl.join("\n")}
      </div>
    </div>
  `);
};

const createMultiSelect = (choices) => {
  const form = $("#build-pizza-form");
  const options = choices.map(
    (c) => `
  <option value="${c.id}">${c.addon_name}</option>
  `
  );
  form.append(`
    <select class="form-group" id="addOns" name="addOns" multiple>
      ${options.join("\n")}
    </select>
  `);
  $("#addOns").multiselect({
    nonSelectedText: "Select additional addons",
    enableFiltering: true,
    enableCaseInsensitiveFiltering: true,
    dropUp: false,
  });
};

setTimeout(buildYourOwnHandler, 0);
