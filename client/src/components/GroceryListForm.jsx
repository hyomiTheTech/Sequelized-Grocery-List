import React from 'react';
import axios from 'axios';

class GroceryListForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            groceryList: '',
            quantity: ''
        }
    }

    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div><br />
                <form>
                    GroceryList<input type="text" name="groceryList" onChange={(e) => { this.inputHandler(e) }} />
                    Quantity<input type="text" name="quantity" onChange={(e) => { this.inputHandler(e) }} />
                    <input type="submit" value="Submit" onClick={() => { this.props.post(this.state.groceryList, this.state.quantity) }} />
                </form>
            </div>
        )
    }
}

export default GroceryListForm;