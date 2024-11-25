import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

const Edit = ({ route, navigation }) => {
    const { item, handleDelete } = route.params;
    const [key, setKey] = useState(item.key);
    const [image, setImage] = useState(item.image);

    const handleSave = () => {
        item.key = key;
        item.image = image;
        Toast.show({ type: 'success', text1: 'Pokemon Updated', text2: `${key} has been updated.` });
        navigation.navigate('Home');
    };

    const handleRemove = () => {
        handleDelete(item.key);
        Toast.show({ type: 'success', text1: 'Pokemon Deleted', text2: `${item.key} has been deleted.` });
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Pokemon Name:</Text>
            <TextInput style={styles.input} value={key} onChangeText={setKey} placeholder="Enter name" />
            <Text style={styles.label}>Image URL:</Text>
            <TextInput style={styles.input} value={image} onChangeText={setImage} placeholder="Enter image URL" />
            <Button title="Save" onPress={handleSave} />
            <Button title="Delete" onPress={handleRemove} color="red" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    label: { fontSize: 16, marginBottom: 8 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20, borderRadius: 5 },
});

export default Edit;
