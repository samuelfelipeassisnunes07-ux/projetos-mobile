import React, { useEffect, useRef, useState } from 'react';
import {
    Alert,
    Dimensions,
    Image,
    Linking,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DeepLinkModal from './components/DeepLinkModal';
import DrawerMenu from './components/DrawerMenu';
import Contato from './components/paginas/Contato';
import Perfil from './components/paginas/Perfil';
import Sair from './components/paginas/Sair';
import Servico from './components/paginas/Servico';

const { width } = Dimensions.get('window');
const isWide = width > 400;
const cardWidth = (width - 52) / 2;

export default function App() {
    const scrollRef = useRef(null);
    const [nomeJogador, setNomeJogador] = useState('');
    const [jogadorCentral, setJogadorCentral] = useState(null);
    const [filtroPosicao, setFiltroPosicao] = useState('Todos');
    const [paginaAtual, setPaginaAtual] = useState('home');
    const [drawerAberto, setDrawerAberto] = useState(false);
    const [deepLinkVisivel, setDeepLinkVisivel] = useState(false);
    const [ultimoLink, setUltimoLink] = useState('');

    const galeriaJogadores = [
        {
            id: '1',
            nome: 'neymar',
            imagem: { uri: 'https://media.investnews.com.br/uploads/2025/02/neymar-1-min-scaled.webp' },
            nomeCompleto: 'Neymar Jr',
            posicao: 'Atacante',
            clube: 'Santos FC',
            pais: 'Brasil',
            camisa: 'Camisa 10',
            destaque: 'Drible, ousadia e magia brasileira',
            habilidade: 96,
            ritmo: 89,
            nota: 94,
            estilo: 'Showman',
        },
        {
            id: '2',
            nome: 'messi',
            imagem: { uri: 'https://www.lance.com.br/galerias/wp-content/uploads/2021/05/z1-1-488x474.jpg' },
            nomeCompleto: 'Lionel Messi',
            posicao: 'Atacante',
            clube: 'Inter Miami',
            pais: 'Argentina',
            camisa: 'Camisa 10',
            destaque: 'Controle absurdo e genialidade pura',
            habilidade: 99,
            ritmo: 82,
            nota: 98,
            estilo: 'Maestro',
        },
        {
            id: '3',
            nome: 'cristiano',
            imagem: { uri: 'https://th.bing.com/th/id/R.c272477028f76d3efc08d09c6bccec09?rik=iOMO%2fjJQeIaQkg&pid=ImgRaw&r=0' },
            nomeCompleto: 'Cristiano Ronaldo',
            posicao: 'Atacante',
            clube: 'Al Nassr',
            pais: 'Portugal',
            camisa: 'Camisa 7',
            destaque: 'Finalizador historico e mentalidade gigante',
            habilidade: 92,
            ritmo: 87,
            nota: 96,
            estilo: 'Finalizador',
        },
        {
            id: '4',
            nome: 'mbappe',
            imagem: require('./img/mbappe.jpg'),
            nomeCompleto: 'Kylian Mbappe',
            posicao: 'Atacante',
            clube: 'Real Madrid',
            pais: 'Franca',
            camisa: 'Camisa 10',
            destaque: 'Velocidade explosiva e decisao',
            habilidade: 94,
            ritmo: 99,
            nota: 95,
            estilo: 'Velocista',
        },
        {
            id: '5',
            nome: 'haaland',
            imagem: { uri: 'https://cdn.theathletic.com/app/uploads/2023/05/03163339/Haaland-scaled-e1683146030468.jpg' },
            nomeCompleto: 'Erling Haaland',
            posicao: 'Atacante',
            clube: 'Manchester City',
            pais: 'Noruega',
            camisa: 'Camisa 9',
            destaque: 'Forca, arranque e muitos gols',
            habilidade: 88,
            ritmo: 91,
            nota: 93,
            estilo: 'Artilheiro',
        },
        {
            id: '6',
            nome: 'vinicius',
            imagem: require('./img/vinicius-jr.jpg'),
            nomeCompleto: 'Vinicius Jr',
            posicao: 'Ponta esquerda',
            clube: 'Real Madrid',
            pais: 'Brasil',
            camisa: 'Camisa 7',
            destaque: 'Um contra um venenoso',
            habilidade: 95,
            ritmo: 96,
            nota: 94,
            estilo: 'Driblador',
        },
        {
            id: '7',
            nome: 'bellingham',
            imagem: require('./img/bellingham.jpg'),
            nomeCompleto: 'Jude Bellingham',
            posicao: 'Meio-campo',
            clube: 'Real Madrid',
            pais: 'Inglaterra',
            camisa: 'Camisa 5',
            destaque: 'Elegancia, chegada e personalidade',
            habilidade: 91,
            ritmo: 84,
            nota: 92,
            estilo: 'Box to box',
        },
        {
            id: '8',
            nome: 'rodrygo',
            imagem: require('./img/rodrygo.jpg'),
            nomeCompleto: 'Rodrygo',
            posicao: 'Atacante',
            clube: 'Real Madrid',
            pais: 'Brasil',
            camisa: 'Camisa 11',
            destaque: 'Frio em jogo grande',
            habilidade: 90,
            ritmo: 88,
            nota: 89,
            estilo: 'Decisivo',
        },
        {
            id: '9',
            nome: 'de bruyne',
            imagem: require('./img/kevin-de-bruyne-biography.jpg'),
            nomeCompleto: 'Kevin De Bruyne',
            posicao: 'Meio-campo',
            clube: 'Manchester City',
            pais: 'Belgica',
            camisa: 'Camisa 17',
            destaque: 'Passe de elite e visao de jogo',
            habilidade: 97,
            ritmo: 76,
            nota: 93,
            estilo: 'Criador',
        },
        {
            id: '10',
            nome: 'salah',
            imagem: require('./img/salah.jpg'),
            nomeCompleto: 'Mohamed Salah',
            posicao: 'Ponta direita',
            clube: 'Liverpool',
            pais: 'Egito',
            camisa: 'Camisa 11',
            destaque: 'Corte para dentro e finalizacao',
            habilidade: 91,
            ritmo: 90,
            nota: 92,
            estilo: 'Ponta goleador',
        },
    ];

    const destaque = jogadorCentral || galeriaJogadores[0];
    const posicoes = ['Todos', ...new Set(galeriaJogadores.map((jogador) => jogador.posicao))];
    const jogadoresFiltrados = filtroPosicao === 'Todos'
        ? galeriaJogadores
        : galeriaJogadores.filter((jogador) => jogador.posicao === filtroPosicao);
    const totalPaises = new Set(galeriaJogadores.map((jogador) => jogador.pais)).size;
    const mediaNota = Math.round(
        galeriaJogadores.reduce((total, jogador) => total + jogador.nota, 0) / galeriaJogadores.length
    );

    const mostrarJogadorNoTopo = (jogador) => {
        setJogadorCentral(jogador);

        requestAnimationFrame(() => {
            scrollRef.current?.scrollTo({ y: 0, animated: true });
        });
    };

    const buscarJogador = () => {
        const termo = nomeJogador.toLowerCase().trim();

        if (!termo) {
            Alert.alert('Digite o nome de um jogador da galeria.');
            return;
        }

        const jogadorEncontrado = galeriaJogadores.find((jogador) =>
            jogador.nome.toLowerCase().includes(termo) ||
            jogador.nomeCompleto.toLowerCase().includes(termo) ||
            jogador.clube.toLowerCase().includes(termo) ||
            jogador.pais.toLowerCase().includes(termo)
        );

        if (jogadorEncontrado) {
            mostrarJogadorNoTopo(jogadorEncontrado);
            setNomeJogador('');
        } else {
            Alert.alert('Nao encontrado', `Nenhum jogador encontrado com o nome "${nomeJogador}".`);
        }
    };

    const selecionarJogador = (jogador) => {
        mostrarJogadorNoTopo(jogador);
    };

    const navegarPara = (rota, linkRecebido = '') => {
        setPaginaAtual(rota);
        setDrawerAberto(false);

        if (linkRecebido) {
            setUltimoLink(linkRecebido);
        }
    };

    const rotaDoLink = (url) => {
        if (!url) {
            return null;
        }

        const possivelRota = url
            .replace('pitangueira://', '')
            .replace(/^https?:\/\/[^/]+\/?/, '')
            .replace(/^\/+/, '')
            .split(/[/?#]/)[0]
            .toLowerCase();

        if (['home', 'contato', 'perfil', 'sair', 'servico'].includes(possivelRota)) {
            return possivelRota;
        }

        return null;
    };

    const tratarDeepLink = (url) => {
        const rota = rotaDoLink(url);

        if (rota) {
            navegarPara(rota, url);
            setDeepLinkVisivel(true);
        }
    };

    useEffect(() => {
        Linking.getInitialURL().then(tratarDeepLink);

        const subscription = Linking.addEventListener('url', ({ url }) => {
            tratarDeepLink(url);
        });

        return () => {
            subscription?.remove();
        };
    }, []);

    const renderizarPagina = () => {
        if (paginaAtual === 'contato') {
            return <Contato onNavigate={navegarPara} onAbrirDeepLink={() => setDeepLinkVisivel(true)} />;
        }

        if (paginaAtual === 'perfil') {
            return <Perfil onNavigate={navegarPara} onAbrirDeepLink={() => setDeepLinkVisivel(true)} />;
        }

        if (paginaAtual === 'sair') {
            return <Sair onNavigate={navegarPara} onAbrirDeepLink={() => setDeepLinkVisivel(true)} />;
        }

        if (paginaAtual === 'servico') {
            return <Servico onNavigate={navegarPara} onAbrirDeepLink={() => setDeepLinkVisivel(true)} />;
        }

        return (
            <ScrollView
                ref={scrollRef}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <Text style={styles.kicker}>Galeria dos craques</Text>
                    <Text style={styles.title}>Craques do Futebol</Text>
                    <Text style={styles.subtitle}>Escolha um jogador e veja ele em destaque.</Text>
                </View>

                <View style={styles.statsRow}>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>{galeriaJogadores.length}</Text>
                        <Text style={styles.statLabel}>Jogadores</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>{totalPaises}</Text>
                        <Text style={styles.statLabel}>Paises</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>{mediaNota}</Text>
                        <Text style={styles.statLabel}>Media</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>{destaque.nota}</Text>
                        <Text style={styles.statLabel}>Escolhido</Text>
                    </View>
                </View>

                <View style={styles.centralArea}>
                    <Image source={destaque.imagem} style={styles.centralImage} resizeMode="contain" />
                    <View style={styles.imageInfo}>
                        <View style={styles.badgesRow}>
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{destaque.pais}</Text>
                            </View>
                            <View style={styles.ratingBadge}>
                                <Text style={styles.ratingBadgeText}>{destaque.nota}</Text>
                            </View>
                        </View>
                        <Text style={styles.playerName}>{destaque.nomeCompleto}</Text>
                        <Text style={styles.playerHighlight}>{destaque.destaque}</Text>
                        <Text style={styles.playerDetails}>
                            {destaque.posicao} | {destaque.clube} | {destaque.camisa}
                        </Text>
                        <View style={styles.profileGrid}>
                            <View style={styles.profileItem}>
                                <Text style={styles.profileLabel}>Estilo</Text>
                                <Text style={styles.profileValue}>{destaque.estilo}</Text>
                            </View>
                            <View style={styles.profileItem}>
                                <Text style={styles.profileLabel}>Clube</Text>
                                <Text style={styles.profileValue}>{destaque.clube}</Text>
                            </View>
                        </View>
                        <View style={styles.skillBlock}>
                            <View style={styles.skillHeader}>
                                <Text style={styles.skillLabel}>Habilidade</Text>
                                <Text style={styles.skillNumber}>{destaque.habilidade}</Text>
                            </View>
                            <View style={styles.skillTrack}>
                                <View style={[styles.skillFill, { width: `${destaque.habilidade}%` }]} />
                            </View>
                            <View style={styles.skillHeader}>
                                <Text style={styles.skillLabel}>Ritmo</Text>
                                <Text style={styles.skillNumber}>{destaque.ritmo}</Text>
                            </View>
                            <View style={styles.skillTrack}>
                                <View style={[styles.skillFill, { width: `${destaque.ritmo}%` }]} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.searchSection}>
                    <Text style={styles.sectionLabel}>Buscar jogador</Text>
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.input}
                            value={nomeJogador}
                            placeholder="Ex: neymar, messi, real madrid..."
                            placeholderTextColor="#7a8794"
                            onChangeText={setNomeJogador}
                            onSubmitEditing={buscarJogador}
                        />
                        <TouchableOpacity style={styles.searchButton} onPress={buscarJogador} activeOpacity={0.85}>
                            <Text style={styles.searchButtonText}>Buscar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.gallerySection}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionLabel}>Craques em destaque</Text>
                        <Text style={styles.counter}>{jogadoresFiltrados.length} jogadores</Text>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.filtersRow}
                    >
                        {posicoes.map((posicao) => (
                            <TouchableOpacity
                                key={posicao}
                                style={[
                                    styles.filterButton,
                                    filtroPosicao === posicao && styles.filterButtonActive,
                                ]}
                                onPress={() => setFiltroPosicao(posicao)}
                                activeOpacity={0.85}
                            >
                                <Text
                                    style={[
                                        styles.filterButtonText,
                                        filtroPosicao === posicao && styles.filterButtonTextActive,
                                    ]}
                                >
                                    {posicao}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <View style={styles.thumbnailsGrid}>
                        {jogadoresFiltrados.map((jogador) => (
                            <TouchableOpacity
                                key={jogador.id}
                                style={[
                                    styles.thumbnailCard,
                                    destaque.id === jogador.id && styles.thumbnailCardActive,
                                ]}
                                onPress={() => selecionarJogador(jogador)}
                                activeOpacity={0.75}
                            >
                                <Image source={jogador.imagem} style={styles.thumbnail} resizeMode="contain" />
                                <View style={styles.thumbnailInfo}>
                                    <Text style={styles.thumbnailName}>{jogador.nomeCompleto}</Text>
                                    <Text style={styles.thumbnailPosition}>{jogador.posicao}</Text>
                                    <Text style={styles.thumbnailClub}>{jogador.clube}</Text>
                                    <Text style={styles.thumbnailRating}>Nota {jogador.nota}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {renderizarPagina()}
            <TouchableOpacity
                style={styles.menuButton}
                onPress={() => setDrawerAberto(true)}
                activeOpacity={0.85}
            >
                <Ionicons name="menu" size={24} color="#08111f" />
            </TouchableOpacity>
            <DrawerMenu
                aberto={drawerAberto}
                paginaAtual={paginaAtual}
                onFechar={() => setDrawerAberto(false)}
                onNavegar={navegarPara}
                onAbrirDeepLink={() => {
                    setDrawerAberto(false);
                    setDeepLinkVisivel(true);
                }}
            />
            <DeepLinkModal
                visivel={deepLinkVisivel}
                paginaAtual={paginaAtual}
                ultimoLink={ultimoLink}
                onFechar={() => setDeepLinkVisivel(false)}
                onNavegar={(rota, link) => {
                    navegarPara(rota, link);
                    setDeepLinkVisivel(false);
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#08111f',
    },

    menuButton: {
        position: 'absolute',
        top: 18,
        left: 18,
        width: 46,
        height: 46,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#74e291',
        borderWidth: 1,
        borderColor: '#74e291',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        zIndex: 20,
    },

    scrollContent: {
        paddingBottom: 30,
    },

    header: {
        paddingTop: 74,
        paddingBottom: 30,
        paddingHorizontal: 20,
        backgroundColor: '#10291f',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },

    kicker: {
        color: '#74e291',
        fontSize: 13,
        fontWeight: '900',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: 8,
    },

    title: {
        fontSize: isWide ? 34 : 30,
        fontWeight: '900',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 8,
    },

    subtitle: {
        fontSize: isWide ? 16 : 14,
        color: '#c9d7df',
        textAlign: 'center',
    },

    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 18,
        marginBottom: 8,
    },

    statBox: {
        width: (width - 58) / 4,
        minHeight: 68,
        borderRadius: 8,
        backgroundColor: '#f6fbff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#cfeee0',
    },

    statValue: {
        color: '#10291f',
        fontSize: 20,
        fontWeight: '900',
    },

    statLabel: {
        color: '#5b6874',
        fontSize: 10,
        fontWeight: '800',
        marginTop: 3,
        textTransform: 'uppercase',
    },

    centralArea: {
        margin: 20,
        marginTop: 12,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        borderWidth: 2,
        borderColor: '#74e291',
    },

    centralImage: {
        width: '100%',
        height: isWide ? 390 : 330,
        backgroundColor: '#dfe7ea',
    },

    imageInfo: {
        padding: 16,
        backgroundColor: '#ffffff',
    },

    badgesRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },

    badge: {
        alignSelf: 'flex-start',
        backgroundColor: '#10291f',
        borderRadius: 999,
        paddingHorizontal: 11,
        paddingVertical: 5,
    },

    badgeText: {
        color: '#74e291',
        fontSize: 11,
        fontWeight: '900',
        textTransform: 'uppercase',
    },

    ratingBadge: {
        minWidth: 48,
        height: 34,
        borderRadius: 8,
        backgroundColor: '#74e291',
        alignItems: 'center',
        justifyContent: 'center',
    },

    ratingBadgeText: {
        color: '#08111f',
        fontSize: 18,
        fontWeight: '900',
    },

    playerName: {
        color: '#10291f',
        fontSize: 24,
        fontWeight: '900',
        marginBottom: 5,
    },

    playerHighlight: {
        color: '#40505d',
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 8,
    },

    playerDetails: {
        color: '#73808d',
        fontSize: 12,
        fontWeight: '800',
    },

    profileGrid: {
        flexDirection: 'row',
        marginTop: 14,
        marginBottom: 12,
    },

    profileItem: {
        flex: 1,
        padding: 10,
        marginRight: 8,
        borderRadius: 8,
        backgroundColor: '#eef7f2',
    },

    profileLabel: {
        color: '#73808d',
        fontSize: 10,
        fontWeight: '900',
        textTransform: 'uppercase',
        marginBottom: 4,
    },

    profileValue: {
        color: '#10291f',
        fontSize: 13,
        fontWeight: '900',
    },

    skillBlock: {
        marginTop: 4,
    },

    skillHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },

    skillLabel: {
        color: '#40505d',
        fontSize: 12,
        fontWeight: '900',
    },

    skillNumber: {
        color: '#10291f',
        fontSize: 12,
        fontWeight: '900',
    },

    skillTrack: {
        height: 8,
        borderRadius: 8,
        backgroundColor: '#dfe7ea',
        overflow: 'hidden',
        marginBottom: 10,
    },

    skillFill: {
        height: '100%',
        borderRadius: 8,
        backgroundColor: '#74e291',
    },

    searchSection: {
        marginHorizontal: 20,
        marginBottom: 24,
    },

    sectionLabel: {
        fontSize: isWide ? 18 : 16,
        fontWeight: '900',
        color: '#f6fbff',
        marginBottom: 12,
    },

    searchContainer: {
        flexDirection: 'row',
    },

    input: {
        flex: 1,
        marginRight: 10,
        height: 50,
        backgroundColor: '#f6fbff',
        borderRadius: 8,
        paddingHorizontal: 14,
        fontSize: 15,
        color: '#132331',
        borderWidth: 1,
        borderColor: '#74e291',
    },

    searchButton: {
        height: 50,
        paddingHorizontal: 18,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#74e291',
    },

    searchButtonText: {
        color: '#08111f',
        fontWeight: '900',
        fontSize: 15,
    },

    gallerySection: {
        marginHorizontal: 20,
        marginBottom: 20,
    },

    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    counter: {
        color: '#9fb0bd',
        fontSize: 12,
        fontWeight: '800',
        marginBottom: 12,
    },

    filtersRow: {
        paddingBottom: 12,
    },

    filterButton: {
        height: 36,
        paddingHorizontal: 14,
        marginRight: 8,
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: '#132331',
        borderWidth: 1,
        borderColor: '#2b4456',
    },

    filterButtonActive: {
        backgroundColor: '#74e291',
        borderColor: '#74e291',
    },

    filterButtonText: {
        color: '#c9d7df',
        fontSize: 12,
        fontWeight: '900',
    },

    filterButtonTextActive: {
        color: '#08111f',
    },

    thumbnailsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    thumbnailCard: {
        width: cardWidth,
        marginBottom: 12,
        backgroundColor: '#f6fbff',
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: 'transparent',
        elevation: 4,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.16,
        shadowRadius: 5,
    },

    thumbnailCardActive: {
        borderColor: '#74e291',
    },

    thumbnail: {
        width: '100%',
        height: cardWidth * 0.82,
        backgroundColor: '#dfe7ea',
    },

    thumbnailInfo: {
        minHeight: 108,
        padding: 10,
    },

    thumbnailName: {
        fontSize: 14,
        fontWeight: '900',
        color: '#10291f',
        marginBottom: 3,
    },

    thumbnailPosition: {
        fontSize: 12,
        color: '#40505d',
        fontWeight: '800',
        marginBottom: 3,
    },

    thumbnailClub: {
        fontSize: 11,
        color: '#748391',
        fontWeight: '700',
    },

    thumbnailRating: {
        marginTop: 7,
        fontSize: 11,
        color: '#10291f',
        fontWeight: '900',
    },
});
