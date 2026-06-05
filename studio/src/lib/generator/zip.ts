import JSZip from 'jszip'

export interface ProjectFiles {
  'CLAUDE.md': string
  '.claude/settings.json': string
  [key: string]: string
}

export async function buildZip(projectName: string, files: ProjectFiles): Promise<Blob> {
  const zip = new JSZip()
  const folder = zip.folder(projectName)!

  for (const [path, content] of Object.entries(files)) {
    if (path.includes('/')) {
      const parts = path.split('/')
      const fileName = parts.pop()!
      let dir = folder
      for (const part of parts) {
        dir = dir.folder(part)!
      }
      dir.file(fileName, content)
    } else {
      folder.file(path, content)
    }
  }

  return zip.generateAsync({ type: 'blob' })
}

export function downloadBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
