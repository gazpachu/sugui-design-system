const styles = ({
  color,
  fontFamily,
  space
}) => ({
  list: {
    margin: 0
  },
  item: {
    display: 'block',
    margin: 0,
    paddingLeft: space[2],
    fontFamily: fontFamily.base,
    fontSize: '16px',
    lineHeight: '40px',
    listStyle: 'none',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    borderBottom: '1px solid #EEE'
  },
  isChild: {
    borderBottom: 'none',
    lineHeight: '30px'
  },
  link: {
    color: '#777 !important'
  },
  heading: {
    color: `${color.base} !important`,
    lineHeight: '40px !important'
  },
  isSelected: {
    fontWeight: 'bold'
  },
  label: {
    color: 'white',
    borderRadius: '6px',
    padding: '2px 6px',
    marginLeft: '5px',
    fontSize: '13px',
    verticalAlign: 'middle'
  },
  wip: {
    backgroundColor: '#ea985d'
  },
  review: {
    backgroundColor: '#45bb75'
  },
  remove: {
    backgroundColor: '#E60000'
  }
});

export default styles;
