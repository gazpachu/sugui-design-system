import React from 'react';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';
import styles from './toc.styles';

const TableOfContentsRenderer = ({
  classes,
  children,
  searchTerm,
  onSearchTermChange
}) => (
  <div>
    <div className={classes.root}>
      <div className={classes.search}>
        <input
          value={searchTerm}
          className={classes.input}
          placeholder="Filter by name"
          aria-label="Filter by name"
          onChange={event => onSearchTermChange(event.target.value)}
        />
      </div>
      <nav>{children}</nav>
    </div>
  </div>
);

export default Styled(styles)(TableOfContentsRenderer);
