import React, { Component } from 'react'
import Navbar1 from "./Components/Navbar"
import  CardList from "./Components/CardList"
import data from './Data'
import { Route,Routes  } from 'react-router-dom'
import Modal1 from './Components/Modal'
import Home from './Components/Home'
export default class App extends Component {
  getproduct(){
    var samir=JSON.parse(localStorage.getItem('key'))
    data.push(samir)
    console.log(data)
  }
  render() {
    return (
      <div>
        <Navbar1 shose={()=>this.getproduct()}/>
        {/* <CardList data={data}/>; */}
        <Routes>
         <Route path='/home' element={<Home/>}/>
         <Route path='/CardList' element={<CardList data={data}/>}/>

        </Routes>
        
      </div>
    )
  }
}




