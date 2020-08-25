import { createSelector } from "reselect";
import moment from "moment";

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
    }

    if (searchText) {
      filteredCampaigns = filteredCampaigns.filter(
        ({ name, campName, budget }) =>
          name.toLowerCase().includes(searchText.toLowerCase()) ||
          campName.toLowerCase().includes(searchText.toLowerCase()) ||
          budget.toString().includes(searchText)
      );
    }

    filteredCampaigns = filteredCampaigns.map((camp) => {
      const user = userData.find((user) => user.id === camp.userId);
      camp.name = user ? user.name : "Unknown User";
      return camp;
    });

    return filteredCampaigns;
  }
);
