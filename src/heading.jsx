import React from 'react';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';
import styles from './heading.styles';

const HeadingRenderer = ({
  classes,
  level,
  children,
  ...props
}) => {
  const Tag = `h${level}`;

  return (
    <Tag {...props} className={`${classes.heading} ${classes[`heading${level}`]}`}>
      {children}
    </Tag>
  );
};

export default Styled(styles)(HeadingRenderer);
