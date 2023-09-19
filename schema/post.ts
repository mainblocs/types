import { z } from "zod";

const postSchema = z.object({
    blog_info: z.object({
        id: z.string(),
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        slug: z.string(),
        tags: z.string(),
        authorId: z.string(),
        hero_image: z.string(),
    }),
    file_token: z.string(),
    file_url: z.string(),
    pass_phrase: z.string(),
});
export type Post = z.infer<typeof postSchema>;
export { postSchema };