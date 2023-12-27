import {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: {label: 'email', type: 'email', placeholder: 'Digite seu e-mail'},
                password: {label: 'password', type: 'password'}
            },
            async authorize(credentials) {
                const user = {id: '1', name: 'Flavio Henrique', email: 'flavio@teste', password: '123'}

                if (user && user.email === credentials?.email
                    && user.password === credentials?.password) {
                    return user
                }
                return null
            }
        })
    ]
}
