import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BotaoNavegacao from './BotaoNavegacao';

const rotas = [
    { rota: 'home', label: 'Inicio', icon: 'home' },
    { rota: 'servico', label: 'Servico', icon: 'football' },
    { rota: 'perfil', label: 'Perfil', icon: 'person-circle' },
    { rota: 'contato', label: 'Contato', icon: 'chatbubbles' },
    { rota: 'sair', label: 'Sair', icon: 'log-out' },
];

const montarLink = (rota) => `pitangueira://${rota}`;

const extrairRota = (link) => {
    if (!link) {
        return null;
    }

    const rota = link
        .trim()
        .replace('pitangueira://', '')
        .replace(/^https?:\/\/[^/]+\/?/, '')
        .replace(/^\/+/, '')
        .split(/[/?#]/)[0]
        .toLowerCase();

    return rotas.some((item) => item.rota === rota) ? rota : null;
};

export default function DeepLinkModal({
    visivel,
    paginaAtual,
    ultimoLink,
    onFechar,
    onNavegar,
}) {
    const [link, setLink] = useState(ultimoLink || montarLink(paginaAtual));
    const rotaValida = extrairRota(link);

    useEffect(() => {
        if (visivel) {
            setLink(ultimoLink || montarLink(paginaAtual));
        }
    }, [visivel, ultimoLink, paginaAtual]);

    const navegarPeloCampo = () => {
        if (rotaValida) {
            onNavegar(rotaValida, link.trim());
        }
    };

    return (
        <Modal
            visible={visivel}
            transparent
            animationType="fade"
            onRequestClose={onFechar}
        >
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.kicker}>Pitangueira</Text>
                            <Text style={styles.title}>Deep link</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={onFechar}
                            activeOpacity={0.8}
                        >
                            <Ionicons name="close" size={22} color="#c9d7df" />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.label}>Link</Text>
                    <TextInput
                        style={styles.input}
                        value={link}
                        onChangeText={setLink}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="pitangueira://servico"
                        placeholderTextColor="#708697"
                    />
                    {!rotaValida && (
                        <Text style={styles.error}>
                            Use uma rota valida: home, servico, perfil, contato ou sair.
                        </Text>
                    )}

                    <View style={styles.routes}>
                        {rotas.map((item) => (
                            <BotaoNavegacao
                                key={item.rota}
                                label={item.label}
                                icon={item.icon}
                                variant="ghost"
                                ativo={paginaAtual === item.rota}
                                onPress={() => onNavegar(item.rota, montarLink(item.rota))}
                            />
                        ))}
                    </View>

                    <BotaoNavegacao
                        label="Abrir link"
                        icon="open"
                        onPress={navegarPeloCampo}
                    />
                </View>

                <TouchableOpacity
                    style={styles.backdrop}
                    activeOpacity={1}
                    onPress={onFechar}
                />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
    },

    backdrop: {
        ...StyleSheet.absoluteFillObject,
    },

    modal: {
        width: '100%',
        maxWidth: 420,
        backgroundColor: '#08111f',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#74e291',
        padding: 18,
        gap: 12,
        zIndex: 1,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4,
    },

    kicker: {
        color: '#74e291',
        fontSize: 12,
        fontWeight: '900',
        textTransform: 'uppercase',
        marginBottom: 4,
    },

    title: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: '900',
    },

    closeButton: {
        width: 38,
        height: 38,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#132331',
        borderWidth: 1,
        borderColor: '#2b4456',
    },

    label: {
        color: '#c9d7df',
        fontSize: 13,
        fontWeight: '900',
    },

    input: {
        minHeight: 46,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#2b4456',
        backgroundColor: '#132331',
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '700',
        paddingHorizontal: 12,
    },

    error: {
        color: '#ffb4a8',
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '700',
    },

    routes: {
        gap: 10,
        marginTop: 4,
    },
});
