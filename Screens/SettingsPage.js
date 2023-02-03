import { View,Text,StyleSheet,Image, ScrollView } from "react-native";
import PartCatalog from "../Components/partCatalog";

s = require('../Components/commonStyles')
const SettingsPage = () => {
    return (
        <ScrollView style={s.ScreenMin}>
            <View style={styles.component}>
            <Image style={styles.profilePhoto}
                source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <View style={styles.contentText}>
                <View style={[styles.section]}>
                    <Text style={s.name}>Juuf </Text>
                    <Text style={s.comment}>...</Text>
                </View>
                <View style={[styles.section]}>
                    <Image style={styles.icon} source={require('../assets/icons/qr_code.png')} />
                </View>
            </View>
            </View>
            <View
                style={{
                borderBottomColor: 'gray',
                borderBottomWidth: StyleSheet.hairlineWidth,
                width:"150%"
                }}
            ></View>
            <PartCatalog 
                src={require('../assets/icons/shop.png')}
                title='Business tools'
                content='Profile, catalog, messaging tools'/>
            <PartCatalog 
                src={require('../assets/icons/key.png')}
                title='Account'
                content='Security notification,change number'/>
            <PartCatalog 
                src={require('../assets/icons/photo.png')}
                title='Avatar'
                content='Create, edit,profile photo'/>
            <PartCatalog 
                src={require('../assets/icons/padlock.png')}
                title='Privacy'
                content='Block contacts, disappearing messages'/>
            <PartCatalog 
                src={require('../assets/icons/messageCatalog.png')}
                title='Chats'
                content='Theme, walpapers, chat history'/>
            <PartCatalog 
                src={require('../assets/icons/bell.png')}
                title='Notifications'
                content='Message, group & call tones'/>
            <PartCatalog 
                src={require('../assets/icons/padlock.png')}
                title='Storage and data'
                content='Network usage, auto-download'/>
            <PartCatalog 
                src={require('../assets/icons/globe.png')}
                title='App language'
                content="English(Phone's language)"/>
            <PartCatalog 
                src={require('../assets/icons/help.png')}
                title='Help'
                content='Help center, contact us, privacy policy'/>
            <PartCatalog 
                src={require('../assets/icons/friends.png')}
                title='Invite a contact'
                content='Help center, contact us, privacy policy'/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    component:{
      display: 'flex',
      flexDirection: 'row',
      paddingVertical:5,
    },
    profilePhoto: {
      width: 48,
      height: 48,
      marginVertical:5,
      marginRight:10,
      borderRadius: 50,
    },
    section:{
      justifyContent:'space-between',
      marginRight:10,
      alignItems:'center',
    },
    contentText:{
        flex: 1,
        justifyContent:'space-between',
        alignItems:"center",
        flexDirection:'row'
    },
    icon:{
    tintColor:'green',
    height:25,
    width:25,
    },


  });

export default SettingsPage;