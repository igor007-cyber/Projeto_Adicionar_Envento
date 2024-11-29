import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    container:{
      flex: 1,
      backgroundColor: "#131016",
      padding:24
    },
  
    texto1:{
      color: "#FDFCFE",
      fontSize:24,
      fontWeight: "bold",
      marginTop: 48
    },
  
    texto2:{
      color: "#6B6B6B",
      fontSize: 16,
    },

    input:{
        flex: 1,
        height:56,
        backgroundColor: "#1F1E25",
        borderRadius:5,
        color: "#FFFFFF",
        padding:16,
        marginRight:12,
    },

    button:{
      width:56,
      height:56,
      borderRadius:5,
      backgroundColor: '#31CF67',
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonText:{
      color: "#FFFFFF",
      fontSize:24,
    },

    form:{
      width:"100%",
      flexDirection: "row",
      marginBottom:42,
      marginTop:36
    },

    list:{
      color:'#FFFFFF',
      fontSize:14,
      textAlign: 'center',
    }
  
  }); 