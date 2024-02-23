import React from 'react';
import { View , Text} from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import Styles from '../Styles';
import { useContext } from 'react';
import { useTheme } from '../context/useTheme';

export default function Home() {
    const {isDarkMode} = useContext(ThemeContext)
    console.log(isDarkMode)
    return (
       <View style = {[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
        <Text style = {isDarkMode ? Styles.dark : Styles.light}>Home</Text>
       </View>
    );
}

