import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BotaoNavegacao from '../BotaoNavegacao';

const servicos = [
    {
        titulo: 'Galeria de craques',
        texto: 'Lista visual com foto, nota, pais, clube e estilo de cada jogador.',
    },
    {
        titulo: 'Busca inteligente',
        texto: 'Pesquisa por nome, selecao, pais ou clube para destacar o jogador no topo.',
    },
    {
        titulo: 'Perfil tecnico',
        texto: 'Comparacao rapida de habilidade, ritmo e dados principais dos atletas.',
    },
];

export default function Servico({ onNavigate, onAbrirDeepLink }) {
    return (
        <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
            <View style={styles.hero}>
                <Text style={styles.kicker}>O que o app entrega</Text>
                <Text style={styles.title}>Servico</Text>
                <Text style={styles.subtitle}>
                    Uma experiencia simples para descobrir, filtrar e acompanhar jogadores em destaque.
                </Text>
            </View>

            <View style={styles.services}>
                {servicos.map((servico, index) => (
                    <View style={styles.serviceCard} key={servico.titulo}>
                        <Text style={styles.number}>0{index + 1}</Text>
                        <Text style={styles.cardTitle}>{servico.titulo}</Text>
                        <Text style={styles.cardText}>{servico.texto}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.cta}>
                <Text style={styles.ctaTitle}>Quer sugerir um novo jogador?</Text>
                <Text style={styles.ctaText}>
                    A pagina de contato recebe indicacoes para ampliar a galeria.
                </Text>
                <View style={styles.actions}>
                    <BotaoNavegacao
                        label="Abrir contato"
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

    services: {
        margin: 20,
        gap: 12,
    },

    serviceCard: {
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#74e291',
    },

    number: {
        color: '#74e291',
        fontSize: 13,
        fontWeight: '900',
        marginBottom: 8,
    },

    cardTitle: {
        color: '#10291f',
        fontSize: 20,
        fontWeight: '900',
        marginBottom: 6,
    },

    cardText: {
        color: '#40505d',
        fontSize: 14,
        lineHeight: 20,
    },

    cta: {
        marginHorizontal: 20,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#132331',
        borderWidth: 1,
        borderColor: '#2b4456',
    },

    ctaTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '900',
        marginBottom: 6,
    },

    ctaText: {
        color: '#c9d7df',
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 14,
    },

    actions: {
        gap: 10,
    },
});
