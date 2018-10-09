import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#007aff',
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#007aff',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default Button;
