Icons are usually displayed in 3 different sizes (always multiples of 8px): small (16x16px), medium (24x24px) and large (32x32px).

They can be imported into the codebase like this:

`import { NameIcon } from 'sugui/icons';`

Each icon has a `color` prop that is used for the `stroke` attribute. By default, the color prop is empty, so it can also be changed with CSS.

<style>
  .icon-wrapper {
    margin: 20px;
    display: inline-block;
    text-align: center;
    width: 93px;
  }
  .icon-wrapper .icon {
    height: 40px;
  }
</style>

```jsx noeditor
const icons = require('../helpers/loadIcons').default
const theme = require('../../node_modules/sugui/src/components/theme/settings.js').default;

const initialState = {
  color: 'mineShaft',
  bgColor: '#FAFAFA'
};

const iconElements = Object.keys(icons).map(iconName => {
  const Icon = icons[iconName]
  return (
    <div className="icon-wrapper" key={iconName}>
      <div className="icon">{<Icon color={theme.colors[state.color]} />}</div>
      <span style={{ color: theme.colors[state.color] }}>{iconName}</span>
    </div>
  )
});

const Colors = Object.keys(theme.colors).map(color => {
  return (
    <option defaultValue={theme.colors[color]} key={color}>{color}</option>
  )
});

<div>
  <span>Select icons color </span>
  <select defaultValue={state.color} onChange={(event) => setState({ color: event.currentTarget.value })}>
    {Colors}
  </select>

  <span style={{ marginLeft: '20px' }}>Select background color </span>
  <select onChange={(event) => setState({ bgColor: event.currentTarget.value })}>
    <option value="#FAFAFA">Light grey</option>
    <option value="#333333">Dark grey</option>
  </select>

  <div style={{ backgroundColor: state.bgColor, marginTop: '20px' }}>{iconElements}</div>
</div>
```
