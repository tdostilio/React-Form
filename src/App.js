import React, { Component } from 'react';
import Input from './Input.js';
import Output from './Output.js';
import Button from './Button.js';
import ShoppingList from './ShoppingList.js';


var items = [];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            label: 'Form Things',
            listData: []

        }
    }
    
    render() {
        return (
            <div className="App">
                <h1>{this.state.label}</h1>
                <form onSubmit={(e)=> {
                    e.preventDefault()}}>
                <Input
                    text={this.state.text}
                    changeHandler={this._updateText}
                />
                <Button
                    changeHandler={this._addItem}
                />  


                </form>
                <ShoppingList
                    itemArray={this.state.listData}
                />
            </div>
        )
    }

    _updateText = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    _addItem = (event) => {
        items.push(' '+this.state.text)
        this.setState({
            text: '',
            listData: this.state.listData.concat(this.state.text)
        })
    }







}


export default App;
