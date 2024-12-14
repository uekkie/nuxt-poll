<script setup lang="ts">
import { useCounter } from '@vueuse/core'

const { count: point, inc } = useCounter(0, { min: 0 })

const props = defineProps<{
  name: string
  disabled: boolean
}>()

const emit = defineEmits(['update']);

function handleClick() {
  inc()
  emit('update')
}
</script>

<template>
  <div class="card">
    <div>
      {{ props.name }}
    </div>
    <div class="right">
      <button @click="handleClick" :disabled="props.disabled">
        投票する
      </button>
      <div class="point">
        {{ point }}
      </div>
    </div>
  </div>
</template>

<style lang="css">
.card {
  padding: 1rem 0.5rem;
  margin: 0.5rem;
  border: 1px solid #333;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}

.right {
  display: flex;
  gap: 30px;
  align-items: center;
  margin-right: 2rem;
}
</style>