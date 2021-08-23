<template>
             <b-sidebar
                position="static"
                :expand-on-hover="expandOnHover"
                :delay="expandWithDelay ? 500 : null"
                open
            >
                <div>
                    <div class="logo p-3">
                    <img
                        src="/img/logo-b.png"
                        alt="Yönetimbu"
                        style="max-height:28px;"
                        @click="goLink('/')"
                        class="is-clickable"
                    />
                    </div>
                    <b-menu class="is-custom-mobile p-3">
                        <b-menu-list>
                            <b class="menu-label">Navigasyon</b>
                            <b-menu-item icon="monitor-dashboard" label="Genel Bakış" @click="pushRoute('dashboard')"></b-menu-item>
                            <b-menu-item icon="account-supervisor" label="Kişiler" @click="pushRoute('persons')"></b-menu-item>
                            <b-menu-item icon="home-city" label="Bölümler" @click="pushRoute('properties')"></b-menu-item>
                            <b-menu-item icon="briefcase-variant" label="Kasalar" @click="pushRoute('vaults')"></b-menu-item>
                            <b-menu-item icon="account-tie" label="Firmalar" @click="pushRoute('companies')"></b-menu-item>
                            <b-menu-item icon="account-hard-hat" label="Personeller" @click="pushRoute('employees')"></b-menu-item>
                        </b-menu-list>
                        <b-menu-list>
                            <b class="menu-label">Finansal İşlemler</b>
                            <b-menu-item icon="currency-usd" label="Borçlandırmalar" @click="pushRoute('debits')"></b-menu-item>
                            <b-menu-item icon="cash" label="Tahsilatlar" @click="pushRoute('collections')"></b-menu-item>
                            <b-menu-item icon="tools" label="Giderler" @click="pushRoute('expenses')"></b-menu-item>
                        </b-menu-list>
                        <b-menu-list>
                            <b class="menu-label">Diğer</b>
                            <b-menu-item icon="door-closed" label="Bölüm Tipleri" @click="pushRoute('types')"></b-menu-item>
                            <b-menu-item icon="table-furniture" label="Demirbaşlar"></b-menu-item>
                            <b-menu-item icon="bullhorn" label="Duyurular"></b-menu-item>
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
  methods: {
      pushRoute(route){
          this.$router.push({ name: route }).catch(()=>{});
      },
      goLink(link){
          window.location.href = link;
      }
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
