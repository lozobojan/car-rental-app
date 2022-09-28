import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@pages/Dashboard.vue'),
        meta: { title: 'global.dashboard' }
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'cruds.user.title' }
          }
        ]
      },
      {
        path: 'car-rental',
        name: 'car_rental',
        component: View,
        redirect: { name: 'clients.index' },
        children: [
          {
            path: 'clients',
            name: 'clients.index',
            component: () => import('@cruds/Clients/Index.vue'),
            meta: { title: 'cruds.client.title' }
          },
          {
            path: 'clients/create',
            name: 'clients.create',
            component: () => import('@cruds/Clients/Create.vue'),
            meta: { title: 'cruds.client.title' }
          },
          {
            path: 'clients/:id',
            name: 'clients.show',
            component: () => import('@cruds/Clients/Show.vue'),
            meta: { title: 'cruds.client.title' }
          },
          {
            path: 'clients/:id/edit',
            name: 'clients.edit',
            component: () => import('@cruds/Clients/Edit.vue'),
            meta: { title: 'cruds.client.title' }
          },
          {
            path: 'vehicles',
            name: 'vehicles.index',
            component: () => import('@cruds/Vehicles/Index.vue'),
            meta: { title: 'cruds.vehicle.title' }
          },
          {
            path: 'vehicles/create',
            name: 'vehicles.create',
            component: () => import('@cruds/Vehicles/Create.vue'),
            meta: { title: 'cruds.vehicle.title' }
          },
          {
            path: 'vehicles/:id',
            name: 'vehicles.show',
            component: () => import('@cruds/Vehicles/Show.vue'),
            meta: { title: 'cruds.vehicle.title' }
          },
          {
            path: 'vehicles/:id/edit',
            name: 'vehicles.edit',
            component: () => import('@cruds/Vehicles/Edit.vue'),
            meta: { title: 'cruds.vehicle.title' }
          },
          {
            path: 'reservations',
            name: 'reservations.index',
            component: () => import('@cruds/Reservations/Index.vue'),
            meta: { title: 'cruds.reservation.title' }
          },
          {
            path: 'reservations/create',
            name: 'reservations.create',
            component: () => import('@cruds/Reservations/Create.vue'),
            meta: { title: 'cruds.reservation.title' }
          },
          {
            path: 'reservations/:id',
            name: 'reservations.show',
            component: () => import('@cruds/Reservations/Show.vue'),
            meta: { title: 'cruds.reservation.title' }
          },
          {
            path: 'reservations/:id/edit',
            name: 'reservations.edit',
            component: () => import('@cruds/Reservations/Edit.vue'),
            meta: { title: 'cruds.reservation.title' }
          }
        ]
      },
      {
        path: 'administration',
        name: 'administration',
        component: View,
        redirect: { name: 'countries.index' },
        children: [
          {
            path: 'countries',
            name: 'countries.index',
            component: () => import('@cruds/Countries/Index.vue'),
            meta: { title: 'cruds.country.title' }
          },
          {
            path: 'countries/create',
            name: 'countries.create',
            component: () => import('@cruds/Countries/Create.vue'),
            meta: { title: 'cruds.country.title' }
          },
          {
            path: 'countries/:id',
            name: 'countries.show',
            component: () => import('@cruds/Countries/Show.vue'),
            meta: { title: 'cruds.country.title' }
          },
          {
            path: 'countries/:id/edit',
            name: 'countries.edit',
            component: () => import('@cruds/Countries/Edit.vue'),
            meta: { title: 'cruds.country.title' }
          },
          {
            path: 'vehicle-types',
            name: 'vehicle_types.index',
            component: () => import('@cruds/VehicleTypes/Index.vue'),
            meta: { title: 'cruds.vehicleType.title' }
          },
          {
            path: 'vehicle-types/create',
            name: 'vehicle_types.create',
            component: () => import('@cruds/VehicleTypes/Create.vue'),
            meta: { title: 'cruds.vehicleType.title' }
          },
          {
            path: 'vehicle-types/:id',
            name: 'vehicle_types.show',
            component: () => import('@cruds/VehicleTypes/Show.vue'),
            meta: { title: 'cruds.vehicleType.title' }
          },
          {
            path: 'vehicle-types/:id/edit',
            name: 'vehicle_types.edit',
            component: () => import('@cruds/VehicleTypes/Edit.vue'),
            meta: { title: 'cruds.vehicleType.title' }
          },
          {
            path: 'locations',
            name: 'locations.index',
            component: () => import('@cruds/Locations/Index.vue'),
            meta: { title: 'cruds.location.title' }
          },
          {
            path: 'locations/create',
            name: 'locations.create',
            component: () => import('@cruds/Locations/Create.vue'),
            meta: { title: 'cruds.location.title' }
          },
          {
            path: 'locations/:id',
            name: 'locations.show',
            component: () => import('@cruds/Locations/Show.vue'),
            meta: { title: 'cruds.location.title' }
          },
          {
            path: 'locations/:id/edit',
            name: 'locations.edit',
            component: () => import('@cruds/Locations/Edit.vue'),
            meta: { title: 'cruds.location.title' }
          }
        ]
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})
