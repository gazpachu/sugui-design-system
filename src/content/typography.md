### Weights

<style>
.weight {
  font-size: 35px;
  margin-right: 20px;
}
</style>

### Type styles

<style>
.typography-table { width: 100%; }

.typography-table th {
  border-bottom: 1px solid #CCC;
  background-color: #F4F4F4;
  height: 40px;
}
.typography-table td {
  border-bottom: 1px solid #CCC;
  text-align: center;
  height: 50px;
}
.typography-table .first {
  background-color: #F4F4F4;
}
</style>

```jsx noeditor
const theme = require('../../node_modules/sugui/src/components/theme/settings.js').default;

<div>
  <table className="typography-table">
    <thead>
      <tr>
        <th style={{ minWidth: '80px' }}/>
        <th>Large screens (>= 1280px)</th>
        <th>Medium screens (768 - 1280px)</th>
        <th>Small screens (&lt; 768px)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="first">H1</td>
        <td style={{ fontSize: '64px' }}>Light 64px (72px)</td>
        <td style={{ fontSize: '56px' }}>Light 56px (62px)</td>
        <td style={{ fontSize: '32px' }}>Light 32px (40px)</td>
      </tr>
      <tr>
        <td className="first">H2</td>
        <td style={{ fontSize: '56px' }}>Light 56px (62px)</td>
        <td style={{ fontSize: '40px' }}>Light 40px (48px)</td>
        <td style={{ fontSize: '28px' }}>Light 28px (36px)</td>
      </tr>
      <tr>
        <td className="first">H3</td>
        <td style={{ fontSize: '40px' }}>Light 40px (48px)</td>
        <td style={{ fontSize: '34px' }}>Light 34px (40px)</td>
        <td style={{ fontSize: '24px' }}>Light 24px (30px)</td>
      </tr>
      <tr>
        <td className="first">H4</td>
        <td style={{ fontSize: '28px' }}><span>Light / </span><span>Bold</span> 28px (34px)</td>
        <td style={{ fontSize: '24px' }}><span>Light / </span><span>Bold</span> 24px (30px)</td>
        <td style={{ fontSize: '20px' }}>Regular 20px (28px)</td>
      </tr>
      <tr>
        <td className="first">H5</td>
        <td style={{ fontSize: '20px' }}>Regular 20px (28px)</td>
        <td style={{ fontSize: '20px' }}>Regular 20px (28px)</td>
        <td style={{ fontSize: '18px' }}>Regular 18px (24px)</td>
      </tr>
      <tr>
        <td className="first">Body</td>
        <td style={{ fontSize: '18px' }}>Regular 18px (24px)</td>
        <td style={{ fontSize: '18px' }}>Regular 18px (24px)</td>
        <td style={{ fontSize: '16px' }}>Regular 16px (24px)</td>
      </tr>
      <tr>
        <td className="first">Footnote</td>
        <td style={{ fontSize: '14px' }}>Regular 14px (18px)</td>
        <td style={{ fontSize: '14px' }}>Regular 14px (18px)</td>
        <td style={{ fontSize: '14px' }}>Regular 14px (18px)</td>
      </tr>
    </tbody>
  </table>
  <div>* Number in brackets corresponds to the line height</div>
</div>
```
