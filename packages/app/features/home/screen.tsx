import {
  Button,
  Sheet,
  useToastController,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkHome = useLink({
    href: '/',
  })

  const linkUser = useLink({
    href: '/user/nate',
  })

  const linkAbout = useLink({
    href: '/about',
  })

  const linkAbout2 = useLink({
    href: '/about/somebody',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" gap="$4">
      <XStack>
        <Button {...linkHome}>Home</Button>
      </XStack>

      <XStack>
        <Button {...linkUser}>User</Button>
      </XStack>

      <XStack>
        <Button {...linkAbout}>About</Button>
      </XStack>

      <XStack>
        <Button {...linkAbout2}>About</Button>
      </XStack>
      <SheetDemo />
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
