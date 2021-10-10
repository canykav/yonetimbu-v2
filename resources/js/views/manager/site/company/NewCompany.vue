<template>
  <div>
      <section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      Yeni Firma
    </p>
    <p class="has-text-grey is-size-7">......</p>
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
        <form id="newCompanyForm" @submit.prevent="createCompany()">
        <b-field label="Adı" :label-position="labelPosition">
            <b-input v-model="newCompany.name"></b-input>
        </b-field>
        <b-field label="Vergi No./TC No." :label-position="labelPosition">
            <b-input v-model="newCompany.citizenship_no" maxlength="11"></b-input>
        </b-field>
        <b-field label="Vergi Dairesi" :label-position="labelPosition">
            <b-input v-model="newCompany.tax_administration"></b-input>
        </b-field>
        <b-field label="Telefon" :label-position="labelPosition">
            <b-input v-model="newCompany.phone1"></b-input>
        </b-field>
        <b-field label="IBAN" :label-position="labelPosition">
            <b-input v-model="newCompany.iban"></b-input>
        </b-field>
        <b-field label="E-Mail" :label-position="labelPosition">
            <b-input type="email" v-model="newCompany.email"></b-input>
        </b-field>
     <b-field label="Adres" :label-position="labelPosition">
            <b-input v-model="newCompany.address"></b-input>
        </b-field>

        <b-field>
            <p class="control">
                <b-button expanded label="Kaydet" type="is-primary" native-type="submit" />
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
            newCompany : {},
            labelPosition: 'inside',
            loadingButton: false,
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
    },
    methods: {
        createCompany(){
            this.loadingButton = true;
            axios.post('/api/sites/'+this.siteID+'/companies', {
                name: this.newCompany.name,
                citizenship_no: this.newCompany.citizenship_no,
                tax_administration: this.newCompany.tax_administration,
                phone1: this.newCompany.phone1,
                iban: this.newCompany.iban,
                email: this.newCompany.email,
                address: this.newCompany.address,
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.newCompany = {};
                this.$router.push({ name: 'companies',  params: { sites_id: this.siteID} })
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
    }
}
</script>
