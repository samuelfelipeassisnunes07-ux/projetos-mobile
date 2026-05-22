import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import BotaoNavegacao from '../BotaoNavegacao';

export default function Sair({ onNavigate, onAbrirDeepLink }) {
    const confirmarSaida = () => {
        Alert.alert('Sessao encerrada', 'Voce saiu da area da galeria.');
        onNavigate('home');
    };

    return (
        <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
            <View style={styles.hero}>
                <Text style={styles.kicker}>Encerrar acesso</Text>
                <Text style={styles.title}>Sair</Text>
                <Text style={styles.subtitle}>
                    Confirme a saida ou volte para continuar explorando os craques.
                </Text>
            </View>

            <View style={styles.card}>
                <View style={styles.iconBox}>
                    <Text style={styles.iconText}>!</Text>
                </View>
                <Text style={styles.cardTitle}>Deseja sair agora?</Text>
                <Text style={styles.cardText}>
                    Ao sair, voce volta para a pagina inicial da galeria.
                </Text>

                <View style={styles.actions}>
                    <BotaoNavegacao
                        label="Continuar no app"
                        icon="home"
                        onPress={() => onNavigate('home')}
                    />
                    <BotaoNavegacao
                        label="Confirmar saida"
                        icon="log-out"
                        variant="ghost"
                        onPress={confirmarSaida}
                    />
                    <BotaoNavegacao
                        label="Deep link"
                        icon="link"
                        variant="ghost"
                        onPress={onAbrirDeepLink}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        paddingBottom: 30,
    },

    hero: {
        paddingTop: 74,
        paddingBottom: 28,
        paddingHorizontal: 20,
        backgroundColor: '#10291f',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },

    kicker: {
        color: '#74e291',
        fontSize: 13,
        fontWeight: '900',
        textTransform: 'uppercase',
        marginBottom: 8,
    },

    title: {
        color: '#ffffff',
        fontSize: 34,
        fontWeight: '900',
        marginBottom: 8,
    },

    subtitle: {
        color: '#c9d7df',
        fontSize: 15,
        lineHeight: 22,
    },

    card: {
        margin: 20,
        padding: 18,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#74e291',
        alignItems: 'center',
    },

    iconBox: {
        width: 54,
        height: 54,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#74e291',
        marginBottom: 14,
    },

    iconText: {
        color: '#08111f',
        fontSize: 28,
        fontWeight: '900',
    },

    cardTitle: {
        color: '#10291f',
        fontSize: 22,
        fontWeight: '900',
        textAlign: 'center',
        marginBottom: 8,
    },

    cardText: {
        color: '#40505d',
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        marginBottom: 16,
    },

    actions: {
        width: '100%',
        gap: 10,
    },
});
