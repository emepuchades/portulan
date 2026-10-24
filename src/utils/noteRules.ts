import { getCollection } from 'astro:content';

export interface NoteRule {
  text: string;
  group: string;
  post: string;
}

const RULE_ATTRIBUTE = /<RuleCheck\s+rule="([^"]+)"/g;

export async function getNoteRules(): Promise<NoteRule[]> {
  const posts = await getCollection('posts');
  posts.sort((a, b) => a.data.order - b.data.order);

  const rules: NoteRule[] = [];
  for (const post of posts) {
    for (const match of (post.body ?? '').matchAll(RULE_ATTRIBUTE)) {
      rules.push({ text: match[1], group: post.data.group, post: post.data.title });
    }
  }
  return rules;
}
