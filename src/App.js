import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/Navbar';

import ProductList from './Pages/ProductList';
import ProductTable from './Pages/ProductTable';
import {Route, Routes} from "react-router-dom";

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Theme";
import  {useDarkMode} from "./useDarkMode";
import Toggle from "./Toggler";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <Navbar thememode={theme}/>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/productTable" element={<ProductTable />} />
          </Routes>
          <div className='text-center'>
            <Toggle theme={theme} toggleTheme={themeToggler} />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
