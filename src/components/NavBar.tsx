import { Avatar, Button, Text, XStack, YStack } from 'tamagui';
import { BarChartBig, Boxes, Folder, HelpCircle, Home, Settings, StepBack } from '@tamagui/lucide-icons';

export default function NavBar() {
  return (
    <YStack
      margin="$4"
      flexWrap="nowrap"
    >
      <UserInfo />
      <Content />
      <Config />
    </YStack>
  );
}

function UserInfo() {
  const avatar = "https://images.unsplash.com/photo-1595871465907-19020bb76ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw5NDUyNDk0fHxlbnwwfHx8fHw\%3D";

  return (
    <XStack
      gap="$2"
      justifyContent="center"
    >
      <Avatar circular size="$5">
        <Avatar.Image source={avatar} />
        <Avatar.Fallback bc="blue" />
      </Avatar>
      <YStack>
        <XStack
          flex={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            fontWeight="bold"
            fontSize="$5"
          >
            Susie Doe
          </Text>
          <Button
            size="$1"
            backgroundColor="transparent"
            icon={<StepBack size="$1" />}
          >
          </Button>
        </XStack>
        <Text color="grey">susiedoe@example.com</Text>
      </YStack>
    </XStack>
  );
}

function Content() {
  return (
    <YStack>
      <Button icon={Home}>Home</Button>
      <Button icon={Boxes}>All Projects</Button>
      <Button icon={Folder}>Project Files</Button>
      <Button icon={BarChartBig}>Analysis</Button>
    </YStack>
  );
}

function Config() {
  return (
    <YStack>
      <Button icon={HelpCircle}>Support</Button>
      <Button icon={Settings}>Settings</Button>
    </YStack>

  );
}
