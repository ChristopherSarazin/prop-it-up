import React, { Component } from "react";


class People extends Component {
    render(){
        return (
        <>
            <div className="People">
                <h3>Name: {this.props.lastName} , {this.props.firstName}</h3>
                <h5>Age: {this.props.age}</h5>
                <h5>Hair Color: {this.props.hairColor}</h5>
            </div>
        </>
        )
    }
}

export default People;