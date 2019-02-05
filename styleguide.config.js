const path = require('path');

module.exports = {
  title: 'sugUI Design System',
  version: 'v1.0.0-alpha.9',
  theme: {
    color: {
      link: '#9C2AA0',
      linkHover: '#E89700'
    },
    fontFamily: {
      base: '"Open Sans", sans-serif'
    }
  },
  template: {
    head: {
      links: [{
        rel: 'icon',
        href: 'img/favicon.png'
      }],
      meta: [{
        property: 'og:title',
        content: 'sugUI Design System'
      },
      {
        property: 'og:image',
        content: 'https://gazpachu.github.io/sugui-design-system/img/screenshot.jpg'
      },
      {
        property: 'og:description',
        content: 'sugUI is a UI library and Design System based on React and Styled Components'
      }],
      scripts: [{
        src: 'https://buttons.github.io/buttons.js'
      }]
    }
  },
  styles: {
    Code: {
      code: {
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #BCBEC0',
        background: '#F1F3F5',
        padding: '2px'
      }
    }
  },
  styleguideDir: 'dist',
  assetsDir: 'assets',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/wrapper'),
    StyleGuideRenderer: path.join(__dirname, 'src/styleguide'),
    TableOfContentsRenderer: path.join(__dirname, 'src/toc'),
    ComponentsListRenderer: path.join(__dirname, 'src/list'),
    HeadingRenderer: path.join(__dirname, 'src/heading')
  },
  require: [
    'react-swipeable-views'
  ],
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true
    }
  },
  usageMode: 'expand',
  defaultExample: true,
  sections: [
    {
      name: 'Introduction',
      content: path.join(__dirname, 'src/content/intro.md')
    },
    {
      name: 'Design Principles',
      content: path.join(__dirname, 'src/content/principles.md')
    },
    {
      name: 'Style',
      sections: [
        {
          name: 'Branding',
          content: path.join(__dirname, 'src/content/branding.md')
        },
        {
          name: 'Logos',
          content: path.join(__dirname, 'src/content/logos.md')
        },
        {
          name: 'Colors',
          content: path.join(__dirname, 'src/content/colors.md')
        },
        {
          name: 'Icons',
          content: path.join(__dirname, 'src/content/icons.md')
        },
        {
          name: 'Illustration',
          content: path.join(__dirname, 'src/content/illustration.md')
        },
        {
          name: 'Motion',
          content: path.join(__dirname, 'src/content/motion.md')
        },
        {
          name: 'Typography',
          content: path.join(__dirname, 'src/content/typography.md')
        },
        {
          name: 'Page Layout',
          content: path.join(__dirname, 'src/content/layout.md')
        }
      ]
    },
    {
      name: 'Components',
      content: path.join(__dirname, 'src/content/components.md'),
      components: process.env.NODE_ENV !== 'development' ?
        path.join(__dirname, 'node_modules/sugui/src/components/**/*.jsx')
        : path.join(__dirname, '../sugui/src/components/**/*.jsx')
    },
    {
      name: 'References',
      content: path.join(__dirname, 'src/content/references.md')
    },
    {
      name: 'Github repo',
      href: 'https://github.com/gazpachu/sugui-design-system',
      external: true
    }
  ],
  getComponentPathLine: (pathLine) => {
    const parts = pathLine.split('/');
    return `import { ${parts[4].charAt(0).toUpperCase() + parts[4].slice(1)} } from 'sugui/components';`;
  },
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          include: [
            path.resolve(__dirname, 'src'),
            process.env.NODE_ENV !== 'development' ?
              path.resolve(__dirname, 'node_modules/sugui/src')
              : path.resolve(__dirname, '../sugui/src')
          ],
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules'
        }
      ]
    }
  },
  ignore: ['**/src/components/**/*.styles.jsx', '**/src/components/**/_*.jsx'],
  skipComponentsWithoutExample: true
  // In case the base path is different...
  // dangerouslyUpdateWebpackConfig(webpackConfig) {
  //   // WARNING: inspect Styleguidist Webpack config before modifying it, otherwise you may break Styleguidist
  //   if (process.env.NODE_ENV !== 'development') {
  //     // eslint-disable-next-line
  //     webpackConfig.output = {
  //       publicPath: 'design-system/',
  //       filename: 'build/bundle.[chunkhash:8].js',
  //       chunkFilename: 'build/[name].[chunkhash:8].js'
  //     };
  //   }
  //   return webpackConfig;
  // }
};
