import React from 'react';
import cx from 'classnames';
import Link from 'react-styleguidist/lib/client/rsg-components/Link';
import Styled from 'react-styleguidist/lib/client/rsg-components/Styled';
// import { getHash } from 'react-styleguidist/lib/utils/handleHash';
import styles from './list.styles';

const ComponentsListRenderer = ({ classes, items }) => {
  // eslint-disable-next-line
  items = items.filter(item => item.visibleName);

  if (!items.length) {
    return null;
  }

  // const windowHash = window.location.pathname + getHash(window.location.hash);
  return (
    <ul className={classes.list}>
      {items.map(({
        heading,
        visibleName,
        href,
        content,
        external
      }) => (
        // const isItemSelected = windowHash === href;
        <li
          className={cx(
            classes.item,
            (visibleName !== 'Introduction' && visibleName !== 'Design Principles' && visibleName !== 'References') && classes.isChild
            // (!content || !content.props.items.length) && classes.isChild
          )}
          key={href}
        >
          <Link
            className={cx(classes.link, heading && classes.heading)}
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
