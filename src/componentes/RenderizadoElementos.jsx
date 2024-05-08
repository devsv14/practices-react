import React, {Component}  from "react";


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
            <ul>
                {this.state.seasons.map((el,index)=>(
                    <li key={index}>{el}</li>
                ))}
            </ul>
        </div>
        );
    }
}