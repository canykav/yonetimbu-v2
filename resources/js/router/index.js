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
        path: '/:sites_id/',
        component: () => import( '../views/admin/site/Dashboard.vue'),
    },
    {
        name: 'persons',
        path: '/:sites_id/persons',
        component: () => import( '../views/admin/site/person/Persons.vue'),
    },
    {
        name: 'newPerson',
        path: '/:sites_id/persons/new',
        component: () => import( '../views/admin/site/person/NewPerson.vue'),
    },
    {
        name: 'properties',
        path: '/:sites_id/properties',
        component: () => import( '../views/admin/site/property/Properties.vue'),
    },
    {
        name: 'newProperty',
        path: '/:sites_id/properties/new',
        component: () => import( '../views/admin/site/property/NewProperty.vue'),
    },
    {
        name: 'vaults',
        path: '/:sites_id/vaults',
        component: () => import( '../views/admin/site/vault/Vaults.vue'),
    },
    {
        name: 'newVault',
        path: '/:sites_id/vaults/new',
        component: () => import( '../views/admin/site/vault/NewVault.vue'),
    },
    {
        name: 'companies',
        path: '/:sites_id/companies',
        component: () => import( '../views/admin/site/company/Companies.vue'),
    },
    {
        name: 'newCompany',
        path: '/:sites_id/companies/new',
        component: () => import( '../views/admin/site/company/NewCompany.vue'),
    },
    {
        name: 'employees',
        path: '/:sites_id/employees',
        component: () => import( '../views/admin/site/employee/Employees.vue'),
    },
    {
        name: 'newEmployee',
        path: '/:sites_id/employees/new',
        component: () => import( '../views/admin/site/employee/NewEmployee.vue'),
    },
    {
        name: 'debits',
        path: '/:sites_id/debits',
        component: () => import( '../views/admin/site/debit/Debits.vue'),
    },
    {
        name: 'newDebit',
        path: '/:sites_id/debits/new',
        component: () => import( '../views/admin/site/debit/NewDebit.vue'),
    },
    {
        name: 'newMultiDebit',
        path: '/:sites_id/debits/new-multi',
        component: () => import( '../views/admin/site/debit/NewMultiDebit.vue'),
    },
    {
        name: 'collections',
        path: '/:sites_id/collections',
        component: () => import( '../views/admin/site/collection/Collections.vue'),
    },
    {
        name: 'newCollection',
        path: '/:sites_id/collections/new',
        component: () => import( '../views/admin/site/collection/NewCollection.vue'),
    },
    {
        name: 'newDebitCollection',
        path: '/:sites_id/collections/new-d',
        component: () => import( '../views/admin/site/collection/NewDebitCollection.vue'),
    },
    {
        name: 'expenses',
        path: '/:sites_id/expenses',
        component: () => import( '../views/admin/site/expense/Expenses.vue'),
    },
    {
        name: 'newExpense',
        path: '/:sites_id/expenses/new',
        component: () => import( '../views/admin/site/expense/NewExpense.vue'),
    },
    {
        name: 'register',
        path: '/:sites_id/register',
        component: () => import( '../views/Register.vue'),
    },
  ]
}

