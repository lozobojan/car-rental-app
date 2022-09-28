function initialState() {
  return {
    entry: {
      id: null,
      client_id: null,
      vehicle_id: null,
      date_from: '',
      date_to: '',
      total_price: '',
      pickup_location_id: null,
      dropoff_location_id: null,
      created_at: '',
      updated_at: '',
      deleted_at: ''
    },
    lists: {
      client: [],
      vehicle: [],
      pickup_location: [],
      dropoff_location: []
    },
    loading: false
  }
}

const route = 'reservations'

const getters = {
  entry: state => state.entry,
  lists: state => state.lists,
  loading: state => state.loading
}

const actions = {
  storeData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      axios
        .post(route, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  updateData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      params.set('_method', 'PUT')
      axios
        .post(`${route}/${state.entry.id}`, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  setClient({ commit }, value) {
    commit('setClient', value)
  },
  setVehicle({ commit }, value) {
    commit('setVehicle', value)
  },
  setDateFrom({ commit }, value) {
    commit('setDateFrom', value)
  },
  setDateTo({ commit }, value) {
    commit('setDateTo', value)
  },
  setTotalPrice({ commit }, value) {
    commit('setTotalPrice', value)
  },
  setPickupLocation({ commit }, value) {
    commit('setPickupLocation', value)
  },
  setDropoffLocation({ commit }, value) {
    commit('setDropoffLocation', value)
  },
  setCreatedAt({ commit }, value) {
    commit('setCreatedAt', value)
  },
  setUpdatedAt({ commit }, value) {
    commit('setUpdatedAt', value)
  },
  setDeletedAt({ commit }, value) {
    commit('setDeletedAt', value)
  },
  fetchCreateData({ commit }) {
    axios.get(`${route}/create`).then(response => {
      commit('setLists', response.data.meta)
    })
  },
  fetchEditData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}/edit`).then(response => {
      commit('setEntry', response.data.data)
      commit('setLists', response.data.meta)
    })
  },
  fetchShowData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}`).then(response => {
      commit('setEntry', response.data.data)
    })
  },
  resetState({ commit }) {
    commit('resetState')
  }
}

const mutations = {
  setEntry(state, entry) {
    state.entry = entry
  },
  setClient(state, value) {
    state.entry.client_id = value
  },
  setVehicle(state, value) {
    state.entry.vehicle_id = value
  },
  setDateFrom(state, value) {
    state.entry.date_from = value
  },
  setDateTo(state, value) {
    state.entry.date_to = value
  },
  setTotalPrice(state, value) {
    state.entry.total_price = value
  },
  setPickupLocation(state, value) {
    state.entry.pickup_location_id = value
  },
  setDropoffLocation(state, value) {
    state.entry.dropoff_location_id = value
  },
  setCreatedAt(state, value) {
    state.entry.created_at = value
  },
  setUpdatedAt(state, value) {
    state.entry.updated_at = value
  },
  setDeletedAt(state, value) {
    state.entry.deleted_at = value
  },
  setLists(state, lists) {
    state.lists = lists
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  resetState(state) {
    state = Object.assign(state, initialState())
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}
