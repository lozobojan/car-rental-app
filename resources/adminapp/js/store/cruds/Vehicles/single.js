function initialState() {
  return {
    entry: {
      id: null,
      registration_plates: '',
      year: '',
      number_of_seats: '5',
      price_per_day: '',
      remarks: '',
      vehicle_type_id: null,
      photos: [],
      created_at: '',
      updated_at: '',
      deleted_at: ''
    },
    lists: {
      vehicle_type: []
    },
    loading: false
  }
}

const route = 'vehicles'

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
  setRegistrationPlates({ commit }, value) {
    commit('setRegistrationPlates', value)
  },
  setYear({ commit }, value) {
    commit('setYear', value)
  },
  setNumberOfSeats({ commit }, value) {
    commit('setNumberOfSeats', value)
  },
  setPricePerDay({ commit }, value) {
    commit('setPricePerDay', value)
  },
  setRemarks({ commit }, value) {
    commit('setRemarks', value)
  },
  setVehicleType({ commit }, value) {
    commit('setVehicleType', value)
  },
  insertPhotosFile({ commit }, file) {
    commit('insertPhotosFile', file)
  },
  removePhotosFile({ commit }, file) {
    commit('removePhotosFile', file)
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
  setRegistrationPlates(state, value) {
    state.entry.registration_plates = value
  },
  setYear(state, value) {
    state.entry.year = value
  },
  setNumberOfSeats(state, value) {
    state.entry.number_of_seats = value
  },
  setPricePerDay(state, value) {
    state.entry.price_per_day = value
  },
  setRemarks(state, value) {
    state.entry.remarks = value
  },
  setVehicleType(state, value) {
    state.entry.vehicle_type_id = value
  },
  insertPhotosFile(state, file) {
    state.entry.photos.push(file)
  },
  removePhotosFile(state, file) {
    state.entry.photos = state.entry.photos.filter(item => {
      return item.id !== file.id
    })
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
