import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
// Importa tus pantallas
import LoginScreen from '../../modules/auth/screens/Login';
import CreateAccountScreen from '../../modules/auth/screens/CreateAccount';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#00695c',
                    tabBarInactiveTintColor: '#b2dfdb',
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        borderTopLeftRadius: 18,
                        borderTopRightRadius: 18,
                        height: 65,
                        paddingBottom: 8,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: -2 },
                        shadowOpacity: 0.08,
                        shadowRadius: 8,
                        elevation: 8,
                    },
                    tabBarLabelStyle: {
                        fontSize: 14,
                        fontWeight: 'bold',
                        marginBottom: 4,
                    },
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        if (route.name === 'Login') iconName = 'login';
                        if (route.name === 'Home') iconName = 'person-add-alt-1';
                        return <Icon name={iconName} size={28} color={color} />;
                    },
                })}
            >
                <Tab.Screen 
                    name="Login"
                    component={LoginScreen}
                    options={{ title: 'Iniciar Sesión' }}
                /> 
                <Tab.Screen 
                    name="Home"
                    component={CreateAccountScreen}
                    options={{ title: 'Crear Cuenta' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}