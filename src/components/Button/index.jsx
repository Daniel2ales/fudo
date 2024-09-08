import React from 'react';
import { Container } from './styles';

export function Button({ title, icon, ...rest }) {
  return (
    <Container className="btn"{...rest}>
      {icon && <i className={icon}></i>}
      {title}
    </Container>
  );
}