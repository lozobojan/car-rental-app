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
                <strong>{{ $t('cruds.vehicle.title_singular') }}</strong>
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
                      'has-items': entry.registration_plates,
                      'is-focused': activeField == 'registration_plates'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.vehicle.fields.registration_plates')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.registration_plates"
                      @input="updateRegistrationPlates"
                      @focus="focusField('registration_plates')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.year,
                      'is-focused': activeField == 'year'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.vehicle.fields.year')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="1"
                      :value="entry.year"
                      @input="updateYear"
                      @focus="focusField('year')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.number_of_seats,
                      'is-focused': activeField == 'number_of_seats'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.vehicle.fields.number_of_seats')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="1"
                      :value="entry.number_of_seats"
                      @input="updateNumberOfSeats"
                      @focus="focusField('number_of_seats')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.price_per_day,
                      'is-focused': activeField == 'price_per_day'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.vehicle.fields.price_per_day')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="0.01"
                      :value="entry.price_per_day"
                      @input="updatePricePerDay"
                      @focus="focusField('price_per_day')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.remarks,
                      'is-focused': activeField == 'remarks'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.vehicle.fields.remarks')
                    }}</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      :value="entry.remarks"
                      @input="updateRemarks"
                      @focus="focusField('remarks')"
                      @blur="clearFocus"
                    ></textarea>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.vehicle_type_id !== null,
                      'is-focused': activeField == 'vehicle_type'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.vehicle.fields.vehicle_type')
                    }}</label>
                    <v-select
                      name="vehicle_type"
                      label="name"
                      :key="'vehicle_type-field'"
                      :value="entry.vehicle_type_id"
                      :options="lists.vehicle_type"
                      :reduce="entry => entry.id"
                      @input="updateVehicleType"
                      @search.focus="focusField('vehicle_type')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div class="form-group">
                    <label class="required">{{
                      $t('cruds.vehicle.fields.photos')
                    }}</label>
                    <attachment
                      :route="getRoute('vehicles')"
                      :collection-name="'vehicle_photos'"
                      :media="entry.photos"
                      :max-file-size="5"
                      :component="'pictures'"
                      :accept="'image/*'"
                      @file-uploaded="insertPhotosFile"
                      @file-removed="removePhotosFile"
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
import Attachment from '@components/Attachments/Attachment'

export default {
  components: {
    Attachment
  },
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('VehiclesSingle', ['entry', 'loading', 'lists'])
  },
  mounted() {
    this.fetchCreateData()
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('VehiclesSingle', [
      'storeData',
      'resetState',
      'setRegistrationPlates',
      'setYear',
      'setNumberOfSeats',
      'setPricePerDay',
      'setRemarks',
      'setVehicleType',
      'insertPhotosFile',
      'removePhotosFile',
      'fetchCreateData'
    ]),
    updateRegistrationPlates(e) {
      this.setRegistrationPlates(e.target.value)
    },
    updateYear(e) {
      this.setYear(e.target.value)
    },
    updateNumberOfSeats(e) {
      this.setNumberOfSeats(e.target.value)
    },
    updatePricePerDay(e) {
      this.setPricePerDay(e.target.value)
    },
    updateRemarks(e) {
      this.setRemarks(e.target.value)
    },
    updateVehicleType(value) {
      this.setVehicleType(value)
    },
    getRoute(name) {
      return `${axios.defaults.baseURL}${name}/media`
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'vehicles.index' })
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
