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
                <strong>{{ $t('cruds.client.title_singular') }}</strong>
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
                      'has-items': entry.name,
                      'is-focused': activeField == 'name'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.client.fields.name')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.name"
                      @input="updateName"
                      @focus="focusField('name')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.passport_number,
                      'is-focused': activeField == 'passport_number'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.client.fields.passport_number')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.passport_number"
                      @input="updatePassportNumber"
                      @focus="focusField('passport_number')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.phone_number,
                      'is-focused': activeField == 'phone_number'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.client.fields.phone_number')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.phone_number"
                      @input="updatePhoneNumber"
                      @focus="focusField('phone_number')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.email,
                      'is-focused': activeField == 'email'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.client.fields.email')
                    }}</label>
                    <input
                      class="form-control"
                      type="email"
                      :value="entry.email"
                      @input="updateEmail"
                      @focus="focusField('email')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.first_reservation_date,
                      'is-focused': activeField == 'first_reservation_date'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.client.fields.first_reservation_date')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      picker="date"
                      :value="entry.first_reservation_date"
                      @input="updateFirstReservationDate"
                      @focus="focusField('first_reservation_date')"
                      @blur="clearFocus"
                    >
                    </datetime-picker>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.last_reservation_date,
                      'is-focused': activeField == 'last_reservation_date'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.client.fields.last_reservation_date')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      picker="date"
                      :value="entry.last_reservation_date"
                      @input="updateLastReservationDate"
                      @focus="focusField('last_reservation_date')"
                      @blur="clearFocus"
                    >
                    </datetime-picker>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.remarks,
                      'is-focused': activeField == 'remarks'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.client.fields.remarks')
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
                      'has-items': entry.country_id !== null,
                      'is-focused': activeField == 'country'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.client.fields.country')
                    }}</label>
                    <v-select
                      name="country"
                      label="name"
                      :key="'country-field'"
                      :value="entry.country_id"
                      :options="lists.country"
                      :reduce="entry => entry.id"
                      @input="updateCountry"
                      @search.focus="focusField('country')"
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
    ...mapGetters('ClientsSingle', ['entry', 'loading', 'lists'])
  },
  mounted() {
    this.fetchCreateData()
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('ClientsSingle', [
      'storeData',
      'resetState',
      'setName',
      'setPassportNumber',
      'setPhoneNumber',
      'setEmail',
      'setFirstReservationDate',
      'setLastReservationDate',
      'setRemarks',
      'setCountry',
      'fetchCreateData'
    ]),
    updateName(e) {
      this.setName(e.target.value)
    },
    updatePassportNumber(e) {
      this.setPassportNumber(e.target.value)
    },
    updatePhoneNumber(e) {
      this.setPhoneNumber(e.target.value)
    },
    updateEmail(e) {
      this.setEmail(e.target.value)
    },
    updateFirstReservationDate(e) {
      this.setFirstReservationDate(e.target.value)
    },
    updateLastReservationDate(e) {
      this.setLastReservationDate(e.target.value)
    },
    updateRemarks(e) {
      this.setRemarks(e.target.value)
    },
    updateCountry(value) {
      this.setCountry(value)
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'clients.index' })
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
