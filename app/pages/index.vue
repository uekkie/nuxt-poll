<script setup lang="ts">
type Item = {
  name: string,
  points: number
}
const people = ref([
  {
    name: '林修（予備校講師）',
    points: 0
  },
  {
    name: '池上彰（ジャーナリスト）',
    points: 0
  },
  {
    name: '松岡修造（元プロテニス選手）',
    points: 0
  },
  {
    name: '樹木希林（女優）',
    points: 0
  },
  {
    name: '北野武（映画監督・タレント）',
    points: 0
  },
  {
    name: '堀江貴文（実業家）',
    points: 0
  },
  {
    name: '羽生結弦（フィギュアスケーター）',
    points: 0
  },
  {
    name: '村上春樹（作家）',
    points: 0
  },
  {
    name: '大谷翔平（プロ野球選手）',
    points: 0
  },
  {
    name: '天海祐希（女優）',
    points: 0
  }])

const remainPoints = ref(10)
const clickPoll = (item: Item) => {
  --remainPoints.value
  item.points += 1
}
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

    <div v-for="item of people">
      <div class="card">
        <div>
          {{ item.name }}
        </div>
        <div class="right">
          <button @click="clickPoll(item)" :disabled="remainPoints === 0">
            投票する
          </button>
          <div class="point">
            {{ item.points }}
          </div>
        </div>
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

.point {
  font-size: x-large;
}
</style>