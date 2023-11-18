import { StyleSheet } from "react-native";

export const styles =StyleSheet.create({
    item:{
        color:'rgba(0,0,0,0.5)',
        fontFamily: 'Inter',
        fontSize:12,
        fontWeight:"400",
        textAlign:'center',
        lineHeight:14.52,
        overflow:'scroll',



    },
    selectedItem:{
        fontWeight:'600',
        color:'#000000',
    },
    itemContainer:{
        marginRight:17,
        marginVertical:8

    },
    selectItemContainer:{
        borderBottomColor:'#4681A3',
        borderBottomWidth:1
    },
    flatListMargin:{
        marginRight:-30
    }
})