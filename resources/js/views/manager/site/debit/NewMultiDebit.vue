<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container is-flex is-justify-content-space-between is-align-items-center">
                    <div name="hero-left-side">
                        <p class="is-size-4 mb-0">
                            Yeni Toplu Borçlandırma
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
                                <form id="newMultiDebitForm" @submit.prevent="createMultipleDebit()">
                                    <b-field label="Borçlandırma Şekli"
                                        :label-position="labelPosition">
                                        <b-select v-model="newDebit.debit_type" expanded>
                                            <option value="Aidat">Toplu Aidat Borçlandırması</option>
                                            <option value="Demirbaş">Toplu Demirbaş Borçlandırması</option>
                                            <option value="Sayaç" disabled>Sayaç Endeksi Borçlandırması</option>
                                        </b-select>
                                    </b-field>
                                    <b-field label="Açıklama" :label-position="labelPosition">
                                        <b-input v-model="newDebit.description"></b-input>
                                    </b-field>
                                    <b-field label="Kişiler"
                                        :label-position="labelPosition">
                                        <b-select v-model="newDebit.persons" expanded>
                                            <option value="tenants">Kiracilar, Yoksa Kat Malikleri</option>
                                            <option value="householders">Kat Malikleri</option>
                                        </b-select>
                                    </b-field>
                                    <div class="columns mb-0">
                                        <div class="column">
                                            <b-field label="Tarih" :label-position="labelPosition">
                                                <b-datepicker
                                                    v-model="newDebit.date"
                                                    icon="calendar-today"
                                                    trap-focus>
                                                </b-datepicker>
                                            </b-field>
                                        </div>
                                        <div class="column">
                                            <b-field label="Vade Tarihi" :label-position="labelPosition">
                                                <b-datepicker
                                                    v-model="newDebit.due_date"
                                                    icon="calendar-today"
                                                    trap-focus>
                                                </b-datepicker>
                                            </b-field>
                                        </div>
                                    </div>
                                    <b-field label="Tutar" :label-position="labelPosition">
                                        <b-input v-model="newDebit.amount"></b-input>
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
                labelPosition: 'inside',
                newDebit: {},
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
    },
    methods: {
        createMultipleDebit(){
            this.loadingButton = true;
            axios.post('/api/sites/'+this.siteID+'/debits', {
                debit_type: this.newDebit.debit_type,
                description: this.newDebit.description,
                persons: this.newDebit.persons,
                date: (this.newDebit.date) ? this.newDebit.date.toLocaleDateString('tr-TR') : null,
                due_date: (this.newDebit.due_date) ? this.newDebit.due_date.toLocaleDateString('tr-TR') : null,
                amount: this.newDebit.amount
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.newDebit = {};
                this.$router.push({ name: 'debits',  params: { sites_id: this.siteID} })
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
