<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      Kişiler
    </p>
    <p class="has-text-grey is-size-7">Sitede oturan ya da mülk sahibi olan tüm kişiler</p>
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
                    <b-table :loading="loadingTable" :hoverable=true :striped=true :data="persons" :columns="columns">
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
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'name',
                        label: 'Adı Soyadı',
                    },
                    {
                        field: 'citizenship_no',
                        label: 'TCKN',
                    },
                    {
                        field: 'phone1',
                        label: 'Telefon',
                    },
                    {
                        field: 'gender',
                        label: 'Bakiye',
                    }
                ]
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
    }
}
</script>

