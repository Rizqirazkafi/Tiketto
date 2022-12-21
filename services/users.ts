import { prisma } from "../helpers/prisma";

export async function createUser(payload: {
  fullName: string;
  email: string;
  password: string;
  role?: "ADMINISTRATOR" | "USER";
}) {
  const { role = "USER" } = payload;
  try {
    const newUser = prisma.user.create({
      data: {
        ...payload,
        role,
      },
    });

    return newUser;
  } catch (error) {
    console.error(error);
  }
}
