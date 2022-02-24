<template>
    <div>
              <section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      Site Ayarları
    </p>
        </div>
  </div>
  </div>
</section>
   <div class="container block mt-6">
            <div class="card block">
                <div class="card-content">
                    <div class="content">
                        <p>Site Ayarları</p>

                <form id="updateSiteForm" @submit.prevent="updateSite()">
                <b-field label="Adı" :label-position="labelPosition">
                    <b-input v-model="site.name" required></b-input>
                </b-field>

                <b-field label="Adresi" :label-position="labelPosition">
                    <b-input v-model="site.address"></b-input>
                </b-field>

                <b-field label="Dönem Başlangıcı" :label-position="labelPosition">
                    <b-datepicker
                        icon="calendar-today"
                        trap-focus
                        v-model="site.term_start"
                        >
                    </b-datepicker>
                </b-field>
                <b-field label="Dönem Sonu" :label-position="labelPosition">
                    <b-datepicker
                        icon="calendar-today"
                        trap-focus
                        v-model="site.term_end"
                        >
                    </b-datepicker>
                </b-field>

                <b-field label="Vergi Dairesi" :label-position="labelPosition">
                    <b-input v-model="site.tax_administration"></b-input>
                </b-field>

                <b-field label="Vergi Numarası" :label-position="labelPosition">
                    <b-input v-model="site.tax_no"></b-input>
                </b-field>
                <ul class="list">
                    <li>
                        <b-field>
                            <b-switch v-model="site.debit">Otomatik Aidat Borçlandırması</b-switch>
                        </b-field>
                    </li>
                    <li>
                        <b-field>
                            <b-switch v-model="site.archived_at">Siteyi Arşivle</b-switch>
                        </b-field>
                    </li>
                </ul>
                <b-field>
                    <p class="control">
                        <b-button expanded label="Kaydet" type="is-primary" native-type="submit" :loading="loadingUpdateButton" form="updateSiteForm"/>
                    </p>
                </b-field>
                </form>
                    </div>
                </div>
            </div>

             <b-collapse
            class="card"
            :open="false"
            animation="slide">
            <template #trigger="props">
                <div
                    class="card-header"
                    role="button">
                    <p class="card-header-title">
                        Siteyi Sil
                    </p>
                    <a class="card-header-icon">
                        <b-icon
                            :icon="props.open ? 'menu-down' : 'menu-up'">
                        </b-icon>
                    </a>
                </div>
            </template>

            <div class="card-content">
                <div class="content">
                    <div class="columns">
                        <div class="column">
                            <p class="is-size-7">Bir siteyi sildikten sonra geri dönüş yoktur. Lütfen emin olun.</p>
                        </div>
                        <div class="column">
                            <b-button expanded label="Sil" type="is-danger" native-type="submit" :loading="loadingDeleteButton" @click="deleteSite()"/>
                        </div>
                    </div>
                </div>
            </div>
        </b-collapse>


        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            labelPosition: 'inside',
            site: {},
            loadingUpdateButton: false,
            loadingDeleteButton: false,

        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSite();
    },
    methods: {
        getSite() {
            axios.get('/api/sites/'+this.siteID)
            .then(response => {
                this.site = response.data.data;
                this.site.term_start = new Date(this.site.term_start);
                this.site.term_end = new Date(this.site.term_end);
                this.site.debit = (this.site.debit==1) ? true: false;
                this.site.archived_at = (this.site.archived_at==null) ? false: true;
            })
            .catch(error => {
                console.log(error.response.data);
            });
        },
        updateSite() {
            this.loadingUpdateButton = true;
            axios.put('/api/sites/'+this.siteID, {
                name: this.site.name,
                address: this.site.address,
                term_start: (this.site.term_start) ? this.site.term_start.toLocaleDateString('tr-TR') : null,
                term_end: (this.site.term_end) ? this.site.term_end.toLocaleDateString('tr-TR') : null,
                debit: (this.site.debit==true) ? 1: 0,
                archived_at: (this.site.archived_at==true) ? true: null,
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.getSite();
            })
            .catch(error => {
                this.$buefy.toast.open({
                    message: error.response.data.message,
                    type: 'is-danger'
                })
            })
            .then(() => {
                this.loadingUpdateButton = false;
            });
        },
        deleteSite(){
            axios.delete('/api/sites/'+this.siteID)
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
            })
            .catch(error => {
                this.$buefy.toast.open({
                    message: error.response.data.message,
                    type: 'is-danger'
                })
            })
            .then(() => {
                this.loadingDeleteButton = false;
            });
        }
    }
}
</script>

<style>

</style>
