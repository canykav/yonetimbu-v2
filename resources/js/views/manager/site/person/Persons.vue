<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
            <p class="is-size-4 mb-0">
            Kişiler
            </p>
        </div>
    <div class="buttons">
        <b-button
            class="is-primary"
            icon-left="plus"
            tag="router-link"
            to="persons/new"
        >
            Kişi Ekle
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
                        :hoverable=true
                        :striped=true
                        :data="persons"
                        @click="goToPerson($event)"
                        class="is-clickable"
                    >
                        <b-table-column label="ID" v-slot="props" width="40">
                            {{ props.row.id }}
                        </b-table-column>

                        <b-table-column  label="Adı Soyadı" v-slot="props">
                            {{  props.row.name }}
                        </b-table-column>

                        <b-table-column label="TCKN" v-slot="props">
                            {{  props.row.citizenship_no }}
                        </b-table-column>

                        <b-table-column label="Telefon" v-slot="props">
                            {{  props.row.phone1 }}
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
            persons: [],
            loadingTable: true,
            isTableEmpty: false,
    }
},
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSitePersons();
    },
    methods: {
        getSitePersons() {
        axios.get('/api/sites/'+this.siteID+'/persons')
            .then(response => {
                this.persons = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTable = false;
            });
        },
        goToPerson(person) {
            this.$router.push({ name: 'person',  params: { sites_id: this.siteID, persons_id: person.id } })
        }
    }
}
</script>

