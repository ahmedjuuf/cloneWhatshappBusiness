import React from 'react';
import {View,StyleSheet, ScrollView,Image,Text} from 'react-native';
import Contact from '../Components/Contact';
import TextIndication from '../Components/TextIndication';
import BoutonFixed from '../Components/BoutonFixed';
import MarqueeView from 'react-native-marquee-view';
import TitleComponent from '../Components/TitleComponent';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Call = ({navigation}) => {
    return (
      <View>
        <ScrollView style={s.ScreenMin}>
          <Pressable onPress={()=>{navigation.navigate("Create call link")}}>
            <TitleComponent 
            taille={45} marginRight={10}
            Image={require('../assets/icons/iconLink.png')}
            title="Create call link"
            text={<MarqueeView><View><Text style={s.comment}>Share a link for your WhatsApp call</Text></View></MarqueeView>}/>
          </Pressable>
          <TextIndication text="Recent" couleur={"gray"}/>

          <Contact
            profileImage='https://reactnative.dev/img/tiny_logo.png'
            title="Ahmed Juuf" top={{top:-10}}
            content = {
              <View style={{flexDirection:'row',alignItems:'baseline'}}>
                <Image source={require('../assets/icons/flecheHaut.png')} style={[styles.iconCall,{tintColor:'green'}]} />
                <Text style={s.comment}>January 13, 7:38 AM</Text>
              </View>
            }
            options = {
            <View style={[s.section,{alignItems:'flex-end',justifyContent:'center'}]}>
              <Image source={require('../assets/icons/phoneCall.png')} style={styles.icon} />
            </View>
            }
          />
        </ScrollView>
        <BoutonFixed event={()=>{navigation.navigate("Select contact")}}
          src={require('../assets/icons/addPhone.png')}
          bottom={40} taille={25} couleur={'#00A884'} right={20} />
      </View>
    );
};

const styles = StyleSheet.create({
  icon:{
    height:20,
    width:20,
    tintColor:'green'
  },
  iconCall:{
    height:14,
    width:17,
    marginRight:10,
  }
});

export default Call;