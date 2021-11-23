import styled from '@emotion/styled';
import React from 'react'

const Message = styled.div`
  color: red;
`;
function index() {
  const message: string = 'HI';
  return (
    <Message css={{background: 'blue'}}>
      {message}
    </Message>
  )
}

export default index
