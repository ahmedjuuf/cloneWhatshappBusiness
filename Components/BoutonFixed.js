import React from 'react';
import {Image,StyleSheet} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const BoutonFixed = (props) => {
    
    return (
    <Pressable onPress={props.event}
        style={
            [styles.containerImage,
                {bottom:props.bottom,backgroundColor:props.couleur,right:props.right}]
        }>
        <Image
            source={props.src}
            style={[
                styles.floatingButton,
                {width:props.taille,height:props.taille}]} />
    </Pressable>
    );
};

const styles = StyleSheet.create({
    containerImage:{
        padding:15,
        position:'absolute',
        borderRadius:40
    },
    floatingButton:{
        tintColor:'white'
    }
})
export default BoutonFixed;