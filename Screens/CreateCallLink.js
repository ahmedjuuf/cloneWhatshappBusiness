import {View,Text, ScrollView, Image} from 'react-native'
import PartCatalog from '../Components/partCatalog';


s = require('../Components/commonStyles')
const CreateCallLink = ()=>{

    return(
        <View style={s.ScreenMin}>
            <ScrollView>
                <View>
                    <Text style={{color:"white",margin:13}}>Anyone with WhatsApp can use this link to join this call. Only share it with people you trust</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={{backgroundColor:'#00A884',height:45,width:45,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
                        <Image source={require('../assets/icons/videoCall.png')} 
                        style={{tintColor:'white',height:20,width:20}}/>
                    </View>
                <Text style={{color:'#77b5fe',fontSize:17,fontWeight:'400',marginHorizontal:5}}>https://call.WhatshApp.com/video/de4VcdmL9Jdl6Na2nsoCn2okS</Text>
                </View>
                <PartCatalog title="Call type" content="Video"/>
                <PartCatalog 
                    src={require('../assets/icons/send.png')}
                    title='Send link via WhatshApp Business'/>
                <PartCatalog 
                    src={require('../assets/icons/copy.png')}
                    title='Copy link'/>
                <PartCatalog 
                    src={require('../assets/icons/share.png')}
                    title="Share link"/>
            </ScrollView>
        </View>
    )

}

export default CreateCallLink;