import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
const User = ({ user, loading, getUserRepos, repos, match, getUser }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    htm_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        {' '}
        Back to search
      </Link>
      Hireable :{''}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2"></div>
      <div className="all-center">
        <img
          src={avatar_url}
          className="round-img"
          alt=""
          style={{ width: '150px' }}
        />
        <h1>{name}</h1>
        <p>Location:{location}</p>
      </div>
      <div>
        {bio && (
          <Fragment>
            <h3>Bio</h3>
            <p>{bio}</p>
          </Fragment>
        )}
        <a href={htm_url} className="btn btn-dark my-1">
          Visit profile
        </a>
        <ul>
          <li>
            {login && (
              <Fragment>
                <strong>UserName:</strong>
                {login}
              </Fragment>
            )}
          </li>
          <li>
            {company && (
              <Fragment>
                <strong>Company:</strong>
                {company}
              </Fragment>
            )}
          </li>
          <li>
            {blog && (
              <Fragment>
                <strong>Website:</strong>
                {blog}
              </Fragment>
            )}
          </li>
        </ul>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers:{followers}</div>
        <div className="badge badge-primary">Following:{following}</div>
        <div className="badge badge-light">Public Repos:{public_repos}</div>
        <div className="badge badge-primary">Public Gist:{public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired
};
export default User;
