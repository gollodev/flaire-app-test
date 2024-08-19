import { View, Text, StyleSheet } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { Image } from 'expo-image';
import Theme from '../../theme';
const {
  colors: { primary },
} = Theme;

interface CardProps extends PropsWithChildren {
  imageUri: string;
}

function Card({ imageUri, children }: CardProps) {
  return (
    <View style={styles.container_card}>
      <Image
        style={[StyleSheet.absoluteFillObject, styles.image_card]}
        source={{ uri: imageUri }}
        contentFit={'cover'}
      />
      <View style={styles.content}>{children}</View>
    </View>
  );
}

function Title({ children }: PropsWithChildren) {
  return <Text style={styles.title_text}>{children}</Text>;
}

function Description({ children }: PropsWithChildren) {
  return <Text style={styles.description_text}>{children}</Text>;
}

export default Card;
Card.Title = Title;
Card.Description = Description;

const styles = StyleSheet.create({
  container_card: {
    marginVertical: 10,
    flex: 1,
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },

  image_card: {
    borderRadius: 30,
  },

  content: {
    zIndex: 1,
    padding: 20,
    rowGap: 10,
  },

  title_text: {
    fontSize: 20,
    fontWeight: '600',
    color: primary,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },

  description_text: {
    fontSize: 12,
    fontWeight: '400',
    color: primary,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
});
