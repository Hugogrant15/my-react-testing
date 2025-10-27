// import React from 'react'

// conditional renndering in react
import PropTypes from 'prop-types'
const UserGreeting = (props) => {
    if(props.isLoggedIn) {
        return <h2>welcome {props.username}</h2>

    }
    else {
      return <h2>pls login to continue</h2>
    }
  return (
    <div>
      
    </div>
  )
}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest',
}

export default UserGreeting
