<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      Bölüm Tipleri
    </p>
    <p class="has-text-grey is-size-7">...</p>
        </div>
    <div class="buttons">
        <b-button
            class="is-primary"
            icon-left="plus"
            tag="router-link"
            to="types/new"
        >
            Bölüm Tipi Ekle
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
                    <b-table :loading="loadingTable" :striped=true :data="types" :columns="columns"></b-table>
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
        types: [],
        loadingTable: true,
        isTableEmpty: false,
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'name',
                        label: 'Açıklama',
                    },
                    {
                        field: 'land_share',
                        label: 'Arsa Payı',
                    },
                    {
                        field: 'net',
                        label: 'Net m²',
                    },
                    {
                        field: 'gross',
                        label: 'Brüt m²',
                    },
                    {
                        field: 'fee_amount',
                        label: 'Aidat Tutarı',
                    }
                ]
    }
},
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSiteTypes();
    },
    methods: {
        getSiteTypes() {
        axios.get('/api/sites/'+this.siteID+'/types')
            .then(response => {
                this.types = response.data.data;
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

