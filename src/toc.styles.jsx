const styles = ({
  space,
  color,
  fontFamily,
  fontSize,
  borderRadius
}) => ({
  root: {
    fontFamily: fontFamily.base
  },
  search: {
    padding: '5px 16px 30px 16px'
  },
  input: {
    display: 'block',
    width: '100%',
    padding: space[1],
    color: color.base,
    backgroundColor: color.baseBackground,
    fontFamily: fontFamily.base,
    fontSize: fontSize.base,
    border: [[1, color.border, 'solid']],
    borderRadius,
    transition: 'border-color ease-in-out .15s',
    '&:focus': {
      isolate: false,
      borderColor: color.link,
      outline: 0
    },
    '&::placeholder': {
      isolate: false,
      fontFamily: fontFamily.base,
      fontSize: fontSize.base,
      color: color.light
    }
  }
});

export default styles;
