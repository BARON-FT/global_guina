import { createOrder } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('commande-form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const orderData = {
      customerName: document.getElementById('nom').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('telephone').value,
      product: document.getElementById('produit').value,
      quantity: parseInt(document.getElementById('quantite').value, 10),
      paymentMethod: document.getElementById('paiement').value,
      message: document.getElementById('message').value,
    };

    try {
      const result = await createOrder(orderData);
      if (result) {
        alert('Commande enregistrée avec succès !');
        window.location.href = 'suivi_des_commandes.html';
      } else {
        alert('Erreur lors de l\'enregistrement de la commande.');
      }
    } catch (error) {
      console.error('Erreur lors de la commande :', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  });
});

  document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedProduct = urlParams.get('produit');
    
    if (selectedProduct) {
      const productSelect = document.getElementById('product');
      productSelect.value = selectedProduct;
    }
  
    // Code pour sauvegarder la commande dans localStorage après validation
    document.getElementById('order-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const product = document.getElementById('product').value;
      const quantity = document.getElementById('quantity').value;
      const paymentMethod = document.getElementById('payment-method').value;
      const price = getProductPrice(product); // Fonction pour obtenir le prix du produit
  
      const order = {
        product,
        quantity,
        total: price * quantity,
        paymentMethod,
      };
  
      let orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders.push(order);
      localStorage.setItem('orders', JSON.stringify(orders));
  
      alert('Commande validée ! Vous pouvez suivre votre commande.');
      window.location.href = 'suivi_des_commandes.html';
    });
    
    function getProductPrice(product) {
      const prices = {
        "HP laptop": 200000,
        "Télévision 4K": 600000,
        "Toyota Land Cruiser": 45000000,
        "Tesla Model X": 75000000,
        "IPhone 16 simple": 875000,
        "Longrich pâte dentifrice 200g": 6000,
        "Honda CB500": 4500000,
        "Harley Fat Boy": 9000000,
        "Lenovo laptop": 175000,
        "Imprimante Multifonction": 350000,
        "Souris Sans Fil": 10000,
        "Écran HD 24 pouces": 180000,
      };
      return prices[product] || 0;
    }
  });
