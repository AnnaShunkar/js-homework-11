import { Component } from "react";

class ClassComponent extends Component{
    constructor(props) {
        super(props);
        this.state = { name: "Enjoy" };
    };
        render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
            </div>
        )
    };
};
export default ClassComponent;
