import { View,TextInput,Text,Image,StyleSheet } from "react-native"

const SearchOnAccueil =()=> {
    const Composante= (props)=>{
        return (
            <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'red',borderRadius:50,alignSelf:'flex-start',paddingVertical:5,paddingHorizontal:7,marginRight:8,marginBottom:8}}>
                <Image 
                    source={props.src}
                    style={{height:20,width:20}}
                    />
                <Text style={{color:'white',fontSize:14,fontWeight:'400',marginLeft:7}}>{props.titre}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={{marginBottom:30}}>
                <TextInput placeholder="SearchOnAccueil..." placeholderTextColor="gray"
                    style={{fontSize:17,color:'white'}}
                />
            </View>
            <View style={{flexDirection:'row',flexWrap:'wrap',marginBottom:30}}>
                <Composante src={require('../assets/icons/photo.png')} 
                    titre = "Photos"/>
                <Composante src={require('../assets/icons/photo.png')} 
                    titre = "Videos"/>
                <Composante src={require('../assets/icons/photo.png')} 
                    titre = "Links"/>
                <Composante src={require('../assets/icons/photo.png')} 
                    titre = "GIFs"/>
                <Composante src={require('../assets/icons/photo.png')} 
                    titre = "Audio"/>
                <Composante src={require('../assets/icons/photo.png')} 
                    titre = "Documents"/>
                <Composante src={require('../assets/icons/photo.png')} 
                    titre = "Polls"/>
            </View>
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                <Composante src={require('../assets/icons/photo.png')} 
                        titre = "Contacts"/>            
                <Composante src={require('../assets/icons/photo.png')} 
                        titre = "Non-Contacts"/>
                <Composante src={require('../assets/icons/photo.png')} 
                        titre = "Unread"/>      
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:10,
        paddingHorizontal:20
    },

})
export default SearchOnAccueil;