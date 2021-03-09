import 'next-auth'
import { GenericObject } from 'next-auth/_utils'

declare module 'next-auth/client' {
  export * from 'next-auth/client'

  interface SignInResponse {
    error: string | undefined
    status: number
    ok: boolean
    url: string | null
  }

  export function signin(
    provider?: string,
    data?: GenericObject & {
      callbackUrl?: string
      redirect?: boolean
    },
    authorizationParams?: string | string[][] | GenericObject | URLSearchParams
  ): Promise<SignInResponse>

  export const signIn: typeof signin
}
