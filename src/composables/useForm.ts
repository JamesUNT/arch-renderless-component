import { ref, toRaw } from 'vue'

export function useForm<T extends Record<string, string>>(data: T) {
  // referência para os dados do formulário
  const formData = ref<T>(structuredClone(toRaw(data)) as T)

  // cópia para reset
  const originalData: T = structuredClone(toRaw(data)) as T

  /**
   * save recebe um callback externo que vai receber os dados mais recentes
   */
  async function save(callback: (payload: T) => Promise<void>) {
    // sempre pega o estado mais recente do formData
    return await callback(toRaw(formData.value) as T)
  }

  /**
   * clear reseta o formData para o estado original
   */
  function clear() {
    Object.keys(originalData).forEach((key) => {
      formData.value[key] = originalData[key]
    })
  }

  return { formData, save, clear }
}
