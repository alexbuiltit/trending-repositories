import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html, body {
  background-color: rgb(249, 249, 251);
  padding: 0;
  margin: 0;
  font-family: 'Inter', sans-serif; 
  color: #333;
}

* {
  box-sizing: border-box;
}


main {
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text--small{
  font-size: 12px;
}



`;
