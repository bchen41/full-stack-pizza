const buildYourOwnHandler = async function (event) {
  event.preventDefault();

  const response = await fetch("/api/addons");
  console.log(response);
  if (response.ok) {
    document.location.replace("/buildyourown.html");
  }
};

document
  .querySelector(".buildYourOwn")
  .addEventListener("click", buildYourOwnHandler);
