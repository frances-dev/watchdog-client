import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import './Dashboard.css';
import { UserContext } from '../../App';
import { loggedInInfo } from '../../Components/Login/loginManager';

// Material UI elements
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [admin, setAdmin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const loggedUser = loggedInInfo();

  useEffect(() => {
    fetch(`https://secure-island-68647.herokuapp.com/findAdmin/${loggedInUser.email || loggedUser.email && loggedInUser.email || loggedUser.email}`)
      .then(res => res.json())
      .then(data => {
        setAdmin(data);
        // setRedirect(true)
      })
  }, [loggedInUser.email || loggedUser.email && loggedInUser.email || loggedUser.email]);


  return (

    <div>
      <div className="d-flex justify-content-center"> <Link to="/">
        <img style={{ width: "140px" }} src="https://i.ibb.co/W23xybj/98px-Watch-OS-Logo-svg.png" alt="" /></Link>
      </div>
      <div className="text-center">
        <small>Back to Home</small>
      </div>

      {/* Admin Panel */}
      {admin ? (<admin className="d-flex justify-content-center">
        <div className="mt-3 p-2">
          <List className={`${classes.root}`}>
            <Link style={{ textDecoration: "none" }} to="/adminControl">
              <div className="btn d-flex justify-content-start btnDashboard">
                <p className="ml-2">Ordered List</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/adminAddService">
              <div className="btn d-flex justify-content-start btnDashboard">
                <p className="ml-2">Add Services</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/adminMaker">
              <div className="btn d-flex justify-content-start btnDashboard">
                <p className="ml-2">Make Admin</p>
              </div>
            </Link>
          </List>
        </div>
      </admin>) :


        (<user className="d-flex justify-content-center">
          <div className="mt-3 p-2">
            <List className={classes.root}>
              <Link style={{ textDecoration: "none" }} to="/orderService">
                <div className="btn d-flex justify-content-start btnDashboard">
                  <p className="ml-2">Order for Services</p>
                </div>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/userService">
                <div className="btn d-flex justify-content-start btnDashboard">
                  <p className="ml-2">My Orders</p>
                </div>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/userReview">
                <div className="btn d-flex justify-content-start btnDashboard">
                  <p className="ml-2">Reviews</p>
                </div>
              </Link>
            </List>
          </div>
        </user>)}

    </div>
  );
};

export default Dashboard;