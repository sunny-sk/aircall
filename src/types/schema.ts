import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const callSchema = z.object({
  id: z.string(),
  direction: z.string().optional(),
  duration: z.number(),
  call_type: z.string().optional(),
  is_archived: z.boolean(),
  created_at: z.string(),
  via: z.number().optional(),
  to: z.number().optional(),
  from: z.number().optional(),
});

export type Call = z.infer<typeof callSchema>;
