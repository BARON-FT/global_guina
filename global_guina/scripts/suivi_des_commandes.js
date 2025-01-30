document.addEventListener('DOMContentLoaded', () => {
  const orderList = document.getElementById('order-list');
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  if (orders.length === 0) {
    orderList.innerHTML = '<p>Aucune commande passée pour le moment.</p>';
  } else {
    orders.forEach(order => {
      const orderElement = document.createElement('div');
      orderElement.classList.add('order-item');
      orderElement.innerHTML = `
        <p><strong>Produit :</strong> ${order.product}</p>
        <p><strong>Quantité :</strong> ${order.quantity}</p>
        <p><strong>Prix Total :</strong> ${order.total} FCFA</p>
        <p><strong>Moyen de Paiement :</strong> ${order.paymentMethod}</p>
      `;
      orderList.appendChild(orderElement);
    });
  }
});

  