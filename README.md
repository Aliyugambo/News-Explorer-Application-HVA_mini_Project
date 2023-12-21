# HVA Mini Hackathon - News Explorer Application
This is a web application that uses the NewsAPI to fetch and display news articles.The
application will have a default home page showcasing top headlines and a search feature for
users to find news articles based on specific keywords.
---

## Requirements
1. Homepage with Default News Articles: 
    - On initial load, the homepage should display 9-12 news articles featuring top headlines from India.
    - These articles should be fetched using the NewsAPI's endpoint for top headlines.
    - Each news article display should include the title, summary, and an image if available.
2. Search Functionality:
    - Include a search bar at the top of the page for keyword input.
    - Trigger a search and update the displayed articles based on the entered keyword. Updating News Articles:
    - Once a search is initiated, the existing articles on the homepage should be replaced with articles related to the searched keyword.
    - This should involve fetching data from the NewsAPI using the relevant search query.
    - Similar to the default view, display the title, summary, and image for each of the search results.
4. API Integration:
    - Use [NewsAPI.org](https://newsapi.org/) for fetching news articles.
    - You will need to log in to [NewsAPI.org](https://newsapi.org/) to obtain an API key necessary for making API calls.
    - Ensure to read the [NewsAPI Endpoint Documentation](https://newsapi.org/docs/endpoints) for proper implementation.
    - Handle potential errors or issues in data fetching.

5. UI/UX:
    - Make the application as per the provided User Interface.
    - [Figma Prototype Link](https://www.figma.com/proto/FibtWFXA41gd0DPtIv7Brp/_HyperVerge_mini-Hackathon?page-id=0%3A1&type=design&node-id=1-2&viewport=273%2C430%2C0.34&t=CqGJHsC8YBEL4Vfm-1&scaling=min-zoom) for viewing the design. Press the right arrow key to get the mobile view.
    - [Figma Development Mode Link](https://www.figma.com/file/FibtWFXA41gd0DPtIv7Brp/_HyperVerge_mini-Hackathon?node-id=0%3A1&mode=dev) for detailed design aspects (login required).
    - Focus on creating a responsive design for mobile view. No other view is required.
---
## Setup
- pull this repo
- open it on Vscode
- run using live server extention

---
## Base URL
- [- News Explorer Application](https://news-explorer-application-hva-mini-project.vercel.app/)

## Creator
- Aliyu Gambo Aliyu