<template>
<div>
    <section class="hero">
        <div class="hero-body">
            <div class="container is-flex is-justify-content-space-between is-align-items-center">
                <div name="hero-left-side">
                    <p class="is-size-4 mb-0">
                    {{collection.name}}
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
                        <b-dropdown-item aria-role="listitem" @click="deleteModal=true">Tahsilatı Sil</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
        </div>
    </section>
    <div class="container block mt-6">
                <div class="card block">
                    <header class="card-header">
                        <p class="card-header-title">
                        Tahsilat Bilgisi
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
                                        <td width="30%">Açıklama</td>
                                        <td><span v-if="edit==0">{{collection.description}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedCollectionData.description"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td width="30%">Tarih</td>
                                        <td><span v-if="edit==0">{{collection.date | turkishDate}}</span>
                                            <b-datepicker
                                            v-if="edit==1"
                                            icon="calendar-today"
                                            v-model="editedCollectionData.date"
                                            trap-focus
                                            custom-class="is-small">
                                            </b-datepicker>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Kişi</td>
                                        <td>
                                            <span v-if="edit==0"><router-link :to="{name: 'person', params: { sites_id: siteID, persons_id: collection.occupant.account.id }}" >{{collection.occupant.account.name}}</router-link></span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedCollectionData.occupant.account.name"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Bölüm</td>
                                        <td>
                                            <span v-if="edit==0"><router-link :to="{name: 'property', params: { sites_id: siteID, properties_id: collection.occupant.property.id }}" >{{collection.occupant.property.doorWithBlock}}</router-link></span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedCollectionData.occupant.property.doorWithBlock"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Tutar</td>
                                        <td>
                                            <span v-if="edit==0">{{collection.amount | turkishMoney}}</span>
                                            <vue-autonumeric
                                                v-if="edit==1"
                                                class="input is-small"
                                                v-model="editedCollectionData.amount"
                                                :options="'commaDecimalCharDotSeparator'"
                                            ></vue-autonumeric>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Kasa</td>
                                        <td>
                                            <span v-if="edit==0">{{collection.vault.name}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedCollectionData.vault.name"></b-input>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                                <b-button v-if="edit==1" class="is-small" @click="updateCollection" type="is-primary" :loading="loadingUpdateButton" expanded>Kaydet</b-button>
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
            <form @submit.prevent="deleteCollection()">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">İşlemi onaylayın</p>
                        <button
                            type="button"
                            class="delete"
                            @click="deleteModal=false"/>
                    </header>
                    <section class="modal-card-body">
                       Tahsilat siliniyor. Devam etmek istediğinize emin misiniz?
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
                collectionID: null,
                collection: {},
                editedCollectionData: {},
                loadingUpdateButton: false,
                loadingDeleteButton: false,
                loadingTable: true,
                edit: 0,
                deleteModal: false,
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.collectionID = this.$route.params.collections_id;
        this.getCollection();
    },
    methods: {
        getCollection() {
        axios.get('/api/sites/'+this.siteID+'/collections/'+this.collectionID)
            .then(response => {
                this.collection = response.data.data;
                this.collection.occupant.property.doorWithBlock = (this.collection.occupant.property.block.name) ? this.collection.occupant.property.block.name + '-'+ this.collection.occupant.property.door_no : this.collection.occupant.property.door_no;
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTable = false;
            });
        },
        updateCollection(){
            this.loadingUpdateButton = true;
            axios.put('/api/sites/'+this.siteID+'/collections/'+this.collectionID, {
                name: this.editedCollectionData.name,
                keeper: this.editedCollectionData.keeper,
                bought_date: (this.editedCollectionData.bought_date) ? this.editedCollectionData.bought_date.toLocaleDateString('tr-TR') : null,
                unit: this.editedCollectionData.unit,
                unit_price: this.editedCollectionData.unit_price
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.getCollection();
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
                Object.assign(this.editedCollectionData,this.collection);
                this.editedCollectionData.bought_date = new Date(this.editedCollectionData.bought_date);
            }
            this.edit = !this.edit;
        },
        deleteCollection(){
            this.loadingDeleteButton = true;
            axios.delete('/api/sites/'+this.siteID+'/collections/'+this.collectionID)
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.$router.push({ name: 'collections', params: { sites_id: this.siteID} });
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

