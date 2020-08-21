import * as actionTypes from '../actions/actionType';

const initialState = {
  campaigns: null,
  users: null,
  error: null,
  loading: false,
};

const campaign = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CAMPAIGNS:
      return {
        ...state,
        campaigns: action.payload,
      };
    case actionTypes.FETCH_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case actionTypes.FETCH_FAIL:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default campaign;
