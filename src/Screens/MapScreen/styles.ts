import { StyleSheet, Dimensions} from "react-native";
const {width}=Dimensions.get('window');
const styles =StyleSheet.create({
    container:{
        flex:1,
    },
  map:{
    width:'100%',
    height:'100%'
    },
    header:{
        color:'white',
        position:'absolute',
        top:40,
        backgroundColor:'white',
        borderRadius:15,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        margin:24,
        padding:16,
        width:width-48
    },
    title:{
    fontSize:16,
    color:'000'
    },
    back:{
      width:50,
      height:50
    }
})

export default styles;