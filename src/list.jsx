import React from 'react';
import cx from 'classnames';
import Link from 'react-styleguidist/lib/rsg-components/Link';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';
import styles from './list.styles';

const ComponentsListRenderer = ({ classes, items }) => {
  // eslint-disable-next-line
  items = items.filter(item => item.visibleName);

  if (!items.length) {
    return null;
  }

  return (
    <ul className={classes.list}>
      {items.map(({
        heading,
        visibleName,
        href,
        content,
        external
      }) => (
        <li
          className={cx(classes.item, (!content || !content.props.items.length) && classes.isChild)}
          key={href}
        >
          <Link
            className={cx(heading && classes.heading)}
            href={href}
            target={external ? '_blank' : undefined}
          >
            {visibleName}
            {/* (visibleName === 'Table') && <span className={`${classes.label} ${classes.wip}`}>WIP</span> */}
          </Link>
          {content}
        </li>
      ))}
    </ul>
  );
};

export default Styled(styles)(ComponentsListRenderer);
