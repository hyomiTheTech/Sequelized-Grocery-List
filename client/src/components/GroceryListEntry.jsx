import React from "react";

const GroceryListEntry = (props) => (
    <li>
        {props.lists.groceryList}
        {props.lists.quantity}
    </li>

)

export default GroceryListEntry