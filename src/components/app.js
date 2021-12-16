//
import React from "react";
import { ThemeProvider } from "styled-components";
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
//
import GlobalStyled from "./GlobalStyled";
import Header from "./Header";
import FrontPage from "./FrontPage";
import Footer from "./Footer";
import Mapcomponent from "./Mapcontainer";

const App = () => {
 const theme = {
   color:{
     white: '#fff',
    Green:'#3EB595',
    Yellow:'#FFF448',
    GrayOne:'#C9C9C9',
    GrayTwo:'#696969',
    black: '#1A1A1A'
   }
 }

  return(
    <div className='flex app'>
      <GlobalStyled />
      <ThemeProvider
      theme={theme}
      >
        <Router basename='rwtwbike'>
          <Header />
          <Routes>
            <Route
              path='/'
              element={<FrontPage />}
            />
            <Route
              path='/StationSearch'
              element={<Mapcomponent />}
            />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App;