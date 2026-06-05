import { persistentMap } from '@nanostores/persistent'

export interface WorkspaceState {
  projectName: string
  platform: 'claude-code' | 'codex' | 'gemini-cli'
  selectedMcps: string    // JSON string of slug[]
  selectedSkills: string  // JSON string of slug[]
  selectedRules: string   // JSON string of slug[]
}

export const workspaceStore = persistentMap<WorkspaceState>('fbs:workspace:', {
  projectName: 'my-project',
  platform: 'claude-code',
  selectedMcps: '[]',
  selectedSkills: '[]',
  selectedRules: '[]',
})

export function getSelectedMcps(): string[] {
  try { return JSON.parse(workspaceStore.get().selectedMcps) } catch { return [] }
}

export function getSelectedSkills(): string[] {
  try { return JSON.parse(workspaceStore.get().selectedSkills) } catch { return [] }
}

export function getSelectedRules(): string[] {
  try { return JSON.parse(workspaceStore.get().selectedRules) } catch { return [] }
}

export function toggleMcp(slug: string) {
  const current = getSelectedMcps()
  const next = current.includes(slug) ? current.filter(s => s !== slug) : [...current, slug]
  workspaceStore.setKey('selectedMcps', JSON.stringify(next))
}

export function toggleSkill(slug: string) {
  const current = getSelectedSkills()
  const next = current.includes(slug) ? current.filter(s => s !== slug) : [...current, slug]
  workspaceStore.setKey('selectedSkills', JSON.stringify(next))
}

export function toggleRule(slug: string) {
  const current = getSelectedRules()
  const next = current.includes(slug) ? current.filter(s => s !== slug) : [...current, slug]
  workspaceStore.setKey('selectedRules', JSON.stringify(next))
}

export function addMcp(slug: string) {
  const current = getSelectedMcps()
  if (!current.includes(slug)) {
    workspaceStore.setKey('selectedMcps', JSON.stringify([...current, slug]))
  }
}

export function addSkill(slug: string) {
  const current = getSelectedSkills()
  if (!current.includes(slug)) {
    workspaceStore.setKey('selectedSkills', JSON.stringify([...current, slug]))
  }
}

export function addRule(slug: string) {
  const current = getSelectedRules()
  if (!current.includes(slug)) {
    workspaceStore.setKey('selectedRules', JSON.stringify([...current, slug]))
  }
}

export function isInWorkspace(type: 'mcp' | 'skill' | 'rule', slug: string): boolean {
  if (type === 'mcp') return getSelectedMcps().includes(slug)
  if (type === 'skill') return getSelectedSkills().includes(slug)
  return getSelectedRules().includes(slug)
}
