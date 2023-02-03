import { View,TextInput,Text,StyleSheet } from "react-native"

const Search = (props) =>{
    return (        
        props.visible?<Text style={s.name}>{props.titre}</Text>
        :<View >
            <TextInput placeholder="Search..." placeholderTextColor="gray"
            style={{fontSize:17,color:'white',width:230,}} />
        </View>
    )
}



export default Search;