import React from "react";
import { useSelector } from "react-redux";
import Employee from "./Employee";

const Calendar = () => {
  const userList = useSelector((state) => state.users.selectedUsers);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const employeeBirthdsys = userList.reduce((acc, emp) => {
    const month = new Date(emp.dob).getMonth();
    if (acc[month] === undefined) {
      return { ...acc, [month]: [emp] };
    }
    return { ...acc, [month]: [emp, ...acc[month]] };
  }, {});

  const monthToIterate = Object.keys(employeeBirthdsys);

  return (
    <div className="calendar">
      <h1 className="calendar-title">Employees Birsdays</h1>

      <>
        {userList.length > 0 ? (
          monthToIterate.map((month) => {
            return (
              <div key={month} className="emp-list">
                <h3 className="calendar-month-title">{monthNames[month]}</h3>
                {employeeBirthdsys[month].map((employee) => (
                  <Employee
                    key={employee.id}
                    employee={employee}
                    months={monthNames}
                  />
                ))}
              </div>
            );
          })
        ) : (
          <p>No selected employees</p>
        )}
      </>
    </div>
  );
};

export default Calendar;
