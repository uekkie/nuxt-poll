<script setup lang="ts">
import { useCounter } from '@vueuse/core'

const { count: remainPoints, dec } = useCounter(10, { min: 0 })

const people = [
  '林修（予備校講師）',
  '池上彰（ジャーナリスト）',
  '松岡修造（元プロテニス選手）',
  '樹木希林（女優）',
  '北野武（映画監督・タレント）',
  '堀江貴文（実業家）',
  '羽生結弦（フィギュアスケーター）',
  '村上春樹（作家）',
  '大谷翔平（プロ野球選手）',
  '天海祐希（女優）']
</script>

<template>
  <div>
    <h1>投票画面</h1>
    <h2>先生になってほしい有名人は？</h2>

    <div>
      のこりポイント
      <span class="point">
        {{ remainPoints }}
      </span>
    </div>

    <div v-for="name of people">
      <Item :name="name" :disabled="remainPoints === 0" @update="dec" />
    </div>
  </div>
</template>

<style lang="css">
.point {
  font-size: x-large;
}
</style>