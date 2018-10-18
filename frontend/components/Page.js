import { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { StyledPage, Inner } from './styles/PageStyles';
import theme from './styles/theme';
import Header from '../components/Header';
import Meta from '../components/Meta';

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2');
    format: 'woff2';
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
    background: ${ theme.mainBackground };
    color: ${ theme.fontColor };
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${ theme.mainColor };
  }
  #nprogress .bar {
    background: ${ theme.secondaryColor };
  }
  #nprogress .spinner-icon {
    border-top-color: ${ theme.secondaryColor };
    border-left-color: ${ theme.secondaryColor };
  }
`;

class Page extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{ this.props.children }</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;