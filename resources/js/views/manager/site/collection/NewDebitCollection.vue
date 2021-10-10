<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container is-flex is-justify-content-space-between is-align-items-center">
                    <div name="hero-left-side">
                        <p class="is-size-4 mb-0">
                            Yeni Borç Tahsilatı
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <div class="container block mt-6">
            <div class="columns">
                            <div class="column" v-bind:class="{ 'is-12': !newCollection.occupants_id, 'is-6': newCollection.occupants_id!=null }">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                            <section>
                                <p>Borç Bilgileri</p>
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
                    </div>
                </div>
            </div>
            </div>

            <div class="column" v-bind:class="{ 'is-hidden': !newCollection.occupants_id, 'is-6': newCollection.occupants_id!=null }">
                 <div class="card">
                    <div class="card-content">
                        <div class="content">
                            <p>Seçilebilir Borçlandırmalar</p>
                  <b-table
                    :striped=true
                    :data="unpaidDebits"
                    >

                        <b-table-column v-slot="props">
                            <b-radio v-model="newCollection.selectedDebit"
                                name="selectedDebit"
                                :native-value="props.row.id"
                                size="is-small">
                            </b-radio>
                        </b-table-column>

                        <b-table-column label="Açıklama" v-slot="props">
                            {{  props.row.description }}
                        </b-table-column>

                        <b-table-column label="Bölüm" v-slot="props">
                            {{  props.row.occupant.property.doorWithBlock }}
                        </b-table-column>

                        <b-table-column label="Tarih" v-slot="props">
                            {{  props.row.date | turkishDate }}
                        </b-table-column>

                        <b-table-column label="Vade Tarihi" v-slot="props">
                            {{  props.row.due_date | turkishDate }}
                        </b-table-column>

                        <b-table-column label="Toplam" v-slot="props">
                            {{  props.row.amount | turkishMoney }}
                        </b-table-column>

                        <b-table-column label="Kalan" v-slot="props">
                            {{  props.row.amount - props.row.debit_collections_sum_amount | turkishMoney }}
                        </b-table-column>
                        <template #empty>
                            <div class="has-text-centered">Kayıt yok</div>
                        </template>
                    </b-table>
                        </div>
                    </div>
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
                newCollection: {selectedPerson: null, occupants_id: null},
                vaults: [],
                debitsCard: false,
                unpaidDebits: [],
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSitePersons();
        this.getSiteVaults();
    },
    watch: {
        'newCollection.selectedPerson' : function() {
            this.newCollection.occupants_id = null;
        },
        'newCollection.occupants_id' : function() {
            if(this.newCollection.occupants_id!= null) {
                this.getOccupantDebits();
            }
        }
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
                .then(() => {
                    this.loadingTable = false;
                });
        },
        getSiteVaults() {
            axios.get('/api/sites/'+this.siteID+'/vaults')
                .then(response => {
                    this.vaults = response.data.data;
                });
        },
        getOccupantDebits() {
            axios.get('/api/sites/'+this.siteID+'/debits', {
                params: {
                    occupants_id: this.newCollection.occupants_id,
                    except: 'paid'
                }
            })
                .then(response => {
                    this.unpaidDebits = response.data.data;
                    this.unpaidDebits.forEach(debit => {
                        debit.occupant.property.doorWithBlock = (debit.occupant.property.block.name) ? debit.occupant.property.block.name + '-'+ debit.occupant.property.door_no : debit.occupant.property.door_no;
                    });
                    if(this.$route.params.debits_id) {
                        this.newCollection.selectedDebit = this.$route.params.debits_id;
                    }
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
                if(this.$route.params.occupants_id) {
                    this.newCollection.occupants_id = this.$route.params.occupants_id;
                }
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
                vaults_id: this.newCollection.vaults_id,
                debits_id: this.newCollection.selectedDebit
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.newCollection = {};
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
