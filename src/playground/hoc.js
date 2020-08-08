// Higher Order Component - A component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    console.log(props)
    return ( 
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
    )
};

const withAdminWarning = (WrappedComponent) => {
    return (props) => {
        return ( 
        <div>
            {props.isAdmin && <p>This is private info please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
        )
    }
}

const requireAuthenticationInfo = (WrappedComponent) => {
    //requireAuthenticationInfo returns this component
    return (props) => {
        return (
            <div>
                {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please login to view info</p>}
            </div>
        )
    }
}



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthenticationInfo(Info);
console.log(AuthInfo);
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById("app"));