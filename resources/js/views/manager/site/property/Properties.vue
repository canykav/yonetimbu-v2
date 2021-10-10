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
                    >
                        <b-table-column label="ID" v-slot="props" width="40">
                            {{ props.row.id }}
                        </b-table-column>

                        <b-table-column  label="Kapı No" v-slot="props">
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
            aria-role="dialog"
            aria-modal>
            <template #default="props">
                <occupant-form @addOccupant="addOccupant" @close="props.close"></occupant-form>
            </template>
        </b-modal>

</div>
</template>

<script>

const OccupantForm = {
        props: ['canCancel'],
        data() {
            return {
                newOccupant: {},
                labelPosition: 'inside'
            }
        },
        methods: {
            addOccupant(newOccupant) {
                this.$emit('addOccupant', newOccupant);
                this.newOccupant = {};
            }
        },
        template: `
            <form @submit.prevent="addOccupant(newOccupant)">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Oturan Ekle</p>
                        <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Kişi Adı" :label-position="labelPosition">
                            <b-input v-model="newOccupant.name"></b-input>
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
                            @click="$emit('close')"
                        />
                        <b-button
                            label="Kaydet"
                            type="is-primary"
                            native-type="submit"
                        />
                    </footer>
                </div>
            </form>
        `
    }

export default {
        components: {
        OccupantForm
    },
    data() {
        return {
            siteID: null,
            properties: [{householder: {}, tenant: {}, type: {}}],
            loadingTable: true,
            addOccupantModal: false,
            occupantType: null,
            selectedProperty: null,
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSiteProperties();
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
        addOccupant(newOccupant) {
            axios.post('/api/sites/'+this.siteID+'/occupants/', {
                name: newOccupant.name,
                type: this.occupantType,
                properties_id: this.selectedProperty,
                entry_date: (newOccupant.entry_date) ? newOccupant.entry_date.toLocaleDateString('tr-TR') : null,
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
        }
    }
}
</script>
