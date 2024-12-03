import { z } from "zod";

const schema = z.object({
    name: z.string().min(3).optional(),
    email: z.string().email().optional(),
    username: z.string().min(3).optional()
});

export default schema;