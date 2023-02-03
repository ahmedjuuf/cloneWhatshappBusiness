import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  ScreenMin:{
    backgroundColor:'#111B21',
    height:'100%',
    color:'#DCE1E3',
    paddingHorizontal:10,
    paddingVertical:10
  },
  icon:{
      tintColor:'gray',
      height:17,
      width:17
  },
  iconGoBack:{
    height:20,
    width:30,
    tintColor:'white',
  },
  smallText:{
    color:'#67767F',
    fontSize:12,
  },
  name:{
    fontSize:17,
    fontWeight:'500',
    color:'white',
  },
  comment:{
    color:'gray',
    fontSize:14
  },
  contentText:{
    flex: 1,
    justifyContent:'space-between',
    flexDirection:'row',
  },
  section:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between'
  }
});