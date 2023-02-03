import React from 'react';
import {View,Image, Text,StyleSheet} from 'react-native';


s = require('../Components/commonStyles')
const PartCatalog = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={props.src}/>
            <View style={styles.texts}>
                <Text style={styles.title}>{props.title}</Text>
                {props.content?<Text style={s.comment}>{props.content}</Text>:null}
            </View>
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      marginVertical:15,
      flexDirection:'row',
      alignItems:'center',
      marginRight:90
    },
    image:{
      tintColor:'gray',
      height:25,
      width:25,
      marginRight:20
    },

    title:{
      fontSize:16,
      fontWeight:'400',
      color:'white'
    },
    content:{
      fontSize:14,
      marginTop:5,
      color:'gray'
    }
  });
  
  export default PartCatalog;