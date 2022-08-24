import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle<{ theme: 'dark' | 'light' }>`
  ${reset}

  :root {
    --color-brand: #7c5dfa;
    
    --color-bg-primary: ${({ theme }) =>
      theme === 'dark' ? '#141625' : '#f8f8fb'};
    --color-bg-secondary: ${({ theme }) =>
      theme === 'dark' ? '#1e2139' : '#F0F4F6'};
    --color-bg-tertiary: ${({ theme }) =>
      theme === 'dark' ? '#252945' : '#CFD3E9'};

    --color-text-primary: ${({ theme }) =>
      theme === 'dark' ? '#fff' : '#141625'};
    --color-text-secondary: ${({ theme }) =>
      theme === 'dark' ? '#afb2c4' : '#1f2028'};
  }

  body {
    font-family: 'League Spartan', sans-serif;
    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
  }
`;

export default GlobalStyles;
