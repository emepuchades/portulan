import { getCollection } from 'astro:content';

export interface NoteRule {
  text: string;
  label: string;
  group: string;
  post: string;
  postId: string;
}

const RULE_BLOCK = /<RuleCheck\s+rule="([^"]+)">\s*([\s\S]*?)<\/RuleCheck>/g;
const LABEL_PREFIX = /^\s*\*\*[^*]+\*\*\s*/;

function shortLabel(slot: string, fallback: string): string {
  const cleaned = slot.replace(LABEL_PREFIX, '').replace(/\s+/g, ' ').trim();
  return cleaned || fallback;
}

export async function getNoteRules(): Promise<NoteRule[]> {
  const posts = await getCollection('posts');
  posts.sort((a, b) => a.data.order - b.data.order);

  const rules: NoteRule[] = [];
  for (const post of posts) {
    for (const match of (post.body ?? '').matchAll(RULE_BLOCK)) {
      rules.push({
        text: match[1],
        label: shortLabel(match[2], match[1]),
        group: post.data.group,
        post: post.data.title,
        postId: post.id,
      });
    }
  }
  return rules;
}
