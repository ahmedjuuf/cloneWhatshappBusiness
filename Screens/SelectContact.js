import {View,Text,Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import TitleComponent from "../Components/TitleComponent";
import { useState } from "react";
import { useEffect } from "react";
const SelectContact = () =>{
    const [data,setData] = useState([])
    const [filteredData,setFilteredData] = useState([])
    useEffect(()=>{
        fetchData('https://randomuser.me/api/?results=20')
      },[])
    
      const fetchData = async(url)=>{
        try{
          const response = await fetch(url);
          const reponseJson = await response.json();
          setData(reponseJson.results);
          setFilteredData(reponseJson.results);
        }catch(erreur){
          console.log(erreur)
        }
      }
    const ContactDefault= (props)=>{
        return (
            <Pressable style={{marginVertical:7}}>
                <TitleComponent right={15} marginRight={20}
                    taille={42}
                    imagesRight={props.imagesRight} Image={props.Image}
                    title={props.title} text={<Text style={s.smallText}>{props.text}</Text>}
                />
            </Pressable>
        )
    }
    const ContactOnPhone = (props)=>{
        return (
            <Pressable style={{marginVertical:7}}>
                <TitleComponent right={15} marginRight={20}
                    taille={42} icon={true}
                    Image={props.Image} imagesRight={props.imagesRight}
                    title={props.title} text={<Text style={s.smallText}>{props.text}</Text>}
                />
            </Pressable>
        )
    }

    
    return (
        <ScrollView style={s.ScreenMin}>
            <ContactDefault Image={require('../assets/icons/group.png')} title="New group"/>
            <ContactDefault Image={require('../assets/icons/addUser.png')} title="New contact"
                imagesRight={(
                    <View style={{flexDirection:'row'}}>
                        <Image style={{height:25,width:25,marginRight:20}}
                         source={require('../assets/icons/qr_code.png')} />
                    </View>
                )}
            />
            <Text style={{fontSize:12,fontWeight:'600',color:'gray',marginLeft:12}}>Contacts on Whatshapp </Text>

            {
                filteredData.map((item,index)=>{
                    return( 
                        <View>
                            <Pressable key={index}>
                                <ContactOnPhone Image={{uri:item.picture.large}}
                                 title={item.name.first +" "+ item.name.last}/>
                            </Pressable>
                        </View>
                )})
            }
        </ScrollView>
    )
}
export default SelectContact ;