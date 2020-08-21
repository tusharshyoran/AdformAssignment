import React from 'react';
import { formatBudget } from '../../utility';
import PropTypes from 'prop-types';

const UserList = ({ campName, name, startDate, endDate, budget }) => {
  return (
    <tbody>
      <tr>
        <th scope="row">{campName}</th>
        <td>{name ? name : 'Unknown User'}</td>
        <td>{startDate}</td>
        <td>{endDate}</td>
        <td>
          {new Date(endDate) > new Date() ? (
            <>
              <i
                className="fa fa-circle"
                aria-hidden="true"
                style={{ color: 'green' }}
              ></i>
              <span> Active</span>
            </>
          ) : (
            <>
              <i
                className="fa fa-circle"
                aria-hidden="true"
                style={{ color: 'red' }}
              ></i>
              <span> Inactive</span>
            </>
          )}
        </td>
        <td>{formatBudget(budget)}</td>
      </tr>
    </tbody>
  );
};
UserList.propTypes = {
  campName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired,
};
export default UserList;
