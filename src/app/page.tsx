import LoginForm from '../components/loginForm'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Sign in - Webshop',
  description: 'Built with Nextjs',
}

export default function Home() {
  return (
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
            Welcome to WebShop!
          </h1>
          <h2 class="text-lg font-bold leading-tight tracking-tight md:text-xl text-white">
            Sign in to your account
          </h2>
          <LoginForm/>
        </div>
      </div>
    </div>
  )
}
