<template>
<div>
<div class="container">
    <div class="columns">
        <div class="column is-8">
<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Siteleriniz
    </p>
  <a href="sites/new" class="card-header-icon has-text-link is-size-7">
      Yeni Site
</a>
  </header>

  <div class="card-content">
    <div class="content">
        <div class="sites-list" v-for="site in $attrs.sites" :key="site.id" @click="goLink('/'+site.id)">
            <div class="sites-list-icon">
                <b-icon
                    icon="home-city-outline"
                    size="is-medium">
                </b-icon>
            </div>
            <div class="is-uppercase ml-4">
                {{site.name}}
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
                                <div class="has-text-grey"><span v-if="$attrs.manager.name">{{$attrs.manager.name}}</span><span v-else>-</span></div>
                            </li>
                            <li>
                                <div class="has-text-weight-medium mb-1">Telefon</div>
                                <div class="has-text-grey"><span v-if="$attrs.manager.phone1">{{$attrs.manager.phone1}}</span><span v-else>-</span></div>
                            </li>
                        </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>

  <b-modal
  v-model="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-label="Example Modal"
            aria-modal>
            <template #default="props">
                <modal-form v-bind="formProps" @close="props.close"></modal-form>
            </template>
    </b-modal>
</div>
</template>

<script>
export default {
    data() {
        return {
            sites_id: 1,
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            isComponentModalActive: false,
            labelPosition: 'on-border',
        }
    },
    methods: {
        goLink(link){
            window.location.href = link;
        },
        logout() {
            document.getElementById("logout-form").submit();
        }
    }
}
</script>
