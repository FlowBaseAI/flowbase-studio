import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const platformEnum = z.enum(['claude-code', 'codex', 'gemini-cli'])

const mcpCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/mcp' }),
  schema: z.object({
    name: z.string(),                               // English name (canonical)
    name_zh: z.string().optional(),                 // Chinese display name
    description: z.string(),                        // Chinese-first description
    source: z.string().optional(),                  // e.g. "Anthropic 官方" / "Microsoft 官方" / "社区"
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
    name: z.string(),                               // English name (canonical)
    name_zh: z.string().optional(),                 // Chinese display name
    description: z.string(),                        // Chinese-first description
    category: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    platform: z.array(platformEnum).default(['claude-code']),
    file_name: z.string(),
    source: z.string().optional(),                  // e.g. "社区 / Awesome Claude Code"
    is_featured: z.boolean().default(false),
    order: z.number().default(99),
    author: z.string().default('社区'),
    updated_at: z.string().default('2025-01-01'),
  }),
})

const rulesCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/rules' }),
  schema: z.object({
    name: z.string(),                               // English name (canonical)
    name_zh: z.string().optional(),                 // Chinese display name
    description: z.string(),                        // Chinese-first description
    rule_type: z.enum(['claude', 'cursor', 'codex']),
    category: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    platform: z.array(platformEnum).default(['claude-code']),
    file_name: z.string(),
    source: z.string().optional(),                  // e.g. "Cursor Directory" / "Anthropic 官方"
    is_featured: z.boolean().default(false),
    order: z.number().default(99),
    author: z.string().default('社区'),
    updated_at: z.string().default('2025-01-01'),
  }),
})

export const collections = {
  mcp: mcpCollection,
  skills: skillsCollection,
  rules: rulesCollection,
}
