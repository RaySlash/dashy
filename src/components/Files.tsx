import { Label, Button, Text, Input, XStack, YStack } from 'tamagui';
import { Search, File, Image } from '@tamagui/lucide-icons';

export default function Files() {
  return (
    <YStack
      margin="$4"
    >
      <Header />
    </YStack>
  );
}

function Header() {
  return (
    <XStack
    >
      <Label>Project files</Label>
      <Input size="$4" placeholder={<Search size="$2" />} />
    </XStack>
  );
}
