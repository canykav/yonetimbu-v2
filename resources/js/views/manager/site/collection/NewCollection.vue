<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container is-flex is-justify-content-space-between is-align-items-center">
                    <div name="hero-left-side">
                        <p class="is-size-4 mb-0">
                            Yeni Tahsilat
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
                                <form id="newCollectionForm" @submit.prevent="createCollection()">
                                <b-field label="Kişi"
                                    :label-position="labelPosition">
                                    <div class="control is-clearfix">
                                        <select class="select input is-fullwidth" v-model="newCollection.selectedPerson" @change="getPersonProperties(newCollection.selectedPerson)">
                                            <option v-for="person in persons" :key="person.id" :value="person.id">{{person.name}}</option>
                                        </select>
                                    </div>
                                </b-field>
                                <b-field label="Bölüm"
                                    :label-position="labelPosition">
                                    <div class="control is-clearfix">
                                        <select class="select input is-fullwidth" v-model="newCollection.occupants_id">
                                            <option v-for="property in properties" :key="property.id" :value="property.occupants_id">{{property.doorWithBlock}}</option>
                                        </select>
                                    </div>
                                </b-field>
                                <b-field label="Açıklama" :label-position="labelPosition">
                                    <b-input v-model="newCollection.description"></b-input>
                                </b-field>
                                <b-field label="Tarih" :label-position="labelPosition">
                                    <b-datepicker
                                        icon="calendar-today"
                                        v-model="newCollection.date"
                                        trap-focus>
                                    </b-datepicker>
                                </b-field>
                                <b-field label="Tutar" :label-position="labelPosition">
                                    <div class="control is-clearfix">
                                        <vue-autonumeric
                                            class="input"
                                           v-model="newCollection.amount"
                                            :options="'commaDecimalCharDotSeparator'"
                                        ></vue-autonumeric>
                                    </div>
                                </b-field>
                                <b-field label="Kasa"
                                        :label-position="labelPosition">
                                        <div class="control is-clearfix">
                                            <select class="select input is-fullwidth" v-model="newCollection.vaults_id">
                                                <option v-for="vault in vaults" :key="vault.id" :value="vault.id">{{vault.name}}</option>
                                            </select>
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
                newCollection: {},
                vaults: [],
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSitePersons();
        this.getSiteVaults();
    },
    methods: {
        getSitePersons() {
            axios.get('/api/sites/'+this.siteID+'/persons')
                .then(response => {
                    this.persons = response.data.data;
                    if(this.$route.params.persons_id) {
                        this.newCollection.selectedPerson = this.$route.params.persons_id;
                        this.getPersonProperties(this.newCollection.selectedPerson);
                    }
                })
                .catch(error => {
                    console.log(error.response.data);
                })
                .then(() => {
                    this.loadingTable = false;
                });
        },
        getSiteVaults() {
            axios.get('/api/sites/'+this.siteID+'/vaults')
                .then(response => {
                    this.vaults = response.data.data;
                })
                .catch(error => {
                    console.log(error.response.data);
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
        createCollection(){
            this.loadingButton = true;
            axios.post('/api/sites/'+this.siteID+'/collections', {
                occupants_id: this.newCollection.occupants_id,
                description: this.newCollection.description,
                date: this.newCollection.date.toLocaleDateString('tr-TR'),
                amount: this.newCollection.amount,
                vaults_id: this.newCollection.vaults_id
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.newCollection = {};
                this.$router.push({ name: 'collections',  params: { sites_id: this.siteID} })
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
