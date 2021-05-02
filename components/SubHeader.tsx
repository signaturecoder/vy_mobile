import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

type SubHeaderProps = {
    headerName: string,
    iconName: string,
    clicked: () => void
}

const SubHeader = ({ headerName, iconName, clicked }: SubHeaderProps) => {

   
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={clicked}>
                <View style={styles.btnWrapper}>
                    {/* <FontAwesome name={iconName} size={24} color="black" /> */}
                    <Text style={styles.containerHeader}>{headerName}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SubHeader;

const styles = StyleSheet.create({
    //className : container
    container: {
        height: 50,
        width: '50%',
        borderRadius: 50,
        backgroundColor: 'yellow',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    btnWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    containerHeader: {
        color: 'red',
        fontSize: 20,
        marginLeft: 10
    }
})
