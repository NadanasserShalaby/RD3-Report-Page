import { z } from "zod";

export const homeSchema = z.object({
    name: z
        .string()
        .min(1, "validation.nameRequired"),

    phone: z
        .string()
        .min(10, "validation.phoneRequired")
        .regex(/^05[0-9]{8}$/, "validation.phoneInvalid"),
});
