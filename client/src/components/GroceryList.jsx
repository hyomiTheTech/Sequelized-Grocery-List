import React from "react";
import GroceryListEntry from './GroceryListEntry.jsx'

const GroceryList = (props) => (
    <div>
        <ul>
            {
                props.lists.map((list, i) => {
                    <GroceryListEntry key={i} lists={list} />
                })
            }
        </ul>
    </div>
)

export default GroceryList