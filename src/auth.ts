import NextAuth from "next-auth"
import github from "next-auth/providers/github"
import google from "next-auth/providers/google"
// credentials참고: https://velog.io/@j_wisdom_h/next-auth
export const { handlers, signIn, signOut, auth } = NextAuth({
   providers: [google, github],
   pages: {
      signIn: '/login_page'
   },
})