import { Dimensions, StyleSheet } from "react-native";

const {width}=Dimensions.get('window');
export const styles =StyleSheet.create({
    card:{

        padding:4,
        borderWidth:1,
        borderColor:'#E2E2E2',
        borderRadius:15,
        marginBottom:16
    },
    image:{
        width:(width-96)/2,
        height:120,
        borderRadius:15,
        shadowColor:'rgba(171, 150, 140, 0.1)',

    },
    title:{
        fontSize:12,
        fontWeight:'500',
        marginTop:12,
        marginLeft:6,
        color:"#000000"

    },
    subTitle:{
        fontSize:10,
        fontWeight:'300',
        color:'rgba(0, 0, 0, 0.5)',

    },
    icon:{
        width:10,
        height:10,
        marginRight:4
    },
    row:{
        marginBottom:12,
        marginLeft:6,
        marginTop:4,
        flexDirection:'row',
        alignItems:'center'
    }
})