export type FormData = { nome: string; email: string }
export type FormReference = {
  formData: FormData
  save: (callback: (payload: Record<string, string>) => Promise<void>) => Promise<void>
  clear: () => void
} | null
