<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
            <p class="is-size-4 mb-0">
            Firmalar
            </p>
        </div>
    <div class="buttons">
        <b-button
            class="is-primary"
            icon-left="plus"
            tag="router-link"
            to="companies/new"
        >
            Firma Ekle
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
                        :data="companies"
                        :hoverable=true
                        @click="goToCompany($event)"
                        class="is-clickable"
                    >
                        <b-table-column  label="Adı" v-slot="props">
                            {{  props.row.name }}
                        </b-table-column>

                        <b-table-column label="Telefon" v-slot="props">
                            {{  props.row.phone1 }}
                        </b-table-column>

                        <b-table-column label="Bakiye" v-slot="props">
                            {{  props.row.balance | turkishMoney }}
                        </b-table-column>
                        <template #empty>
                            <div v-if="!loadingTable" class="has-text-centered">Kayıt yok</div>
                        </template>
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
        companies: [],
        loadingTable: true,
    }
},
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSiteCompanies();
    },
    methods: {
        getSiteCompanies() {
        axios.get('/api/sites/'+this.siteID+'/companies')
            .then(response => {
                this.companies = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTable = false;
            });
        },
        goToCompany(company) {
            this.$router.push({ name: 'company',  params: { sites_id: this.siteID, companies_id: company.id } })
        }
    }
}
</script>
