import React from 'react';
import Styled from 'react-styleguidist/lib/client/rsg-components/Styled';
import styles from './styleguide.styles';
import Logo from '../node_modules/sugui/src/logos/suguiLogo';

const StyleGuideRenderer = ({
  version,
  components,
  toc,
  children,
  hasSidebar,
  classes
}) => (
  <div className={classes.root}>
    {hasSidebar &&
      <div className={classes.sidebar}>
        <div className={classes.logo}>
          <Logo />
        </div>
        {toc}
        {version && <h2 className={classes.version}>{version}</h2>}
      </div>}
    <div className={classes.hero}>
      <svg className={classes.bg} preserveAspectRatio="none" width="844px" height="355px" viewBox="0 0 844 355" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="-30.3222114%" y1="34.6731086%" x2="111.825402%" y2="-25.5078125%" id="linearGradient-1">
            <stop stopColor="#E89700" offset="0%" />
            <stop stopColor="#FFB135" offset="17.2957751%" />
            <stop stopColor="#CB37D0" offset="80.1567622%" />
            <stop stopColor="#9C2AA0" offset="100%" />
          </linearGradient>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="00_DO_DS_Intro" transform="translate(-180.000000, 0.000000)" fill="url(#linearGradient-1)" fillRule="nonzero">
            <path d="M180,0.934038983 L1024,0 L1024,318.693787 C853.593349,367.102071 712.77056,367.102071 601.531632,318.693787 C490.292703,270.285504 349.78216,270.285504 180,318.693787 L180,0.934038983 Z" id="Rectangle" />
          </g>
        </g>
      </svg>
      <div className={classes.heroContent}>
        <div className={classes.heading1}>SugUI design system</div>
        <div className={classes.heading2}>UX and UI component guidelines for building web apps</div>
        <img src="./img/hero.svg" alt="SugUI design system" />
      </div>
    </div>
    <div className={classes.content}>
      {components}
      {children}
    </div>
    <div className={classes.footer}>
      Made with <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#ff5452" className={classes.heart}><path d="M19.9 5.8c-1.5-2-4.2-2.3-6.2-.9-.7.5-1.2 1.2-1.6 2 0 .1-.1.1-.2 0-.3-.8-.8-1.5-1.6-2-2-1.4-4.7-1-6.2.9-1.6 2-1.5 5.2.3 7.1l7 7.8c.3.4.9.4 1.3 0l7-7.8c1.7-1.9 1.8-5.1.2-7.1z" /></svg> by <a href="http://joanmira.com" target="_blank" rel="noopener noreferrer">Joan Mira</a> and <a href="https://www.behance.net/karennewton/" target="_blank" rel="noopener noreferrer">Karen Newton</a>
    </div>
  </div>
);

export default Styled(styles)(StyleGuideRenderer);
