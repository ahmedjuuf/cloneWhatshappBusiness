import React from 'react';
import {View, Text,StyleSheet,Image} from 'react-native';

const Contact = (props) => {
  s = require('../Components/commonStyles')
    return (
      <View style={styles.component}>
        <View style={props.top}>
          <Image 
            style={styles.profilePhoto}
            source={{uri: props.profileImage}}
          />
          {props.icone}
        </View>
        <View style={s.contentText}>
          <View style={[s.section,{alignItems:'flex-start'}]}>
            <View><Text style={[s.name,{marginBottom:4}]}>{props.title} </Text></View>
            <View>{props.content}</View>
          </View>
          {props.options}
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  component:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
  },
  profilePhoto: {
    width: 48,
    height: 48,
    marginRight:10,
    borderRadius: 50,
  },
  contentText:{
    flex: 1,
    justifyContent:'space-between',
    flexDirection:'row',
  },
  section:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between'
  }
});


export default Contact;