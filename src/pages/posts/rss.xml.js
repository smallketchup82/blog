import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const blog = await getCollection("posts");
  return rss({
    title: "smallketchup82",
    description: "The blog",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      date: post.data.date,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
      link: `/posts/${post.id}/`,
    })),
  });
}
