
        const searchBtn = document.getElementById('search-btn');
        const searchInput = document.getElementById('search-input');
        const articlesDiv = document.getElementById('articles');

        const apiKey = '706fbeaf5c1e4981b8f6eeaa8d028c18';

        searchBtn.addEventListener('click', () => {
            fetchNews(searchInput.value);
        });

        function fetchNews(query = '') {
            let url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}`;

            if (query) {
                url += `&q=${query}`;
            }

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    displayArticles(data.articles);
                })
                .catch(error => {
                    console.error('Error fetching news:', error);
                });
        }

        function displayArticles(articles) {
            articlesDiv.innerHTML = '';

            articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');

                articleDiv.innerHTML = `<img src="${article.urlToImage}" alt="${article.title}">
                <div class="content">
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read full article &nbsp<span>&rarr;</span></a>
                </div>`;

                articlesDiv.appendChild(articleDiv);
            });
        }
        fetchNews();