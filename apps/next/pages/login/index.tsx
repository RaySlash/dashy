import { LoginScreen } from 'app/features/login/screen'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Log In/Sign Up</title>
      </Head>
      <LoginScreen />
    </>
  )
}
