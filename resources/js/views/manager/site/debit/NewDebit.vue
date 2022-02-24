<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container is-flex is-justify-content-space-between is-align-items-center">
                    <div name="hero-left-side">
                        <p class="is-size-4 mb-0">
                            Yeni Borçlandırma
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
                                <form id="newDebitForm" @submit.prevent="createDebit()">
                                <b-field label="Kişi"
                                    :label-position="labelPosition">
                                    <div class="control is-clearfix">
                                        <select class="select input is-fullwidth" v-model="newDebit.selectedPerson" @change="getPersonProperties(newDebit.selectedPerson)" required>
                                            <option v-for="person in persons" :key="person.id" :value="person.id">{{person.name}}</option>
                                        </select>
                                    </div>
                                </b-field>
                                <b-field label="Bölüm"
                                    :label-position="labelPosition">
                                    <div class="control is-clearfix">
                                        <select class="select input is-fullwidth" v-model="newDebit.occupants_id" required>
                                            <option v-for="property in properties" :key="property.id" :value="property.occupants_id">{{property.doorWithBlock}}</option>
                                        </select>
                                    </div>
                                </b-field>
                                <b-field label="Açıklama" :label-position="labelPosition">
                                    <b-input v-model="newDebit.description" required></b-input>
                                </b-field>
                                <b-field label="Türü"
                                    :label-position="labelPosition">
                                    <b-select  v-model="newDebit.debit_type" expanded>
                                        <option value="Aidat">Aidat</option>
                                        <option value="Demirbaş">Demirbaş</option>
                                    </b-select>
                                </b-field>
                                <div class="columns mb-0">
                                    <div class="column">
                                        <b-field label="Tarih" :label-position="labelPosition">
                                            <b-datepicker
                                                icon="calendar-today"
                                                v-model="newDebit.date"
                                                trap-focus>
                                            </b-datepicker>
                                        </b-field>
                                    </div>
                                    <div class="column">
                                        <b-field label="Vade Tarihi" :label-position="labelPosition">
                                            <b-datepicker
                                                icon="calendar-today"
                                                v-model="newDebit.due_date"
                                                trap-focus>
                                            </b-datepicker>
                                        </b-field>
                                    </div>
                                </div>
                                <b-field label="Tutar" :label-position="labelPosition">
                                    <div class="control is-clearfix">
                                        <vue-autonumeric
                                            class="input"
                                           v-model="newDebit.amount"
                                            :options="'commaDecimalCharDotSeparator'"
                                        ></vue-autonumeric>
                                    </div>
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
                persons: [],
                properties: [],
                selectedPerson: null,
                newDebit: {},
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
                    if(this.$route.params.persons_id) {
                        this.newDebit.selectedPerson = this.$route.params.persons_id;
                        this.getPersonProperties(this.newDebit.selectedPerson);
                    }
                })
                .catch(error => {
                    console.log(error.response.data);
                })
                .then(() => {
                    this.loadingTable = false;
                });
        },
        getPersonProperties(person) {
            axios.get('/api/sites/'+this.siteID+'/properties',{
                params: {
                accounts_id: person
                }
            })
            .then(response => {
                this.properties = response.data.data;
                this.properties.forEach(property => {
                    property.doorWithBlock = (property.block.name) ? property.block.name + '-'+ property.door_no : property.door_no;
                });
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTable = false;
            });
        },
        createDebit(){
            this.loadingButton = true;
            axios.post('/api/sites/'+this.siteID+'/debits', {
                occupants_id: this.newDebit.occupants_id,
                description: this.newDebit.description,
                debit_type: this.newDebit.debit_type,
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
