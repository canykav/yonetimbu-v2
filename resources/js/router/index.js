import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
Vue.component('manager-navbar', require('../components/manager/Navbar.vue').default);
Vue.component('manager-site-navbar', require('../components/manager/site/Navbar.vue').default);
Vue.component('manager-site-sidebar', require('../components/manager/site/Sidebar.vue').default);
Vue.component('register', require('../views/Register.vue').default);

export default new Router({
  mode: 'history',
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
        name: 'dashboard',
        path: '/:sites_id/',
        component: () => import( '../views/manager/site/Dashboard.vue'),
    },
    {
        name: 'persons',
        path: '/:sites_id/persons',
        component: () => import( '../views/manager/site/person/Persons.vue'),
    },
    {
        name: 'newPerson',
        path: '/:sites_id/persons/new',
        component: () => import( '../views/manager/site/person/NewPerson.vue'),
    },
    {
        name: 'properties',
        path: '/:sites_id/properties',
        component: () => import( '../views/manager/site/property/Properties.vue'),
    },
    {
        name: 'newProperty',
        path: '/:sites_id/properties/new',
        component: () => import( '../views/manager/site/property/NewProperty.vue'),
    },
    {
        name: 'vaults',
        path: '/:sites_id/vaults',
        component: () => import( '../views/manager/site/vault/Vaults.vue'),
    },
    {
        name: 'newVault',
        path: '/:sites_id/vaults/new',
        component: () => import( '../views/manager/site/vault/NewVault.vue'),
    },
    {
        name: 'companies',
        path: '/:sites_id/companies',
        component: () => import( '../views/manager/site/company/Companies.vue'),
    },
    {
        name: 'newCompany',
        path: '/:sites_id/companies/new',
        component: () => import( '../views/manager/site/company/NewCompany.vue'),
    },
    {
        name: 'employees',
        path: '/:sites_id/employees',
        component: () => import( '../views/manager/site/employee/Employees.vue'),
    },
    {
        name: 'newEmployee',
        path: '/:sites_id/employees/new',
        component: () => import( '../views/manager/site/employee/NewEmployee.vue'),
    },
    {
        name: 'debits',
        path: '/:sites_id/debits',
        component: () => import( '../views/manager/site/debit/Debits.vue'),
    },
    {
        name: 'newDebit',
        path: '/:sites_id/debits/new',
        component: () => import( '../views/manager/site/debit/NewDebit.vue'),
    },
    {
        name: 'newMultiDebit',
        path: '/:sites_id/debits/new-multi',
        component: () => import( '../views/manager/site/debit/NewMultiDebit.vue'),
    },
    {
        name: 'collections',
        path: '/:sites_id/collections',
        component: () => import( '../views/manager/site/collection/Collections.vue'),
    },
    {
        name: 'newCollection',
        path: '/:sites_id/collections/new',
        component: () => import( '../views/manager/site/collection/NewCollection.vue'),
    },
    {
        name: 'newDebitCollection',
        path: '/:sites_id/collections/new-d',
        component: () => import( '../views/manager/site/collection/NewDebitCollection.vue'),
    },
    {
        name: 'expenses',
        path: '/:sites_id/expenses',
        component: () => import( '../views/manager/site/expense/Expenses.vue'),
    },
    {
        name: 'newExpense',
        path: '/:sites_id/expenses/new',
        component: () => import( '../views/manager/site/expense/NewExpense.vue'),
    },
    {
        name: 'types',
        path: '/:sites_id/types',
        component: () => import( '../views/manager/site/type/Types.vue'),
    },
    {
        name: 'newType',
        path: '/:sites_id/types/new',
        component: () => import( '../views/manager/site/type/NewType.vue'),
    },
  ]
}

