const routes = [
    {
        name: 'Dashboard',
        path: '/',
        component: () => import( './views/admin/Dashboard.vue'),
    },
    {
        name: 'Persons',
        path: '/persons',
        component: () => import( './views/admin/person/Persons.vue'),
    },
    {
        name: 'NewPerson',
        path: '/persons/new',
        component: () => import( './views/admin/person/NewPerson.vue'),
    },
    {
        name: 'properties',
        path: '/properties',
        component: () => import( './views/admin/property/Properties.vue'),
    },
    {
        name: 'NewProperty',
        path: '/properties/new',
        component: () => import( './views/admin/property/NewProperty.vue'),
    },
    {
        name: 'Vaults',
        path: '/vaults',
        component: () => import( './views/admin/vault/Vaults.vue'),
    },
    {
        name: 'NewVault',
        path: '/vaults/new',
        component: () => import( './views/admin/vault/NewVault.vue'),
    },
    {
        name: 'Companies',
        path: '/companies',
        component: () => import( './views/admin/company/Companies.vue'),
    },
    {
        name: 'NewCompany',
        path: '/companies/new',
        component: () => import( './views/admin/company/NewCompany.vue'),
    },
  ];

  export default routes;
