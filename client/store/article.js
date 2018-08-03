import axios from 'axios';

const GET_ARTICLES = 'GET_ARTICLES';
const GET_ONE_ARTICLE = 'GET_ONE_ARTICLE';
const POST_ARTICLE = 'POST_ARTICLE';
const POST_ARTICLE_COMMENT = 'POST_ARTICLE_COMMENT';

const initialState = {
  allArticles: [],
  currArticle: {},
};

const getArticles = articles => ({ type: GET_ARTICLES, articles });
const getOneArticle = article => ({ type: GET_ONE_ARTICLE, article });
const postArticle = article => ({ type: POST_ARTICLE, article });
const postArticleComment = comment => ({ type: POST_ARTICLE_COMMENT, comment });

export const gotArticles = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/articles');
    dispatch(getArticles(data));
  } catch (error) {
    console.error(error);
  }
};

export const gotOneArticle = slug => async dispatch => {
  try {
    const { data } = await axios.get(`/api/articles/${slug}`);
    dispatch(getOneArticle(data));
  } catch (error) {
    console.error(error);
  }
};

export const postedArticle = article => async dispatch => {
  try {
    const { data } = await axios.post('/api/articles', article);
    dispatch(postArticle(data));
  } catch (error) {
    console.error(error);
  }
};

export const postedArticleComment = commentObj => async dispatch => {
  try {
    const { data } = await axios.post(
      `/api/articles/${commentObj.articleSlug}/new-comment`,
      commentObj
    );
    dispatch(postArticleComment(data));
  } catch (error) {
    console.error(error);
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        allArticles: action.articles,
      };
    case GET_ONE_ARTICLE:
      return {
        ...state,
        currArticle: action.article,
      };
    case POST_ARTICLE:
      return {
        ...state,
        allArticles: [...state.allArticles, action.articles],
      };
    case POST_ARTICLE_COMMENT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
