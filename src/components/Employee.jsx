import React from "react";
import PropTypes from "prop-types";

const Employee = ({ employee, months }) => {
  const { firstName, lastName, dob } = employee;
  const date = new Date(dob);

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return (
    <div>
      <p data-testid="employee">{`${lastName} ${firstName} - ${day} ${months[month]} ${year} year`}</p>
    </div>
  );
};

Employee.propTypes = {
  employee: PropTypes.object.isRequired,
  months: PropTypes.array.isRequired,
};

export default Employee;
