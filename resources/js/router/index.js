import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const navbar = Vue.component('navbar', require('../components/Navbar.vue').default);
const sidebar = Vue.component('sidebar', require('../components/Sidebar.vue').default);
const register = Vue.component('register', require('../views/Register.vue').default);

export default new Router({
  mode: 'history',
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
        name: 'dashboard',
        path: '/',
        component: () => import( '../views/admin/Dashboard.vue'),
    },
    {
        name: 'persons',
        path: '/persons',
        component: () => import( '../views/admin/person/Persons.vue'),
    },
    {
        name: 'newPerson',
        path: '/persons/new',
        component: () => import( '../views/admin/person/NewPerson.vue'),
    },
    {
        name: 'properties',
        path: '/properties',
        component: () => import( '../views/admin/property/Properties.vue'),
    },
    {
        name: 'newProperty',
        path: '/properties/new',
        component: () => import( '../views/admin/property/NewProperty.vue'),
    },
    {
        name: 'vaults',
        path: '/vaults',
        component: () => import( '../views/admin/vault/Vaults.vue'),
    },
    {
        name: 'newVault',
        path: '/vaults/new',
        component: () => import( '../views/admin/vault/NewVault.vue'),
    },
    {
        name: 'companies',
        path: '/companies',
        component: () => import( '../views/admin/company/Companies.vue'),
    },
    {
        name: 'newCompany',
        path: '/companies/new',
        component: () => import( '../views/admin/company/NewCompany.vue'),
    },
    {
        name: 'employees',
        path: '/employees',
        component: () => import( '../views/admin/employee/Employees.vue'),
    },
    {
        name: 'newEmployee',
        path: '/employees/new',
        component: () => import( '../views/admin/employee/NewEmployee.vue'),
    },
    {
        name: 'debits',
        path: '/debits',
        component: () => import( '../views/admin/debit/Debits.vue'),
    },
    {
        name: 'newDebit',
        path: '/debits/new',
        component: () => import( '../views/admin/debit/NewDebit.vue'),
    },
    {
        name: 'newMultiDebit',
        path: '/debits/new-multi',
        component: () => import( '../views/admin/debit/NewMultiDebit.vue'),
    },
    {
        name: 'collections',
        path: '/collections',
        component: () => import( '../views/admin/collection/Collections.vue'),
    },
    {
        name: 'newCollection',
        path: '/collections/new',
        component: () => import( '../views/admin/collection/NewCollection.vue'),
    },
    {
        name: 'newDebitCollection',
        path: '/collections/new-d',
        component: () => import( '../views/admin/collection/NewDebitCollection.vue'),
    },
    {
        name: 'expenses',
        path: '/expenses',
        component: () => import( '../views/admin/expense/Expenses.vue'),
    },
    {
        name: 'newExpense',
        path: '/expenses/new',
        component: () => import( '../views/admin/expense/NewExpense.vue'),
    },
  ]
}

