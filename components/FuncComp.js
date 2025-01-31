import {Text} from "react-native"


export default function FunComp({name,age, children}){
    return<Text style = {{fontSize:24, fontWeight:"bold"}}>Hello {name}! Your age is {age} {children}</Text>
}

FunComp.defaultProps = {
    name: "empty name",
    age: 20
}