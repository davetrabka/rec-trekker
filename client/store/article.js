import axios from 'axios';

const GET_ARTICLES = 'GET_ARTICLES';
const POST_ARTICLE = 'POST_ARTICLE';

const initialState = {
  allArticles: [],
};

const getArticles = articles => ({ type: GET_ARTICLES, articles });
const postArticle = article => ({ type: POST_ARTICLE, article });

export const gotArticles = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/articles');
    dispatch(getArticles(data));
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

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        allArticles: action.articles,
      };
    case POST_ARTICLE:
      return {
        ...state,
        allArticles: [...state.allArticles, action.articles],
      };
    default:
      return state;
  }
}
