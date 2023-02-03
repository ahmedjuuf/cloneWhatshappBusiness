// import { Text,StyleSheet,Image } from "react-native";
// import { Menu, MenuItem } from 'react-native-material-menu';
// import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
// import { useState } from "react";
// s = require('../Components/commonStyles')
// const OptionsEllipsis = (props,{navigation}) =>{
//     const [visible, setVisible] = useState(false);
//     const hideMenu = () => setVisible(false);
//     const showMenu = () => setVisible(true);
//     return (
//         <Menu visible={visible}  
//         anchor={
//             <Pressable onPress={showMenu}>
//                 <Image source={require('../assets/icons/ellipsis.png')} style={[styles.iconOpt,{tintColor:props.couleur?'gray':'white'}]}/>
//             </Pressable>
//             }onRequestClose={hideMenu}
//         >
//             <MenuItem style={styles.item} onPress={()=>{hideMenu}}><Text style={s.name}>Advertise on Facebook </Text></MenuItem>
//             <MenuItem style={styles.item} onPress={hideMenu}><Text style={s.name}>Business tools</Text></MenuItem>
//             <MenuItem style={styles.item} onPress={hideMenu}><Text style={s.name}>New groupe</Text></MenuItem>
//             <MenuItem style={styles.item} onPress={hideMenu}><Text style={s.name}>New broadcast</Text></MenuItem>
//             <MenuItem style={styles.item} onPress={hideMenu}><Text style={s.name}>Business tools</Text></MenuItem>
//             <MenuItem style={styles.item} onPress={()=>{hideMenu,navigation.navigate('Settings')}}><Text style={s.name}>Linked devices</Text></MenuItem>
//             {
//                 props.options.map((option,index) =>{
//                     return(
//                         <MenuItem key={index} style={styles.item} 
//                             onPress={()=>{hideMenu,navigation.navigate(option.direction)}}>
//                             <Text style={s.name}>{option.name}</Text>
//                         </MenuItem>
//                     )
//                 })
//             }
//         </Menu>
//     )
// }

// const styles = StyleSheet.create({
//     item:{
//         backgroundColor:'#202C33',
//         width:'100%',
//       },
//       iconOpt:{
//         height:20,
//         width:20,
//       },
// })

// export default OptionsEllipsis;