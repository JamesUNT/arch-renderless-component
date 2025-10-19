<script setup lang="ts">
import { defineExpose, watch } from 'vue'
import { useForm } from '../composables/useForm'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})

const { formData, save, clear } = useForm(props.data)

watch(
  () => props.data,
  (newData) => {
    Object.keys(newData).forEach((key) => {
      formData.value[key] = newData[key]
    })
  },
  { deep: true, immediate: true },
)

// expõe para o slot, pode ser acessado diretamente do pai casso necessário.
defineExpose({ formData, save, clear })
</script>

<template>
  <slot v-bind="{ formData, save, clear }" />
</template>
