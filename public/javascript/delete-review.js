async function deleteReviewHandler(event) {
    event.preventDefault();
  
    const id = this.id.split('-')[1];
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
    .querySelectorAll(".delete-review-button").forEach(element => {
      element.addEventListener("click", deleteReviewHandler);});
    
  