"use server";

import { registerSchemas } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs"; // Import bcryptjs instead of bcrypt
import { db } from "@/lib/db";

export const register = async (value: z.infer<typeof registerSchemas>) => {
  const validatedFields = registerSchemas.safeParse(value);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, email, password } = validatedFields.data;

  // Hash the password using bcryptjs
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({ where: { email } });
  if (existingUser) {
    return { error: "Email already in use" };
  }
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  return { success: "Email sent!" };
};
