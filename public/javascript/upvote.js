async function createUpvoteClickHandler(event) {
    event.preventDefault();

    const id = event.target.closest('.like-container').id;

    const response = await fetch('/api/reviews/upvote', {
      method: 'PUT',
      body: JSON.stringify({
        review_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }

  async function deleteUpvoteClickHandler(event) {
    event.preventDefault();

    const review_id = event.target.closest('.like-container').id;

    const response = await fetch(`/api/reviews/upvote/${review_id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        review_id: review_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  //document.querySelector('.like-button-liked').addEventListener('click', upvoteClickHandler);
  //document.querySelector('.like-button-unliked').addEventListener('click', upvoteClickHandler);
  