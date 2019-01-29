const styles = () => ({
  root: {
    paddingLeft: '181px',
    minHeight: '100vh',
    backgroundColor: '#fff'
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
    boxShadow: '4px 0 4px 0 rgba(218,213,213,0.50)'
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
  heroContent: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center'
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
