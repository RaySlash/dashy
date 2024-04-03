import { XStack, YStack } from 'tamagui';
import NavBar from './components/NavBar';
import Files from './components/Files';

export default function App() {
  return (
    <XStack
      minHeight="100vh"
      minWidth="100vw"
    >
      <NavBar />
      <Files />
    </XStack>
  );
}
