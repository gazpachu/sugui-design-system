Maecenas vitae ullamcorper diam, eu efficitur orci. Suspendisse molestie, nulla imperdiet gravida condimentum, sem ex convallis diam, ut auctor tellus lectus sed elit. Quisque ut imperdiet leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Cras vitae lacus metus. Aliquam erat volutpat. Aliquam viverra tristique nisi, ut pharetra lectus ultrices quis. Pellentesque feugiat elit et vulputate scelerisque. Donec malesuada mauris sed enim iaculis facilisis. Maecenas urna leo, tincidunt eget urna et, sagittis tincidunt magna.

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
        <td style={{ fontSize: '64px', fontWeight: 'lighter' }}>Light 64px (72px)</td>
        <td style={{ fontSize: '56px', fontWeight: 'lighter' }}>Light 56px (62px)</td>
        <td style={{ fontSize: '32px', fontWeight: 'lighter' }}>Light 32px (40px)</td>
      </tr>
      <tr>
        <td className="first">H2</td>
        <td style={{ fontSize: '56px', fontWeight: 'lighter' }}>Light 56px (62px)</td>
        <td style={{ fontSize: '40px', fontWeight: 'lighter' }}>Light 40px (48px)</td>
        <td style={{ fontSize: '28px', fontWeight: 'lighter' }}>Light 28px (36px)</td>
      </tr>
      <tr>
        <td className="first">H3</td>
        <td style={{ fontSize: '40px', fontWeight: 'lighter' }}>Light 40px (48px)</td>
        <td style={{ fontSize: '34px', fontWeight: 'lighter' }}>Light 34px (40px)</td>
        <td style={{ fontSize: '24px', fontWeight: 'lighter' }}>Light 24px (30px)</td>
      </tr>
      <tr>
        <td className="first">H4</td>
        <td style={{ fontSize: '28px' }}><span style={{ fontWeight: 'light' }}>Light / </span><span style={{ fontWeight: 'bold' }}>Bold</span> 28px (34px)</td>
        <td style={{ fontSize: '24px' }}><span style={{ fontWeight: 'light' }}>Light / </span><span style={{ fontWeight: 'bold' }}>Bold</span> 24px (30px)</td>
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
