import { useState, useEffect } from "react";
import Pagination from "../components/pagination";
import ErrorBoundary from "../components/ErrorBoundaries";
import { ReactComponent as Search } from "../assets/Search.svg"
import User from "../components/User";


function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);

  // get users from the randomuser api
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://randomuser.me/api/?results=20");
      const data = await res.json();
      setUsers(data.results);
      setLoading(false);
    };

    getUsers();
  }, []);
  
    const female = async () => {
    const res = await fetch("https://randomuser.me/api?results=20&gender=female");
    const data = await res.json();
    setUsers(data.results);
    setLoading(false);
  };
  
 
  
    const male = async () => {
    const res = await fetch("https://randomuser.me/api?results=20&gender=male");
    const data = await res.json();
    setUsers(data.results);
    setLoading(false);
  };
  

  //   loading state
  if (loading) {
    return <h1>Loading...</h1>;
  }

  //   pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const persons = users.slice(indexOfFirstUser, indexOfLastUser);
  const numberOfPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="home-container">
      <div id="left">
        <h1>Hola Amigo</h1>
        <p>welcome to your dashboard, kindly sort through the user base</p>
        <form action="" className="search-input">
          <Search />
          <input type="text" name="" id="" />
        </form>
        <h3>Show Users</h3>
        <div className="user-link-cont">
        <button
        type="button"
        className="user-link all-user"
      >
        All User
      </button>
      <button
        type="button"
        className="user-link f-user"
        onClick={female}
       
      >
        Female
      </button>

      <button
        type="button"
        className="user-link m-user"
        onClick={male}
       
      >
        Male
      </button>
        </div> 
      </div>


      <div id="right">
        <ErrorBoundary>
            <User persons={persons} />
          </ErrorBoundary>
          <ErrorBoundary>
            <Pagination
              numberOfPages={numberOfPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default Home;