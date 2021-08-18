async function editReviewHandler(event) {
  event.preventDefault();

  const review_text = document
    .querySelector('textarea[name="updated-review-text"]')
    .value.trim();
  // const date_watched = document.querySelector(
  //   'input[name="date-watched"]'
  // ).value;
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/reviews/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        review_text,
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
  .querySelector(".edit-review-form")
  .addEventListener("submit", editReviewHandler);