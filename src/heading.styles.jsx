const styles = ({
  fontSize
}) => ({
  heading: {
    margin: 0,
    color: '#3A3A3A',
    fontWeight: 'lighter'
  },
  heading1: {
    fontSize: fontSize.h1,
    marginBottom: '30px'
  },
  heading2: {
    fontSize: fontSize.h2
  },
  heading3: {
    fontSize: fontSize.h3,
    marginBottom: '20px'
  },
  heading4: {
    fontSize: fontSize.h4,
    marginBottom: '20px'
  },
  heading5: {
    fontSize: fontSize.h5,
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  heading6: {
    fontSize: fontSize.h6,
    fontStyle: 'italic',
    marginBottom: '20px'
  }
});

export default styles;
