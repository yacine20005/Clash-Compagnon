import { DesktopController } from "./desktop-controller.js";

const desktopController = new DesktopController();

desktopController.run();

async function fetchUrl(apiUrl) {
  // Define the API URL
    console.log("Fetching JSON data...");
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log("Data fetched:", data);
}

async function fetchAndDisplayJSON(apiUrl) {
  try {
    console.log("Fetching JSON data...");
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log("Data fetched:", data);

    const jsonDataDiv = document.getElementById("jsonData");
    if (!jsonDataDiv) {
      console.error('Element with ID "jsonData" not found');
      return;
    }
    jsonDataDiv.innerHTML = "";

    const table = document.createElement("table");
    table.border = "1";
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const headers = ["Name", "State"];
    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    data.features.forEach((feature) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = feature.name;
      row.appendChild(nameCell);

      const stateCell = document.createElement("td");
      stateCell.textContent = feature.state;
      row.appendChild(stateCell);

      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    jsonDataDiv.appendChild(table);
  } catch (error) {
    console.error("Error fetching JSON data:", error);
  }
}

fetchUrl("https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-efdd1f35-f758-4120-b0da-17bbdebcda73");
fetchAndDisplayJSON("https://game-events-status.overwolf.com/5426_prod.json");
