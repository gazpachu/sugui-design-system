sugUI has two different layouts: **liquid** or **fixed container**.

In the liquid layout, the content in the page expands and takes all the available width of the screen. This approach is useful when we need to represent a masonry of cards or long tables.

On the other hand, there are apps where the main content is just a table with a few columns. In those cases, we don't need to use all the available width of the screen. We can just use a fixed container layout, which will help us keep the content centered in the screen on big screens. This approach also allows us to use white space to make the content breath better.

### For screens of 1280px width or bigger

* Side margins: 32dp fixed
* Columns: 12
* Gutter: 32dp fixed
* If using a liquid layout, column width changes based on screen size
* If using a fixed container layout, its `max-width` should be `960px` (for screens between 1280px and 1440px width) and `1216px` for bigger screens

```jsx noeditor
const Grid = require('../../node_modules/sugui/src/components/grid').default;
const Cell = require('../../node_modules/sugui/src/components/grid/_cell.jsx').default;

<Grid>
  <Cell width={6} center middle>
    <img src="./img/grid-1440-liquid.png" alt="Grid 1440px liquid" />
    <div>Liquid layout</div>
  </Cell>
  <Cell width={6} center middle>
    <img src="./img/grid-1440-fixed.png" alt="Grid 1440px fixed" />
    <div>Fixed container layout</div>
  </Cell>
</Grid>
```

### For screens between 1024px and 1280px width

* Side margins: 32dp fixed
* Columns: 12
* Gutter: 24dp fixed
* If using a liquid layout, column width changes based on screen size
* If using a fixed container layout, its `max-width` should be `736px`

```jsx noeditor
const Grid = require('../../node_modules/sugui/src/components/grid').default;
const Cell = require('../../node_modules/sugui/src/components/grid/_cell.jsx').default;

<Grid>
  <Cell width={6} center middle>
    <img src="./img/grid-1024.png" alt="Grid 1024px liquid" />
    <div>Liquid layout</div>
  </Cell>
  <Cell width={6} center middle>
    <img src="./img/grid-1024.png" alt="Grid 1024px fixed" />
    <div>Fixed container layout</div>
  </Cell>
</Grid>
```

### For screens between 768px and 1024px width

* Side margins: 16dp fixed
* Columns: 8
* Gutter: 16dp fixed
* Content is always liquid and column width changes based on screen size

```jsx noeditor
const Grid = require('../../node_modules/sugui/src/components/grid').default;
const Cell = require('../../node_modules/sugui/src/components/grid/_cell.jsx').default;

<Grid>
  <Cell width={6} center middle>
    <img src="./img/grid-768.png" alt="Grid 768px liquid" />
    <div>Liquid layout</div>
  </Cell>
</Grid>
```

### For screens between 320px and 768px width

* Side margins: 16dp fixed
* Columns: 4
* Gutter: 16dp fixed
* Content is always liquid and column width changes based on screen size

```jsx noeditor
const Grid = require('../../node_modules/sugui/src/components/grid').default;
const Cell = require('../../node_modules/sugui/src/components/grid/_cell.jsx').default;

<Grid>
  <Cell width={6} center middle>
    <img src="./img/grid-375.png" alt="Grid 375px liquid" />
    <div>Liquid layout</div>
  </Cell>
</Grid>
```
