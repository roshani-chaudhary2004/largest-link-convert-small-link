function generateShortLink() {
  const input = document.getElementById("urlInput").value;
  const outputDiv = document.getElementById("output");
  const shortLink = document.getElementById("shortLink");

  if (!input) {
    alert("Please enter a URL.");
    return;
  }

  // Create a fake shortened link (for demo)
  const randomString = Math.random().toString(36).substring(2, 8);
  const fakeLink = "https://short.ly/" + randomString;

  shortLink.href = input; // redirect to original
  shortLink.textContent = fakeLink;

  outputDiv.classList.remove("hidden");
}



