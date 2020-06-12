import React from 'react';
import styled from 'styled-components';

const Childcomponent = styled.div`
  display: flex;
`

const Parendscomponent = styled(Childcomponent)`
  background-color: ${props => props.bgColor === true ? '#fff' : props.bgColor};
  color: ${props => props.bgColor === true ? '#000' : '#fff'};
`

export default function StyledComponentEx() {
  
  return (
    <Parendscomponent bgColor={'gray'}>
        <Childcomponent >Hello World.</Childcomponent>
    </Parendscomponent>
  );
}