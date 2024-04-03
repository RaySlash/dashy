import { Label, Button, Text, Input, XStack, YStack, Card, CardProps } from 'tamagui';
import { File, Image } from '@tamagui/lucide-icons';

export default function Files() {
  return (
    <YStack
      margin="$4"
    >
      <Header />
      <Recents />
      <AllFiles />
    </YStack>
  );
}

function StrongLabel(props: { text: string }) {
  return (
    <Label
      fontSize="$5"
      fontWeight="bold"
    >
      {props.text}
    </Label>
  );
}

function FileCard(props: CardProps) {
  return (
    <Card elevate size="$4" bordered {...props}>
      <XStack>
        <File size="$5" />
      </XStack>
      <Card.Footer>
        <Text>{props.filename}</Text>
      </Card.Footer>
    </Card>
  );
}

function Header() {
  return (
    <YStack>
      <XStack>
        <StrongLabel text="Project files" />
      </XStack>
      <XStack>
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
      </XStack>
    </YStack>
  );
}

function Recents() {
  return (
    <YStack>
      <StrongLabel text="Recents" />
      <XStack>
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
      </XStack>
    </YStack>
  );
}

function AllFiles() {
  return (
    <YStack>
      <StrongLabel text="All Files" />
      <XStack>
      </XStack>
    </YStack>
  );
}
