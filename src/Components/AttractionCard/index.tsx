import { Image, ImageSourcePropType, ImageURISource, StyleProp, Text, View } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import React from "react";

export interface AttractionsProps{
    title:string;
    subTitle:string;
    imgSrc:string;
    style:StyleProp<any>;
    onPress: any
}
export const AttractionCard=(props:AttractionsProps)=>{
    return(
        <TouchableOpacity onPress={()=>props.onPress()} style={[styles.card,props.style]}>
            <Image style={styles.image} source={{uri:props.imgSrc}}/>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.row}>
                <Image style={styles.icon} source={require('../../assets/locationicon.png')}/>
                <Text style={styles.subTitle}>{props.subTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}