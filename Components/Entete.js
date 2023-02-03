
import { Image,View,Text,StyleSheet} from 'react-native';

const Entete =()=> {
  return (
        <View style={styles.entete}>
          <Text style={styles.nomApp}>WhatsApp Business</Text>
          <View style={styles.icons}>
            <Image source={require('../assets/icons/camera.png')} style={styles.icon}/>
            <Image source={require('../assets/icons/search.png')} style={[styles.icon,{marginLeft:20,marginRight:10}]} />
            <Image source={require('../assets/icons/ellipsis.png')} style={styles.icon}/>
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  entete:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

  },
  nomApp:{
    color:'gray',
    fontSize:20,
    fontWeight:'500'
  },
  icons:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  icon:{
    tintColor:'gray',
    height:25,
    width:25,
  },
});

export default Entete;