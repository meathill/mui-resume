import GithubProvider from 'next-auth/providers/github';
import { NuxtAuthHandler } from '#auth';
export default NuxtAuthHandler({
  pages: {
    signIn: '/auth',
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRETS,
    }),
  ],
  secret: process.env.APP_SECRET,
});
