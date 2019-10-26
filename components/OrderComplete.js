import React from 'react';
import { Avatar, ThemeProvider, Text, AirbnbRating } from 'react-native-elements';

export default function pay() {
    return (
        <ThemeProvider>
            <Text h3 h3Style={{ fontFamily: 'Papyrus', top: '7%', fontSize: 40, textAlign: "center", alignSelf: 'center', color: '#FF69B4' }}>Thank you for your order !</Text>
            <Text h4 h4Style={{ top: '15%', fontSize: 20, textAlign: 'center', alignSelf: 'center', color: '#ff6666' }}>Rate Your Experience</Text>
            <Text h3 h3Style={{ fontFamily: 'Papyrus', top: '35%', fontSize: 40, textAlign: "center", alignSelf: 'center', color: '#FF69B4' }}>Enjoy your day !</Text>
            <Avatar
                icon={{ name: 'hourglass-full', color: 'black' }}
                size='medium'
                overlayContainerStyle={{ shadowColor: 'black', backgroundColor: 'white', margin: 25 }}
            />
            <AirbnbRating
                reviews={["", "", "", "", ""]}
                overlayContainerStyle={{ top: '20%' }}
            />
        </ThemeProvider>
    );

}
