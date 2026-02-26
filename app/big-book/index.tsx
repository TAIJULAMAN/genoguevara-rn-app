import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function BigBookThumperScreen() {
    const router = useRouter();

    const Container = Platform.OS === 'web' ? View : SafeAreaView;

    return (
        <Container style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => router.back()}
                    activeOpacity={0.7}
                    style={styles.backButton}
                >
                    <Text style={styles.backArrow}>‹</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Big Book Thumper</Text>
                <View style={styles.placeholder} />
            </View>

            <View style={styles.content}>
                <Text style={styles.subtitle}>Page 86–88</Text>
                <Text style={styles.description}>
                    "Line by line exactly like the big book. A guided meditation through the spiritual instructions of Alcoholics Anonymous."
                </Text>

                <View style={styles.verseCard}>
                    <Text style={styles.verseText}>
                        "On awakening let us think about the twenty-four hours ahead. We consider our plans for the day. Before we begin, we ask God to direct our thinking, especially asking that it be divorced from self-pity, dishonest or self-seeking motives."
                    </Text>
                </View>

                <TouchableOpacity style={styles.beginButton} activeOpacity={0.8}>
                    <Text style={styles.beginText}>Start Reading</Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1e',
        paddingTop: Platform.OS === 'web' ? 16 : 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 16,
    },
    backButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#2a2a2e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backArrow: {
        fontFamily: 'Inter_400Regular',
        fontSize: 24,
        color: '#ffffff',
        marginTop: -2,
    },
    title: {
        fontFamily: 'Inter_700Bold',
        fontSize: 20,
        color: '#ffffff',
    },
    placeholder: {
        width: 36,
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 40,
        alignItems: 'center',
    },
    subtitle: {
        fontFamily: 'Inter_800ExtraBold',
        fontSize: 32,
        color: '#ffffff',
        marginBottom: 16,
        textAlign: 'center',
    },
    description: {
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: '#999999',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 48,
    },
    verseCard: {
        backgroundColor: '#2a2a2e',
        padding: 24,
        borderRadius: 20,
        width: '100%',
        marginBottom: 60,
        borderLeftWidth: 4,
        borderLeftColor: '#94CDFA',
    },
    verseText: {
        fontFamily: 'Inter_400Regular',
        fontSize: 17,
        color: '#ffffff',
        lineHeight: 28,
        fontStyle: 'italic',
    },
    beginButton: {
        backgroundColor: '#94CDFA',
        width: '100%',
        paddingVertical: 18,
        borderRadius: 16,
        alignItems: 'center',
    },
    beginText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 18,
        color: '#1a1a1a',
    },
});
