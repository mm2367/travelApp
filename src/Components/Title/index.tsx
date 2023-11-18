import React from "react";
import {StyleProp, Text, TextStyle} from "react-native";
import styles from "./styles";

export interface TitleProps{
    type:'primary'|'secondary';
    text:string;
    style?: StyleProp<TextStyle>;
}
const Title:React.FunctionComponent<TitleProps>=({text,type,style})=>{
    return(
    <Text style={[type==='primary'? styles.primary: styles.secondary,style]}>{text}</Text>
    );
};

Title.defaultProps={
    text:'Default Text'

}
export default React.memo(Title);