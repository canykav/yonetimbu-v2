<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
            <p class="is-size-4 mb-0">
            Bölüm Tipleri
            </p>
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
                    <b-table
                        :loading="loadingTable"
                        :striped=true
                        :data="types"
                        :hoverable=true
                        class="is-clickable"
                    >
                        <b-table-column label="ID" v-slot="props" width="40">
                            {{ props.row.id }}
                        </b-table-column>

                        <b-table-column  label="Açıklama" v-slot="props">
                            {{  props.row.name }}
                        </b-table-column>

                        <b-table-column label="Arsa Payı" v-slot="props">
                            {{  props.row.land_share }}
                        </b-table-column>

                        <b-table-column label="Net m²" v-slot="props">
                            {{  props.row.net }}
                        </b-table-column>

                        <b-table-column label="Brüt m²" v-slot="props">
                            {{  props.row.gross }}
                        </b-table-column>

                        <b-table-column label="Aidat Tutarı" v-slot="props">
                            {{  props.row.fee_amount | turkishMoney }}
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
        types: [],
        loadingTable: true,
        isTableEmpty: false
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
            .then(() => {
                this.loadingTable = false;
            });
        },
    }
}
</script>

