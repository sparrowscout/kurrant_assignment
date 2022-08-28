import * as React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <>
      <MainBack>app</MainBack>
    </>
  );
}

interface MainBackProps {
  color: string;
}

const MainBack = styled.div<MainBackProps>`
  color: #9573ff;
`;

export default App;
