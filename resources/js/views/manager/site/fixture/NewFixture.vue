<template>
  <div>
      <section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
            <p class="is-size-4 mb-0">
            Yeni Demirbaş
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
        <form id="newFixtureForm" @submit.prevent="createFixture()">
            <b-field label="Demirbaş Adı" :label-position="labelPosition">
                <b-input v-model="newFixture.name" required></b-input>
            </b-field>
            <b-field label="Zimmetli" :label-position="labelPosition">
                <b-input v-model="newFixture.keeper"></b-input>
            </b-field>
            <b-field label="Alış Tarihi" :label-position="labelPosition">
                <b-datepicker
                    icon="calendar-today"
                    trap-focus
                    v-model="newFixture.bought_date"
                    >
                </b-datepicker>
            </b-field>
            <div class="columns mt-0">
                <div class="column">
                    <b-field label="Adet" :label-position="labelPosition">
                        <b-input v-model="newFixture.unit" required></b-input>
                    </b-field>
                </div>
                <div class="column">
                    <b-field label="Adet Fiyatı" :label-position="labelPosition">
                        <div class="control is-clearfix">
                            <vue-autonumeric
                                class="input"
                                v-model="newFixture.unit_price"
                                :options="'commaDecimalCharDotSeparator'"
                            ></vue-autonumeric>
                        </div>
                    </b-field>
                </div>
            </div>

            <b-field>
                <p class="control">
                    <b-button expanded label="Kaydet" type="is-primary" native-type="submit" :loading="loadingButton" />
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
            newFixture: {},
            labelPosition: 'inside',
            loadingButton: false,
            siteID: null,
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
    },
    methods: {
        createFixture(){
            this.loadingButton = true;
            axios.post('/api/sites/'+this.siteID+'/fixtures', {
                name: this.newFixture.name,
                keeper: this.newFixture.keeper,
                unit: this.newFixture.unit,
                unit_price: this.newFixture.unit_price,
                bought_date: this.newFixture.bought_date,
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.$router.push({ name: 'fixtures',  params: { sites_id: this.siteID} })
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

<style>

</style>
