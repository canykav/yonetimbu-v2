<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
            <p class="is-size-4 mb-0">
            Kasalar
            </p>
        </div>
    <div class="buttons">
        <b-button
            class="is-primary"
            icon-left="plus"
            tag="router-link"
            to="vaults/new"
        >
            Kasa Ekle
        </b-button>
        <b-button
            icon-left="printer"
        >
            Yazdır
        </b-button>
    </div>
  </div>
  </div>
</section>
<div class="container block mt-6">
        <div class="card">
            <div class="card-content">
                <div class="content">
                     <b-table
                        :loading="loadingTable"
                        :striped=true
                        :data="vaults"
                        @click="goToVault($event)"
                        class="is-clickable"
                        :hoverable=true
                    >
                        <b-table-column label="ID" v-slot="props" width="40">
                            {{  props.row.id }}
                        </b-table-column>

                        <b-table-column  label="Adı" v-slot="props">
                            {{  props.row.name }}
                        </b-table-column>

                        <b-table-column label="Tipi" v-slot="props">
                            {{  props.row.type }}
                        </b-table-column>

                        <b-table-column label="Bakiye" v-slot="props">
                            {{  props.row.balance | turkishMoney }}
                        </b-table-column>
                    </b-table>

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
        siteID: null,
        vaults: [],
        loadingTable: true,
    }
},
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSiteVaults();
    },
    methods: {
        getSiteVaults() {
        axios.get('/api/sites/'+this.siteID+'/vaults')
            .then(response => {
                this.vaults = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTable = false;
            });
        },
        goToVault(vault) {
            this.$router.push({ name: 'vault',  params: { sites_id: this.siteID, vaults_id: vault.id } })
        }
    }
}
</script>

<style>

</style>
