import { Image, ImageSourcePropType, ImageURISource, Text, View } from "react-native";

export interface AttractionsProps{
    title:string;
    imgSrc:string;
}
export const Attractions=(props:AttractionsProps)=>{
    return(
        <View>
            <Image source={{uri:props.imgSrc}}/>
            <Text>{props.title}</Text>
        </View>
    )
}