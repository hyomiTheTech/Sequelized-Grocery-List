import React from "react";
import GroceryList from './GroceryList.jsx'
import axios from 'axios';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            groceryList: []
        }
    }

    componentDidMount() {
        this.getGroceryList()
    }

    getGroceryList() {
        axios.get('/list').then((response) => {
            console.log(response.data)
            this.setState({
                groceryList: response.data
            })
        })
    }

    render() {
        return (
            <div>My Grocerylist!
                <div><GroceryList lists={this.state.groceryList} /></div>
            </div>
        )
    }
}

export default App;