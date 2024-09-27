import { MantineProvider, DEFAULT_THEME } from '@mantine/core';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';

createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={DEFAULT_THEME}>
    <App />
  </MantineProvider>,
)
