

import {Router} from './Router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';


export function App() {

  return (
    <div>
    <GlobalStyle />
    <BrowserRouter>
    <Router/>
    
    </BrowserRouter>
    </div>

  )
}


