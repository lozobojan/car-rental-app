<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <event-hub></event-hub>
    <side-bar :sidebarLinks="sidebarLinks">
      <mobile-menu slot="content"></mobile-menu>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <div class="content">
        <dashboard-content></dashboard-content>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardContent from './Content.vue'
import TopNavbar from './TopNavbar.vue'
import MobileMenu from './MobileMenu.vue'

export default {
  components: {
    DashboardContent,
    TopNavbar,
    MobileMenu
  },
  data() {
    return {
      sidebarLinks: [
        {
          title: 'global.dashboard',
          icon: 'dashboard',
          path: { name: 'dashboard' }
        },
        {
          title: 'cruds.userManagement.title',
          icon: 'person',
          path: { name: 'user_management' },
          gate: 'user_management_access',
          children: [
            {
              title: 'cruds.permission.title',
              icon: 'perm_data_setting',
              path: { name: 'permissions.index' },
              gate: 'permission_access'
            },
            {
              title: 'cruds.role.title',
              icon: 'group',
              path: { name: 'roles.index' },
              gate: 'role_access'
            },
            {
              title: 'cruds.user.title',
              icon: 'person',
              path: { name: 'users.index' },
              gate: 'user_access'
            }
          ]
        },
        {
          title: 'cruds.carRental.title',
          icon: 'table_view',
          path: { name: 'car_rental' },
          gate: 'car_rental_access',
          children: [
            {
              title: 'cruds.client.title',
              icon: 'table_view',
              path: { name: 'clients.index' },
              gate: 'client_access'
            },
            {
              title: 'cruds.vehicle.title',
              icon: 'table_view',
              path: { name: 'vehicles.index' },
              gate: 'vehicle_access'
            },
            {
              title: 'cruds.reservation.title',
              icon: 'table_view',
              path: { name: 'reservations.index' },
              gate: 'reservation_access'
            }
          ]
        },
        {
          title: 'cruds.administration.title',
          icon: 'table_view',
          path: { name: 'administration' },
          gate: 'administration_access',
          children: [
            {
              title: 'cruds.country.title',
              icon: 'table_view',
              path: { name: 'countries.index' },
              gate: 'country_access'
            },
            {
              title: 'cruds.vehicleType.title',
              icon: 'table_view',
              path: { name: 'vehicle_types.index' },
              gate: 'vehicle_type_access'
            },
            {
              title: 'cruds.location.title',
              icon: 'table_view',
              path: { name: 'locations.index' },
              gate: 'location_access'
            }
          ]
        }
      ]
    }
  }
}
</script>
