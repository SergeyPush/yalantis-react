import React, { useEffect } from "react";
import { fetchUsers, restoreSelected } from "../redux/userActions";
import { useDispatch, useSelector } from "react-redux";
import Contact from "./Contact";

const Contacts = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.fetchedUsers);
  const selectedUsers = useSelector((state) => state.users.selectedUsers);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(restoreSelected());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("selectedUsers", JSON.stringify(selectedUsers));
  }, [selectedUsers]);

  return (
    <div className="contact">
      <h1>Employees</h1>
      <div className="letter-list">
        {alphabet.map((letter) => {
          const matсhedUsers = users.filter(
            (user) => user.lastName[0].toLowerCase() === letter
          );

          return (
            <div key={letter} className="letter-item">
              <p className="capital-letter">{letter.toUpperCase()}</p>
              {matсhedUsers.length > 0 ? (
                <Contact matсhedUsers={matсhedUsers} />
              ) : (
                <p>
                  <span className="line"></span>
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
