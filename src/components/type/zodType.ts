import { z, ZodType } from "zod"; // Add new import
import { FormData } from "./FormData";

export const UserSchema: ZodType<FormData> = z.object({
  username: z
    .string()
    .refine(
      (value) => /^[a-zA-Z][a-zA-Z0-9]{4,}$/.test(value ?? ""),
      "invalid name"
    ),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(16, { message: "Password is too long" })
    .refine(
      (value) =>
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!#$@])[a-zA-Z0-9!#$@]{8,16}$/.test(
          value ?? ""
        ),
      "invalid password"
    ),
});
