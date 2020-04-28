import React from "react";
import Header from './header/Header'
import Crousel from './crousel/Crousel'
import './Markup.scss'
const Markup = (props) =>{
    return (
		<div className="markup-container">
            <div className="background">
            <Header/>
            <Crousel/>
            </div>
		</div>
     )
}
export default Markup;