import React, { useState } from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { datasource } from './Data';

const Home = ({ navigation }) => {
    const [pokemonList, setPokemonList] = useState(datasource);

    const handleDelete = (pokemonKey) => {
        const updatedList = pokemonList.map((section) => ({
            ...section,
            data: section.data.filter((pokemon) => pokemon.key !== pokemonKey),
        }));
        setPokemonList(updatedList);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Edit', { item, handleDelete })}
        >
            <Text style={styles.textStyle}>{item.key}</Text>
            <Image source={{ uri: item.image }} style={styles.imageStyle} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Add Pokemon" onPress={() => navigation.navigate('Add')} />
            </View>
            <SectionList
                sections={pokemonList}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, icon, bgColor } }) => (
                    <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
                        <FontAwesome name={icon} size={24} color="white" />
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.key}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    buttonContainer: { padding: 20, backgroundColor: '#f8f8f8' },
    headerContainer: { flexDirection: 'row', alignItems: 'center', padding: 10 },
    headerText: { fontSize: 20, marginLeft: 10, fontWeight: 'bold', color: 'white' },
    itemContainer: { flexDirection: 'row', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' },
    textStyle: { fontSize: 18 },
    imageStyle: { width: 50, height: 50, resizeMode: 'contain' },
});

export default Home;
