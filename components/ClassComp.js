import React, {Component}  from "react";
import {Text} from "react-native";
import PropTypes from "prop-types";

class ClassComp extends Component{
    static defaultProps = {
        name: "default name",
        age:0
    }
    render(){
        const {name,age} = this.props;
        return<Text style={{fontSize:24, fontWeight:"bold", color:"white"}}>My class comp. You are {name}. Your age: {age}</Text>
    }
}

// ClassComp.propTypes = {
// name: PropTypes.string,
// age: PropTypes.number,
// skills: PropTypes.arrayOf(propTypes.string)
// }
export default ClassComp;