export function renderProductList(products) {
    console.log('Rendering product list:', products); // Log the products to verify
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear existing content
    products.forEach((item) => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const priceCell = document.createElement('td');
        
        nameCell.textContent = item.name;
        priceCell.textContent = item.price;

        // Apply the out-of-stock class if the product is not stocked
        if (!item.stocked) {
            row.classList.add('out-of-stock');
        }

        row.appendChild(nameCell);
        row.appendChild(priceCell);
        productList.appendChild(row);
    });
}