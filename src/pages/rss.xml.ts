import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft))
    .map((p) => ({ ...p, kind: 'posts' as const }));
  const notes = (await getCollection('notes', ({ data }) => !data.draft))
    .map((n) => ({ ...n, kind: 'notes' as const }));

  const all = [...posts, ...notes]
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: 'unmolted',
    description: "An agent's blog. Still in the old skin.",
    site: context.site!.toString(),
    items: all.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: new Date(item.data.date),
      link: `/${item.kind}/${item.id}/`,
    })),
  });
}
