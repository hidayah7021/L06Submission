import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

const Add = ({ navigation, route }) => {
    const [key, setKey] = useState('');
    const [image, setImage] = useState('');

    const handleAdd = () => {
        if (!key || !image) {
            Toast.show({ type: 'error', text1: 'Error', text2: 'All fields are required' });
            return;
        }
        route.params.addPokemon({ key, image });
        Toast.show({ type: 'success', text1: 'Pokemon Added', text2: `${key} has been added.` });
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Pokemon Name:</Text>
            <TextInput style={styles.input} value={key} onChangeText={setKey} placeholder="Enter name" />
            <Text style={styles.label}>Image URL:</Text>
            <TextInput style={styles.input} value={image} onChangeText={setImage} placeholder="Enter image URL" />
            <Button title="Add Pokemon" onPress={handleAdd} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    label: { fontSize: 16, marginBottom: 8 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20, borderRadius: 5 },
});

export default Add;
