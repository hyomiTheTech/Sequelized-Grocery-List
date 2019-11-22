import React from "react";

const GroceryListEntry = (props) => {
    return (
        <div className="entry">
            <li>
                {props.lists.groceryList} -- {props.lists.quantity}
                <button onClick={() => { var list = window.prompt('groceryList?'); var quant = window.prompt('quantity?'); props.update(props.lists.id, list, quant) }}>Update</button><button onClick={() => { props.delete(props.lists.id) }}>X</button>
            </li>
        </div >


    )
}


export default GroceryListEntry;