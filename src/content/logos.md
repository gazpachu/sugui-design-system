This section contains the sugUI logo but it can also have additional logos.

### Logo guidelines

- Place the logo on white background
- Never place the logo on images
- Use the icon version in mobile views
- Minimun size of the icon 32x32 px

They can be imported into the codebase like this:

`import { SuguiLogo, SuguiSymbol } from 'sugui/logos';`

<style>
  .logo {
    margin: 20px;
    display: inline-block;
    text-align: center;
  }
</style>

```jsx noeditor
const logos = require('../helpers/loadLogos').default

const initialState = {
  bgColor: '#FAFAFA'
};

const Logos = Object.keys(logos).map(logoName => {
  const Logo = logos[logoName]
  return (
    <div className="logo" key={logoName}>
      <div>{<Logo />}</div>
      <a href={`img/${logoName}.svg`} style={{ color: state.bgColor === '#333333' ? 'white' : 'black' }}>{logoName}.svg</a>
    </div>
  )
});

<div>
  <span>Select background color </span>
  <select onChange={(event) => setState({ bgColor: event.currentTarget.value })}>
    <option value="#FAFAFA">Light grey</option>
    <option value="#333333">Dark grey</option>
    <option value="white">White</option>
  </select>

  <div style={{ backgroundColor: state.bgColor, marginTop: '20px' }}>{Logos}</div>
</div>
```
