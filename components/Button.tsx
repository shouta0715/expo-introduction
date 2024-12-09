import { View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  theme?: 'primary';
};

export function Button({ label, theme }: Props) {
  if (theme === 'primary') {
    return (
      <View className="h-16 mt-5 w-[320px]">
        <Pressable
          className="border-4 bg-white border-yellow-500 rounded-xl items-center p-4 justify-center flex-row gap-4 w-full h-full"
          onPress={() => alert('You pressed a button.')}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            className="pe-2"
          />
          <Text className="text-black text-base">{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View className="w-[320px] h-16 mt-5 flex items-center justify-center p-1">
      <Pressable onPress={() => alert('You pressed a button.')}>
        <Text className="text-white text-lg">{label}</Text>
      </Pressable>
    </View>
  );
}
