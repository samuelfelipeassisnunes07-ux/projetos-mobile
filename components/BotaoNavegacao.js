import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BotaoNavegacao({
    label,
    icon = 'chevron-forward',
    onPress,
    ativo = false,
    variant = 'solid',
}) {
    const isGhost = variant === 'ghost';

    return (
        <TouchableOpacity
            style={[
                styles.button,
                isGhost && styles.ghostButton,
                ativo && styles.activeButton,
            ]}
            onPress={onPress}
            activeOpacity={0.85}
        >
            <Ionicons
                name={icon}
                size={18}
                color={isGhost && !ativo ? '#c9d7df' : '#08111f'}
            />
            <Text
                style={[
                    styles.label,
                    isGhost && !ativo && styles.ghostLabel,
                ]}
                numberOfLines={1}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        minHeight: 46,
        borderRadius: 8,
        paddingHorizontal: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#74e291',
        borderWidth: 1,
        borderColor: '#74e291',
        gap: 8,
    },

    ghostButton: {
        backgroundColor: '#132331',
        borderColor: '#2b4456',
        justifyContent: 'flex-start',
    },

    activeButton: {
        backgroundColor: '#74e291',
        borderColor: '#74e291',
    },

    label: {
        color: '#08111f',
        fontSize: 14,
        fontWeight: '900',
    },

    ghostLabel: {
        color: '#c9d7df',
    },
});
