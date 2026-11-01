/**
 * @typedef {Object} Article
 * @property {string} id
 * @property {string} title
 * @property {"published"|"draft"} status
 * @property {{ name: string }} [author]
 * @property {{ views: number }} [stats]
 */

/**
 * @typedef {Object} ArticleSummary
 * @property {string} id
 * @property {string} title
 * @property {string|undefined} authorName
 * @property {number|undefined} views
 */

/**
 * Filter only published article from the API Response.
 * 
 * @param {{ data: Array<Article> }} response
 * @returns {Array<Article>}
 */
function getPublishedArticles(response) {
  return response.data.filter((article) => article.status === "published");
}

/**
 * Transform a full article object into a lightweight summary.
 * 
 * @param {Article} article
 * @returns {ArticleSummary}
 */
function toArticleSummary(article) {
  return {
    id: article.id,
    title: article.title,
    authorName: article.author?.name,
    views: article.stats?.views,
  };
}

/**
 * Normalize API Response into a list of published article summaries.
 * 
 * @param {{ data: Array<Article> }} response
 * @returns {Array<ArticleSummary>}
 */
function normalizeArticles(response) {
  const publishedArticles = getPublishedArticles(response);
  return publishedArticles.map(toArticleSummary);
}

const apiResponse = {
  data: [
    {
      id: "a1",
      title: "Learning JavaScript",
      status: "published",
      author: { name: "Ava Stone" },
      stats: { views: 1200 },
    },
    {
      id: "a2",
      title: "Draft Notes",
      status: "draft",
      author: { name: "Noah Kim" },
      stats: { views: 50 },
    },
    {
      id: "a3",
      title: "Async Basics",
      status: "published",
      author: { name: "Mina Patel" },
      stats: { views: 900 },
    },
  ],
  meta: {
    total: 3,
  },
};

console.log(normalizeArticles(apiResponse));
console.log(getPublishedArticles(apiResponse).length);
console.log(toArticleSummary(apiResponse.data[0]));
