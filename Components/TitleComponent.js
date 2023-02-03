import { View,Text,Image,StyleSheet } from "react-native";


const TitleComponent = (props)=>{

    return (
      <View style={styles.component}>
        <View style={[styles.cadreImage,{width:props.taille,height:props.taille,marginRight:props.marginRight}]}>
          {!props.icon?
            <Image style={styles.profilePhotoIcon} source={props.Image} />
            :<Image style={{width:props.taille,height:props.taille,borderRadius:50}} source={props.Image} />
          }
        </View>
        <View style={styles.contentText}>
          <View style={styles.section}>
            <View><Text style={s.name}>{props.title}</Text></View>
            {props.text? <View>{props.text}</View>:null}
          </View>
        </View>
        {props.imagesRight?props.imagesRight:null}
      </View>
    )
};

const styles = StyleSheet.create({
    component:{
      display: 'flex',
      flexDirection: 'row',
      alignItems:'center',
    },
    cadreImage:{
      backgroundColor:'#00A884',
      alignItems:'center',justifyContent:'center',
      borderRadius:30,
    },
    profilePhotoIcon: {
      width: 25,
      height: 25,
      tintColor:'white',
    },
    section:{
      justifyContent:'space-between',
      marginRight:10,
    },
    contentText:{
      flex: 1,
      justifyContent:'space-between'
    }
  });
export default TitleComponent;