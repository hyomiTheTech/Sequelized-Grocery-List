import React from "react";
import GroceryList from './GroceryList.jsx'
import GroceryListForm from './GroceryListForm.jsx';
import axios from 'axios';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            groceryList: []
        }
        this.postGroceryList = this.postGroceryList.bind(this)
        this.deleteGroceryList = this.deleteGroceryList.bind(this)
        this.updateGroceryList = this.updateGroceryList.bind(this)
    }

    componentDidMount() {
        this.getGroceryList()
    }

    getGroceryList() {
        axios.get('/list').then((response) => {
            this.setState({
                groceryList: response.data
            })
        })
    }

    postGroceryList(list, quant) {
        axios.post('/groceryList', {
            grocerylist: list,
            quantity: quant
        })
    }

    deleteGroceryList(id) {
        axios.delete(`/groceryList/${id}`).then((response) => {
            this.getGroceryList()
        })
    }

    updateGroceryList(id, list, quant) {
        axios.post(`/groceryList/${id}`, {
            grocerylist: list,
            quantity: quant
        }).then((response) => {
            this.getGroceryList()
        })
    }

    render() {
        return (
            <div>
                <div className="listForm">Add More!!
                <br />
                    <GroceryListForm post={this.postGroceryList} />
                </div>
                <div className="list">My Grocerylist!
                    <div><GroceryList lists={this.state.groceryList} delete={this.deleteGroceryList} update={this.updateGroceryList} /></div>
                </div>
            </div>
        )
    }
}

export default App;