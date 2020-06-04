import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  orange,
  blue,
  deepPurple,
  deepOrange
} from "@material-ui/core/colors";
import Home from '../Components/Home/Home';
import Profile from '../Components/Profile/Profile';
import Add from '../Components/Add/Add';
import Login from '../Components/Login/Login';
import SignUp from '../Components/Login/SignUp';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import MyBooks from '../Components/Profile/myBooks';
import Edit from '../Components/Profile/Edit';
import data from '../Components/data'
function App() {
  const [darkState, setDarkState] = useState(false);
  const [isLoggedin, setLogin] = useState(false);
  const [SearchField, setSearchField] = useState('');
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : blue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];

  // FOR HOME.JSX
  const [datas, setdata] = useState([]);
  const [Cart, setCart] = useState([]);
  const [Wish, setWish] = useState([])

  const addToCart = (data) => {
    const newCart = [...Cart, data];
    setCart(newCart)
    console.log(newCart)
  }
  const addToWish = data => {
    const newWish = [...Wish, data];
    setWish(newWish);
    console.log(newWish);
  }
  useEffect(() => {
    var aaa = localStorage.getItem("dark");
    setdata(data);
    console.log("darkmode state from localStorage:", aaa)
    aaa === null ? aaa = false : setDarkState(JSON.parse(aaa))
  }, [])
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });
  const filteredBooks = datas.filter(book => {
    return book.name.toLowerCase().includes(SearchField.toLowerCase())
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
    localStorage.setItem("dark", !darkState);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              isLoggedin={isLoggedin}
              setLogin={setLogin}
              datas={filteredBooks}
              Cart={Cart}
              Wish={Wish}
              addToCart={addToCart}
              addToWish={addToWish}
              setCart={setCart}
              setWish={setWish}
              setSearchField={setSearchField}
            />
          </Route>
          <Route path="/profile">
            <Profile darkState={darkState} handleThemeChange={handleThemeChange} isLoggedin={isLoggedin} setLogin={setLogin} />
          </Route>
          <Route path="/add">
            <Add isLoggedin={isLoggedin} setLogin={setLogin} />
          </Route>
          <Route path="/login">
            <Login isLoggedin={isLoggedin} setLogin={setLogin} />
          </Route>
          <Route path="/signup">
            <SignUp isLoggedin={isLoggedin} setLogin={setLogin} />
          </Route>
          <Route path="/myBooks">
            <MyBooks />
          </Route>
          <Route path="/edit" >
            <Edit />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default App;