import React, {Component}  from "react";
import datos from "../helpers/data.json";

function ElementoLista(props){
    
    return (
    <li>
      <a href={props.el.web} target="_blank" rel="noreferrer">
        {props.el.name}
      </a>
    </li>
    )
}


export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state ={
            seasons:["Primavera","Verano","Otono","Invierno"],
        };
    }
    render(){
       
        return (
        <div>
            <h2>ESTACIONES DE ANIO</h2>
            <ol>
                {this.state.seasons.map((el,index)=>(
                    <li key={index}>{el}</li>
                ))}
            </ol>
            <h3> FRAMEWORKS FRONTED JAVASCRIPT</h3>
            <ul>
            {datos.frameworks.map((el) => (
             <ElementoLista key={el.id} el={el} />
            ))}
          </ul>
  
        </div>
        );
    }
}