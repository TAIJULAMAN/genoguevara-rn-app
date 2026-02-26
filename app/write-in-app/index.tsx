import { useState, useEffect } from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function WriteInAppScreen() {
    const router = useRouter();
    const [note, setNote] = useState('');
    const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds

    const Container = Platform.OS === 'web' ? View : SafeAreaView;

    // Helper to format time
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Timer logic
    useEffect(() => {
        if (timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    return (
        <Container style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => router.back()}
                    activeOpacity={0.7}
                    style={styles.closeButton}
                >
                    <Text style={styles.closeIcon}>✕</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Two-Way Prayer</Text>
                <View style={styles.headerActions}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.actionIcon}>🎤</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <View style={styles.checkCircle}>
                            <Text style={styles.checkIcon}>✓</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Intro Text */}
                    <View style={styles.textSection}>
                        <Text style={styles.mainTitle}>
                            Your Quiet Time is sacred. If you still feel inspired, take your time and keep writing.
                        </Text>
                        <Text style={styles.subTitle}>
                            When you’re ready, we’ll move on to test what came through.
                        </Text>
                    </View>

                    {/* Timer */}
                    <View style={styles.timerContainer}>
                        <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
                    </View>

                    {/* Input Area */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder=""
                            placeholderTextColor="#555555"
                            value={note}
                            onChangeText={setNote}
                            multiline
                            autoFocus
                            textAlignVertical="top"
                            selectionColor="#FFD54F"
                        />
                    </View>

                    {/* Continue Button */}
                    <TouchableOpacity
                        style={styles.continueButton}
                        onPress={() => router.push('/check-guidance')}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        paddingTop: Platform.OS === 'web' ? 16 : 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 24,
    },
    closeButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#1c1c1e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeIcon: {
        fontSize: 20,
        color: '#FFD54F',
    },
    headerTitle: {
        fontFamily: 'Inter_400Regular',
        fontSize: 18,
        color: '#ffffff',
    },
    headerActions: {
        flexDirection: 'row',
        gap: 12,
    },
    actionButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#1c1c1e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionIcon: {
        fontSize: 20,
        color: '#FFD54F',
    },
    checkCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#3a3a3e', // Slightly lighter gray like the screenshot
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkIcon: {
        fontSize: 20,
        color: '#000000',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingBottom: 40,
    },
    textSection: {
        marginBottom: 32,
    },
    mainTitle: {
        fontFamily: 'Inter_400Regular',
        fontSize: 18,
        color: '#ffffff',
        lineHeight: 28,
        marginBottom: 16,
    },
    subTitle: {
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: '#666666',
        lineHeight: 24,
    },
    timerContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    timerText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 20,
        color: '#FFD54F',
    },
    inputContainer: {
        backgroundColor: '#161618',
        borderRadius: 24,
        padding: 24,
        minHeight: 300,
        marginBottom: 40,
    },
    textInput: {
        flex: 1,
        color: '#ffffff',
        fontFamily: 'Inter_400Regular',
        fontSize: 18,
        lineHeight: 28,
    },
    continueButton: {
        backgroundColor: '#FFD54F',
        paddingVertical: 18,
        borderRadius: 30,
        alignItems: 'center',
    },
    continueButtonText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 18,
        color: '#000000',
    },
});
