import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{ props.headerText }</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        flexDirection: 'column', // default     
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 }, // for ios display ?!?
        shadowOpacity: 0.3,
        elevation: 10, // ? for android display ?!?
        position: 'relative', // ?
    },
    textStyle: {
        fontSize: 30,
    }
};

export default Header;
