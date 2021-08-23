<template>
<div>
    <b-navbar type="is-primary" wrapper-class="container" class="block">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
               <img
                    src="/img/logo-b.png"
                    alt="Yönetimbu"
                    style="max-height:28px;"
                />
            </b-navbar-item>
        </template>
        <template #start>

        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                    <b-icon
                    icon="account-circle"
                    class="mr-1"
                    >
                    </b-icon>
                        Can Kav
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>

<div class="container">
    <div class="columns">
        <div class="column is-8">
<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Siteleriniz
    </p>
  </header>
  <div class="card-content">
    <div class="content">

        <div class="sites-list" @click="goLink('/'+sites_id)">
            <div class="sites-list-icon">
                <b-icon
                    icon="home-city-outline"
                    size="is-medium">
                </b-icon>
            </div>
            <div class="is-uppercase ml-4">
                Test
            </div>
        </div>

        <div class="sites-list">
            <div class="sites-list-icon">
                <b-icon
                    icon="home-city-outline"
                    size="is-medium">
                </b-icon>
            </div>
            <div class="is-uppercase ml-4">
                Aydeniz Apartmanı
            </div>
        </div>
    </div>
  </div>
</div>
        </div>
        <div class="column is-4">
            <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                Hesap Bilgileriniz
                </p>
                <button class="card-header-icon" aria-label="more options">
                <a class="has-text-link is-size-7">Düzenle</a>
                </button>
            </header>
            <div class="card-content">
                <div class="content">
                    <ul class="list" style="font-size:14px">
                            <li>
                                <div class="has-text-weight-medium mb-1">Ad Soyad</div>
                                <div class="has-text-grey">Can Yiğit Kav</div>
                            </li>
                            <li>
                                <div class="has-text-weight-medium mb-1">Telefon</div>
                                <div class="has-text-grey">05373489494</div>
                            </li>
                        </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>

</div>
</template>

<script>
export default {
    data() {
        return {
            sites_id: 1,
        }
    },
    methods: {
        goLink(link){
          window.location.href = link;
      }
    }
}
</script>

<style>

</style>
