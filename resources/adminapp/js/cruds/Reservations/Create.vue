<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">add</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.create') }}
                <strong>{{ $t('cruds.reservation.title_singular') }}</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.client_id !== null,
                      'is-focused': activeField == 'client'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.reservation.fields.client')
                    }}</label>
                    <v-select
                      name="client"
                      label="name"
                      :key="'client-field'"
                      :value="entry.client_id"
                      :options="lists.client"
                      :reduce="entry => entry.id"
                      @input="updateClient"
                      @search.focus="focusField('client')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.vehicle_id !== null,
                      'is-focused': activeField == 'vehicle'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.reservation.fields.vehicle')
                    }}</label>
                    <v-select
                      name="vehicle"
                      label="registration_plates"
                      :key="'vehicle-field'"
                      :value="entry.vehicle_id"
                      :options="lists.vehicle"
                      :reduce="entry => entry.id"
                      @input="updateVehicle"
                      @search.focus="focusField('vehicle')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.date_from,
                      'is-focused': activeField == 'date_from'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.reservation.fields.date_from')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      picker="date"
                      :value="entry.date_from"
                      @input="updateDateFrom"
                      @focus="focusField('date_from')"
                      @blur="clearFocus"
                      required
                    >
                    </datetime-picker>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.date_to,
                      'is-focused': activeField == 'date_to'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.reservation.fields.date_to')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      picker="date"
                      :value="entry.date_to"
                      @input="updateDateTo"
                      @focus="focusField('date_to')"
                      @blur="clearFocus"
                      required
                    >
                    </datetime-picker>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.total_price,
                      'is-focused': activeField == 'total_price'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.reservation.fields.total_price')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="0.01"
                      :value="entry.total_price"
                      @input="updateTotalPrice"
                      @focus="focusField('total_price')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.pickup_location_id !== null,
                      'is-focused': activeField == 'pickup_location'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.reservation.fields.pickup_location')
                    }}</label>
                    <v-select
                      name="pickup_location"
                      label="name"
                      :key="'pickup_location-field'"
                      :value="entry.pickup_location_id"
                      :options="lists.pickup_location"
                      :reduce="entry => entry.id"
                      @input="updatePickupLocation"
                      @search.focus="focusField('pickup_location')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.dropoff_location_id !== null,
                      'is-focused': activeField == 'dropoff_location'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.reservation.fields.dropoff_location')
                    }}</label>
                    <v-select
                      name="dropoff_location"
                      label="name"
                      :key="'dropoff_location-field'"
                      :value="entry.dropoff_location_id"
                      :options="lists.dropoff_location"
                      :reduce="entry => entry.id"
                      @input="updateDropoffLocation"
                      @search.focus="focusField('dropoff_location')"
                      @search.blur="clearFocus"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <vue-button-spinner
                class="btn-primary"
                :status="status"
                :isLoading="loading"
                :disabled="loading"
              >
                {{ $t('global.save') }}
              </vue-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('ReservationsSingle', ['entry', 'loading', 'lists'])
  },
  mounted() {
    this.fetchCreateData()
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('ReservationsSingle', [
      'storeData',
      'resetState',
      'setClient',
      'setVehicle',
      'setDateFrom',
      'setDateTo',
      'setTotalPrice',
      'setPickupLocation',
      'setDropoffLocation',
      'fetchCreateData'
    ]),
    updateClient(value) {
      this.setClient(value)
    },
    updateVehicle(value) {
      this.setVehicle(value)
    },
    updateDateFrom(e) {
      this.setDateFrom(e.target.value)
    },
    updateDateTo(e) {
      this.setDateTo(e.target.value)
    },
    updateTotalPrice(e) {
      this.setTotalPrice(e.target.value)
    },
    updatePickupLocation(value) {
      this.setPickupLocation(value)
    },
    updateDropoffLocation(value) {
      this.setDropoffLocation(value)
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'reservations.index' })
          this.$eventHub.$emit('create-success')
        })
        .catch(error => {
          this.status = 'failed'
          _.delay(() => {
            this.status = ''
          }, 3000)
        })
    },
    focusField(name) {
      this.activeField = name
    },
    clearFocus() {
      this.activeField = ''
    }
  }
}
</script>
