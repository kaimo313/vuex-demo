import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 只有 mutations 中定义的函数，才有权利修噶 state 中的数据
  mutations: {
    add(state) {
      // 不要在mutations函数里，执行异步代码
      // setTimeout(() => {
      //   state.count++
      // }, 1000)
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        // 在 action 中，不能直接修改 state 中的数据
        // 必须通过 context.commit() 触发某个 mutation 才行
        context.commit('add')
      }, 1000)
    },
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    subNAsync(context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000)
    }
  },
  getters: {
    showNum(state) {
      return `当前的getters数据是【${state.count}】`
    }
  }
})
