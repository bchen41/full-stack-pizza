if (window.location.pathname === "/index.html" || "/signup.html") {
  reviewList = document.querySelectorAll(".reviews");
}

const getReviews = () =>
  fetch("/api/reviews", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

const renderReviewList = async (reviews) => {
  let jsonReviews = await reviews.json();
  if (window.location.pathname === "/index.html" || "/signup.html") {
    reviewList.forEach((el) => (el.innerHTML = ""));
  }
};

const getAndRenderReviews = () => getReviews().then(renderReviewList);
