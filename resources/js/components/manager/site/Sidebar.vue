<template>
             <b-sidebar
                position="static"
                :expand-on-hover="expandOnHover"
                :delay="expandWithDelay ? 500 : null"
                open
            >
                <div>
                    <div class="logo p-3">
                    <a href="/">
                        <img
                            src="/img/logo-b.png"
                            alt="Yönetimbu"
                            style="max-height:28px;"
                            class="is-clickable"
                        />
                    </a>
                    </div>
                    <b-menu class="is-custom-mobile p-3">
                        <b-menu-list>
                            <b class="menu-label">Navigasyon</b>
                            <b-menu-item tag="router-link" icon="monitor-dashboard" :to="{ name: 'dashboard' }" label="Genel Bakış"></b-menu-item>
                            <b-menu-item tag="router-link" icon="account-supervisor" :to="{ name: 'persons' }" label="Kişiler"></b-menu-item>
                            <b-menu-item tag="router-link" icon="home-city" :to="{ name: 'properties' }" label="Bölümler"></b-menu-item>
                            <b-menu-item tag="router-link" icon="briefcase-variant" :to="{ name: 'vaults' }" label="Kasalar"></b-menu-item>
                            <b-menu-item tag="router-link" icon="account-tie" :to="{ name: 'companies' }" label="Firmalar"></b-menu-item>
                            <b-menu-item tag="router-link" icon="account-hard-hat" :to="{ name: 'employees' }" label="Personeller"></b-menu-item>
                        </b-menu-list>
                        <b-menu-list>
                            <b class="menu-label">Finansal İşlemler</b>
                            <b-menu-item tag="router-link" icon="currency-usd" :to="{ name: 'debits' }" label="Borçlandırmalar"></b-menu-item>
                            <b-menu-item tag="router-link" icon="cash" :to="{ name: 'collections' }" label="Tahsilatlar"></b-menu-item>
                            <b-menu-item tag="router-link" icon="tools" :to="{ name: 'expenses' }" label="Giderler"></b-menu-item>
                        </b-menu-list>
                        <b-menu-list>
                            <b class="menu-label">Diğer</b>
                            <b-menu-item tag="router-link" icon="door-closed" :to="{ name: 'types' }" label="Bölüm Tipleri"></b-menu-item>
                            <b-menu-item tag="router-link" icon="table-furniture" :to="{ name: 'fixtures' }" label="Demirbaşlar"></b-menu-item>
                            <b-menu-item tag="router-link" icon="bullhorn" :to="{ name: 'fixtures' }" label="Duyurular"></b-menu-item>
                        </b-menu-list>
                    </b-menu>
                </div>
            </b-sidebar>
</template>

<script>
export default {
  data() {
    return {
      expandOnHover: false,
      expandWithDelay: false,
      mobile: "reduce",
      reduce: false,
    };
  },
};
</script>

<style>
.b-sidebar {
    background-color: #0f172a;
    width: 270px;
    min-height: calc(100vh + 1.5rem);
    position: sticky;
    top: 0;
    bottom: 0;
    margin-left: 0.75rem!important;
    margin-top: 0.75rem!important;
    padding: 0.75rem;
}
.b-sidebar .sidebar-content {
    background: transparent;
    width: unset;
    box-shadow: unset;
}
ul.menu-list li {
    margin: 4px 0;
}
ul.menu-list li a span:first-child {
    font-size: 18px;
    margin-right: 0.5em;
}
ul.menu-list li a span:last-child {
    font-size: 13px;
    font-weight: 500;
}
.logo {
    display: flex;
    justify-content: center;
}
</style>
