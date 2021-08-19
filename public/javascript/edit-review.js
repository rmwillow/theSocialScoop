async function editReviewHandler(event) {
  event.preventDefault();

  const id = this.id.split('-')[1];
  
  const review_text = document
    .querySelector(`textarea[name="updated-review-text${id}"]`)
    .value.trim();
  // const date_watched = document.querySelector(
  //   'input[name="date-watched"]'
  // ).value;
  

  const response = await fetch(`/api/reviews/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        review_text
        // date_watched
      }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
    .querySelectorAll(".edit-review-form").forEach(element => {
      element.addEventListener("submit", editReviewHandler);});