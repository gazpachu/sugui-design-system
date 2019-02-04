const styles = () => ({
  root: {
    paddingLeft: '181px',
    minHeight: '100vh',
    backgroundColor: '#fff',
    '@media (max-width: 768px)': {
      paddingLeft: '0'
    }
  },
  logo: {
    padding: '5px 16px 0px 12px'
  },
  version: {
    color: '#767676',
    margin: '10px 0 0 18px',
    fontSize: '15px'
  },
  sidebar: {
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    width: '180px',
    overflow: 'auto',
    webkitOverflowScrolling: 'touch',
    paddingBottom: '20px',
    boxShadow: '4px 0 4px 0 rgba(218,213,213,0.50)',
    '@media (max-width: 768px)': {
      zIndex: '3',
      display: 'none',
      width: '100vw',
      backgroundColor: 'white',
      '&.active': {
        display: 'block'
      }
    }
  },
  hero: {
    height: '400px',
    position: 'relative'
  },
  bg: {
    position: 'absolute',
    left: '0',
    top: '-1px',
    width: '100%',
    height: '355px'
  },
  menu: {
    display: 'none',
    position: 'absolute',
    zIndex: '1',
    left: '15px',
    top: '10px',
    '@media (max-width: 768px)': {
      display: 'block'
    }
  },
  menuBar: {
    width: '30px',
    height: '2px',
    backgroundColor: 'white',
    margin: '6px 0'
  },
  close: {
    display: 'none',
    position: 'absolute',
    right: '15px',
    top: '5px',
    width: '32px',
    height: '32px',
    opacity: '0.3',
    '@media (max-width: 768px)': {
      display: 'block'
    },
    '&:before, &:after': {
      position: 'absolute',
      left: '15px',
      content: '""',
      height: '33px',
      width: '2px',
      backgroundColor: '#333'
    },
    '&:before': {
      transform: 'rotate(45deg)'
    },
    '&:after': {
      transform: 'rotate(-45deg)'
    }
  },
  heroContent: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      padding: '0 20px'
    }
  },
  heading1: {
    color: 'white',
    fontSize: '40px',
    textAlign: 'center',
    lineHeight: '50px',
    marginBottom: '15px',
    paddingTop: '40px'
  },
  heading2: {
    color: '#3A3A3A',
    fontSize: '18px',
    textAlign: 'center',
    lineHeight: '20px',
    marginBottom: '45px'
  },
  image: {
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  content: {
    maxWidth: '1000px',
    padding: '32px',
    margin: '0 auto',
    display: 'block'
  },
  componentsList: {
    heading: {
      fontSize: '18px!important',
      lineHeight: '1.5 !important'
    },
    item: {
      fontSize: '16px !important',
      lineHeight: '1.5 !important',
      margin: '8px 0px !important'
    }
  },
  footer: {
    margin: '20px 45px'
  },
  heart: {
    verticalAlign: 'text-top'
  }
});

export default styles;
