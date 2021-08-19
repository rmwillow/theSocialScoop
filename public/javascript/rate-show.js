var starRatingControl = new StarRating( '.star-rating', {
    maxStars: 5,
    tooltip: false
} );

async function rateShowClickHandler(event) {
    event.preventDefault();
  
    const rating = document
    .querySelector('.star-rating').value.trim();
    console.log("rating: " + rating);
    const show_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    console.log("show_id: " + show_id);
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
      //document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  window.onload=function(){
    let rater = document.getElementById("rater");
    rater.addEventListener("click", rateShowClickHandler);
}
  