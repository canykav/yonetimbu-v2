<template>
  <div>
      <section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      Yeni Bölüm Tipi
    </p>
    <p class="has-text-grey is-size-7">..</p>
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
        <form id="newTypeForm" @submit.prevent="createType()">
            <b-field label="Açıklama" :label-position="labelPosition">
                <b-input v-model="newType.name"></b-input>
            </b-field>
            <b-field label="Arsa Payı" :label-position="labelPosition">
                <b-input v-model="newType.land_share"></b-input>
            </b-field>
            <div class="columns mt-0">
                <div class="column">
                    <b-field label="Net m²" :label-position="labelPosition">
                        <b-input v-model="newType.net"></b-input>
                    </b-field>
                </div>
                            <div class="column">
            <b-field label="Brüt m²" :label-position="labelPosition">
                <b-input v-model="newType.gross"></b-input>
            </b-field>
                        </div>
            </div>
            <b-field label="Aidat Tutarı" :label-position="labelPosition">
                <div class="control is-clearfix">
                    <vue-autonumeric
                        class="input"
                        v-model="newType.fee_amount"
                        :options="'commaDecimalCharDotSeparator'"
                    ></vue-autonumeric>
                </div>
            </b-field>

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
                newType: {},
                labelPosition: 'inside',
                loadingButton: false,
                siteID: null,
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
    },
    methods: {
        createType(){
            this.loadingButton = true;
            axios.post('/api/sites/'+this.siteID+'/types', {
                name: this.newType.name,
                land_share: this.newType.land_share,
                gross: this.newType.gross,
                net: this.newType.net,
                fee_amount: this.newType.fee_amount,
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                })
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
