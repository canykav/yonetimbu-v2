<template>
<div>
<div class="container">
    <div class="columns">
        <div class="column is-9">
<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Siteleriniz
    </p>

    <b-button tag="a" href="sites/new" size="is-small is-link is-light" class="mr-3 mt-3">
        Yeni Site Oluştur
    </b-button>
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
            <div class="is-uppercase ml-4" v-bind:class="{ 'has-text-grey': site.archived_at }">
                {{site.name}} <span class="is-capitalized is-size-7 is-italic" v-if="site.archived_at">(Arşivde)</span>
            </div>
        </div>
    </div>
  </div>
</div>
        </div>
        <div class="column is-3">
            <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                Hesap Bilgileriniz
                </p>
                <b-button tag="a" size="is-small is-link is-light" class="mr-3 mt-3" @click="updateManagerModal=true">
                    Düzenle
                </b-button>
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
                                <div class="has-text-grey"><span>{{$attrs.manager.phone1}}</span></div>
                            </li>
                        </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>


            <b-modal
            v-model="updateManagerModal"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-modal
        >
            <form @submit.prevent="updateManager()">
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Hesap Bilgileriniz</p>
                        <button
                            type="button"
                            class="delete"
                            @click="updateManagerModal=false"/>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Adı Soyadı" :label-position="labelPosition">
                            <b-input v-model="editedManagerData.name" required></b-input>
                        </b-field>
                        <b-field label="Telefon" :label-position="labelPosition">
                            <b-input v-model="editedManagerData.phone"></b-input>
                        </b-field>
                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Vazgeç"
                            @click="updateManagerModal=false"
                        />
                        <b-button
                            label="Kaydet"
                            type="is-primary"
                            :loading="loadingUpdateManagerButton"
                            native-type="submit"
                        />
                    </footer>
                </div>
            </form>
        </b-modal>


</div>
</template>

<script>
export default {
    data() {
        return {
            sites_id: 1,
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            updateManagerModal: false,
            labelPosition: 'inside',
            loadingUpdateManagerButton: false,
            editedManagerData: [],
        }
    },
    watch: {
        updateManagerModal : function() {
            if(this.updateManagerModal==true) {
                Object.assign(this.editedManagerData, this.$attrs.manager);
            }
        }
    },
    methods: {
        goLink(link){
            window.location.href = link;
        },
        logout() {
            document.getElementById("logout-form").submit();
        },
        updateManager() {
            this.loadingUpdateManagerButton = true;
            axios.put('/api/managers/'+this.$attrs.manager.id, {
                name: this.editedManagerData.name,
                phone: this.editedManagerData.phone1,
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                Object.assign(this.$attrs.manager, this.editedManagerData);
                Object.assign(this.$root.$children[0].$attrs.manager, this.editedManagerData);
            })
            .catch(error => {
                this.$buefy.toast.open({
                    message: error.response.data.message,
                    type: 'is-danger'
                })
            })
            .then(() => {
                this.loadingUpdateManagerButton = false;
            });
        }
    }
}
</script>
