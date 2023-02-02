import React from 'react'
import LogoImg from '../NetflixLogo.svg'
import ProfileImg from '../profile.png'
import { useNavigate } from 'react-router-dom'

function Nav() {
  // ! to change in the dom you have to use state and subscribe to it
  const [show, setShow] = React.useState(false)
  const navigate = useNavigate()
  React.useEffect(() => {
    // i did it to get the scroll height مقدار
    function handleShow() {
      if (Number(window.scrollY) > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    // when scrolling event fired
    window.addEventListener('scroll', handleShow)

    // ! how to clear this useEffect
    // ! ok i got it you have to return a  function don't do it manually
    return () => window.removeEventListener('scroll', handleShow)
  })

  const styles = {
    background: show
      ? 'black'
      : 'linear-gradient(rgb(0,0,0),rgb(0,0,0,0.2) ,rgb(0,0,0,0.0))',
  }
  return (
    <nav className="nav" style={styles}>
      <div className="container raw">
        {/* <Link to={'/'} className="logo"> */}
        <div className="logo">
          <img
            className="logo img"
            src={LogoImg}
            onClick={() => navigate('/')}
            alt="Netflix Logo"
          />
        </div>
        {/* </Link> */}
        <div className="ProfileImage ">
          <img
            className="ProfileImage img"
            onClick={() => navigate('/profile')}
            // onClick={() => navigate('/signup')}
            src={ProfileImg}
            alt="Netflix Logo"
          />
        </div>
      </div>
    </nav>
  )
}

export default Nav
