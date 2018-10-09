import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
    const { title, url, artist, image, thumbnail_image } = props.album;
    const { textContainer, thumbnailStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        source={{ uri: thumbnail_image }}
                        style={thumbnailStyle}
                    />
                </View>
                <View style={textContainer}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>
            <CardSection>
                <Button onPress={() => console.log('clicked: ', url) || Linking.openURL(url)}>
                    Buy Now!
                </Button>
            </CardSection>
        </Card>
    );
}

const styles = {
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
