const saveFavoritesButton = document.getElementById('save-favorites');
const updateCartButton = document.getElementById("update-cart-button");
const applyFavoritesButton = document.getElementById('apply-favorites');
const orderSummaryDiv = document.getElementById("order-summary");

const categories = {
  fruits: [
    { name: "Apple", price: 120 },
    { name: "Banana", price: 130.30 },
    { name: "Orange", price: 50.80 },
    { name: "Strawberry", price: 205.00 },
    { name: "Wood Apple", price: 100 },
    { name: "Kiwi", price: 200 },
  ],
  vegetables: [
    { name: "Carrot", price: 35.50 },
    { name: "Broccoli", price: 50.20 },
    { name: "Spinach", price: 50.20 },
    { name: "Potato", price: 50.20 },
    { name: "Beans", price: 50.20 },
    { name: "Beetroot", price: 45.00 },
  ],
  dairy: [
    { name: "Milk", price: 200.50 },
    { name: "Cheese", price: 500.00 },
    { name: "Butter", price: 360.00 },
    { name: "Curd", price: 150.00 },
    { name: "Yoghurt", price: 160.50 },
    { name: "Greek Yoghurt", price: 1000.00 },
  ],
  meat: [
    { name: "Chicken", price: 1040.00 },
    { name: "Salmon", price: 1000.00 },
    { name: "Beef", price: 1250.00 },
    { name: "Mutton", price: 1600.00 },
  ],
  baking: [
    { name: "Flour", price: 300 },
    { name: "Sugar", price: 298 },
    { name: "Baking Powder", price: 250 },
    { name: "Baking Soda", price: 100 },
    { name: "Vanilla Extract", price: 200 },
    { name: "Cocoa Powder", price: 400 },
  ],
};
function checkbox() {
    let checkboxValues = document.getElementsByName("checkbox");
    const selectedValues = [];
    for (let index = 0; index < checkboxValues.length; index++) {
      if (checkboxValues[index].checked) {
        selectedValues.push(checkboxValues[index].value);
      }
    }
    return selectedValues;
  }

function displaySelectedCategories() {
  const selectedValues = checkbox();
  orderSummaryDiv.innerHTML = '';

  selectedValues.forEach((category) => {
    if (categories[category]) {
      orderSummaryDiv.innerHTML += `
        <div>
          <h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          ${categories[category].map((item) => {
            return `
              <div>
                <label>${item.name}</label><br>
                <label>Price: ${item.price.toFixed(2)}</label><br>
                <label>Quantity</label>
                <input type="number" id="${category}-${item.name.replace(/\s+/g, '')}-quantity" min="1" placeholder="0"><br>
              </div>
            `;
          }).join("")}
        </div>
      `;
    }
  });
}
function generateOrderSummary() {
    try {
        let orderSummaryHTML = `
          <table>
            <tr>
              <th>Item</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
        `;
    
        let grandTotal = 0;
    
        Object.keys(categories).forEach((categoryName) => {
          categories[categoryName].forEach((item) => {
            const quantityInput = document.getElementById(`${categoryName}-${item.name.replace(/\s+/g, '')}-quantity`);
            if (quantityInput && quantityInput.value > 0) {
              const quantity = parseInt(quantityInput.value, 10);
              const total = item.price * quantity;
              grandTotal += total;
              orderSummaryHTML += `
                <tr>
                  <td>${item.name}</td>
                  <td>${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${quantity}</td>
                  <td>${total.toFixed(2)}</td>
                </tr>
              `;
            }
          });
        });
    
        orderSummaryHTML += `
          <tr>
            <td colspan="4"><strong>Grand Total</strong></td>
            <td><strong>${grandTotal.toFixed(2)}</strong></td>
          </tr>
        </table>
        `;
    
        const orderSummaryDiv = document.getElementById("order-summary");
        orderSummaryDiv.style.display = 'block'; 
        orderSummaryDiv.innerHTML = orderSummaryHTML;
      } catch (error) {
        console.error("Error generating order summary:", error);
      }
}


 

