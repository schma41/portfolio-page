async function loadDog() {
  const container = document.getElementById("dogContainer");

  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    const imageUrl = data.message;

    container.innerHTML = `<img src="${imageUrl}" alt="Random Dog">`;
  } catch (error) {
    console.error("Failed to fetch a dog image:", error);
    container.innerHTML = `<p>Could not load dog image :(</p>`;
  }
}

document.getElementById("dogButton").addEventListener("click", loadDog);
loadDog();