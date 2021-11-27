import styled from '@emotion/styled';
import Button from '@components/Button';

const Message = styled.div`
  position: relative;
  height: 2px;
  display: flex;
  color: '#000000';
  width: 1px;
`;

function index() {
  const message: string = 'HI';
  return (
    <>
      <Message css={{ background: 'blue' }}>{message}</Message>
      <Button width={96} height={32}>
        Click!
      </Button>
    </>
  );
}

export default index;
