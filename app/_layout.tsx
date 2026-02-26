import { Stack } from 'expo-router';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { ActivityIndicator, View } from 'react-native';
import { AppProvider } from '../context/AppContext';

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1a1a1e' }}>
                <ActivityIndicator size="large" color="#94CDFA" />
            </View>
        );
    }

    return (
        <AppProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="welcome/index" />
                <Stack.Screen name="reminders/index" />
                <Stack.Screen name="selection/index" />
                <Stack.Screen name="home/index" />
                <Stack.Screen name="journal/index" />
                <Stack.Screen name="settings/index" />
                <Stack.Screen name="notifications/index" />
                <Stack.Screen name="scriptures/index" />
                <Stack.Screen name="dr-bob/index" />
                <Stack.Screen name="big-book/index" />
                <Stack.Screen name="meditation/index" />
                <Stack.Screen name="capture-inspiration/index" />
                <Stack.Screen name="plan-the-day/index" />
                <Stack.Screen name="check-guidance/index" />
            </Stack>
        </AppProvider>
    );
}
