

import {Router} from './Router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/react-query';


export function App() {

  return (
    <div>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
    </QueryClientProvider>
    </div>

  )
}


