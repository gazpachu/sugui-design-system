The sugUI colour palette aims at providing an organised approach to apply colour to the UI of your apps.

### Colour usage

Maecenas vitae ullamcorper diam, eu efficitur orci. Suspendisse molestie, nulla imperdiet gravida condimentum, sem ex convallis diam, ut auctor tellus lectus sed elit. Quisque ut imperdiet leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Cras vitae lacus metus. Aliquam erat volutpat. Aliquam viverra tristique nisi, ut pharetra lectus ultrices quis. Pellentesque feugiat elit et vulputate scelerisque. Donec malesuada mauris sed enim iaculis facilisis. Maecenas urna leo, tincidunt eget urna et, sagittis tincidunt magna.

### Accesibility

Follow the AA standards. Make sure the background and text used have a minimal contrast ratio. [More info](https://webaim.org/resources/contrastchecker/)

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 40px;
  margin-bottom: 40px;
}
.box {
  color: white;
  height: 220px;
  position: relative;
}
.box.invert {
  color: #3A3A3A;
}
.main {
  border-radius: 5px;
  height: 120px;
  width: 100%;
  position: absolute;
  padding: 22px;
  z-index: 2;
}
.main-heading {
  font-size: 20px;
  font-family: 'Open Sans';
  margin-bottom: 25px;
}
.light {
  border-radius: 5px;
  height: 60px;
  position: absolute;
  z-index: 1;
  top: 110px;
  width: 100%;
  padding: 22px;
}
.lighter {
  top: 160px;
  z-index: 0;
}
</style>

```jsx noeditor
<div className="grid">
  <div className="box">
    <div className="main" style={{ backgroundColor: '#9C2AA0' }}>
      <div className="main-heading">Red Violet</div>
      <span>red violet #9C2AA0</span>
    </div>
    <div className="light" style={{ backgroundColor: '#CD94CF' }}>red violet light #CD94CF</div>
    <div className="light lighter" style={{ backgroundColor: '#E6CAE7' }}>red violet lighter #E6CAE7</div>
  </div>
  <div className="box">
    <div className="main" style={{ backgroundColor: '#5E2750' }}>
      <div className="main-heading">Aubergine</div>
      <span>aubergine #5E2750</span>
    </div>
    <div className="light" style={{ backgroundColor: '#AE93A7' }}>aubergine light #AE93A7</div>
    <div className="light lighter" style={{ backgroundColor: '#D7C9D3' }}>aubergine lighter #D7C9D3</div>
  </div>
  <div className="box">
    <div className="main" style={{ backgroundColor: '#00B0CA' }}>
      <div className="main-heading">Aqua blue</div>
      <span>aqua blue #00B0CA</span>
    </div>
    <div className="light" style={{ backgroundColor: '#7FD7E4' }}>aqua blue light #7FD7E4</div>
    <div className="light lighter" style={{ backgroundColor: '#BFEBF2' }}>aqua blue lighter #BFEBF2</div>
  </div>
  <div className="box">
    <div className="main" style={{ backgroundColor: '#007C92' }}>
      <div className="main-heading">Turquoise</div>
      <span>turquoise #007C92</span>
    </div>
    <div className="light" style={{ backgroundColor: '#7FBDC8' }}>turquoise light #7FBDC8</div>
    <div className="light lighter" style={{ backgroundColor: '#BFDEE4' }}>turquoise lighter #BFDEE4</div>
  </div>
  <div className="box">
    <div className="main" style={{ backgroundColor: '#A8B400' }}>
      <div className="main-heading">Spring green</div>
      <span>spring green #A8B400</span>
    </div>
    <div className="light" style={{ backgroundColor: '#D3D97F' }}>spring green light #D3D97F</div>
    <div className="light lighter" style={{ backgroundColor: '#E9ECBF' }}>spring green lighter #E9ECBF</div>
  </div>
  <div className="box">
    <div className="main" style={{ backgroundColor: '#FECB00' }}>
      <div className="main-heading">Lemon yellow</div>
      <span>lemon yellow #FECB00</span>
    </div>
    <div className="light" style={{ backgroundColor: '#FEE57F' }}>lemon yellow light #FEE57F</div>
    <div className="light lighter" style={{ backgroundColor: '#FFF2BF' }}>lemon yellow lighter #FFF2BF</div>
  </div>
  <div className="box">
    <div className="main" style={{ backgroundColor: '#E89700' }}>
      <div className="main-heading">Fresh orange</div>
      <span>fresh orange #E89700</span>
    </div>
    <div className="light" style={{ backgroundColor: '#F3CB7F' }}>fresh orange light #F3CB7F</div>
    <div className="light lighter" style={{ backgroundColor: '#F9E5BF' }}>fresh orange lighter #F9E5BF</div>
  </div>
</div>
```

### Grey scale

```jsx noeditor
<div className="grid">
  <div className="box">
    <div className="main" style={{ backgroundColor: '#000000' }}>
      <div className="main-heading">Black</div>
      <span>black #000000</span>
    </div>
    <div className="light" style={{ backgroundColor: '#3a3a3a' }}>black light #3a3a3a</div>
    <div className="light lighter" style={{ backgroundColor: '#7F7F7F' }}>black lighter #7F7F7F</div>
  </div>
  <div className="box">
    <div className="main" style={{ backgroundColor: '#333333' }}>
      <div className="main-heading">Mineshaft</div>
      <span>mineshaft #333333</span>
    </div>
    <div className="light" style={{ backgroundColor: '#4A4D4E' }}>abbey #4A4D4E</div>
    <div className="light lighter" style={{ backgroundColor: '#9E9E9E' }}>silverchalice #9E9E9E</div>
  </div>
  <div className="box">
    <div className="main" style={{ backgroundColor: '#AFAFAF' }}>
      <div className="main-heading">Porcelain</div>
      <span>porcelain #AFAFAF</span>
    </div>
    <div className="light" style={{ backgroundColor: '#BFBFBF' }}>silver #BFBFBF</div>
    <div className="light lighter" style={{ backgroundColor: '#CCCCCC' }}>worryingsatin #CCCCCC</div>
  </div>
  <div className="box invert">
    <div className="main" style={{ backgroundColor: '#e5e5e5' }}>
      <div className="main-heading">Mercury</div>
      <span>mercury #e5e5e5</span>
    </div>
    <div className="light" style={{ backgroundColor: '#F4F4F4' }}>wildsand #F4F4F4</div>
  </div>
</div>
```
