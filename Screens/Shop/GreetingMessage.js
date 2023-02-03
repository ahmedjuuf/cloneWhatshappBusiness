import {View,Text} from 'react-native'
import OptionsPart from '../../Components/OptionsPart'
const GreetingMessage = ()=>{
    return(
        <View style={s.ScreenMin}>
            <OptionsPart title="Send Greeting Message"
            text="Greet customers when they message you the first time or after 14 days of no activity"
             />
            
            <OptionsPart title="Greeting Message"
                text="Thank you for contacting Juuf ! Please let us know how we can help you "
                src={require("../../assets/icons/pencil.png")}
                disabled={true}
            />
            <OptionsPart title="Recipients"
                text="Send to everyonre"
                disabled={true}
            />
            <Text style={{fontSize:14,color:'#ead7d7',paddingRight:25,opacity:.6}}>Greeting messages are only sent when the phone ha an active internet connection.</Text>
            <Text style={{color:'#68acff'}}>Learn more</Text>
        </View>
    )
}

export default GreetingMessage;