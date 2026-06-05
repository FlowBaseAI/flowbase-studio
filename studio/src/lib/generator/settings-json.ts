interface MCPWithConfig {
  slug: string
  config_snippet: Record<string, unknown>
}

export function generateSettingsJson(
  platform: string,
  mcps: MCPWithConfig[],
): string {
  const base: Record<string, unknown> = {}

  if (platform === 'claude-code') {
    base['model'] = 'claude-opus-4-5'
  }

  const mcpServers: Record<string, unknown> = {}
  for (const mcp of mcps) {
    const snippet = mcp.config_snippet as { mcpServers?: Record<string, unknown> }
    if (snippet.mcpServers) {
      Object.assign(mcpServers, snippet.mcpServers)
    }
  }

  if (Object.keys(mcpServers).length > 0) {
    base['mcpServers'] = mcpServers
  }

  return JSON.stringify(base, null, 2)
}
