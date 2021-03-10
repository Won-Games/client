import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/client'

async function protectedRoutes(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  if (!session) {
    context.res.writeHead(302, {
      Location: '/sign-in'
    })
    context.res.end()
  }

  return session
}

export default protectedRoutes
