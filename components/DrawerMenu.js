import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BotaoNavegacao from './BotaoNavegacao';

const itensMenu = [
    { rota: 'home', label: 'Inicio', icon: 'home' },
    { rota: 'servico', label: 'Servico', icon: 'football' },
    { rota: 'perfil', label: 'Perfil', icon: 'person-circle' },
    { rota: 'contato', label: 'Contato', icon: 'chatbubbles' },
    { rota: 'sair', label: 'Sair', icon: 'log-out' },
];

export default function DrawerMenu({
    aberto,
    paginaAtual,
    onFechar,
    onNavegar,
    onAbrirDeepLink,
}) {
    return (
        <Modal
            visible={aberto}
            transparent
            animationType="fade"
            onRequestClose={onFechar}
        >
            <View style={styles.overlay}>
                <View style={styles.drawer}>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.kicker}>Pitangueira</Text>
                            <Text style={styles.title}>Menu</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={onFechar}
                            activeOpacity={0.8}
                        >
                            <Ionicons name="close" size={22} color="#c9d7df" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuList}>
                        {itensMenu.map((item) => (
                            <BotaoNavegacao
                                key={item.rota}
                                label={item.label}
                                icon={item.icon}
                                variant="ghost"
                                ativo={paginaAtual === item.rota}
                                onPress={() => onNavegar(item.rota)}
                            />
                        ))}
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>
                            Use links como pitangueira://servico para abrir telas direto.
                        </Text>
                        <BotaoNavegacao
                            label="Deep link"
                            icon="link"
                            onPress={onAbrirDeepLink}
                        />
                    </View>
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
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.42)',
    },

    backdrop: {
        flex: 1,
    },

    drawer: {
        width: 292,
        maxWidth: '84%',
        backgroundColor: '#08111f',
        paddingTop: 34,
        paddingHorizontal: 16,
        paddingBottom: 18,
        borderRightWidth: 2,
        borderRightColor: '#74e291',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 22,
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

    menuList: {
        gap: 10,
    },

    footer: {
        marginTop: 'auto',
        paddingTop: 18,
        borderTopWidth: 1,
        borderTopColor: '#2b4456',
        gap: 12,
    },

    footerText: {
        color: '#9fb0bd',
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '700',
    },
});
