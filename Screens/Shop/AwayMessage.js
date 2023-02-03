import {View,Text,StyleSheet} from 'react-native'
import OptionsPart from '../../Components/OptionsPart'
const AwayMessage = ()=>{
    s = require('../../Components/commonStyles')
    return(
        <View style={s.ScreenMin}>
        <View style={s.ScreenMin}>
            <OptionsPart title="Send away message"
            text="Automatically reply with a message when you are away"
             />
            
            <OptionsPart title="away Message"
                text="Thank you for your message. We're unavailable 
                    right now,but will respond as soon as possible "
                src={require("../../assets/icons/pencil.png")}
                disabled={true}
            />
            <OptionsPart title="Schedule"
                text="Always send"
                disabled={true}
            />
            <OptionsPart title="Recipient"
                text="Send to everyone"
                disabled={true}
            />
            <View
                style={{
                borderBottomColor: 'gray',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginHorizontal:-20,
                marginBottom:10
                }}
            ></View>
            <Text style={{fontSize:14,color:'#ead7d7',paddingRight:25,opacity:.6}}>Away messages are only sent when the phone ha an active internet connection.</Text>
            <Text style={{color:'#68acff'}}>Learn more</Text>
        </View>
        </View>
    )
}

export default AwayMessage;