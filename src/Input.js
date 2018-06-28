import React, { Component } from 'react'
import List from './List'
import myData from './data.json'

export default class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            listItems: myData.artists
        }
    }

    componentWillMount(){
        this.setState({
            items: this.state.listItems
        })
    }

    filteredList = (event) => {
        let updatedList = this.state.listItems;
        updatedList = updatedList.filter((item) => item.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1
        )
        this.setState({
            items: updatedList
        })
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.filteredList} placeholder="Search the list with React" />
                <ul>
                    <List items={this.state.items} />
                </ul>
            </div>
        )
    }
}
