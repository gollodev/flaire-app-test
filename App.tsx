import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Logo from './src/components/logo/logo.component';
import useCities from './src/hooks/useCities';
import Theme from './src/theme';
import Container from './src/components/container/container.component';
import { type City } from './src/types';
import Card from './src/components/card/card.component';
import { truncateString } from './src/utils';
import Spinner from './src/components/spinner/spinner.component';

export default function App() {
  const { cities, loading, error, loadMoreCities, hasMore } = useCities();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <Container>
          <View style={styles.content}>
            <View style={styles.container_logo}>
              <Logo />
            </View>
            <View style={styles.content_view}>
              {!loading && !error && (
                <View style={styles.content_card}>
                  <FlatList
                    data={cities as City[]}
                    keyExtractor={(item: City) => item.id?.toString()}
                    renderItem={({ item: { title, image, description } }) => (
                      <Card imageUri={image}>
                        <Card.Title>{title}</Card.Title>
                        <Card.Description>
                          {truncateString(description, 50)}
                        </Card.Description>
                      </Card>
                    )}
                    onEndReached={() => hasMore && loadMoreCities()}
                    onEndReachedThreshold={0.6}
                    ListFooterComponent={<Spinner />}
                  />
                </View>
              )}
              {loading && <Spinner />}
              {error && !loading && (
                <View>
                  <Text>{error.message}</Text>
                </View>
              )}
            </View>
          </View>
        </Container>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
  },

  content: {
    rowGap: 30,
  },

  content_card: {
    rowGap: 30,
  },

  container_logo: {
    alignItems: 'center',
  },

  content_view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
