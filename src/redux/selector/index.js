import { createSelector } from 'reselect';
import moment from 'moment';

export const selectCampaignData = (state) => {
  return state.campaign.campaigns;
};

export const selectUserData = (state) => {
  return state.campaign.users;
};

export const selectIsLoading = (state) => {
  return state.campaign.isLoading;
};

export const selectError = (state) => {
  return state.campaign.error;
};

export const getUsers = createSelector(
  selectCampaignData,
  selectUserData,
  (_, { dateRange }) => dateRange,
  (_, { searchText }) => searchText,
  (campaignData, userData, dateRange, searchText) => {
    let filteredCampaigns = campaignData;
    if (dateRange) {
      filteredCampaigns = filteredCampaigns.filter(({ startDate, endDate }) => {
        return (
          moment(dateRange.startDate).isSameOrBefore(moment(startDate)) &&
          moment(dateRange.endDate).isSameOrAfter(moment(endDate))
        );
      });
    }

    if (searchText) {
      filteredCampaigns = filteredCampaigns.filter(({ name }) =>
        name.includes(searchText)
      );
    }

    return filteredCampaigns;
  }
);
