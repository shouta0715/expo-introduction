import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  onPress: () => void;
};

export function CircleButton({ onPress }: Props) {
  return (
    <View className="rounded-full w-16 h-16 border-2 border-yellow-500 p-0.5 items-center justify-center">
      <Pressable
        onPress={onPress}
        className="bg-white rounded-full w-14 h-14 items-center justify-center"
      >
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}
