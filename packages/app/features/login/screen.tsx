import {
  Button,
  Input,
  Separator,
  SizableText,
  XStack,
  YStack,
} from '@my/ui'
import { useLink } from 'solito/link'

export function LoginScreen() {
  const linkHome = useLink({
    href: '/',
  });

  const linkDash = useLink({
    href: '/dashboard',
  });

  return (
    <YStack f={1} jc="center" ai="center" p="$5" gap="$4">
      <SizableText size="$12" fontWeight="bold">
        Log In
      </SizableText>
      <Separator alignSelf="stretch" horizontal />
      <YStack ai="center" gap="$2" alignSelf='stretch'>
        <Input size="$4" borderWidth={2} placeholder='Username' />
        <Input size="$4" borderWidth={2} placeholder='Password' />
      </YStack>
      <XStack ai="center" gap="$4">
        <Button {...linkDash}>Log In</Button>
        <Button>Sign Up</Button>
      </XStack>
      <Button {...linkHome} size="$2">Go Back</Button>
    </YStack >
  )
}
