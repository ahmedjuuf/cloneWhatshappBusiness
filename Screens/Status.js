import React,{ useState, useEffect } from 'react';
import {View, Text,StyleSheet,Image, ScrollView, Alert} from 'react-native';
import Contact from '../Components/Contact';
import TextIndication from '../Components/TextIndication';
import BoutonFixed from '../Components/BoutonFixed';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


const Status = () => {
  let [viewMute, setViewMute] = useState(false)
    return (
      <View>
        <ScrollView style={s.ScreenMin}>
          <Contact
            profileImage='https://reactnative.dev/img/tiny_logo.png'
            title="My status"
            top={{top:10}}
            content = {
            <View style={{flexDirection:'row'}}>
              <Text style={s.comment}>Tap to add status</Text>
            </View>}
            icone = {
              <View style={styles.customView}>
                <Image source={require('../assets/icons/add.png')}
                      style={styles.image} />
              </View>}/>
          <TextIndication text="Viewed Updates" couleur={'gray'}/>
          <Contact
           profileImage='https://reactnative.dev/img/tiny_logo.png'
           title="Juuf"
           content = {
            <View style={{flexDirection:'row'}}>
              <Text style={s.comment}>47 minutes ago</Text>
            </View>
          }/>
          <View>
            <Pressable onPress={()=>setViewMute(viewMute=>!viewMute)}>
              <TextIndication
                text="muted updates"
                src={viewMute?
                  require('../assets/icons/chevronBas.png'):
                  require('../assets/icons/chevronHaut.png')} 
                couleur={'#00A884'}/>
            </Pressable>
          </View>
        </ScrollView>
      <BoutonFixed src={require('../assets/icons/pencil.png')} 
        bottom={105} taille={20} couleur={'#202C33'} right={22}/>
      <BoutonFixed src={require('../assets/icons/cameraDotted.png')}  
        bottom={40} taille={25} couleur={'#00A884'} right={20}/>
      </View>
    );
};

const styles = StyleSheet.create({
  customView:{
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center',
    right:-25,
    top:-23,
    height:25,
    width:25,
    borderRadius:50
  },
  image:{
    height:25,
    width:25,
  }

});

export default Status;