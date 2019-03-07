import {
  $get,
  $post,
  $login,
  $put,
  $upload
} from '../plugins/fetch'
import router from '../router'
// import moment from 'moment'

const actions = {
  async login ({
    commit
  }, data) {
    try {
      const session = await $login(data)
      if (session) {
        commit('token', session.token)
        commit('user', session.user)
        let path = router.currentRoute.params.wantedRoute || {
          name: 'home'
        }
        router.replace(
          path
        )
      }
    } catch (e) {
      // do nothing
    }
  },

  async logout ({
    commit
  }) {
    commit('user', null)
    if (router.currentRoute.matched.some(r => !r.meta.public)) {
      router.replace({
        name: 'login',
        params: {
          wantedRoute: router.currentRoute.fullPath
        }
      })
    }
  },

  async saveUserProfile ({commit, state}, data) {
    const url = '/bas/users/' + state.user.id
    let toUpdate = {...state.user, ...data}
    const modifiedDate = await $put(url, toUpdate.modifiedDate, toUpdate)
    toUpdate.modifiedDate = modifiedDate
    commit('user', toUpdate)
  },

  async createPart ({commit}, data) {
    const url = '/bas/parts'
    const created = await $post(url, data)
    return created
  },

  async updatePart ({commit}, data) {
    // const url = '/bas/parts/' + data.id
    const modifiedDate = await $put(data.href, data.modifiedDate, data)
    commit('selectedPart', {...data, modifiedDate})
  },

  async createSupplier ({commit}, data) {
    const url = '/bas/suppliers'
    const created = await $post(url, data)
    return created
  },

  async updateSupplier ({commit}, data) {
    // const url = '/bas/parts/' + data.id
    const modifiedDate = await $put(data.href, data.modifiedDate, data)
    commit('selectedSupplier', {...data, modifiedDate})
  },

  async createPurchase ({
    commit
  }, data) {
    const url = '/pur/purchases'
    const created = await $post(url, data)
    return created
  },

  async updatePurchase ({commit}, data) {
    try {
      const modifiedDate = await $put(data.href, data.modifiedDate, data)
      return modifiedDate
    } catch (e) {
    }
    // const url = '/bas/parts/' + data.id
  },

  async searchParts ({
    commit
  }, condi) {
    if (!condi) condi = ''
    const parts = await $get('/bas/parts?' + condi)
    return parts
  },

  async searchSuppliers ({
    commit
  }, condi) {
    if (!condi) condi = ''
    const data = await $get('/bas/suppliers?' + condi)
    return data
  },

  async searchPurchases ({
    commit
  }, condi) {
    if (!condi) condi = ''
    const data = await $get('/pur/purchases?' + condi)
    return data
  },

  async getSupplier ({
    commit
  }, id) {
    const data = await $get('/bas/suppliers/' + id)
    return data
  },

  async getPart ({
    commit
  }, id) {
    const data = await $get('/bas/parts/' + id)
    return data
  },

  async searchPurchaseTransTasks ({
    commit
  }, condi) {
    const tasks = await $get('/task/purTransTasks')
    // commit('purTransTasks', tasks)
    return tasks
  },

  async importPurchasesFromCsv ({
    commit
  }, formData) {
    const result = await $upload('/purchases/csv', formData)
    return result.json()
  }
}

export default actions
