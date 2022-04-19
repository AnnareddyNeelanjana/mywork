import logo from '../logo.svg';
import { useEffect, useState,useMemo } from 'react';
import './App.css';
import Header from "./header"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from '../searchresults';
import HouseFromQuery from '../house/HouseFromQuery'

function App() {
  const [allHouses,setAllHouses] =useState([]);

useEffect( () => {
               const fetchHouses = async () => { 
               const rsp = await fetch('../houses.json');
                 
              const houses = await rsp.json()
          // console.log(houses);
              setAllHouses(houses);
                  };  
                fetchHouses();}
, []);
//console.log(allHouses);
let featuredhouse;


//useMemo 
//memoisation

useMemo( () => { 
  if(allHouses.length){
    const randomIndex= Math.floor(Math.random()*allHouses.length);
    featuredhouse =  allHouses[randomIndex];
  }}
,
[allHouses]);




  return (
    <Router> 
    <div className="container">
       <Header  subtitle='HOME SWEET  HOME' anotherTitle='Somtimes,the key to happiness is finding the key to the right home.
              Let us help you look for it.
              
              No rush!! 😊
             '/>
       
        <HouseFilter allHouses={allHouses} />
        <Switch>
          <Route exact path="/">
            <FeaturedHouse house={featuredhouse}></FeaturedHouse>
          </Route>
          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses}/>            
          </Route>
          <Route path="/home/:id">
            <HouseFromQuery allHouses={allHouses}/>            
          </Route>
        </Switch>
        </div>
    {/* /home/:id*/}
    
    
   
   </Router>
  );
}

export default App;