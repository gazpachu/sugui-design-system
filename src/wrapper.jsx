import React, { PureComponent } from 'react';
import Theme from '../node_modules/sugui/src/components/theme';

class Wrapper extends PureComponent {
  render() {
    return (
      <Theme>
        {this.props.children}
      </Theme>
    );
  }
}

export default Wrapper;
