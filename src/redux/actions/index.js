import { createAction } from "redux-actions";

export const addCampaigns = createAction("ADD_CAMPAIGNS");

export const fetchUserStart = createAction("FETCH_START");

export const fetchUserFail = createAction("FETCH_FAIL");

export const fetchUserSuccess = createAction("FETCH_SUCCESS");
