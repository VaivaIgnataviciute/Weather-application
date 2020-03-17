import React from "react";
import {StyleSheet, TextInput, View} from "react-native";

export default class SearchInput extends React.Component {
    render () {
        return (
            <View style = {styles.container}>
               <TextInput style = {styles.TextInput}
                autoCorrect = {false}
                placeholder = {this.props.placeholder}
                placeholderTextColor = "white"
                underlineColorAndroid = "transparent"
                clearButtonMode = "always" />
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        height : 40,
        width: 300,
        marginTop: 20,
        backgroundColor: "#666",
        paddingHorizontal: 10,
        marginHorizontal: 10,
        alignItems: "center",
        borderRadius: 5,

    },

    TextInput: {
        flex:1,
        color: "white"
    }

})