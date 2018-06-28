import React from 'react'

const List = props => (
    <span>
        {
         props.items.map((item, index) => <li key={index}>{item}</li>)
        }
    </span>
)

export default List