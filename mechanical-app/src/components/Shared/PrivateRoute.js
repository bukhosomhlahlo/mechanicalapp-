// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;


import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


import { Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />
  );
}

export default PrivateRoute;
