import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const CreateAccount = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateAccount = () => {
        if (!name || !email || !password) {
            Alert.alert('Error', 'Por favor, completa todos los campos.');
            return;
        }
        Alert.alert('Cuenta creada', '¡Tu cuenta ha sido creada exitosamente!');
        navigation?.navigate('Login');
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: '#e0f2f1' }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <View style={styles.logoContainer}>
                    <Image
                        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png" }}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>Crear Cuenta</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor="#888"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Correo electrónico"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="#888"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholderTextColor="#888"
                    />
                    <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
                        <Text style={styles.buttonText}>Crear cuenta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation?.goBack()}>
                        <Text style={styles.link}>¿Ya tienes cuenta? <Text style={styles.linkBold}>Inicia sesión</Text></Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10,
    },
    logo: {
        width: 200,
        height: 200,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 28,
        marginHorizontal: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
        marginBottom: 30,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#00695c',
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#b2dfdb',
        borderRadius: 8,
        padding: 14,
        marginBottom: 18,
        fontSize: 16,
        backgroundColor: '#f7f7f7',
        color: '#222',
    },
    button: {
        backgroundColor: '#00695c',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 14,
        marginTop: 8,
        shadowColor: "#00695c",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.18,
        shadowRadius: 4,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
        letterSpacing: 1,
    },
    link: {
        color: '#333',
        textAlign: 'center',
        marginTop: 8,
        fontSize: 15,
    },
    linkBold: {
        color: '#00695c',
        fontWeight: 'bold',
    },
});

export default CreateAccount;