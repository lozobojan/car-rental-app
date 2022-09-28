import Vue from 'vue'
import Vuex from 'vuex'

import Alert from './modules/alert'
import I18NStore from './modules/i18n'

import PermissionsIndex from './cruds/Permissions'
import PermissionsSingle from './cruds/Permissions/single'
import RolesIndex from './cruds/Roles'
import RolesSingle from './cruds/Roles/single'
import UsersIndex from './cruds/Users'
import UsersSingle from './cruds/Users/single'
import ClientsIndex from './cruds/Clients'
import ClientsSingle from './cruds/Clients/single'
import CountriesIndex from './cruds/Countries'
import CountriesSingle from './cruds/Countries/single'
import VehiclesIndex from './cruds/Vehicles'
import VehiclesSingle from './cruds/Vehicles/single'
import VehicleTypesIndex from './cruds/VehicleTypes'
import VehicleTypesSingle from './cruds/VehicleTypes/single'
import ReservationsIndex from './cruds/Reservations'
import ReservationsSingle from './cruds/Reservations/single'
import LocationsIndex from './cruds/Locations'
import LocationsSingle from './cruds/Locations/single'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Alert,
    I18NStore,
    PermissionsIndex,
    PermissionsSingle,
    RolesIndex,
    RolesSingle,
    UsersIndex,
    UsersSingle,
    ClientsIndex,
    ClientsSingle,
    CountriesIndex,
    CountriesSingle,
    VehiclesIndex,
    VehiclesSingle,
    VehicleTypesIndex,
    VehicleTypesSingle,
    ReservationsIndex,
    ReservationsSingle,
    LocationsIndex,
    LocationsSingle
  },
  strict: debug
})
