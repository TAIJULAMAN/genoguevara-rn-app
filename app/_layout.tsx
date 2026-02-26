import { Stack } from 'expo-router';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { ActivityIndicator, View } from 'react-native';

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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#94CDFA" />
            </View>
        );
    }

    return (
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
        </Stack>
    );
}
