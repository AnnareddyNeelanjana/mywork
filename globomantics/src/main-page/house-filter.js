import React from 'react';
import { useHistory } from 'react-router';

const HouseFilter = ( {allHouses} ) => {
    
    const countries = allHouses  ? Array.from(new Set(allHouses.map( (h) => h.country))) : [];
    const history = useHistory();
    var count=0;
    countries.unshift(null);
  
    const onSearchChange = (e) =>{
    
      const country = e.target.value;
        if(count==0){
        history.push(`searchresults/${country}`);
        count=1;
      }
        else{
            history.push(`${country}`) ;
        }
    }
    const onClick = () =>{    
     
       history.go(-1);   

      
    }
    const onClickHome = () =>{
      
        history.push(``);
        count=0;
        window.location.reload(false);
     }

    return (
        <div className="row mt-3">
           
            <div className="col-md-3 ">
               <button type='button' className="btn btn-primary btn-lg" onClick={onClickHome}>{'GO HOME'}</button>
            </div>
          
            <div className=" col-md-3 font1">
                Look for your house in a country:
            </div>
            
            
            <div className="col-md-3 mb-3">
                <select className="form-select" onChange={onSearchChange}>
                    {countries.map( (c) => 
                    <option key={c} value={c}  >
                        {c}
                    </option>
                    )}
                </select>
            </div>

                <div className="col-md-3 ">
               <button type='button' className="btn btn-primary btn-lg" onClick={onClick}>{'GO BACK'}</button>
            </div>          
        </div>
    );
};

export default HouseFilter;