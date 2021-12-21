const userReviews = async () => {
  const response = await fetch("/api/reviews");
  if (!response.ok) {
    alert("Failed to retrieve user reviews");
  }
  const reviews = await response.json();
  const $reviewTableEl = $("#reviews");
  for (let review of reviews) {
    $reviewTableEl.append(`<h5>"${review.review}"</h5><br>`);
  }
  // console.log(reviews);
};

userReviews();
