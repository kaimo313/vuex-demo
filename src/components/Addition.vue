<template>
  <div>
    <h3>方法一：当前最新的count值：{{ $store.state.count }}</h3>
    <h3>getters：{{ $store.getters.showNum }}</h3>
    <button @click="btnHandle1">+1</button>
    <button @click="btnHandle2">+N</button>
    <button @click="btnHandle3">+1 Async</button>
    <button @click="btnHandle4">+N Async</button>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  methods: {
    btnHandle1() {
      this.$store.commit('add')
    },
    btnHandle2() {
      // commit的作用就是调用某个 mutation 函数
      this.$store.commit('addN', 6)
    },
    // 异步 + 1
    btnHandle3() {
      // dispatch 函数专门用来触发 actions
      this.$store.dispatch('addAsync')
    },
    btnHandle4() {
      this.$store.dispatch('addNAsync', 6)
    }
  }
}
</script>
