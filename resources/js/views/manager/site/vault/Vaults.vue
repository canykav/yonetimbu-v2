<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      Kasalar
    </p>
    <p class="has-text-grey is-size-7">.......</p>
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
                    <b-table :loading="loadingTable" :striped=true :data="vaults" :columns="columns"></b-table>
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
        columns: [
            {
                field: 'id',
                label: 'ID',
                width: '40',
                numeric: true
            },
            {
                field: 'name',
                label: 'Adı',
            },
            {
                field: 'type',
                label: 'Tipi',
            },
                        {
                field: '',
                label: 'Bakiye',
            },
        ]
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
    }
}
</script>

<style>

</style>
