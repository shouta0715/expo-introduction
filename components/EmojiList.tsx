import { Image, ImageSource } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, Pressable, FlatList } from 'react-native';

type Props = {
  onSelect: (emoji: ImageSource) => void;
  onClose: () => void;
};

export function EmojiList({ onSelect, onClose }: Props) {
  const [emoji] = useState<ImageSource[]>([
    require('../assets/images/emoji1.png'),
    require('../assets/images/emoji2.png'),
    require('../assets/images/emoji3.png'),
    require('../assets/images/emoji4.png'),
    require('../assets/images/emoji5.png'),
    require('../assets/images/emoji6.png'),
  ]);

  const handleEmojiSelect = (emoji: ImageSource) => {
    onSelect(emoji);
    onClose();
  };

  return (
    <FlatList
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <Pressable onPress={() => handleEmojiSelect(item)}>
          <Image source={item} style={styles.image} />
        </Pressable>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
