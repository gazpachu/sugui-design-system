const styles = ({
  color,
  fontFamily,
  space,
  mq
}) => ({
  list: {
    margin: 0
  },
  item: {
    color: color.base,
    display: 'block',
    margin: 0,
    paddingLeft: space[2],
    fontFamily: fontFamily.base,
    fontSize: '18px',
    lineHeight: '40px',
    listStyle: 'none',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    borderBottom: '1px solid #EEE'
  },
  isChild: {
    [mq.small]: {
      display: 'inline-block',
      margin: [[0, space[1], 0, 0]]
    }
  },
  heading: {
    color: color.base,
    marginTop: space[1],
    fontFamily: fontFamily.base,
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
