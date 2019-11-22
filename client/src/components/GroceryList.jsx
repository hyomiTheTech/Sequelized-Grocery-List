import React from "react";
import GroceryListEntry from './GroceryListEntry.jsx'

const GroceryList = (props) => {

    return (
        <div className='list'>
            {
                props.lists.map((list, i) => (
                    < GroceryListEntry lists={list} index={i} key={i} delete={props.delete} update={props.update} />
                ))

            }
            {/* {console.log(props.lists)} */}
        </div>
    )
}

export default GroceryList