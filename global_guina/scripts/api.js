const API_BASE_URL = "http://localhost:5000";

// Fonction pour créer une commande
export async function createOrder(orderData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'enregistrement de la commande");
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur :", error.message);
    return null;
  }
}

// Fonction pour récupérer les produits
export async function getProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/products`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des produits");
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur :", error.message);
    return [];
  }
}
