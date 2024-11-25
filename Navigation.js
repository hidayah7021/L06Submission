import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Add from './Add';
import Edit from './Edit';
import Home from './Home';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ title: 'Pokemon List' }} />
            <Stack.Screen name="Add" component={Add} options={{ title: 'Add Pokemon' }} />
            <Stack.Screen name="Edit" component={Edit} options={{ title: 'Edit Pokemon' }} />
        </Stack.Navigator>
    );
};

export default Navigation;
