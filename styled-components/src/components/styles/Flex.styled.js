import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }

  & > div,
  & > ul {
    flex: 1;
  }
`;

export default Flex;
