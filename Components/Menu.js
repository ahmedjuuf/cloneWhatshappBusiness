import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    MenuProvider,
  } from 'react-native-popup-menu';
  
import { View,Text } from 'react-native';
const MenuComponent = () => {
    return (
        <View style={{height:100}}>
            <MenuProvider style={{backgroundColor:'green',flex:1}}>
                <Menu >
                    <MenuTrigger text='Select action' />
                    <MenuOptions>
                    <MenuOption onSelect={() => alert(`Save`)} text='Save' />
                    <MenuOption onSelect={() => alert(`Delete`)} >
                        <Text style={{color: 'red'}}>Delete</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
                    </MenuOptions>
                </Menu>
            </MenuProvider>
        </View>
    )};
export default MenuComponent;
