async function deleteReviewHandler(event) {
    event.preventDefault();

    const id = event.target.closest('.edit-review-form').id;

    const response = await fetch(`/api/reviews/${id}`, {
      method: "DELETE",
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  document
    .querySelector(".delete-review-button")
    .addEventListener("click", deleteReviewHandler);
  