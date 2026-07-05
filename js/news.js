//新しいニュースは一番上に書く

const newsData = [
    {
        date: "2026.07.03",
        title: "サイトを更新しました。",
        category: "更新",
        link: "news/20260703.html"
    }
];

const homeNews = document.getElementById("home-news");

if(homeNews){
    newsData.slice(0, 2).forEach(news => {
        const item = document.createElement("a");


        item.href = news.link;
        item.className = "news-item";

        item.innerHTML = `
            <span class="news-date">${news.date}</span>
            <p>${news.title}
            ${isNew(news.date) ? '<span class="new-mark">NEW</span>' : ''}
            </p>
        `;

        homeNews.appendChild(item);
    });
}

const newsList = document.getElementById("news-list");
const categoryButtons = document.querySelectorAll("[data-category]");

let currentCategory = "all";

function renderNewsList(){
    if(!newsList) return;

    newsList.innerHTML = "";

    const filteredNews = newsData.filter(news => {
        return currentCategory === "all" || news.category === currentCategory;
    });

    filteredNews.forEach(news => {
        const item = document.createElement("a");

        item.href = news.link.replace("news/", "");
        item.className = "news-item";

        item.innerHTML = `
            <span class="news-date">${news.date}</span>
            <p>
                <span class="news-category">[${news.category}]</span>
                ${news.title}
                ${isNew(news.date) ? '<span class="new-mark">NEW</span>' : ''}
            </p>
        `;

        newsList.appendChild(item);
    });
}

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentCategory = button.dataset.category;
        renderNewsList();
    });
});

renderNewsList();

function isNew(dateText){
    const today = new Date();
    const newsDate = new Date(dateText.replaceAll(".", "-"));

    const diff = today - newsDate;
    const sevenDays = 7 * 24 * 60 * 60 * 1000;

    return diff >= 0 && diff <= sevenDays;
}