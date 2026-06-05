import { generateClaudeMd } from './claude-md'
import { generateSettingsJson } from './settings-json'
import type { ProjectFiles } from './zip'

export interface ResourceData {
  slug: string
  name: string
  description: string
  file_name?: string
  config_snippet?: Record<string, unknown>
  body?: string
}

export function generateProject(
  projectName: string,
  platform: string,
  mcps: ResourceData[],
  skills: ResourceData[],
  rules: ResourceData[],
): ProjectFiles {
  const files: ProjectFiles = {
    'CLAUDE.md': generateClaudeMd(projectName, platform, mcps as any, skills as any, rules as any),
    '.claude/settings.json': generateSettingsJson(platform, mcps as any),
  }

  for (const skill of skills) {
    const name = skill.file_name ?? `${skill.slug}.md`
    files[`skills/${name}`] = skill.body ?? `# ${skill.name}\n\n${skill.description}\n`
  }

  for (const rule of rules) {
    const name = rule.file_name ?? `${rule.slug}.md`
    files[`rules/${name}`] = rule.body ?? `# ${rule.name}\n\n${rule.description}\n`
  }

  return files
}
