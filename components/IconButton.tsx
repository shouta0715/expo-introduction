import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, Text } from 'react-native';

type Props = {
  onPress: () => void;
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function IconButton({ onPress, label, icon }: Props) {
  return (
    <Pressable onPress={onPress}>
      <MaterialIcons name={icon} size={38} color="white" />
      <Text className="mt-3 text-white">{label}</Text>
    </Pressable>
  );
}
