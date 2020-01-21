import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
//import Users from './component/users/Users';
import User from './component/users/User';
//import axios from 'axios';
import Alert from './component/layout/Alert';
import Home from './component/pages/Home';
import About from './component/pages/About';
import NotFound from './component/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

// const [repos, setRepos] = useState([]);
// const [loading, setLoading] = useState(false);
// const [alert, setAlert] = useState(null);

// async componentDidMount() {
//   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
//   this.setState({ loading: true });
//   const res = await axios.get(
//     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//   );
//   this.setState({ users: res.data, loading: false });
// }
// const searchUsers = async text => {
//   setLoading(true);
//   console.log(text);
//   const res = await axios.get(
//     `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//   );
//   setUsers(res.data.items);
//   setLoading(false);
// };

//Get single profile
// const getUser = async username => {
//   setLoading(true);
//   const res = await axios.get(
//     `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//   );
//   setUser(res.data);
//   setLoading(false);
// };
//Get repos
// const getUserRepos = async username => {
//   setLoading(true);
//   const res = await axios.get(
//     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//   );
//   setRepos(res.data);
//   setLoading(false);
// };
//Clear profile from the state

// const showAlert = (msg, type) => {
//   setAlert({ msg, type });
//   setTimeout(() => setAlert(null), 5000);
// };

export default App;
