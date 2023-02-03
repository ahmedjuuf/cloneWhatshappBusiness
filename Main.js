import 'react-native-gesture-handler';
import { StyleSheet, View,Image,Text,Pressable } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Catalogs from './Screens/Shop'
import Accueil from './Screens/Accueil';
import Status from './Screens/Status'
import Call from './Screens/Call';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Menu,MenuItem} from 'react-native-material-menu';
import Search from './Components/Search';

import { useState } from 'react';

const Tab = createMaterialTopTabNavigator();
s = require('./Components/commonStyles')

const Main = ({navigation})=> {
  const[ barreRecherche,setBarreRecherche] = useState(false)

  // L'ellipse(Les 3 points d'options)
  const OptionsEllipsis = (props) =>{
    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);
    return (
        <Menu visible={visible}  
        anchor={
            <Pressable onPress={showMenu}>
                <Image source={require('./assets/icons/ellipsis.png')} style={[styles.icon,{tintColor:props.isGray?'gray':'white'}]}/>
            </Pressable>
            }onRequestClose={hideMenu}
        >
            {
                props.options.map((option,index) =>{
                    return(
                        <MenuItem key={index} style={styles.item} 
                            onPress={()=>{hideMenu,navigation.navigate(option.direction)}}>
                            <Text style={s.name}>{option.name}</Text>
                        </MenuItem>
                    )
                })
            }
        </Menu>
    )
  }

  const Entete = () =>{
    return (
      <View style={styles.entete}>
          <Text style={styles.nomApp}>WhatsApp Business</Text>
          <View style={styles.icons}>
            <Pressable style={{paddingHorizontal:5}}>
              <Image source={require('./assets/icons/camera.png')} style={styles.icon}/>
            </Pressable>
            <Pressable style={{paddingHorizontal:5}} onPress={()=>setBarreRecherche(!barreRecherche)}>              
              <Image source={require('./assets/icons/search.png')} 
                  style={[styles.icon,{marginLeft:20,marginRight:10}]} />
            </Pressable>
            <OptionsEllipsis isGray={true} 
              options={[
                {
                  name: 'Business tools',
                  direction:'Shops'
                },{
                  name: 'Linked devices',
                  direction:'Settings'
                },{
                  name: 'Settings',
                  direction:'Settings'
                }
              ]}/>    
          </View>
        </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      {barreRecherche?
      <View style={{marginHorizontal:25,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Search />
          <Pressable onPress={()=>setBarreRecherche(!barreRecherche)}>
            <Image style={{height:17,width:17,tintColor:'gray'}} source={require('./assets/icons/close.png')}/>
          </Pressable>
      </View>
        
        :
        
        <Entete />}
        <Tab.Navigator
            initialRouteName="Chats"
            screenOptions={() => ({
              tabBarActiveTintColor: 'green',
              tabBarInactiveTintColor: 'gray',
              tabBarLabelStyle: { fontSize: 14,fontWeight:'600' },
              tabBarStyle: { backgroundColor: '#202C33',justifyContent:'space-between'},
            })}
          >
            <Tab.Screen name="Catalogs" component={Catalogs} 
            options={
              {tabBarLabel:()=>{ 
                return (<Image source={require('./assets/icons/shop.png')} 
                style={{height:20,width:20,tintColor:'gray'}}/>)}}} />
            <Tab.Screen name="Chats" component={Accueil} />
            <Tab.Screen name="Status" component={Status}/>
            <Tab.Screen name="Appels" component={Call} />
        </Tab.Navigator>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'#202C33'
    
  },
  entete:{
    flexDirection:'row',
    backgroundColor: '#202C33',
    justifyContent:'space-between',
    paddingBottom:15,
    paddingHorizontal:10,
    paddingTop:10,
    alignItems:'center'
  },
  nomApp:{
    color:'gray',
    fontSize:17,
    fontWeight:'600'
  },
  icons:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'baseline'
  },
  icon:{
    tintColor:'gray',
    height:23,
    width:23,
  },
  item:{
    backgroundColor:'#202C33',
    width:'100%',
  },
  iconOpt:{
    height:20,
    width:20,
  },
});

export default Main;