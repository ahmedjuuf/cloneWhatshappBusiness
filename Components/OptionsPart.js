import {View,Text,Image} from 'react-native'

const OptionsPart = (props)=>{

    s = require('../Components/commonStyles')

        return (
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{width:'85%',marginBottom:10, opacity:props.disabled ? .4 : 1}}>
                    <Text style={{fontSize:16,color:'white'}}> {props.title}</Text>
                    <Text style={{fontSize:14,color:'#67767F'}}>{props.text}</Text>
                </View>
                <Image source={props.src}
                    style={{height:'30%',width:"8%",borderRadius:80,tintColor:'gray',resizeMode:'stretch'}}
                />
            </View>
    )}

export default OptionsPart;