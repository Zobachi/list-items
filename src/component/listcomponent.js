import React from "react";
import Styles from './listComponent.module.css';

const ListComponent = ({title})=> {
    return ( 
       
        <div className='listContainer'>
            <ul>
                <li>{title}</li>
            </ul>

        </div>
     )
}
 
export default ListComponent;