export const fetchNews = async (category) => {
    const apiKey = '13d7454ba3094671b187d88012ba6cbf';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);  // Logowanie danych
        return data.articles;
    } catch (error) {
        console.error("Błąd podczas pobierania wiadomości", error);
    }
};

export const renderNews = (articles) => {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    if (!articles || articles.length === 0) {
        newsContainer.innerHTML = '<p>Brak wiadomości do wyświetlenia.</p>';
        return;
    }

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');

        articleElement.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.description}</p>
      <a href="${article.url}" target="_blank">Read more</a>
    `;

        newsContainer.appendChild(articleElement);
    });
};
