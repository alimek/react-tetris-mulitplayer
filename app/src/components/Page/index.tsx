import * as React from 'react';

import { Container, HeaderContainer, Content, Title } from './styles';
import BackButton from 'containers/BackButton';

interface IPagePropTypes {
  hasHeader?: boolean;
  title?: string;
  showBackButton?: boolean;
}

class Page extends React.Component<IPagePropTypes> {
  renderHeader = () => {
    const { hasHeader, title, showBackButton } = this.props;
    if (!hasHeader) {
      return null;
    }

    return (
      <HeaderContainer>
        {showBackButton ? <BackButton /> : null}
        {title ? <Title>{title}</Title> : null}
      </HeaderContainer>
    );
  };

  render() {
    const { hasHeader } = this.props;

    return (
      <Container>
        <Content hasHeader={hasHeader}>
          {this.props.children}
        </Content>
        {this.renderHeader()}
      </Container>
    );
  }
}

export default Page;
