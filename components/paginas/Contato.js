import React, { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import BotaoNavegacao from '../BotaoNavegacao';

export default function Contato({ onNavigate, onAbrirDeepLink }) {
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    const enviarMensagem = () => {
        if (!nome.trim() || !mensagem.trim()) {
            Alert.alert('Contato', 'Preencha seu nome e a mensagem.');
            return;
        }

        Alert.alert('Contato enviado', 'Recebemos sua mensagem sobre a galeria.');
        setNome('');
        setMensagem('');
    };

    return (
        <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
            <View style={styles.hero}>
                <Text style={styles.kicker}>Fale com a gente</Text>
                <Text style={styles.title}>Contato</Text>
                <Text style={styles.subtitle}>
                    Mande sugestoes de jogadores, clubes ou melhorias para a galeria.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Nova mensagem</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    placeholder="Seu nome"
                    placeholderTextColor="#7a8794"
                    onChangeText={setNome}
                />
                <TextInput
                    style={[styles.input, styles.messageInput]}
                    value={mensagem}
                    placeholder="Escreva sua mensagem"
                    placeholderTextColor="#7a8794"
                    onChangeText={setMensagem}
                    multiline
                />
                <BotaoNavegacao label="Enviar contato" icon="send" onPress={enviarMensagem} />
            </View>

            <View style={styles.infoGrid}>
                <View style={styles.infoCard}>
                    <Text style={styles.infoLabel}>Email</Text>
                    <Text style={styles.infoValue}>contato@pitangueira.app</Text>
                </View>
                <View style={styles.infoCard}>
                    <Text style={styles.infoLabel}>Horario</Text>
                    <Text style={styles.infoValue}>Segunda a sexta, 9h as 18h</Text>
                </View>
            </View>

            <View style={styles.actions}>
                <BotaoNavegacao
                    label="Ver servico"
                    icon="football"
                    variant="ghost"
                    onPress={() => onNavigate('servico')}
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
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#74e291',
        gap: 12,
    },

    cardTitle: {
        color: '#10291f',
        fontSize: 20,
        fontWeight: '900',
    },

    input: {
        minHeight: 48,
        borderRadius: 8,
        paddingHorizontal: 14,
        backgroundColor: '#f6fbff',
        borderWidth: 1,
        borderColor: '#cfeee0',
        color: '#132331',
        fontSize: 15,
    },

    messageInput: {
        minHeight: 116,
        paddingTop: 12,
        textAlignVertical: 'top',
    },

    infoGrid: {
        marginHorizontal: 20,
        gap: 12,
    },

    infoCard: {
        padding: 14,
        borderRadius: 8,
        backgroundColor: '#132331',
        borderWidth: 1,
        borderColor: '#2b4456',
    },

    infoLabel: {
        color: '#74e291',
        fontSize: 11,
        fontWeight: '900',
        textTransform: 'uppercase',
        marginBottom: 4,
    },

    infoValue: {
        color: '#f6fbff',
        fontSize: 14,
        fontWeight: '800',
    },

    actions: {
        marginHorizontal: 20,
        marginTop: 14,
        gap: 10,
    },
});
