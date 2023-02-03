import {View,StyleSheet, ImageBackground,Text,Image,TouchableOpacity} from 'react-native'


s = require('../../Components/commonStyles')
const CatalogManager = ()=>{

    return(
        <View style={s.ScreenMin}>
            <View style={{height:"30%",margin:-10}}>
                <ImageBackground
                    resizeMode='stretch'
                    source={require('../../assets/icons/profile.jpg')}
                    style={{opacity:.5}}
                >
                    <View style={styles.overlay}>
                        <Text style={{fontSize:29,fontWeight:'bold',color:'white'}}>Juuf</Text>
                        <Text style={{fontSize:20,fontWeight:'bolder',color:'white'}}>Juuf</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:20,padding:10}}>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Create a catalog</Text>
                <Text style={{color:'gray',fontSize:15,fontWeight:'bolder',textAlign:'center',paddingHorizontal:45,paddingVertical:10}}>Send products and services to your customers and save space on your phone.</Text>
            </View>
            <View style={styles.items}> 
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:20}}>
                    <View style={{height:100,width:100,borderColor:'white',borderWidth:2,borderRadius:12,marginRight:10,alignItems:'center',justifyContent:'center'}}>
                        <Image source={require('../../assets/icons/addItem.png')}
                            style={{height:"30%",width:'30%'}}
                        />
                    </View>
                    <Text style={{fontSize:17,color:'white',fontWeight:'500'}}>Add new item</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:20}}>
                    <View style={{height:100,width:100,backgroundColor:'#090d10',borderRadius:12,marginRight:10,alignItems:'center',justifyContent:'center'}}>
                    </View>
                    <View style={{height:65,width:"100%",justifyContent:'space-around'}}>
                        <View style={{height:20,width:'40%',backgroundColor:'#090d10',borderRadius:30}}></View>
                        <View style={{height:20,width:'20%',backgroundColor:'#090d10',borderRadius:30}}></View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:20}}>
                    <View style={{height:100,width:100,backgroundColor:'#090d10',borderRadius:12,marginRight:10,alignItems:'center',justifyContent:'center'}}>
                    </View>
                    <View style={{height:50,width:"100%",justifyContent:'space-around'}}>
                        <View style={{height:20,width:'40%',backgroundColor:'#090d10',borderRadius:30}}></View>
                        <View style={{height:20,width:'20%',backgroundColor:'#090d10',borderRadius:30}}></View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    overlay:{
        height:"100%",
        width:"100%",
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black'
    }
})
export default CatalogManager;