function initialState() {
  return {
    entry: {
      id: null,
      name: '',
      passport_number: '',
      phone_number: '',
      email: null,
      first_reservation_date: '',
      last_reservation_date: '',
      remarks: '',
      country_id: null,
      created_at: '',
      updated_at: '',
      deleted_at: ''
    },
    lists: {
      country: []
    },
    loading: false
  }
}

const route = 'clients'

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
  setName({ commit }, value) {
    commit('setName', value)
  },
  setPassportNumber({ commit }, value) {
    commit('setPassportNumber', value)
  },
  setPhoneNumber({ commit }, value) {
    commit('setPhoneNumber', value)
  },
  setEmail({ commit }, value) {
    commit('setEmail', value)
  },
  setFirstReservationDate({ commit }, value) {
    commit('setFirstReservationDate', value)
  },
  setLastReservationDate({ commit }, value) {
    commit('setLastReservationDate', value)
  },
  setRemarks({ commit }, value) {
    commit('setRemarks', value)
  },
  setCountry({ commit }, value) {
    commit('setCountry', value)
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
  setName(state, value) {
    state.entry.name = value
  },
  setPassportNumber(state, value) {
    state.entry.passport_number = value
  },
  setPhoneNumber(state, value) {
    state.entry.phone_number = value
  },
  setEmail(state, value) {
    state.entry.email = value
  },
  setFirstReservationDate(state, value) {
    state.entry.first_reservation_date = value
  },
  setLastReservationDate(state, value) {
    state.entry.last_reservation_date = value
  },
  setRemarks(state, value) {
    state.entry.remarks = value
  },
  setCountry(state, value) {
    state.entry.country_id = value
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
