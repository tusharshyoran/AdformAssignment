import { createAction } from "redux-actions";
import {
  ADD_CAMPAIGNS,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  REMOVE_CAMPAIGN,
} from "./actionType";

export const addCampaigns = createAction(ADD_CAMPAIGNS);

export const fetchUserStart = createAction(FETCH_START);

export const fetchUserFail = createAction(FETCH_FAIL);

export const fetchUserSuccess = createAction(FETCH_SUCCESS);

export const removeCampaign = createAction(REMOVE_CAMPAIGN);
