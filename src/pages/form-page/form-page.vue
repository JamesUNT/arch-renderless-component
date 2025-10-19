<template>
  <modal-form :data="dataFromPage" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import modalForm from '@/modals/modal-form/modal-form.vue'

const dataFromPage = ref({ nome: '', email: '' })

onMounted(async () => {
  console.log('Iniciando a operação de busca de dados... ')
  await new Promise((resolve) => setTimeout(resolve, 3000)) // Simula um processamento inicial
  dataFromPage.value.nome = 'Thiago'
  dataFromPage.value.email = 'thiago@gmail.com'
  console.log('Operação concluída: ', { ...dataFromPage.value })
})
</script>
