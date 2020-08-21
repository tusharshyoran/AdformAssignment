import React, { useState, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addCampaigns } from "./redux/actions";
import { fetchUser } from "./redux/thunks";
import Loader from "./components/Loader/Loader.jsx";
import Camptable from "./components/CampaignList/CampTable.jsx";
import { selectUserData, selectIsLoading, selectError } from "./redux/selector";
import DateRangeSelector from "./components/DateRangeSelector/DateRangeSelector.jsx";
import SearchControl from "./components/SearchControl/SearchControl.jsx";
import Error from "./components/Error/Error";
import campaignData from "./data.json";

const App = () => {
  const [dateRange, setDateRange] = useState(null);
  const [searchText, setSearchText] = useState("");

  const isLoading = useSelector((state) => selectIsLoading(state));
  const userData = useSelector((state) => selectUserData(state));
  const error = useSelector((state) => selectError(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCampaigns(campaignData.data));
    dispatch(fetchUser());
    window.addCampaigns = (data) => {
      dispatch(addCampaigns(data));
    };
  }, []);

  const handleSearch = ({ target: { value } }) => {
    setSearchText(value);
  };

  const handleDateRangeChange = (dateRange) => {
    setDateRange(dateRange);
  };

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <div className="mt-4">
            {error ? (
              <Error />
            ) : (
              <>
                <div className="flex-container">
                  <DateRangeSelector
                    dateRange={dateRange}
                    onChange={handleDateRangeChange}
                  />
                  <SearchControl
                    searchText={searchText}
                    handleSearch={(e) => handleSearch(e)}
                  />
                </div>
                <div className="mt-4">
                  {userData && (
                    <Camptable dateRange={dateRange} searchText={searchText} />
                  )}
                </div>
              </>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
