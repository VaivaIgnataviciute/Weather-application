import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PropTypes from "prop-types";



export default class SearchInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }
    handleChangeText = (text) => {
        this.setState({ text })
    }
    handleSubmitEditing = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;

        if (!text) return;

        onSubmit(text);
        this.setState({ text: "" });
    }

    render() {

        const { placeholder } = this.props;
        const { text } = this.state;
        return (
            <View style={styles.container}>
                <TextInput style={styles.TextInput}
                    autoCorrect={false}
                    value={text}
                    placeholder={placeholder}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent" ß
                    clearButtonMode="always"
                    onChangeText={this.handleChangeText}
                    onSubmitEditing={this.handleSubmitEditing} />
            </View>
        )
    }
}

SearchInput.PropTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
    placeholder: ""
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 300,
        marginTop: 20,
        backgroundColor: "#666",
        paddingHorizontal: 10,
        marginHorizontal: 10,
        alignItems: "center",
        borderRadius: 5,

    },

    TextInput: {
        flex: 1,
        color: "white"
    }

})