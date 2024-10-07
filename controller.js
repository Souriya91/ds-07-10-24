import { fetchContent } from './model.js';
import { renderProductList } from './view.js';

let allProducts = [];

async function loadData() {
    try {
        allProducts = await fetchContent();
        console.log('Data to display:', allProducts); // Log the data to verify
        renderProductList(allProducts);
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

function filterProducts() {
    const searchBar = document.getElementById('search-bar');
    const stockFilter = document.getElementById('stock-filter');
    const searchText = searchBar.value.toLowerCase();
    const inStockOnly = stockFilter.checked;

    const filteredProducts = allProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchText);
        const matchesStock = !inStockOnly || product.stocked;
        return matchesSearch && matchesStock;
    });

    renderProductList(filteredProducts);
}

document.addEventListener('DOMContentLoaded', () => {
    loadData();

    const searchBar = document.getElementById('search-bar');
    const stockFilter = document.getElementById('stock-filter');

    searchBar.addEventListener('input', filterProducts);
    stockFilter.addEventListener('change', filterProducts);
});