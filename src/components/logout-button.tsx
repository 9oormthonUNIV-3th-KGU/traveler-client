'use client'

import { useRouter } from 'next/navigation'
import { postTokenLogout } from '~/apis/token'

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

function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    const response = await postTokenLogout()

    if (response === 200) router.push(ROUTE.MAIN)
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary" size="sm">
          로그아웃
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>로그아웃 하시겠습니까?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>아니요</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogout}>네</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export { LogoutButton }
