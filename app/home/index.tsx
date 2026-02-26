import { useState } from 'react';
import {
    ImageBackground,
    Modal,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppContext } from '../../context/AppContext';

type Tab = 'morning' | 'midday' | 'night';

function getGreeting(tab: Tab): string {
    switch (tab) {
        case 'morning':
            return 'Good Morning.';
        case 'midday':
            return 'Good Afternoon.';
        case 'night':
            return 'Good Evening.';
    }
}

function getTitle(tab: Tab): string {
    switch (tab) {
        case 'morning':
            return 'Morning';
        case 'midday':
            return 'Mid Day';
        case 'night':
            return 'Night';
    }
}

function getFormattedDate(): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const now = new Date();
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    return `Today is ${day}, ${date} ${month}, ${year}`;
}

export default function HomeScreen() {
    const { selectedPath } = useAppContext();
    const [activeTab, setActiveTab] = useState<Tab>('morning');
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const Container = Platform.OS === 'web' ? View : SafeAreaView;

    return (
        <ImageBackground
            source={require('../../assets/mbg.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <Container style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>{getTitle(activeTab)}</Text>
                    <TouchableOpacity
                        style={styles.menuButton}
                        activeOpacity={0.7}
                        onPress={() => setMenuOpen(true)}
                    >
                        <Text style={styles.menuDots}>•••</Text>
                    </TouchableOpacity>
                </View>

                {/* Dropdown Menu */}
                <Modal
                    visible={menuOpen}
                    transparent
                    animationType="fade"
                    onRequestClose={() => setMenuOpen(false)}
                >
                    <Pressable style={styles.overlay} onPress={() => setMenuOpen(false)}>
                        <View style={styles.dropdown}>
                            <TouchableOpacity
                                style={styles.dropdownItem}
                                activeOpacity={0.7}
                                onPress={() => { setMenuOpen(false); router.push('/journal'); }}
                            >
                                <Text style={styles.dropdownIcon}>📖</Text>
                                <Text style={styles.dropdownLabel}>Journal</Text>
                            </TouchableOpacity>

                            <View style={styles.dropdownDivider} />

                            <TouchableOpacity
                                style={styles.dropdownItem}
                                activeOpacity={0.7}
                                onPress={() => { setMenuOpen(false); router.push('/settings'); }}
                            >
                                <Text style={styles.dropdownIcon}>⚙️</Text>
                                <Text style={styles.dropdownLabel}>Settings</Text>
                            </TouchableOpacity>
                        </View>
                    </Pressable>
                </Modal>

                {/* Center Content */}
                <View style={styles.centerContent}>
                    <Text style={styles.greeting}>{getGreeting(activeTab)}</Text>
                    <Text style={styles.dateText}>{getFormattedDate()}</Text>

                    {/* Start Button */}
                    <TouchableOpacity
                        style={styles.startButton}
                        activeOpacity={0.8}
                        onPress={() => {
                            if (selectedPath === 'dr_bob') {
                                router.push('/dr-bob');
                            } else {
                                router.push('/big-book');
                            }
                        }}
                    >
                        <Text style={styles.startText}>Start</Text>
                    </TouchableOpacity>
                </View>

                {/* Bottom Tab Bar */}
                <View style={styles.tabBar}>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'morning' && styles.tabActive]}
                        onPress={() => setActiveTab('morning')}
                        activeOpacity={0.7}
                    >
                        <Text style={[styles.tabIcon, activeTab === 'morning' && styles.tabIconActive]}>
                            ☀️
                        </Text>
                        <Text style={[styles.tabLabel, activeTab === 'morning' && styles.tabLabelActive]}>
                            Morning
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'midday' && styles.tabActive]}
                        onPress={() => setActiveTab('midday')}
                        activeOpacity={0.7}
                    >
                        <Text style={[styles.tabIcon, activeTab === 'midday' && styles.tabIconActive]}>
                            ⚙️
                        </Text>
                        <Text style={[styles.tabLabel, activeTab === 'midday' && styles.tabLabelActive]}>
                            Mid Day
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'night' && styles.tabActive]}
                        onPress={() => setActiveTab('night')}
                        activeOpacity={0.7}
                    >
                        <Text style={[styles.tabIcon, activeTab === 'night' && styles.tabIconActive]}>
                            🌙
                        </Text>
                        <Text style={[styles.tabLabel, activeTab === 'night' && styles.tabLabelActive]}>
                            Night
                        </Text>
                    </TouchableOpacity>
                </View>
            </Container>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'web' ? 16 : 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 16,
    },
    title: {
        fontFamily: 'Inter_800ExtraBold',
        fontSize: 32,
        color: '#1a1a1a',
    },
    menuButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuDots: {
        fontSize: 16,
        color: '#333333',
        letterSpacing: 2,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingTop: Platform.OS === 'web' ? 70 : 90,
        paddingRight: 24,
    },
    dropdown: {
        backgroundColor: 'rgba(20, 30, 55, 0.92)',
        borderRadius: 16,
        paddingVertical: 8,
        paddingHorizontal: 6,
        minWidth: 180,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 12,
    },
    dropdownItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        gap: 14,
    },
    dropdownIcon: {
        fontSize: 22,
    },
    dropdownLabel: {
        fontFamily: 'Inter_500Medium',
        fontSize: 18,
        color: '#ffffff',
    },
    dropdownDivider: {
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        marginHorizontal: 16,
    },
    centerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
    },
    greeting: {
        fontFamily: 'Inter_500Medium',
        fontSize: 22,
        color: '#2a2a2a',
        marginBottom: 6,
    },
    dateText: {
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        color: '#444444',
        marginBottom: 48,
    },
    startButton: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 8,
    },
    startText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 20,
        color: '#1a1a1a',
    },
    tabBar: {
        flexDirection: 'row',
        marginHorizontal: 24,
        marginBottom: 28,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 8,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        borderRadius: 14,
    },
    tabActive: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    tabIcon: {
        fontSize: 20,
        marginBottom: 3,
    },
    tabIconActive: {
        fontSize: 22,
    },
    tabLabel: {
        fontFamily: 'Inter_500Medium',
        fontSize: 11,
        color: '#888888',
    },
    tabLabelActive: {
        fontFamily: 'Inter_700Bold',
        color: '#333333',
    },
});
