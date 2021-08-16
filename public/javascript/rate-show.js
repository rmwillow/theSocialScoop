async function rateShowClickHandler(event) {
    event.preventDefault();
  
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
  
  document.querySelector('.rate-show-btn').addEventListener('click', rateShowClickHandler);
  