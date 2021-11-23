import styled from '@emotion/styled';

const Message = styled.div`
  color: red;
`;
function index() {
  const message: string = 'HI';
  return <Message css={{ background: 'blue' }}>{message}</Message>;
}

export default index;
