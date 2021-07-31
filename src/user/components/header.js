import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import React, { useState, useEffect } from 'react'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import { GoogleLoginButton } from 'react-social-login-buttons'
import firebase from 'firebase/app'
import 'firebase/auth'

const headersData = [
  {
    label: 'Home',
    href: '/listings'
  },
  {
    label: 'About us',
    href: '/account'
  },
  {
    label: 'Contact us',
    href: '/logout'
  }
]

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#616161',
    paddingRight: '79px',

    paddingLeft: '118px',
    '@media (max-width: 900px)': {
      paddingLeft: 0
    }
  },
  logo: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    color: '#FFFEFE',
    textAlign: 'left'
  },
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    marginLeft: '38px'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  drawerContainer: {
    padding: '20px 30px'
  },
  button: {
    justifyContent: 'center',
    display: 'grid',
    padding: '18px'
  },
  buttonmargin: {
    marginTop: 10
  }
}))

export default function Header () {
  const {
    header,
    logo,
    menuButton,
    toolbar,
    drawerContainer,
    button,
    buttonmargin
  } = useStyles()
  const [open, setOpen] = React.useState(false)
  const history = useHistory()
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [openDialogName, setOpenDialog] = React.useState(null);

  const { mobileView, drawerOpen } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState(prevState => ({ ...prevState, mobileView: true }))
        : setState(prevState => ({ ...prevState, mobileView: false }))
    }

    setResponsiveness()

    window.addEventListener('resize', () => setResponsiveness())

    return () => {
      window.removeEventListener('resize', () => setResponsiveness())
    }
  }, [])

  const LoginPopup = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await firebase.auth().signInWithPopup(provider)
    setOpen(false)
    history.push('/')
  }

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>
          {getMenuButtons()}
          <Button
            style={{
              color: 'inherit',
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 700,
              size: '18px',
              marginLeft: '38px'
            }}
            onClick={LoginPopup}>
            {'Login'}
          </Button>
        </div>
      </Toolbar>
    )
  }

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState(prevState => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () =>
      setState(prevState => ({ ...prevState, drawerOpen: false }))

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen
          }}>
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose
          }}>
          <div className={drawerContainer}>{getDrawerChoices()}</div>
          <Button
            style={{
              marginLeft: '-30px',
              textTransform: 'none',
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 800,
              size: '30px'
            }}
            onClick={LoginPopup}>
            Login
          </Button>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    )
  }

  const getDrawerChoices = () => {
    /* const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

  const handleClose = () => {
      setAnchorEl(null);
    };

    const openTermsDialog = () => {
      setOpenDialog("TERMS");
      handleClose();
    };

    const openPrivacyDialog = () => {
      setOpenDialog("PRIVACY");
      handleClose();
    };
    const closeDialog = () => {
      setOpenDialog(null);
    }; */

    return headersData.map(({ label, href }) => {
      return (
        <Link
          key={label}
          {...{
            component: RouterLink,
            to: href,
            color: 'inherit',
            style: { textDecoration: 'none' }
          }}>
          <MenuItem>{label}</MenuItem>
        </Link>
      )
    })
  }

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      BookMyPG
    </Typography>
  )

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          key={label}
          {...{
            color: 'inherit',
            to: href,
            component: RouterLink,
            className: menuButton
          }}>
          {label}
        </Button>
      )
    })
  }

  return (
    <>
      <header>
        <AppBar className={header}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            Please login to your account
          </DialogTitle>
          <div className={button}>
            <GoogleLoginButton
              text="Sign In with Google"
              style={{
                width: '230px',
                height: '35px',
                justifyContent: 'center',
                textAlign: 'center'
              }}
              onClick={handleLogin}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClose}
              className={buttonmargin}>
              Cancel
            </Button>
          </div>
        </Dialog>
      </div>
    </>
  )
}
