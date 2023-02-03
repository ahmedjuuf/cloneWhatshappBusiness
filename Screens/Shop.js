import React from 'react';
import {ScrollView,View, StyleSheet} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import PartCatalog from '../Components/partCatalog';
import TextIndication from '../Components/TextIndication'

s = require('../Components/commonStyles')

const Shop = ({navigation}) => {
  const Partie = (props)=>{
    return(
      <View style={{marginLeft:10}}>
        <PartCatalog src={props.src} title={props.title} content={props.content}/>
      </View>
    )
  }
  const TraitHorizontal = ()=>{
    return(
      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
    )
  }
  const Titre = (props)=>{
    return (<TextIndication text={props.text} left={10} couleur={'#04876C'}/>)
  }
    return (
      <ScrollView style={s.ScreenMin}>
        <Pressable onPress={()=>{navigation.navigate('BusinessProfile')}} >
          <Partie src={require('../assets/icons/shop.png')}
            title='Business Profile' content='Manage address,hours,and websites'/> 
        </Pressable>
        <Pressable  onPress={()=>{navigation.navigate('Catalog Manager')}}>          
          <Partie 
            src={require('../assets/icons/squaredMenu.png')}
            title='Catalog'
            content='Show products and services'/>
        </Pressable>
        <TraitHorizontal />
        <Titre text="Reach more customers"/>
        <Pressable onPress={()=>{navigation.navigate('Facebook & Instagram')}}>
          <Partie 
            src={require('../assets/icons/linkHorizontal.png')}
            title='Facebook & Instagram' content='Add WhatsApp to your accounts'/>
        </Pressable>
        <TraitHorizontal />
        <Titre text="Messaging"/>
        <Pressable onPress={()=>{navigation.navigate('Greeting Messages')}}>
          <Partie 
            src={require('../assets/icons/messageCatalog.png')}
            title='Greeting messages'
            content='Welcome new customers automatically'/>
        </Pressable>
        <Pressable onPress={()=>{navigation.navigate('Away message')}}>
          <Partie 
            src={require('../assets/icons/umbrellaDot.png')}
            title='Away message' content="Reply automatically when you're away"/>
        </Pressable>
          <Pressable onPress={()=>{navigation.navigate('Quick replies')}}>
          <Partie 
            src={require('../assets/icons/quick.png')}
            title='Quick replies' content='Reuse frequent messages'/>
          </Pressable>
      </ScrollView>
    );
};


export default Shop;