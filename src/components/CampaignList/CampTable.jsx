import React from "react";
import ItemList from "./ItemList.jsx";
import { useSelector } from "react-redux";
import { selectCampaigns } from "../../redux/selector/index";
import PropTypes from "prop-types";

const CampTable = ({ dateRange, searchText }) => {
  const campArr = useSelector((state) =>
    selectCampaigns(state, { dateRange, searchText })
  );

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Active</th>
            <th scope="col">Budget</th>
          </tr>
        </thead>

        {campArr.map((camp) => {
          return <ItemList key={camp.id} {...camp} />;
        })}
      </table>
    </div>
  );
};
CampTable.propTypes = {
  dateRange: PropTypes.object,
  searchText: PropTypes.string,
};
export default CampTable;
