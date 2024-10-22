'use client'

import { useRouter } from 'next/navigation'
import { deleteUserDelete } from '~/apis/user'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/components/ui/alert-dialog'
import { Button } from '~/components/ui/button'
import { ROUTE } from '~/constants/route'

function QuitButton() {
  const router = useRouter()

  const handleQuit = async () => {
    const response = await deleteUserDelete(false)

    if (response === 200) router.push(ROUTE.MAIN)
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="lg">
          탈퇴하기
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>탈퇴 하시겠습니까?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>아니요</AlertDialogCancel>
          <AlertDialogAction onClick={handleQuit}>네</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export { QuitButton }
