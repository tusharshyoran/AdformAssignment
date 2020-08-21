import { createSelector } from 'reselect';
import moment from 'moment';

export const selectCampaignData = (state) => {
  return state.campaigns;
};

export const selectUserData = (state) => {
  return state.users;
};

export const selectIsLoading = (state) => {
  return state.loading;
};

export const selectError = (state) => {
  return state.error;
};

export const selectCampaigns = createSelector(
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
    } else {
      let actualCampaigns = userData.map((user) => {
        return campaignData.filter((campaign) => {
          return campaign.userId === user.id;
        });
      });
      filteredCampaigns = actualCampaigns.flat();
    }

    if (searchText) {
      filteredCampaigns = filteredCampaigns.filter(({ name }) =>
        name.includes(searchText)
      );
    }

    return filteredCampaigns;
  }
);
