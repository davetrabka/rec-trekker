import axios from 'axios';
import history from '../history';

const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';

const defaultUser = {};

const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });

export const me = () => dispatch =>
  axios
    .get('/auth/me')
    .then(res => dispatch(getUser(res.data || defaultUser)))
    .catch(err => console.log(err));

export const login = (email, password) => dispatch =>
  axios
    .post(`/auth/login`, { email, password })
    .then(
      res => {
        dispatch(getUser(res.data));
        history.push('/home');
      },
      authError => {
        dispatch(getUser({ error: authError }));
      }
    )
    .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr));

export const signup = (firstName, lastName, email, password) => dispatch =>
  axios
    .post(`/auth/signup`, { firstName, lastName, email, password })
    .then(
      res => {
        dispatch(getUser(res.data));
        history.push('/home');
      },
      authError => {
        dispatch(getUser({ error: authError }));
      }
    )
    .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr));

export const logout = () => dispatch =>
  axios
    .post('/auth/logout')
    .then(_ => {
      dispatch(removeUser());
      history.push('/login');
    })
    .catch(err => console.log(err));

export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    default:
      return state;
  }
}
