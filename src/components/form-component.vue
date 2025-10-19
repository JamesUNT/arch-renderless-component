<script setup lang="ts">
import { defineProps, defineExpose } from 'vue'
import { useForm } from '../composables/useForm'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})

const { formData, save, clear } = useForm(props.data)

// expõe para o slot
defineExpose({ formData, save, clear })
</script>

<template>
  <slot v-bind="{ formData, save, clear }" />
</template>