function saveFavorites() {
  const favorites = [];const saveFavoritesButton = document.getElementById('save-favorites');
  const updateCartButton = document.getElementById("update-cart-button");
  const applyFavoritesButton = document.getElementById('apply-favorites');
  const orderSummaryDiv = document.getElementById("order-summary");
  
  const categories = {
    fruits: [
      { name: "Apple", price: 120 },
      { name: "Banana", price: 130.30 },
      { name: "Orange", price: 50.80 },
      { name: "Strawberry", price: 205.00 },
      { name: "Wood Apple", price: 100 },
      { name: "Kiwi", price: 200 },
    ],
    vegetables: [
      { name: "Carrot", price: 35.50 },
      { name: "Broccoli", price: 50.20 },
      { name: "Spinach", price: 50.20 },
      { name: "Potato", price: 50.20 },
      { name: "Beans", price: 50.20 },
      { name: "Beetroot", price: 45.00 },
    ],
    dairy: [
      { name: "Milk", price: 200.50 },
      { name: "Cheese", price: 500.00 },
      { name: "Butter", price: 360.00 },
      { name: "Curd", price: 150.00 },
      { name: "Yoghurt", price: 160.50 },
      { name: "Greek Yoghurt", price: 1000.00 },
    ],
    meat: [
      { name: "Chicken", price: 1040.00 },
      { name: "Salmon", price: 1000.00 },
      { name: "Beef", price: 1250.00 },
      { name: "Mutton", price: 1600.00 },
    ],
    baking: [
      { name: "Flour", price: 300 },
      { name: "Sugar", price: 298 },
      { name: "Baking Powder", price: 250 },
      { name: "Baking Soda", price: 100 },
      { name: "Vanilla Extract", price: 200 },
      { name: "Cocoa Powder", price: 400 },
    ],
  };
  function checkbox() {
      let checkboxValues = document.getElementsByName("checkbox");
      const selectedValues = [];
      for (let index = 0; index < checkboxValues.length; index++) {
        if (checkboxValues[index].checked) {
          selectedValues.push(checkboxValues[index].value);
        }
      }
      return selectedValues;
    }
  
  function displaySelectedCategories() {
    const selectedValues = checkbox();
    orderSummaryDiv.innerHTML = '';
  
    selectedValues.forEach((category) => {
      if (categories[category]) {
        orderSummaryDiv.innerHTML += `
          <div>
            <h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            ${categories[category].map((item) => {
              return `
                <div>
                  <label>${item.name}</label><br>
                  <label>Price: ${item.price.toFixed(2)}</label><br>
                  <label>Quantity</label>
                  <input type="number" id="${category}-${item.name.replace(/\s+/g, '')}-quantity" min="1" placeholder="0"><br>
                </div>
              `;
            }).join("")}
          </div>
        `;
      }
    });
  }
  function generateOrderSummary() {
      try {
          let orderSummaryHTML = `
            <table>
              <tr>
                <th>Item</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
          `;
      
          let grandTotal = 0;
      
          Object.keys(categories).forEach((categoryName) => {
            categories[categoryName].forEach((item) => {
              const quantityInput = document.getElementById(`${categoryName}-${item.name.replace(/\s+/g, '')}-quantity`);
              if (quantityInput && quantityInput.value > 0) {
                const quantity = parseInt(quantityInput.value, 10);
                const total = item.price * quantity;
                grandTotal += total;
                orderSummaryHTML += `
                  <tr>
                    <td>${item.name}</td>
                    <td>${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>${quantity}</td>
                    <td>${total.toFixed(2)}</td>
                  </tr>
                `;
              }
            });
          });
      
          orderSummaryHTML += `
            <tr>
              <td colspan="4"><strong>Grand Total</strong></td>
              <td><strong>${grandTotal.toFixed(2)}</strong></td>
            </tr>
          </table>
          `;
      
          const orderSummaryDiv = document.getElementById("order-summary");
          orderSummaryDiv.style.display = 'block'; 
          orderSummaryDiv.innerHTML = orderSummaryHTML;
        } catch (error) {
          console.error("Error generating order summary:", error);
        }
  }
  function redirect() {
    window.location.href = 'orderConfirmation.html';
  }
  const checkoutButton = document.getElementById('checkout-button');
  checkoutButton.addEventListener('click', redirect); 
  
  
  
  function saveFavorites() {
    const favorites = [];
   
  
    const selectedValues = checkbox();
   
  
    selectedValues.forEach((category) => {
      if (categories[category]) {
        categories[category].forEach((item) => {
          const itemId = `${category}-${item.name.replace(/\s+/g, '')}-quantity`;
          const quantityInput = document.getElementById(itemId);
          const quantity = quantityInput ? parseInt(quantityInput.value, 10) || 0 : 0;
  
          console.log(`Item: ${item.name}, ID: ${itemId}, Quantity: ${quantity}`); // Debugging line
  
          if (quantity > 0) {
            favorites.push({
              name: item.name,
              category: category,
              price: item.price,
              quantity: quantity,
            });
          }
        });
      }
    });
  
    console.log('Favorites array:', favorites); // Debugging line
  
    if (favorites.length === 0) {
      alert('No items selected to save as favorites!');
      return;
    }
  
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
  }
  
  function applyFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    orderSummaryDiv.innerHTML = '';
    if (favorites.length === 0) {
      alert('No favorites found!');
      return;
    }
  
    let orderSummaryHTML = `
    <table>
        <tr>
            <th>Item</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
        </tr>
`;

favorites.forEach(favorite => {
    orderSummaryHTML += `
        <tr>
            <td>${favorite.name}</td>
            <td>${favorite.category.charAt(0).toUpperCase() + favorite.category.slice(1)}</td>
            <td>${favorite.price.toFixed(2)}</td>
            <td>${favorite.quantity}</td>
        </tr>
    `;
});

orderSummaryHTML += `</table>`;
orderSummaryDiv.innerHTML = orderSummaryHTML;

alert('Favorites applied!');
}

  
  
  
  
  document.getElementById("cart-button").addEventListener("click", displaySelectedCategories);
  updateCartButton.addEventListener("click", function() {
      saveFavorites()
      generateOrderSummary();
      });
  saveFavoritesButton.addEventListener("click", saveFavorites);
  applyFavoritesButton.addEventListener("click", applyFavorites);
  console.log('Starting saveFavorites function'); // Debugging line

  const selectedValues = checkbox();
  console.log('Selected Categories:', selectedValues); // Debugging line

  selectedValues.forEach((category) => {
    if (categories[category]) {
      categories[category].forEach((item) => {
        const itemId = `${category}-${item.name.replace(/\s+/g, '')}-quantity`;
        const quantityInput = document.getElementById(itemId);
        const quantity = quantityInput ? parseInt(quantityInput.value, 10) || 0 : 0;

        console.log(`Item: ${item.name}, ID: ${itemId}, Quantity: ${quantity}`); // Debugging line

        if (quantity > 0) {
          favorites.push({
            name: item.name,
            category: category,
            price: item.price,
            quantity: quantity,
          });
        }
      });
    }
  });

  console.log('Favorites array:', favorites); // Debugging line

  if (favorites.length === 0) {
    alert('No items selected to save as favorites!');
    return;
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
  
}

function applyFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  orderSummaryDiv.innerHTML = '';
  if (favorites.length === 0) {
    alert('No favorites found!');
    return;
  }

  favorites.forEach(favorite => {
    const categoryHTML = `
      <div>
        <h2>${favorite.category.charAt(0).toUpperCase() + favorite.category.slice(1)}</h2>
        <label>${favorite.name}</label><br>
        <label>Price: ${favorite.price.toFixed(2)}</label><br>
        <label>Quantity</label>
        <input type="number" id="${favorite.category}-${favorite.name.replace(/\s+/g, '')}-quantity" value="${favorite.quantity}" min="1"><br>
      </div>
    `;
    orderSummaryDiv.innerHTML += categoryHTML;
  });

  alert('Favorites applied!');
}




document.getElementById("cart-button").addEventListener("click", displaySelectedCategories);
updateCartButton.addEventListener("click", function() {
  saveFavorites();
  generateOrderSummary();
  alert("Cart updated successfully!");
});
saveFavoritesButton.addEventListener("click", function() {
  saveFavorites();
  alert("favorites saved");
});
applyFavoritesButton.addEventListener("click", applyFavorites);