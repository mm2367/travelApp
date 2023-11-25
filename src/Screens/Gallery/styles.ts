import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
    container:{
        flex:1,
    },

    primary:{
        color:'#4681A3'
    },
    row:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    image:{
        width:'100%',
        height:400,
        borderRadius:20,
        marginTop:24
    },
    backIcon:{
        width:40,
        height:40
    },
     backContainer:{
        position:'absolute',
        margin:32
    }
})

export default styles;