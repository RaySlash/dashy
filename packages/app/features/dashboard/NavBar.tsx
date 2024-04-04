import { Avatar, Button, Text, XStack, YStack } from 'tamagui';
import { BarChartBig, Boxes, Folder, HelpCircle, Home, Settings, StepBack } from '@tamagui/lucide-icons';
import { useLink } from 'solito/link';

export default function Bar() {
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
  const linkHome = useLink({
    href: "/",
  });

  return (
    <XStack gap="$2">
      <Avatar circular size="$5">
        <Avatar.Image src={avatar} />
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
            {...linkHome}
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
  const linkHome = useLink({
    href: "/dashboard",
  });
  const linkProjects = useLink({
    href: "/projects",
  });
  const linkFiles = useLink({
    href: "/project/files",
  });
  const linkAnalysis = useLink({
    href: "/analysis",
  });
  return (
    <YStack
      gap="$4"
    >
      <Button {...linkHome} icon={Home}>Home</Button>
      <Button {...linkProjects} icon={Boxes}>Projects</Button>
      <Button {...linkFiles} icon={Folder}>Files</Button>
      <Button {...linkAnalysis} icon={BarChartBig}>Analysis</Button>
    </YStack>
  );
}

function Config() {
  const linkSupport = useLink({
    href: "/help",
  });
  const linkSettings = useLink({
    href: "/settings",
  });

  return (
    <YStack
      gap="$2"
    >
      <Button {...linkSupport} icon={HelpCircle}>Support</Button>
      <Button {...linkSettings} icon={Settings}>Settings</Button>
    </YStack>

  );
}
