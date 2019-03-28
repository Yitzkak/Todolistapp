import React, { Component } from "react";


class TodoList extends Component {
   
    constructor(props){
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(e){
        
        if (this.inputElement.value !== ""){
            var newItem = {
                value: this.inputElement.value,
                key: Date.now()
            } 

            this.setState((prevState) => {
                return{
                    items : prevState.items.concat(newItem)
                } 
            });           
        }     
        this.inputElement.value = "";
        console.log(this.state.items);
        e.preventDefault();    
    }

    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit= {this.addItem}>
                        <input type="text" ref = {a => this.inputElement = a} placeholder="Enter text"/>
                        <button type="submit">add task</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList;