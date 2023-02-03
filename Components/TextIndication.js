import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';


const TextIndication = (props) => {

    return (
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginRight:10}}>
        <Text 
            style={[{marginVertical:13,color:'gray',fontSize:14,fontWeight:'600',color:props.couleur,marginLeft:props.left}]}

            >{props.text}
        </Text>
        <Image 
            style={[styles.icon,{tintColor:'#00A884'}]}
            source={props.src}
          />
      </View>
    );
};

const styles = StyleSheet.create({
  icon:{
    tintColor:'gray',
    height:20,
    width:18,
    marginRight:-10
  },
})
export default TextIndication;