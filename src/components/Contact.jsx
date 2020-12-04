import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

const Contact = ({ matсhedUsers }) => {
  const dispatch = useDispatch();
  const selectedUsers = useSelector((state) => state.users.selectedUsers);

  const handleCheckUser = (user) => {
    dispatch({
      type: "SELECT_USER",
      payload: user,
    });
  };

  const userIsChecked = (user) => {
    const isSelected = selectedUsers.find(
      (selected) => selected.id === user.id
    );
    if (!isSelected) {
      return false;
    }
    return isSelected ? true : false;
  };

  return (
    <div>
      {matсhedUsers.map((user) => (
        <div className="user-item" key={user.id}>
          <p className="user-data">{`${user.lastName} ${user.firstName}`}</p>
          <input
            type="checkbox"
            checked={userIsChecked(user)}
            onChange={() => handleCheckUser(user)}
            data-testid="checkbox"
          />
        </div>
      ))}
    </div>
  );
};

Contact.propTypes = {
  matсhedUsers: PropTypes.array.isRequired,
};

export default Contact;
