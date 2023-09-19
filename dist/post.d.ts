import { z } from "zod";
declare const postSchema: z.ZodObject<{
    blog_info: z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        subtitle: z.ZodString;
        description: z.ZodString;
        slug: z.ZodString;
        tags: z.ZodString;
        authorId: z.ZodString;
        hero_image: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        title: string;
        description: string;
        subtitle: string;
        slug: string;
        tags: string;
        authorId: string;
        hero_image: string;
    }, {
        id: string;
        title: string;
        description: string;
        subtitle: string;
        slug: string;
        tags: string;
        authorId: string;
        hero_image: string;
    }>;
    file_token: z.ZodString;
    file_url: z.ZodString;
    pass_phrase: z.ZodString;
}, "strip", z.ZodTypeAny, {
    blog_info: {
        id: string;
        title: string;
        description: string;
        subtitle: string;
        slug: string;
        tags: string;
        authorId: string;
        hero_image: string;
    };
    file_token: string;
    file_url: string;
    pass_phrase: string;
}, {
    blog_info: {
        id: string;
        title: string;
        description: string;
        subtitle: string;
        slug: string;
        tags: string;
        authorId: string;
        hero_image: string;
    };
    file_token: string;
    file_url: string;
    pass_phrase: string;
}>;
export type Post = z.infer<typeof postSchema>;
export { postSchema };
