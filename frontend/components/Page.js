import { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { StyledPage, Inner } from './styles/PageStyles';
import theme from './styles/theme';

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