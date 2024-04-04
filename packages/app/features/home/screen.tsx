import {
  Button,
  Separator,
  SizableText,
  XStack,
  YStack,
} from '@my/ui'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkLogin = useLink({
    href: '/login',
  });

  return (
    <YStack f={1} jc="center" ai="center" p="$5" gap="$4">
      <SizableText size="$12" fontWeight="bold">
        Dashy
      </SizableText>
      <Separator alignSelf="stretch" horizontal />
      <SizableText size="$4">I am an awsome dashboard.</SizableText>
      <Button {...linkLogin}>Log In</Button>
    </YStack>
  )
}
