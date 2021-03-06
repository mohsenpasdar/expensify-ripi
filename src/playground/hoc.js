// Higher Order COmponent (HOC) - A component (HOC) that renders another component
// Reuse code
//  Render Hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info. please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuth ? (
        <WrappedComponent {...props} />
        ) : (
        <p>Please login to view the info!</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info); // please login to view th info
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='these are the details' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info='these are the details' />, document.getElementById('app'));
