import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Platform, TextInput, Pressable, Text} from 'react-native';

const InputForm = () => {
    return (
        <KeyboardAvoidingView
            style={styles.addFormContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TextInput
                style={styles.inputField}
                placeholder={'할 일을 작성해 주세요'}
            />
            <Pressable style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </Pressable>
        </KeyboardAvoidingView>
    )
}

export default InputForm;

const styles = StyleSheet.create({
    addFormContainer: {
        flexDirection: 'row',
        marginTop: 'auto',
        marginBottom: 30,
        paddingHorizontal: 20,
        backgroundColor: '#f7f8fa'
    },
    inputField: {
        flex: 1,
        height: 42,
        padding: 5,
        marginRight: 25,
        borderRadius: 6,
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 1,
        color: '#000000',
        fontSize: 15,
        fontWeight: '100',
        textAlignVertical: 'center'
    },
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 42,
        height: 42,
        borderRadius: 4,
        backgroundColor: 'rgba(0,0,0,0.7)',
        shadowColor: '#000000',
        shadowOpacity: 0.14,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 4
        }
    },
    addButtonText: {
        color: 'white',
        fontSize: 25
    }
});