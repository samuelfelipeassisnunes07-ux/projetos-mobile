import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import BotaoNavegacao from '../BotaoNavegacao';

export default function Perfil({ onNavigate, onAbrirDeepLink }) {
    return (
        <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
            <View style={styles.hero}>
                <Image
                    source={{ uri: 'https://media.investnews.com.br/uploads/2025/02/neymar-1-min-scaled.webp' }}
                    style={styles.avatar}
                    resizeMode="cover"
                />
                <View style={styles.heroText}>
                    <Text style={styles.kicker}>Usuario premium</Text>
                    <Text style={styles.title}>Perfil</Text>
                    <Text style={styles.subtitle}>Torcedor da galeria Pitangueira</Text>
                </View>
            </View>

            <View style={styles.statsRow}>
                <View style={styles.statBox}>
                    <Text style={styles.statValue}>10</Text>
                    <Text style={styles.statLabel}>Favoritos</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statValue}>6</Text>
                    <Text style={styles.statLabel}>Paises</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statValue}>94</Text>
                    <Text style={styles.statLabel}>Media</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Preferencias</Text>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Jogador favorito</Text>
                    <Text style={styles.rowValue}>Neymar Jr</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Clube acompanhado</Text>
                    <Text style={styles.rowValue}>Santos FC</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Filtro padrao</Text>
                    <Text style={styles.rowValue}>Atacantes</Text>
                </View>
            </View>

            <View style={styles.actions}>
                <BotaoNavegacao
                    label="Ir para contato"
                    icon="chatbubbles"
                    onPress={() => onNavigate('contato')}
                />
                <BotaoNavegacao
                    label="Deep link"
                    icon="link"
                    variant="ghost"
                    onPress={onAbrirDeepLink}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        paddingBottom: 30,
    },

    hero: {
        paddingTop: 72,
        paddingBottom: 24,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#10291f',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },

    avatar: {
        width: 92,
        height: 92,
        borderRadius: 8,
        marginRight: 14,
        borderWidth: 2,
        borderColor: '#74e291',
        backgroundColor: '#dfe7ea',
    },

    heroText: {
        flex: 1,
    },

    kicker: {
        color: '#74e291',
        fontSize: 12,
        fontWeight: '900',
        textTransform: 'uppercase',
        marginBottom: 6,
    },

    title: {
        color: '#ffffff',
        fontSize: 32,
        fontWeight: '900',
        marginBottom: 4,
    },

    subtitle: {
        color: '#c9d7df',
        fontSize: 14,
        lineHeight: 20,
    },

    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 18,
    },

    statBox: {
        width: '31%',
        minHeight: 76,
        borderRadius: 8,
        backgroundColor: '#f6fbff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#cfeee0',
    },

    statValue: {
        color: '#10291f',
        fontSize: 22,
        fontWeight: '900',
    },

    statLabel: {
        color: '#5b6874',
        fontSize: 10,
        fontWeight: '900',
        textTransform: 'uppercase',
        marginTop: 4,
    },

    card: {
        margin: 20,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#74e291',
    },

    cardTitle: {
        color: '#10291f',
        fontSize: 20,
        fontWeight: '900',
        marginBottom: 12,
    },

    row: {
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: '#dfe7ea',
    },

    rowLabel: {
        color: '#73808d',
        fontSize: 11,
        fontWeight: '900',
        textTransform: 'uppercase',
        marginBottom: 4,
    },

    rowValue: {
        color: '#10291f',
        fontSize: 15,
        fontWeight: '900',
    },

    actions: {
        marginHorizontal: 20,
        gap: 10,
    },
});
