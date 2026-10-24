the blog site

Requires Node.js 22.23.4 or newer and pnpm 12.15.0.

Run `pnpm install`, then `pnpm dev` for local development or `pnpm build` to
generate the static site in `dist/`. Use `pnpm preview` to preview that build.

Add `unlisted: true` to a post's frontmatter to publish it at its usual URL while
hiding it from the posts page, RSS feed, and sitemap. Unlisted pages include
`noindex, nofollow` crawler directives. They remain public to anyone with the URL;
these directives do not enforce access control or block crawler requests.

Omit `unlisted` (or set it to `false`) for normal posts. `draft: true` still prevents
the post from being published, even when `unlisted: true`.
