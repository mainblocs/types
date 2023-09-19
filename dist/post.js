"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSchema = void 0;
const zod_1 = require("zod");
const postSchema = zod_1.z.object({
    blog_info: zod_1.z.object({
        id: zod_1.z.string(),
        title: zod_1.z.string(),
        subtitle: zod_1.z.string(),
        description: zod_1.z.string(),
        slug: zod_1.z.string(),
        tags: zod_1.z.string(),
        authorId: zod_1.z.string(),
        hero_image: zod_1.z.string(),
    }),
    file_token: zod_1.z.string(),
    file_url: zod_1.z.string(),
    pass_phrase: zod_1.z.string(),
});
exports.postSchema = postSchema;
