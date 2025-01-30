document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchButton = document.getElementById('search-button');

  // Vérifiez si les éléments existent
  if (!searchInput || !searchResults || !searchButton) {
    console.error('Les éléments de recherche ne sont pas trouvés. Vérifiez les IDs dans le HTML.');
    return;
  }
    // Liste des produits et services disponibles
    const items = [
      { name: "HP laptop", category: "Guina market", link: "guina_market.html?produit=HP laptop" },
      { name: "Télévision 4K", category: "Guina market", link: "guina_market.html?produit=Télévision 4K" },
      { name: "Toyota Land Cruiser", category: "Guina Motors", link: "guina_motors.html?produit=Toyota Land Cruiser" },
      { name: "Tesla Model X", category: "Guina Motors", link: "guina_motors.html?produit=Tesla Model X" },
      { name: "Formation", category: "Guina Technologie", link: "guina_tech.html#formation" },
      { name: "Infographie", category: "Guina Technologie", link: "guina_tech.html#infographie" },
      { name: "IPhone 16 simple", category: "Guina market", link: "guina_market.html?produit=IPhone 16 simple" },
      { name: "Honda CB500", category: "Guina motors", link: "guina_motors.html?produit=Honda CB500" },
      { name: "Harley Fat Boy", category: "Guina motors", link: "guina_motors.html?produit=Harley Fat Boy" },
      { name: "Maintenance", category: "Guina Technologie", link: "guina_tech.html?#Maintenance" },
      { name: "Lenovo laptop", category: "Guina Technologie", link: "guina_tech.html?produit=Lenovo laptop" },
      { name: "Imprimante Multifonction'", category: "Guina Technologie", link: "guina_tech.html?produit=Imprimante Multifonction'" },
      { name: "Souris Sans Fil", category: "Guina Technologie", link: "guina_tech.html?produit=Souris Sans Fil" },
      { name: "Écran HD 24 pouces", category: "Guina Techbologie", link: "guina_tech.html?produit=Écran HD 24 pouces" },
      { name: "Agrobusiness", category: "Guina Agrobusiness", link: "guina_agrobusiness.html?#Agrobusiness" },
      { name: "Gold", category: "Guina Gold", link: "guina_gold.html?#gold" },
      { name: "Market", category: "Guina market", link: "guina_market.html?#market" },
      { name: "Motors", category: "Guina motors", link: "guina_motors.html?#motors" },
      { name: "Technologie", category: "Guina Technologie", link: "guina_tech.html?#tech" },
      { name: "Academy", category: "Guina Academy", link: "guina_academy.html?#academy" },
      { name: "Opportunitées", category: "Guina Academy", link: "guina_academy.html?#academy" },
      { name: "Marketing", category: "Guina Academy", link: "guina_academy.html?#academy" },
      { name: "Entrepreunariat", category: "Guina Academy", link: "guina_academy.html?#academy" },
      { name: "Formation", category: "Guina Academy", link: "guina_academy.html?#academy" },
      { name: "Energy", category: "Guina Energy", link: "guina_energy.html?#energy" },
      { name: "Evènements", category: "Guina Events", link: "guina_events.html?#events" },
      { name: "Logistic", category: "Guina Logistic", link: "guina_logistic.html?#logistic" },
      { name: "Logistique", category: "Guina Logistic", link: "guina_logistic.html?#logistic" },
      { name: "Transport", category: "Guina Logistic", link: "guina_logistic.html?#logistic" },
      { name: "Import-export", category: "Guina Logistic", link: "guina_logistic.html?#logistic" },
      { name: "Entreposage", category: "Guina Logistic", link: "guina_logistic.html?#logistic" },
    ];
  
    // Fonction de recherche
  function effectuerRecherche() {
    console.log('Fonction de recherche appelée');
    const query = searchInput.value.toLowerCase().trim();
    console.log(`Recherche pour : ${query}`);

    if (query === '') {
      searchResults.innerHTML = "<p>Veuillez entrer un terme de recherche.</p>";
      return;
    }

    const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
    console.log('Éléments trouvés :', filteredItems);

    // Afficher les résultats
    searchResults.innerHTML = ""; // Vider les résultats précédents
    if (filteredItems.length > 0) {
      filteredItems.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `<a href="${item.link}">${item.name} - ${item.category}</a>`;
        searchResults.appendChild(resultItem);
      });
    } else {
      searchResults.innerHTML = "<p>Aucun résultat trouvé.</p>";
    }
  }

  // Ajouter l'événement au bouton de recherche
  searchButton.addEventListener('click', effectuerRecherche);

  // Activer la recherche en appuyant sur "Enter"
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      effectuerRecherche();
    }
  });
});