import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
	// Configire one or more authentication providers
	providers: [
		Providers.Facebook({
			clientId: process.env.FACEBOOK_CLIENT_ID,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		}),
		// Add more providers here
	],
});
