async function searchBarHandler(event) {
    event.preventDefault();
  
    const term = document.querySelector(
      'input[name="search-text"]'
    ).value.trim();
  
    const response = await fetch(`/search/${term}`, {
      method: "GET",
      body: JSON.stringify({
        term,
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
    .querySelector(".searh-bar")
    .addEventListener("submit", searchBarHandler);
  