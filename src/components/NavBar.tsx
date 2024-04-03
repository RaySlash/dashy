import { Avatar, Button, Text, XStack, YStack } from 'tamagui';
import { BarChartBig, Boxes, Folder, HelpCircle, Home, Settings, StepBack } from '@tamagui/lucide-icons';

export default function NavBar() {
  return (
    <YStack
      maxWidth="25%"
      margin="$4"
      flex={1}
      justifyContent="space-between"
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
    <XStack gap="1rem">
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
          <NavButton
            size="$1"
            backgroundColor="transparent"
            icon={<StepBack size="$1" />}
          >
          </NavButton>
        </XStack>
        <Text color="grey">susiedoe@example.com</Text>
      </YStack>
    </XStack>
  );
}

function Content() {
  return (
    <YStack
      gap="$4"
    >
      <NavButton icon={Home} text="Home" ></NavButton>
      <NavButton icon={Boxes} text="Projects" ></NavButton>
      <NavButton icon={Folder} text="Project Files" ></NavButton>
      <NavButton icon={BarChartBig} text="Analysis" ></NavButton>
    </YStack>
  );
}

function Config() {
  return (
    <YStack
      gap="$2"
    >
      <NavButton icon={HelpCircle} text="Support" ></NavButton>
      <NavButton icon={Settings} text="Settings" ></NavButton>
    </YStack>

  );
}

function NavButton(props: { icon: any, text: string }) {
  return (
    <Button
      icon={props.icon}
      backgroundColor="transparent"
      hoverBackgroundColor="grey"
    >
      {props.text}
    </Button>
  );
}
