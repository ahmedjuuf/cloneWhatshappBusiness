import { ScrollView, View,Image, StyleSheet,Text } from "react-native"

s = require('../../Components/commonStyles')
const BusinessProfile= ()=>{
    let Info = (props)=>{
        return(
            <View>
                <View style={styles.info}>
                    <Image 
                    style={{marginRight:15,tintColor:'gray',height:20,width:20}}
                    source={props.src}/>
                    <Text style={{width:'80%',fontSize:17,color:props.color}}>{props.title}</Text>
                    <Image 
                    style={{marginLeft:10,tintColor:'#00A884',height:25,width:25}}
                    source={require('../../assets/icons/pencil.png')}/>
                </View>
                <View
                    style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width:"100%",
                    right:"-10%"
                    }}
                ></View>
            </View>
        )
    }
    return (
        <View>
            <ScrollView  style={[s.ScreenMin,{backgroundColor:'black'}]}>
                <View style={[styles.entete,styles.horizontal,{marginBottom:-40}]}>
                    <View style={styles.profilePhoto}>
                        <Image source={require("../../assets/icons/profile.jpg")}
                        style={{height:'95%',width:"95%",borderRadius:80}}
                        />
                    </View>
                    <View style={styles.icon}>
                        <Image source={require("../../assets/icons/pencil.png")}
                            style={{height:'70%',width:"70%",borderRadius:80,tintColor:'white'}}
                        />
                    </View>
                </View>
                <View style={styles.component}>
                    <Info src={require('../../assets/icons/customer.png')} title="Juuf" color='white' />
                    <Info src={require('../../assets/icons/diversity.png')} title="Not a business" color='white' />
                    <Info src={require('../../assets/icons/shop.png')} title="Juuf" color='white' />
                    <Info src={require('../../assets/icons/address.png')} title="Business address" color='gray' />
                    <Info src={require('../../assets/icons/clock.png')} title="Business hours" color='gray' />
                    <Info src={require('../../assets/icons/mail.png')} title="Email" color='gray' />
                    <Info src={require('../../assets/icons/web.png')} title="Website" color='gray' />
                    <Text style={{left:30,color:'#00A884',fontSize:14,paddingVertical:10,fontWeight:'700'}}>Add another website</Text>
                </View>
                <View style={styles.component}>
                    <View style={[styles.horizontal,{marginVertical:5}]}>
                        <Text style={{color:'gray',fontSize:13}}>Products</Text>
                        <Text style={{color:'gray',fontSize:13}}>Manage </Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={styles.product}></View>
                        <View style={styles.product}></View>
                        <View style={styles.product}></View>
                    </View>
                </View>
                <View style={[styles.component,{flexDirection:'row'}]}>
                    <Image 
                        style={{marginHorizontal:10,tintColor:'gray',height:20,width:20}}
                        source={require('../../assets/icons/linkHorizontal.png')}/>
                    <Text style={{fontSize:17,color:'#00A884'}}>Add Facebook or Instagram</Text>
                </View>
                <View style={styles.component}>
                    <Text style={{fontSize:14,color:'#00A884',fontWeight:'700',left:4}}>About and phone number</Text>
                    <Info src={require('../../assets/icons/phoneCall.png')} title="...." color='white' />
                    <Info src={require('../../assets/icons/phoneCall.png')} title="+112 77 118 68 34" color='white' />
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    entete:{
        width:'70%',
        marginLeft:'30%',
        zIndex:1
     },
    component:{
        backgroundColor:'#202C33',
        marginVertical:10,
        paddingVertical:15,
        paddingHorizontal:10,
    },
    horizontal:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    profilePhoto:{
        height:110,width:110,
        backgroundColor:'black',
        alignItems:'center',justifyContent:'center',
        borderRadius:80
    },
    icon:{
        height:40,width:40,
        backgroundColor:'black',
        alignItems:'center',justifyContent:'center',
        borderRadius:80
    },
    info:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center',
        marginVertical:10
    },
    product:{
        height:115,
        width:"31%",
        backgroundColor:'black',
        borderRadius:10
    }
})

export default BusinessProfile;