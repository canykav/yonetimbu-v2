<template>
  <div>
      <section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      Yeni Kasa
    </p>
        </div>
  </div>
  </div>
</section>
      <div class="container block mt-6">
        <div class="card">
            <div class="card-content">
                <div class="content">
      <template>
    <section>

        <form id="newVaultForm" method="post" action="login" @submit.prevent="createVault()">
        <b-field label="Adı" :label-position="labelPosition">
            <b-input v-model="newVault.name"></b-input>
        </b-field>
         <b-field label="Açılış Tarihi" :label-position="labelPosition">
            <b-datepicker
                icon="calendar-today"
                trap-focus
                v-model="newVault.opening_date"
                >
            </b-datepicker>
        </b-field>
        <b-field label="Tipi"
            :label-position="labelPosition">
            <b-select  v-model="newVault.type" expanded>
                <option value="vault">Kasa</option>
                <option value="bank">Banka Hesabı</option>
            </b-select>
        </b-field>

        <b-field v-if="newVault.type=='bank'" label="IBAN" :label-position="labelPosition">
            <b-input v-model="newVault.iban"></b-input>
        </b-field>

        <b-field v-if="newVault.type=='bank'" label="Banka" :label-position="labelPosition">
            <!-- <b-select v-model="newVault.bank" expanded>
                <option v-for="bank in banks" v-key="bank.name">{{bank.name}}</option>
            </b-select> -->
            <b-input v-model="newVault.bank"></b-input>
        </b-field>

        <b-field v-if="newVault.type=='bank'" label="Şube" :label-position="labelPosition">
            <b-input v-model="newVault.branch"></b-input>
        </b-field>

        <b-field>
            <p class="control">
                <b-button expanded label="Kaydet" type="is-primary" native-type="submit"/>
            </p>
        </b-field>
        </form>

    </section>
    </template>

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
                newVault: {},
                labelPosition: 'inside',
                loadingButton: false,
                //banks: [],

        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        //this.getBanks();
    },
    methods: {
        createVault(){
            this.loadingButton = true;
            axios.post('/api/sites/'+this.siteID+'/vaults', {
                name: this.newVault.name,
                opening_date: this.newVault.opening_date.toLocaleDateString('tr-TR'),
                type: this.newVault.type,
                bank: this.newVault.bank,
                branch: this.newVault.branch,
                iban: this.newVault.iban,
                sites_id: this.siteID
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                })
                this.newVault = {};
                this.$router.push({ name: 'vaults',  params: { sites_id: this.siteID} });
            })
            .catch(error => {
                this.$buefy.toast.open({
                    message: error.response.data.message,
                    type: 'is-danger'
                })
            })
            .then(() => {
                this.loadingButton = false;
            });
        },
        /*getBanks() {
            axios.get('/api/data/banks')
            .then(response => {
                this.banks = response.data.data;
            })
        }*/
    }
}
</script>

<style>

</style>
