import { Text,View,StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BoutonFixed from "../../Components/BoutonFixed";
const QuickReplies = () =>{

    return (
        <View>
            <ScrollView style={s.ScreenMin}>
                <View>
                    <Text style={{color:'gray',fontWeight:'bold', marginVertical:10}}>merci</Text>
                    <Text style={{color:'white',fontSize:14, marginVertical:10}}>
                        Nous vous remercions de votre confiance. Nous serions heureux de continuer a travailler avec vous
                    </Text>
                </View>
                <View
                        style={{
                        borderBottomColor: 'gray',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginHorizontal:-10,
                        marginBottom:10
                        }}
                    ></View>
                <Text style={{fontSize:14,color:'#ead7d7',paddingRight:25,opacity:.6}}>To use type "/" with your keyboard or 
                    select quick replies from the attachement tray. <Text style={{color:'#68acff'}}>Learn more</Text></Text>
            </ScrollView>
            <BoutonFixed event={()=>{navigation.navigate("Select contact")}}
                src={require('../../assets/icons/plus.png')}
                bottom={40} taille={25} couleur={'#00A884'} right={20} />
        </View>
        )
}

export default QuickReplies;