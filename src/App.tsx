import { XStack, YStack } from 'tamagui';
import NavBar from './components/NavBar';
import Files from './components/Files';

export default function App() {
  return (
    <XStack>
      <NavBar />
      <Files />
    </XStack>
  );
}
