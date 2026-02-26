import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function DrBobModeScreen() {
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
                <Text style={styles.title}>Dr. Bob Mode</Text>
                <View style={styles.placeholder} />
            </View>

            <View style={styles.content}>
                <Text style={styles.subtitle}>Two Way Prayer</Text>
                <Text style={styles.description}>
                    "Read. Be Still. Ask. Write. Test. Obey. Our co-founder Dr. Bob
                    called it Two Way Prayer and this is how he practiced Step 11."
                </Text>

                <View style={styles.stepsContainer}>
                    <View style={styles.stepRow}>
                        <Text style={styles.stepNumber}>1</Text>
                        <Text style={styles.stepText}>Read a spiritual passage</Text>
                    </View>
                    <View style={styles.stepRow}>
                        <Text style={styles.stepNumber}>2</Text>
                        <Text style={styles.stepText}>Be still and quiet your mind</Text>
                    </View>
                    <View style={styles.stepRow}>
                        <Text style={styles.stepNumber}>3</Text>
                        <Text style={styles.stepText}>Ask for guidance & write it down</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.beginButton} activeOpacity={0.8}>
                    <Text style={styles.beginText}>Begin Prayer</Text>
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
    stepsContainer: {
        width: '100%',
        gap: 20,
        marginBottom: 60,
    },
    stepRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2a2a2e',
        padding: 20,
        borderRadius: 16,
        gap: 16,
    },
    stepNumber: {
        fontFamily: 'Inter_800ExtraBold',
        fontSize: 24,
        color: '#94CDFA',
    },
    stepText: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 16,
        color: '#ffffff',
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
