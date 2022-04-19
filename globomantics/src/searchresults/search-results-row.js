import React from 'react';
import {useHistory} from 'react-router-dom';
const SearchResultsRow = ( { house } ) => {

    const history = useHistory();

   
    const setActive = () => {
        
        history.push(`/home/${house.id}`);
         
    ///home${house.id}
    };
    return (
       
        <tr onClick={setActive}>
            <td>
                {house.address}
            </td>
            <td>
                {house.price}
            </td>
            <td>
                {house.likes}
            </td>
        </tr>

    );
};

export default SearchResultsRow;