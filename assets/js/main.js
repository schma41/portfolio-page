async function loadDog() {
  const container = document.getElementById("dogContainer");

  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    const imageUrl = data.message; // URL of the dog image

    // Fixed height, auto width to preserve aspect ratio
    container.innerHTML = `<img src="${imageUrl}" alt="Random Dog" style="height:350px; width:auto; border-radius:8px;">`;
  } catch (error) {
    console.error("Failed to fetch a dog image:", error);
    container.innerHTML = `<p>Could not load dog image :(</p>`;
  }
}

// Button click
document.getElementById("dogButton").addEventListener("click", loadDog);

// Load one dog on page load
loadDog();