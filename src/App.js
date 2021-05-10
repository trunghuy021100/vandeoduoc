import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Footer from './component/Footer'
import Loading from './component/Loading'
import Navbar from './component/Navbar'
import Datghe from './page/Datghe'
import Login from './page/Login'
import Signup from './page/Signup'
import TrangTru from './page/Trangtru'
import Tungphim from './page/Tungphim'

function App() {
  window.addEventListener('beforeunload',function()
    {
     if(this.window.close())
      {
        localStorage.setItem("tendangnhap",JSON.stringify([]))
      }
    }
  )
  return (
  <Router>
    <Navbar></Navbar>
    
    <Switch>
      <Route exact path="/">
      <TrangTru></TrangTru>
      </Route>
      <Route path="/phim/:id"><Tungphim></Tungphim></Route>
     <Route path="/dangky"><Signup></Signup></Route>
     <Route path="/dangnhap"><Login></Login></Route>
     <Route path="/datghe"><Datghe></Datghe></Route>
     <Route path="*"><TrangTru></TrangTru></Route>
    </Switch>
    <Footer></Footer>
    
  </Router>
  )
}

export default App


