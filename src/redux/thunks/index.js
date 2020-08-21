import { API_URL } from '../../constants';
import { fetchUserStart, fetchUserSuccess, fetchUserFail } from '../actions';
import axios from 'axios';

export const fetchUser = () => (dispatch) => {
  dispatch(fetchUserStart());
  const url = API_URL;
  axios
    .get(url)
    .then((res) => {
      dispatch(fetchUserSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchUserFail(err));
    });
};
