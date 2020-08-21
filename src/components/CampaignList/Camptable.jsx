import React from 'react';
import UserList from './UserList.jsx';
import { useSelector } from 'react-redux';
import { getUsers } from '../../redux/selector/selector';
import PropTypes from 'prop-types';

const Camptable = ({ dateRange, searchText }) => {
  let userArr = useSelector((state) =>
    getUsers(state, { dateRange, searchText })
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

        {userArr.map((user) => {
          return <UserList key={user.id} {...user} />;
        })}
      </table>
    </div>
  );
};
Camptable.propTypes = {
  dateRange: PropTypes.object,
  searchText: PropTypes.string,
};
export default Camptable;
