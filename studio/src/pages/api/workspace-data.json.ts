import { getCollection } from 'astro:content'

export async function GET() {
  const mcps = await getCollection('mcp')
  const skills = await getCollection('skills')
  const rules = await getCollection('rules')

  const mcpData = mcps
    .sort((a, b) => a.data.order - b.data.order)
    .map(m => ({
      slug: m.id,
      name: m.data.name,
      description: m.data.description,
      category: m.data.category,
      tags: m.data.tags,
      install_cmd: m.data.install_cmd,
      config_snippet: m.data.config_snippet,
      is_featured: m.data.is_featured,
    }))

  const skillData = skills
    .sort((a, b) => a.data.order - b.data.order)
    .map(s => ({
      slug: s.id,
      name: s.data.name,
      description: s.data.description,
      category: s.data.category,
      difficulty: s.data.difficulty,
      file_name: s.data.file_name,
    }))

  const ruleData = rules
    .sort((a, b) => a.data.order - b.data.order)
    .map(r => ({
      slug: r.id,
      name: r.data.name,
      description: r.data.description,
      category: r.data.category,
      rule_type: r.data.rule_type,
      file_name: r.data.file_name,
    }))

  return new Response(JSON.stringify({ mcpData, skillData, ruleData }), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
