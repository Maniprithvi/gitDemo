import type { Prisma } from "@prisma/client";
import type {
  Adapter,
  AdapterAccount,
  AdapterSession,
  AdapterUser,
} from "@auth/core/adapters";
import p from "@/prisma";

export function PrismaAdapter(): Adapter {
  return {
    createUser: async ({ id: _id, ...data }: AdapterUser) => {
      const createdUser = await p.user.create({
        data: {
          ...data,
          // Ensure emailVerified is handled correctly according to Prisma's expectations
          emailVerified:
            data.emailVerified instanceof Date ? null : data.emailVerified,
        },
      });
      return createdUser as AdapterUser; // Cast the result to AdapterUser
    },

    getUser: async (id) => {
      const user = await p.user.findUnique({ where: { id } });
      return user as AdapterUser | null;
    },

    // getUserByEmail: async(email) => p.user.findUnique({ where: { email } } return user as AdapterUser | null;),
    getUserByEmail: async (email) => {
      const user = await p.user.findUnique({ where: { email } });
      return user as AdapterUser | null;
    },
    async getUserByAccount(provider_providerAccountId) {
      const account = await p.account.findUnique({
        where: { provider_providerAccountId },
        select: { user: true },
      });
      return (account?.user as AdapterUser) ?? null;
    },
    // updateUser: async ({ id, ...data }) =>
    //   p.user.update({ where: { id }, data:{
    //     ...data
    //   } }) as Promise<AdapterUser>,
    updateUser: async ({ id, ...data }: AdapterUser) => {
      // Ensure that emailVerified is handled correctly according to Prisma's expectations
      const updatedUser = await p.user.update({
        where: { id },
        data: {
          ...data,
          emailVerified:
            data.emailVerified instanceof Date ? null : data.emailVerified,
        },
      });
      return updatedUser as AdapterUser;
    },

    deleteUser: async (id) =>
      p.user.delete({ where: { id } }) as Promise<AdapterUser>,

    linkAccount: async (data) =>
      p.account.create({ data }) as unknown as AdapterAccount,

    unlinkAccount: async (provider_providerAccountId) =>
      p.account.delete({
        where: { provider_providerAccountId },
      }) as unknown as AdapterAccount,

    async getSessionAndUser(sessionToken) {
      try {
        const userAndSession = await p.session.findUnique({
          where: { sessionToken },
          include: { user: true },
        });
        if (!userAndSession) return null;
        const { user, ...session } = userAndSession;
        return { user, session } as {
          user: AdapterUser;
          session: AdapterSession;
        };
      } catch (error: any) {
        throw new Error("Failed to fetch session and user", error);
      }
    },
    createSession: async (data) => p.session.create({ data }),

    updateSession: async (data) =>
      p.session.update({ where: { sessionToken: data.sessionToken }, data }),

    deleteSession: async (sessionToken) =>
      p.session.delete({ where: { sessionToken } }),

    async createVerificationToken(data) {
      const verificationToken = await p.verificationToken.create({ data });
      // @ts-expect-errors // MongoDB needs an ID, but we don't
      if (verificationToken.id) delete verificationToken.id;
      return verificationToken;
    },

    async useVerificationToken(identifier_token) {
      try {
        const verificationToken = await p.verificationToken.delete({
          where: { identifier_token },
        });
        // @ts-expect-errors // MongoDB needs an ID, but we don't
        if (verificationToken.id) delete verificationToken.id;
        return verificationToken;
      } catch (error) {
        // If token already used/deleted, just return null
        // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
        if ((error as Prisma.PrismaClientKnownRequestError).code === "P2025")
          return null;
        throw error;
      }
    },

    async getAccount(providerAccountId, provider) {
      return p.account.findFirst({
        where: { providerAccountId, provider },
      }) as Promise<AdapterAccount | null>;
    },

    async createAuthenticator(authenticator) {
      return p.authenticator.create({
        data: authenticator,
      });
    },
    async getAuthenticator(credentialID) {
      return p.authenticator.findUnique({
        where: { credentialID },
      });
    },

    async listAuthenticatorsByUserId(userId) {
      return p.authenticator.findMany({
        where: { userId },
      });
    },

    async updateAuthenticatorCounter(credentialID, counter) {
      return p.authenticator.update({
        where: { credentialID },
        data: { counter },
      });
    },
  };
}
