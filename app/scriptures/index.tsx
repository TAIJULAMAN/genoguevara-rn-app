import { useState } from 'react';
import {
    FlatList,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

type Scripture = {
    id: string;
    reference: string;
    text: string;
    activeDate: string;
    updatedDate: string;
};

const SAMPLE_SCRIPTURES: Scripture[] = [
    {
        id: '1',
        reference: 'Philippians 2:3–4',
        text: '“Do nothing out of selfish ambition or vain conceit. Rather, in humility value others...”',
        activeDate: '4 November, 2025',
        updatedDate: '3 November, 2025',
    },
    {
        id: '2',
        reference: 'Isaiah 40:11',
        text: '“He will tend his flock like a shepherd; he will gather the lambs in his arms; he will carry them in his bosom...”',
        activeDate: '28 October, 2025',
        updatedDate: '27 October, 2025',
    },
    {
        id: '3',
        reference: 'King James',
        text: 'This is the Kings James Version of the text',
        activeDate: '21 September, 2025',
        updatedDate: '20 September, 2025',
    },
    {
        id: '4',
        reference: 'Sample Scripture',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, set eiusmod tempor incididunt et labore et dolore magna aliqua...',
        activeDate: '3 September, 2025',
        updatedDate: '3 September, 2025',
    },
];

export default function ScripturesScreen() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredScriptures = SAMPLE_SCRIPTURES.filter((s) =>
        s.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const Container = Platform.OS === 'web' ? View : SafeAreaView;

    const renderItem = ({ item }: { item: Scripture }) => (
        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
            <View style={styles.cardContent}>
                <View style={styles.cardMain}>
                    <Text style={styles.reference}>{item.reference}</Text>
                    <View style={styles.typeRow}>
                        <Text style={styles.typeIcon}>📖</Text>
                        <Text style={styles.typeLabel}>Scripture</Text>
                    </View>
                    <Text style={styles.quoteText} numberOfLines={2}>
                        {item.text}
                    </Text>
                </View>
                <Text style={styles.chevron}>›</Text>
            </View>
            <View style={styles.metadataRow}>
                <Text style={styles.dateText}>Active: {item.activeDate}</Text>
                <Text style={styles.dateText}>Updated: {item.updatedDate}</Text>
            </View>
            <View style={styles.divider} />
        </TouchableOpacity>
    );

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
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Scriptures</Text>
            </View>

            {/* List */}
            <FlatList
                data={filteredScriptures}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <Text style={styles.searchIcon}>🔍</Text>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search scriptures..."
                        placeholderTextColor="#777777"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
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
        paddingHorizontal: 20,
        paddingTop: 20,
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
    titleContainer: {
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 16,
    },
    title: {
        fontFamily: 'Inter_700Bold',
        fontSize: 32,
        color: '#ffffff',
    },
    listContent: {
        paddingHorizontal: 24,
        paddingBottom: 100, // Space for search bar
    },
    card: {
        paddingVertical: 16,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardMain: {
        flex: 1,
    },
    reference: {
        fontFamily: 'Inter_700Bold',
        fontSize: 18,
        color: '#ffffff',
        marginBottom: 6,
    },
    typeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 8,
    },
    typeIcon: {
        fontSize: 14,
        opacity: 0.8,
    },
    typeLabel: {
        fontFamily: 'Inter_500Medium',
        fontSize: 13,
        color: '#999999',
    },
    quoteText: {
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        color: '#999999',
        lineHeight: 20,
        marginBottom: 12,
    },
    chevron: {
        fontFamily: 'Inter_400Regular',
        fontSize: 24,
        color: '#555555',
        marginLeft: 12,
    },
    metadataRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dateText: {
        fontFamily: 'Inter_400Regular',
        fontSize: 11,
        color: '#555555',
    },
    divider: {
        height: 1,
        backgroundColor: '#2a2a2e',
        marginTop: 16,
    },
    searchContainer: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        paddingHorizontal: 24,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2a2a2e',
        borderRadius: 14,
        paddingHorizontal: 16,
        height: 48,
    },
    searchIcon: {
        fontSize: 16,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontFamily: 'Inter_400Regular',
        fontSize: 15,
        color: '#ffffff',
    },
});
