import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const platformEnum = z.enum(['claude-code', 'codex', 'gemini-cli'])

const mcpCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/mcp' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    category: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    platform: z.array(platformEnum).default(['claude-code']),
    github_url: z.string().url(),
    install_cmd: z.string(),
    config_snippet: z.record(z.any()),
    is_featured: z.boolean().default(false),
    order: z.number().default(99),
    author: z.string().default('Community'),
    updated_at: z.string().default('2025-01-01'),
  }),
})

const skillsCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/skills' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    category: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    platform: z.array(platformEnum).default(['claude-code']),
    file_name: z.string(),
    is_featured: z.boolean().default(false),
    order: z.number().default(99),
    author: z.string().default('FlowBase'),
    updated_at: z.string().default('2025-01-01'),
  }),
})

const rulesCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/rules' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    rule_type: z.enum(['claude', 'cursor', 'codex']),
    category: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    platform: z.array(platformEnum).default(['claude-code']),
    file_name: z.string(),
    is_featured: z.boolean().default(false),
    order: z.number().default(99),
    author: z.string().default('FlowBase'),
    updated_at: z.string().default('2025-01-01'),
  }),
})

export const collections = {
  mcp: mcpCollection,
  skills: skillsCollection,
  rules: rulesCollection,
}
