import { useState } from 'react'
import {View,Image,StyleSheet,Text} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'


s = require('../../Components/commonStyles')
const MessagePage=()=>{
    const [valeurInput,setValeurInput] = useState("")
    const [Messages,setMesages] = useState([
        {
            date: '14:PM',
            estVu:false,
            estDelivre:false,
            type:'audio',
            heureEnvoi:'14:PM',
            isSentByMe:true,
            contenu:'Hello Mr 1, comment allez-vous?'
        },
        {
            date: '15:PM',
            estVu:false,
            estDelivre:false,
            type:'audio',
            heureEnvoi:'15:PM',
            isSentByMe:true,
            contenu:'Hello Mr 2, comment allez-vous?'
        },
        {
            date: '17:AM',
            estVu:false,
            estDelivre:false,
            type:'audio',
            heureEnvoi:'14:PM',
            isSentByMe:true,
            contenu:'Hello Mr 3, comment allez-vous?'
        },
    ])
    return (
        <View>
            <ScrollView style={s.ScreenMin}>
                    {// Ici, on mappe le tableau de messages
                        Messages.map((message,index)=>{
                            return(
                                <View key={index} style={{alignItems:!message.isReceived?'flex-end':'flex-start'}}>
                                    <View style={[styles.messageComponent,message.isReceived?styles.messageCReceived:styles.messageCSent]}>
                                        <Text style={styles.message}>{message.contenu}</Text>
                                        <View>
                                            <Text style={[s.smallText,{textAlign:'right'}]}>{message.heureEnvoi}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        
                        })
                    }
            </ScrollView>
            <View style={styles.bottom}>
                <TextInput placeholder='Message' placeholderTextColor={'gray'}
                value={valeurInput}
                    onChangeText={text =>setValeurInput(text)}
                    multiline={true}
                    style={styles.textInput}/>
                    <Pressable 
                        style={styles.buttonValidate}
                        onPress={()=>{
                            let msg=({
                                    date: '7:AM',
                                    estVu:false,
                                    estDelivre:true,
                                    type:'audio',
                                    heureEnvoi:'14:PM',
                                    isSentByMe:true,
                                    contenu:valeurInput
                                })
                            setMesages([...Messages,msg])
                            setValeurInput("")
                        }}
                    
                    >
                        <Image 
                            source={valeurInput=="" ?require('../../assets/icons/micro.png'):require('../../assets/icons/sendMsg.png')}
                            style={{height:25,width:25,tintColor:'white'}}/>
                    </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    messageComponent:{
        borderRadius:5,
        padding:5,
        marginBottom:10,   
        maxWidth:"85%",    
    },
    messageCSent:{
        backgroundColor:'#00A884',
    },
    messageCReceived:{
        backgroundColor:'#202C33',
    },
    message:{
        fontSize:15,
        color:'white',
        marginRight:10
    },
    bottom:{
        position:'absolute',
        bottom:5,
        height:50,width:'100%',
        flexDirection:'row',
        alignItems:'center'
    },
    textInput:{
        backgroundColor:'#202C33',
        color:'white',
        fontSize:17,
        width:'83%',
        borderRadius:20,
        paddingVertical:5,
        paddingHorizontal:10,
        marginHorizontal:5
    },
    buttonValidate:{
        height:46,width:45,
        backgroundColor:'#00A884',
        borderRadius:50,
        alignItems:'center',justifyContent:'center'
    }
})
export default MessagePage;