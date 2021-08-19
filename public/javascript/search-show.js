async function searchBarHandler(event) {
    event.preventDefault();

    const term = document.querySelector(
      'input[name="search-text"]'
    ).value.trim();

    console.log(term);
  
    const response = await fetch(`/search/${term}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
  
    if (response.ok) {
      console.log("success");
      document.location.replace(`/search/${term}`);
    } else {
      alert(response.statusText);
    }
  }

  document
    .getElementById("search-bar")
    .addEventListener("submit", searchBarHandler);
  