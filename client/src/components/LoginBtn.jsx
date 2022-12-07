import { useState } from 'react'
import Button from 'react-bootstrap/Button'

function LoginBtn () {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user_id') !== null)

  function toggleLogin () {
    if (isLoggedIn) {
      localStorage.clear()
      window.location.replace('/')
    } else {
      localStorage.setItem('user_id', 'test')
      setIsLoggedIn(true)
    }
  }

  return (
    <Button
      variant='primary'
      onClick={toggleLogin}
      >{isLoggedIn ? 'Logout' : 'Login with Spotify'}
    </Button>
  )
}

export default LoginBtn