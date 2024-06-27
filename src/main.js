import './style.css';
import { fetchNews, renderNews } from './components/News';

console.log("JS Loaded");  // Sprawdzenie, czy plik JS się ładuje

const apiKey = '13d7454ba3094671b187d88012ba6cbf';
const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded");  // Sprawdzenie, czy event DOMContentLoaded działa
    const categorySelect = document.getElementById('category-select');
    const newsContainer = document.getElementById('news-container');

    if (!categorySelect || !newsContainer) {
        console.error("Elementy HTML nie zostały znalezione");
        return;
    }

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categorySelect.appendChild(option);
    });

    categorySelect.addEventListener('change', (event) => {
        const selectedCategory = event.target.value;
        fetchNews(selectedCategory).then(articles => renderNews(articles));
    });

    fetchNews('general').then(articles => renderNews(articles));
});
