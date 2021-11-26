import styled from '@emotion/styled';
import Button from 'src/components/Button';

const Message = styled.div`
  position: relative;
  display: flex;
  width: 1px;
  color: '#000000';
`;

function index() {
  const message: string = 'HI';
  return (
    <>
      <Message css={{ background: '#123142' }}>{message}</Message>
      <Button width={96} height={32}>
        Click!
      </Button>
    </>
  );
}

export default index;
