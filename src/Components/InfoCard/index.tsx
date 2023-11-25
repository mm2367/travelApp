import { Image, View , Text, StyleProp, ImageSourcePropType} from "react-native";
import { styles } from "./styles";
import React from "react";
export interface InfoCardProps{
    icon:any,
    text:string,
    style?: StyleProp<any>;

}

export const InfoCard=(props:InfoCardProps)=>{
return(

    <View style={styles.container}>
    <Image source={props.icon} style={styles.icon}/>
     <Text style={[styles.title,props.style]}>{props.text}</Text>
    </View>
)
}
export default React.memo(InfoCard);