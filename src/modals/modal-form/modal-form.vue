<script setup lang="ts">
import { ref } from 'vue'
import FormComponent from '../../components/form-component.vue'
import type { FormReference, FormData } from './modal-form-model'

const initial = ref<FormData>({ nome: 'Thiago', email: 'tgs@medi.com' })
const formRef = ref<FormReference>(null)

async function salvarDados(dados: Record<string, string>) {
  const form = dados as FormData
  console.log('Iniciando a operação.. .dados mais recentes: ', { ...form })
  await new Promise((resolve) => setTimeout(resolve, 3000)) // Simula um processamento
  console.log('Operação concluída!')
}

function modificarExterno() {
  // exemplo: modificar formData por outro componente
  if (!formRef.value) return
  // a referência vem do componente; usar any para acessar formData em tempo de execução
  formRef.value.formData.nome = 'Tongo'
  formRef.value.formData.email = 'tongo@medi.com'
}
</script>

<template>
  <FormComponent ref="formRef" :data="initial" v-slot="{ formData, save, clear }">
    <div>
      <input v-model="formData.nome" placeholder="Nome" />
      <input v-model="formData.email" placeholder="Email" />

      <button @click="save(salvarDados)">Salvar</button>
      <button @click="clear">Limpar</button>
      <button @click="modificarExterno">Alterar Externo</button>
    </div>
  </FormComponent>
</template>
