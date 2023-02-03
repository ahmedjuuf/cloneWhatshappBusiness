import React, { useEffect, useState } from 'react';
import {View, ScrollView,Image,Text,StyleSheet, SafeAreaView} from 'react-native';
import Contact from '../Components/Contact';
import BoutonFixed from '../Components/BoutonFixed';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

s = require('../Components/commonStyles')
const Accueil = ({navigation}) => {
  const [data,setData] = useState([])
  const [filteredData,setFilteredData] = useState([])
  useEffect(()=>{
    fetchData('https://randomuser.me/api/?results=20')
  },[])

  const fetchData = async(url)=>{
    try{
      const response = await fetch(url);
      const reponseJson = await response.json();
      setData(reponseJson.results);
      setFilteredData(reponseJson.results);
    }catch(erreur){
      console.log(erreur)
    }
  }
    return (
      <SafeAreaView>
        <ScrollView style={s.ScreenMin}>
            {
              filteredData.map((item,index)=>{
                return(                
                  <Pressable key={index} onPress={()=>{navigation.navigate('Message',{title:'Name'})}}>
                    <View style={{marginVertical:10}}>
                      <Contact
                        profileImage={item.picture.large}
                        title={item.name.first +" "+ item.name.last}
                        content = {
                          <View style={{flexDirection:'row'}}>
                              <Image source={require('../assets/icons/micro.png')} style={[s.icon,{tintColor:'green'}]} />
                              <Image source={require('../assets/icons/ticks.png')} style={[s.icon,{marginRight:7}]} />
                              <Text style={s.smallText}>{item.login.username}</Text>
                          </View>
                        }
                        options = {
                          <View style={[s.section,{alignItems:'flex-end'}]}>
                            <View style={{flexDirection:'row'}}>
                            <View><Text style={s.smallText}>12/2/2022</Text></View> 
                            </View>
                            <View style={{flexDirection:'row'}}>
                              <Image  source={require('../assets/icons/pin.png')} style={s.icon}/>
                              <Text style={styles.nombreMsgUnread}>2</Text>
                            </View> 
                          </View>
                        }/>
                    </View>
                  </Pressable>
                )
              })
            }
        </ScrollView>
        <BoutonFixed event={()=>{navigation.navigate("Select contact")}}
        src={require('../assets/icons/addMessage.png')}
        bottom={40} taille={25} couleur={'#00A884'} right={20} />
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  nombreMsgUnread:{
    backgroundColor:'#00A884',
    height:20,width:20,
    borderRadius:50,
    textAlign:'center'
  }
})

export default Accueil;