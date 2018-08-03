import axios from 'axios';

const GET_PLANS = 'GET_PLANS';
const GET_ONE_PLAN = 'GET_ONE_PLAN';
const POST_PLAN = 'POST_PLAN';
const POST_PLAN_COMMENT = 'POST_PLAN_COMMENT';

const initialState = {
  allPlans: [],
  currPlan: {},
};

const getPlans = plans => ({ type: GET_PLANS, plans });
const getOnePlan = plan => ({ type: GET_ONE_PLAN, plan });
const postPlan = plan => ({ type: POST_PLAN, plan });
const postPlanComment = comment => ({ type: POST_PLAN_COMMENT, comment });

export const gotPlans = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/plans');
    dispatch(getPlans(data));
  } catch (error) {
    console.error(error);
  }
};

export const gotOnePlan = planUUID => async dispatch => {
  try {
    if (planUUID) {
      const { data } = await axios.get(`/api/plans/${planUUID}`);
      dispatch(getOnePlan(data));
    }
  } catch (error) {
    console.error(error);
  }
};

export const postedPlan = plan => async dispatch => {
  try {
    const { data } = await axios.post('/api/plans', plan);
    dispatch(postPlan(data));
  } catch (error) {
    console.error(error);
  }
};

export const postedPlanComment = commentObj => async dispatch => {
  try {
    const { data } = await axios.post(
      `/api/plans/${commentObj.planUUID}/new-comment`,
      commentObj
    );
    dispatch(postPlanComment(data));
  } catch (error) {
    console.error(error);
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PLANS:
      return {
        ...state,
        allPlans: action.plans,
      };
    case GET_ONE_PLAN:
      return {
        ...state,
        currPlan: action.plan,
      };
    case POST_PLAN:
      return {
        ...state,
        allPlans: [...state.allPlans, action.plans],
      };
    case POST_PLAN_COMMENT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
