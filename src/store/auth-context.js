import React, { useState } from "react"

const AuthContext = React.createContext({
  isLogged: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
})

export const AuthContentProvoder = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logoutHandler = () => {
    setIsLoggedIn(false)
  }

  const loginHandler = () => {
    setIsLoggedIn(true)
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: loginHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
