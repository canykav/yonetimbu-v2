<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
            <p class="is-size-4 mb-0">
            Bölümler
            </p>
        </div>
    <div class="buttons">
        <b-button
            class="is-primary"
            icon-left="plus"
            tag="router-link"
            to="properties/new"
        >
            Bölüm Ekle
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
                    <b-table
                        :loading="loadingTable"
                        :striped=true
                        :data="properties"
                        :hoverable=true
                        class="is-clickable"
                        @click="goToProperty($event)"
                    >
                        <b-table-column label="Bölüm" v-slot="props">
                            {{  props.row.doorWithBlock }}
                        </b-table-column>

                        <b-table-column label="Tipi" v-slot="props">
                            {{  props.row.type.name }}
                        </b-table-column>

                        <b-table-column label="Kat Maliki" v-slot="props" cell-class="light-blue-cell">
                            <span class="is-clickable" v-if="props.row.householder" @click="goToPerson(props.row.householder)"> {{  props.row.householder.name }} </span>
                            <a class="has-text-link is-size-7" @click="addOccupantModal = true; selectedProperty=props.row.id; occupantType='householder'" v-else>
                                <b-icon
                                    icon="account-plus"
                                    size="is-small">
                                 </b-icon>
                                Kat Maliki Ekle
                            </a>
                        </b-table-column>

                        <b-table-column label="Kiracı" v-slot="props" cell-class="light-yellow-cell">
                           <span class="is-clickable" v-if="props.row.tenant" @click="goToPerson(props.row.tenant)"> {{  props.row.tenant.name }} </span>
                           <a class="has-text-link is-size-7" @click="addOccupantModal = true; selectedProperty=props.row.id; occupantType='tenant'" v-else>
                                <b-icon
                                    icon="account-plus"
                                    size="is-small">
                                </b-icon>
                                Kiracı Ekle
                            </a>
                        </b-table-column>
                    </b-table>
                </div>
            </div>
        </div>
</div>

        <b-modal
            v-model="addOccupantModal"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-modal
        >
            <form @submit.prevent="addOccupant()">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Oturan Ekle</p>
                        <button
                            type="button"
                            class="delete"
                            @click="addOccupantModal=false"/>
                    </header>
                    <section class="modal-card-body" id="add-occupant-modal-body">
                        <b-field label="Kişi Adı" :label-position="labelPosition">
                            <div class="dropdown is-block is-active">
                                <div class="dropdown-trigger">
                                    <div class="control has-icons-right">
                                        <input class="input" type="text" style="padding-top: 2rem;padding-bottom: 1rem;" v-model="newOccupant.name" v-on:keyup="searchPerson();personList=true;" required>
                                        <span class="tag is-info is-small is-right" style="position: absolute;right: 10px;top: 0.75rem;" v-if="newOccupant.accounts_id == null && newOccupant.name!=null">Yeni Kişi</span>
                                    </div>
                                </div>
                                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div class="dropdown-content" style="display:none" v-bind:class="{ 'is-block' : personList }" v-if="personResults.length>0">
                                    <a @click="prepareOccupantToAdd(person)" class="dropdown-item" :key="person.id" v-for="person in personResults" v-bind:value="person.id">
                                        {{person.name}}
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </b-field>

                        <b-field label="Giriş Tarihi" :label-position="labelPosition">
                            <b-datepicker
                                v-model="newOccupant.entry_date"
                                icon="calendar-today"
                                trap-focus
                                >
                            </b-datepicker>
                        </b-field>
                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Vazgeç"
                            @click="addOccupantModal=false"
                        />
                        <b-button
                            label="Kaydet"
                            type="is-primary"
                            native-type="submit"
                        />
                    </footer>
                </div>
            </form>
        </b-modal>

</div>
</template>

<script>
export default {
    data() {
        return {
            newOccupant: {},
            labelPosition: 'inside',
            siteID: null,
            properties: [{householder: {}, tenant: {}, type: {}}],
            loadingTable: true,
            addOccupantModal: false,
            occupantType: null,
            selectedProperty: null,
            personResults: [],
            persons: [],
            personList: false,
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSiteProperties();
        this.getSitePersons();
    },
    methods: {
        getSiteProperties() {
        axios.get('/api/sites/'+this.siteID+'/properties')
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
        addOccupant() {
            axios.post('/api/sites/'+this.siteID+'/occupants/', {
                name: this.newOccupant.name,
                accounts_id: this.newOccupant.accounts_id,
                type: this.occupantType,
                properties_id: this.selectedProperty,
                entry_date: (this.newOccupant.entry_date) ? this.newOccupant.entry_date.toLocaleDateString('tr-TR') : null,
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.getSiteProperties();
                this.addOccupantModal = false;
            })
            .catch(error => {
                this.$buefy.toast.open({
                    message: error.response.data.message,
                    type: 'is-danger'
                })
            });
        },
        goToPerson(person) {
            this.$router.push({ name: 'person',  params: { sites_id: this.siteID, persons_id: person.accounts_id } })
        },
        goToProperty(property) {
            if(this.addOccupantModal == false) {
                this.$router.push({ name: 'property',  params: { sites_id: this.siteID, properties_id: property.id } })
            }
        },
        getSitePersons() {
            axios.get('/api/sites/'+this.siteID+'/persons')
                .then(response => {
                    this.persons = response.data.data;
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        },
        searchPerson() {
            var i;
            this.personResults = [];
            this.newOccupant.accounts_id = null;
            if(this.newOccupant.name.length>0) {
                for (i = 0; i < this.persons.length; i++) {
                    if(this.persons[i].name.indexOf(this.newOccupant.name)>=0) {
                        this.personResults.push(this.persons[i]);
                    }
                }
            }
        },
        prepareOccupantToAdd(person) {
            this.newOccupant.name = person.name;
            this.newOccupant.accounts_id = person.id;
            this.personList = false;
        },
    }
}
</script>

<style>
    #add-occupant-modal-body {
        min-width: 414px;
        min-height: 400px;
    }
</style>
