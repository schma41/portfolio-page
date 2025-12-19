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

document.addEventListener("DOMContentLoaded", () => {

  const map = L.map("map").setView([46.8, 7.6], 9);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);


  const bfhMarker = L.marker([46.9511, 7.4386]).addTo(map);

  bfhMarker
    .bindPopup("<strong>BFH Wirtschaft</strong><br>Bern")
    .bindTooltip("BFH Wirtschaft", {
      permanent: false,
      direction: "top",
      offset: [0, -10],
    });


  bfhMarker.on("mouseover", function () {
    this.openTooltip();
  });

  bfhMarker.on("mouseout", function () {
    this.closeTooltip();
  });


  const wimmisMarker = L.marker([46.6756, 7.6393]).addTo(map);

  wimmisMarker
    .bindPopup("<strong>Wohnort</strong><br>Wimmis")
    .bindTooltip("Wohnort: Wimmis", {
      permanent: false,
      direction: "top",
      offset: [0, -10],
    });

  wimmisMarker.on("mouseover", function () {
    this.openTooltip();
  });

  wimmisMarker.on("mouseout", function () {
    this.closeTooltip();
  });
});