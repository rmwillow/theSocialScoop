async function upvoteClickHandler(event) {
  event.preventDefault();

  const id = this.id.split('-')[1];
  console.log(id);
  const response = await fetch(`/api/reviews/upvote`, {
    method: "PUT",
    body: JSON.stringify({
      review_id: id,
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
  .querySelectorAll(".likeButton").forEach(element => {
    element.addEventListener("click", upvoteClickHandler);
  })
