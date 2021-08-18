import React, { useEffect, useState } from "react";
import SocialCard from "./components/SocialCard/SocialCard";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        userData = await response.json();
      } catch (error) {
        userData = [];
      }
      setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []);
  const filterData = (event) => {
    console.log(event.target.value)
    const value = event.target.value.toLowerCase();
    const filteredUser = allUsers.filter(
        user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value))
    )
    setUsers(filteredUser)
  }
  return (
    <div className="app">
      <h1>Social Cards</h1>
      <input className="search__box" placeholder="Search..." onChange={(e) => filterData(e)}/>
      <div className="card__container">
        {users.map((data, index) => (
          <SocialCard userData={data} key={index} />
        ))}
      </div>
    </div>
  );
}
export default App;
