<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      Bölümler
    </p>
    <p class="has-text-grey is-size-7">Sitedeki dükkan ve daireler</p>
        </div>
    <div class="buttons">
        <b-button
            class="is-primary"
            icon-left="plus"
            tag="router-link"
            to="properties/new"
        >
            Bölüm Ekle
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
                    <b-table :loading="loadingTable" :striped=true :data="properties" :columns="columns"></b-table>
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
        properties: [{householder: {}, tenant: {}, type: {}}],
        loadingTable: true,
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'doorWithBlock',
                        label: 'Kapı No',
                    },
                    {
                        field: 'type.name',
                        label: 'Tipi',
                    },
                    {
                        field: 'householder.name',
                        label: 'Kat Maliki',
                    },
                    {
                        field: 'tenant.name',
                        label: 'Kiracı',
                    }
                ]
    }
},
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSiteProperties();
    },
    methods: {
        getSiteProperties() {
        axios.get('/api/sites/'+this.siteID+'/properties')
            .then(response => {
                this.properties = response.data.data;
                this.properties.forEach(property => {
                    property.doorWithBlock = (property.block.name) ? property.block.name + '-'+ property.door_no : property.door_no;
                });
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
