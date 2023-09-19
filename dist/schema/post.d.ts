import { z } from "zod";
declare const userSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    email: string;
}, {
    id: number;
    name: string;
    email: string;
}>;
type User = z.infer<typeof userSchema>;
export { userSchema, User };
