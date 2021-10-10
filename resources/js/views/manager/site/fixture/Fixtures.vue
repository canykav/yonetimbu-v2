<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
            <p class="is-size-4 mb-0">
            Demirbaşlar
            </p>
        </div>
    <div class="buttons">
        <b-button
            class="is-primary"
            icon-left="plus"
            tag="router-link"
            to="fixtures/new"
        >
            Demirbaş Ekle
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
                        :data="fixtures"
                        :hoverable=true
                        class="is-clickable"
                    >
                        <b-table-column  label="Demirbaş Adı" v-slot="props">
                            {{  props.row.name }}
                        </b-table-column>

                        <b-table-column label="Zimmetli" v-slot="props">
                            {{  props.row.keeper }}
                        </b-table-column>

                        <b-table-column label="Alış Tarihi" v-slot="props">
                            {{  props.row.bought_date | turkishDate }}
                        </b-table-column>

                        <b-table-column label="Adet" v-slot="props">
                            {{  props.row.unit }}
                        </b-table-column>

                        <b-table-column label="Adet Fiyatı" v-slot="props">
                            {{  props.row.unit_price | turkishMoney }}
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
        fixtures: [],
        loadingTable: true,
        isTableEmpty: false
    }
},
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSiteFixtures();
    },
    methods: {
        getSiteFixtures() {
        axios.get('/api/sites/'+this.siteID+'/fixtures')
            .then(response => {
                this.fixtures = response.data.data;
            })
            .then(() => {
                this.loadingTable = false;
            });
        },
    }
}
</script>

