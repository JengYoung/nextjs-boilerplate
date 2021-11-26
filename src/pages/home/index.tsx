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
  console.log('hi');
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
