import NextAuth from "next-auth";
import Google from 'next-auth/providers/google';
import { createGuest, getGuestByEmail } from "./api_guests";

const authConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        authorized({ auth, request }) {
            return !!auth?.user;
        },
        async signIn({ user, account, profile }) {
            try {
                console.log(user.email);
                const existingGuest = await getGuestByEmail(user?.email);
                console.log(existingGuest);
                if (!existingGuest) {
                    await createGuest({ email: user.email, fullName: user.name });
                }
                return true;
            } catch (e) {
                console.log(e);
                return false;
            }
        },
        async session({ session, user }) {
            const guest = await getGuestByEmail(session.user.email);
            session.user.guest = guest;
            return session;
        }
    },
    pages: {
        signIn: '/login',
    }
};

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth(authConfig);