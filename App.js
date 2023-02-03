import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Main from './Main';
import CreateCallLink from './Screens/CreateCallLink';
import Shop from './Screens/Shop';
import SettingsPage from './Screens/SettingsPage';
import BusinessProfile from './Screens/Shop/BusinessProfile';
import CatalogManager from './Screens/Shop/CatalogManager';
import AdvertiseFacebook from './Screens/Shop/AdvertiseFacebook';
import FacebookInstagram from './Screens/Shop/FacebookInstagram';
import AwayMessage from './Screens/Shop/AwayMessage';
import QuickReplies from './Screens/Shop/QuickReplies';
import GreetingMessage from './Screens/Shop/GreetingMessage';
import MessagePage from './Screens/Discussions/MessagePage';
import {Menu,MenuItem} from 'react-native-material-menu';

import Search from './Components/Search';
import SelectContact from './Screens/SelectContact';

import {Image,View,StyleSheet,Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useState } from 'react';

const Stack = createNativeStackNavigator();
export default function App() {
  const OptionsEllipsis = (props) =>{
    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);
    return (
        <Menu visible={visible}  
          anchor={
              <Pressable onPress={showMenu}>
                  <Image source={require('./assets/icons/ellipsis.png')} style={[styles.iconEllips,{tintColor:props.isGray?'gray':'white'}]}/>
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
const [isSearch,setIsSearch] = useState(true)
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerTintColor: 'white',
        hideWhenScrolling:true,
        headerStyle: { backgroundColor: '#202C33' },
      }}>
        <Stack.Screen name="Main"
          options={{headerShown:false}}
          component={Main}/> 
        <Stack.Screen name="BusinessProfile" component={BusinessProfile}
        ScreenOptions={{showLabel:false}}/>
        <Stack.Screen name="Catalog Manager" component={CatalogManager}/>
        <Stack.Screen name="Advertise on Facebook" component={AdvertiseFacebook}/>
        <Stack.Screen name="Facebook & Instagram" component={FacebookInstagram}/>
        <Stack.Screen name="Greeting Messages" component={GreetingMessage}
       options={({navigation}) => ({
        headerRight: () => 
          (<View style={styles.icons}>
              <Pressable style={{paddingHorizontal:12}} onPress={()=>navigation.goBack()}>
                <Text style={[s.name,{fontSize:17}]}>Save</Text>
              </Pressable>
              <Pressable style={{paddingLeft:12}}>
                <OptionsEllipsis 
                  options={[
                    {
                      name: 'Business tools',direction:'Shops'
                    },{
                      name: 'Linked devices', direction:'Settings'
                    },{
                      name: 'Settings', direction:'Settings'
                    }
                  ]}
                />
              </Pressable>
          </View>)
      })}        
        />
        <Stack.Screen name="Away message" component={AwayMessage}
       options={({navigation}) => ({
        headerRight: () => 
          (<View style={styles.icons}>
              <Pressable style={{paddingHorizontal:12}} onPress={()=>navigation.goBack()}>
                <Text style={[s.name,{fontSize:17}]}>Save</Text>
              </Pressable>
              <Pressable style={{paddingLeft:12}}>
                <OptionsEllipsis 
                  options={[
                    {
                      name: 'Business tools',direction:'Shops'
                    },{
                      name: 'Linked devices', direction:'Settings'
                    },{
                      name: 'Settings', direction:'Settings'
                    }
                  ]}
                />
              </Pressable>
          </View>)
      })}
        />
        <Stack.Screen name="Quick replies" component={QuickReplies}/>

        <Stack.Screen name="Create call link" 
          component={CreateCallLink}/>

        <Stack.Screen name="Message" component={MessagePage}
          options={({ route }) => ({
            headerTitle:() =>{
              return(
                <Pressable style={{flexDirection:'row',alignItems:'center'}}>
                  <Image source={require('./assets/icons/profile.jpg')} style={styles.iconProfile}/>
                    <View >
                      <Text style={{color:'white',fontSize:15,fontWeight:'500'}}>{route.params.title}</Text>
                      {route.params.texte?<Text style={{color:'gray',fontSize:13}}>{route.params.texte}</Text>:null}
                    </View>
                </Pressable>
              )
            },
            headerRight: () => (
              <View style={styles.icons}>
                <Pressable style={{paddingHorizontal:12}}>
                  <Image style={styles.icon} source={require('./assets/icons/videoCall.png')} />
                </Pressable>
                <Pressable style={{paddingHorizontal:12}}>
                  <Image style={styles.icon} source={require('./assets/icons/phoneCall.png')} />
                </Pressable>
                <Pressable style={{paddingLeft:12}}>
                  <OptionsEllipsis 
                    options={[
                      {
                        name: 'Business tools',direction:'Shops'
                      },{
                        name: 'Linked devices', direction:'Settings'
                      },{
                        name: 'Settings', direction:'Settings'
                      }
                    ]}
                  />
                </Pressable>
              </View>
            ),
          })}/>
        <Stack.Screen name="Select contact" component={SelectContact}
                  options={() => ({
                    showLabel:isSearch,
                    headerTitle:()=><Search titre="Select contact" visible={isSearch}/>,
                    headerRight: () => 
                      isSearch?(<View style={styles.icons}>
                          <Pressable style={{paddingHorizontal:12}} onPress={()=>setIsSearch(!isSearch)}>
                            <Image style={styles.icon} source={require('./assets/icons/search.png')} />
                          </Pressable>
                          <Pressable style={{paddingLeft:12}}>
                            <OptionsEllipsis
                              options={[
                                {
                                  name: 'Business tools',direction:'Shops'
                                },{
                                  name: 'Linked devices', direction:'Settings'
                                },{
                                  name: 'Settings', direction:'Settings'
                                }
                              ]}
                            />
                          </Pressable>
                        </View>)
                      :<Pressable onPress={()=>setIsSearch(!isSearch)}>
                        <Image style={[styles.icon,{tintColor:'gray'}]} source={require('./assets/icons/close.png')}/>
                      </Pressable>
                  })}/>

        <Stack.Screen name="Catalogs" component={Shop}/>
        <Stack.Screen name="Settings" component={SettingsPage}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  icons:{
    flexDirection:'row',
    alignItems:'baseline'
  },
  icon:{
    height:20,
    width:20,
    padding:5,
    tintColor:'white',

  },
  iconProfile:{
    height:40,
    width:40,
    borderRadius:50,
    marginRight:10,
    marginLeft:-20
  },
  iconEllips:{
    tintColor:'gray',
    height:23,
    width:23,
  },
  item:{
    backgroundColor:'#202C33',
    width:'100%',
  },
})