var starRatingControl = new StarRating('.star-rating');

async function rateShowClickHandler(event) {
  event.preventDefault();

  const rating = document
    .querySelector('starRatingControl[name=.star-rating"]').value.trim(); // need to update X with correct query selector
  const show_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch('/api/shows/rate', {
    method: 'PUT',
    body: JSON.stringify({
      show_id,
      rating
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

document.querySelector('.star-rating').addEventListener('click', rateShowClickHandler);
