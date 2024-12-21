import { View, StyleSheet } from 'react-native';

import { Button } from '@/components/Button';
import { ImageViewer } from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { CircleButton } from '@/components/CircleButton';
import { IconButton } from '@/components/IconButton';
import { EmojiPicker } from '@/components/EmojiPicker';
import { EmojiList } from '@/components/EmojiList';
import { ImageSource } from 'expo-image';
import { EmojiSticker } from '@/components/EmojiSticker';
const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] =
    useState<ImagePicker.ImagePickerResult | null>(null);
  const [showOptions, setShowOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | null>(null);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });
    if (result.canceled) return;

    setShowOptions(true);
    setSelectedImage(result);
  };

  const onReset = () => {
    setShowOptions(false);
    setSelectedImage(null);
  };

  const onAddSticker = () => {
    console.log('onAddSticker');
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={
            selectedImage?.assets?.[0].uri
              ? { uri: selectedImage?.assets?.[0].uri }
              : PlaceholderImage
          }
        />
        {pickedEmoji && (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        )}
      </View>
      {showOptions ? (
        <View className="absolute bottom-20">
          <View className="flex-row justify-center items-center gap-10">
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
          <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
            <EmojiList onSelect={setPickedEmoji} onClose={onModalClose} />
          </EmojiPicker>
        </View>
      ) : (
        <View className="flex-1 justify-center mt-10 items-center">
          <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button label="Use this photo" onPress={() => setShowOptions(true)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
