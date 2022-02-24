<template>
<div>
    <section class="hero">
        <div class="hero-body">
            <div class="container is-flex is-justify-content-space-between is-align-items-center">
                <div name="hero-left-side">
                    <p class="is-size-4 mb-0">
                    {{property.doorWithBlock}}
                    </p>
                </div>
                <div class="buttons">
                    <b-dropdown aria-role="list" class="mr-2">
                        <template #trigger="{ active }">
                            <b-button
                                label="İşlemler"
                                type="is-primary"
                                icon-left="cog"
                                :icon-right="active ? 'menu-up' : 'menu-down'" />
                        </template>
                        <b-dropdown-item aria-role="listitem" @click="deleteModal=true">Bölümü Sil</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
        </div>
    </section>
    <div class="container block mt-6">
                <div class="card block">
                    <header class="card-header">
                        <p class="card-header-title">
                        Bölüm Bilgisi
                        </p>
                        <b-button tag="a" @click="toggleEdit()" size="is-small is-link is-light" class="mr-3 mt-3">
                            <span v-if="edit==0">Düzenle</span>
                            <span v-if="edit==1">Vazgeç</span>
                        </b-button>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <table class="table is-fullwidth">
                                <tbody>
                                    <tr>
                                        <td width="30%">Bölüm</td>
                                        <td><span v-if="edit==0">{{property.doorWithBlock}}</span>
                                            <div class="columns">
                                                <div class="column">
                                                    <b-select v-if="edit==1" v-model="editedPropertyData.blocks_id" size="is-small" expanded>
                                                        <option
                                                            v-for="block in blocks"
                                                            :value="block.id"
                                                            :key="block.id">
                                                            {{ block.name }}
                                                        </option>
                                                    </b-select>
                                                </div>
                                                <div class="column">
                                                    <b-input custom-class="is-small" v-if="edit==1" v-model="editedPropertyData.door_no"></b-input>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Tipi</td>
                                        <td><span v-if="edit==0">{{property.type.name}}</span>
                                            <b-select v-if="edit==1" v-model="editedPropertyData.types_id" size="is-small" expanded>
                                                <option
                                                    v-for="type in types"
                                                    :value="type.id"
                                                    :key="type.id">
                                                    {{ type.name }}
                                                </option>
                                            </b-select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Aidat Tutarı</td>
                                        <td>
                                            <span v-if="edit==0">{{property.type.fee_amount | turkishMoney}}</span>
                                            <vue-autonumeric
                                                v-if="edit==1"
                                                class="input is-small"
                                                v-model="editedPropertyData.type.fee_amount"
                                                :options="'commaDecimalCharDotSeparator'"
                                                readonly
                                            ></vue-autonumeric>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <b-button v-if="edit==1" class="is-small" @click="updateProperty" type="is-primary" :loading="loadingUpdateButton" expanded>Kaydet</b-button>
                        </div>
                    </div>
                </div>

                <div class="card block">
                    <header class="card-header">
                        <p class="card-header-title">
                        Oturan Geçmişi
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <b-table
                                :hoverable=true
                                :striped=true
                                :data="occupants"
                                class="is-clickable"
                                @click="goToPerson($event)"
                            >
                            <b-table-column label="Giriş" v-slot="props">
                                {{ props.row.entry_date | turkishDate  }}
                            </b-table-column>

                            <b-table-column  label="Çıkış" v-slot="props">
                                {{  props.row.abandonment_date | turkishDate }}
                            </b-table-column>

                            <b-table-column label="Kişi" v-slot="props">
                                {{  props.row.account.name }}
                            </b-table-column>

                            <b-table-column label="Tip" v-slot="props">
                                {{  props.row.type }}
                            </b-table-column>

                            <b-table-column label="Bakiye" v-slot="props">
                                {{  props.row.balance | turkishMoney }}
                            </b-table-column>
                            <template #empty>
                                <div v-if="!loadingTable" class="has-text-centered">Kayıt yok</div>
                            </template>
                        </b-table>
                        </div>
                    </div>
                </div>
    </div>

        <b-modal
            v-model="deleteModal"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-modal
        >
            <form @submit.prevent="deleteProperty()">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">İşlemi onaylayın</p>
                        <button
                            type="button"
                            class="delete"
                            @click="deleteModal=false"/>
                    </header>
                    <section class="modal-card-body">
                       Bölüm siliniyor. Devam etmek istediğinize emin misiniz?
                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Vazgeç"
                            @click="deleteModal=false"
                        />
                        <b-button
                            label="Kaydet"
                            type="is-primary"
                            :loading="loadingDeleteButton"
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
                siteID: null,
                propertyID: null,
                property: {},
                editedPropertyData: {},
                loadingUpdateButton: false,
                loadingDeleteButton: false,
                loadingTable: true,
                edit: 0,
                deleteModal: false,
                types: [],
                blocks: [],
                occupants: [],
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.propertyID = this.$route.params.properties_id;
        this.getProperty();
    },
    methods: {
        getProperty() {
        axios.get('/api/sites/'+this.siteID+'/properties/'+this.propertyID)
            .then(response => {
                this.property = response.data.data;
                this.property.doorWithBlock = (this.property.block.name) ? this.property.block.name + '-'+ this.property.door_no : this.property.door_no;
                this.getTypes();
                this.getOccupants();
                this.getBlocks();
            })
            .catch(error => {
                console.log(error.response.data);
            });
        },
        getOccupants() {
        axios.get('/api/sites/'+this.siteID+'/occupants' , {
            params:  {
                properties_id : this.propertyID
            }
        })
            .then(response => {
                this.occupants = response.data.data;
            })
            .then(() => {
                this.loadingTable = false;
            });
        },
        getTypes() {
        axios.get('/api/sites/'+this.siteID+'/types')
            .then(response => {
                this.types = response.data.data;
            });
        },
        getBlocks() {
        axios.get('/api/sites/'+this.siteID+'/blocks')
            .then(response => {
                this.blocks = response.data.data;
            });
        },
        updateProperty(){
            this.loadingUpdateButton = true;
            axios.put('/api/sites/'+this.siteID+'/properties/'+this.propertyID, {
                blocks_id: this.editedPropertyData.blocks_id,
                door_no: this.editedPropertyData.door_no,
                types_id: this.editedPropertyData.types_id,
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.getProperty();
                this.edit = 0;
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
        toggleEdit() {
            if(this.edit==0) {
                Object.assign(this.editedPropertyData, this.property);
            }
            this.edit = !this.edit;
        },
        deleteProperty(){
            this.loadingDeleteButton = true;
            axios.delete('/api/sites/'+this.siteID+'/properties/'+this.propertyID)
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.$router.push({ name: 'properties', params: { sites_id: this.siteID} });
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
        },
        goToPerson(person) {
            this.$router.push({ name: 'person',  params: { sites_id: this.siteID, persons_id: person.account.id } })
        }
    }
}
</script>

