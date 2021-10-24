<template>
<div>
    <section class="hero">
        <div class="hero-body">
            <div class="container is-flex is-justify-content-space-between is-align-items-center">
                <div name="hero-left-side">
                    <p class="is-size-4 mb-0">
                    {{type.name}}
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
                        <b-dropdown-item aria-role="listitem" @click="deleteModal=true">Tipi Sil</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
        </div>
    </section>
    <div class="container block mt-6">
                <div class="card block">
                    <header class="card-header">
                        <p class="card-header-title">
                        Bölüm Tipi Bilgisi
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
                                        <td><span v-if="edit==0">{{type.name}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedTypeData.name"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Arsa Payı</td>
                                        <td>
                                            <span v-if="edit==0">{{type.land_share}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedTypeData.land_share"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Brüt m²</td>
                                        <td><span v-if="edit==0">{{type.gross}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedTypeData.gross"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Net m²</td>
                                        <td><span v-if="edit==0">{{type.net}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedTypeData.net"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Aidat</td>
                                        <td>
                                            <span v-if="edit==0">{{type.fee_amount | turkishMoney}}</span>
                                            <vue-autonumeric
                                                v-if="edit==1"
                                                class="input is-small"
                                                v-model="editedTypeData.fee_amount"
                                                :options="'commaDecimalCharDotSeparator'"
                                            ></vue-autonumeric>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                                <b-button v-if="edit==1" class="is-small" @click="updateType" type="is-primary" :loading="loadingUpdateButton" expanded>Kaydet</b-button>
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
            <form @submit.prevent="deleteType()">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">İşlemi onaylayın</p>
                        <button
                            type="button"
                            class="delete"
                            @click="deleteModal=false"/>
                    </header>
                    <section class="modal-card-body">
                       Bölüm Tipi siliniyor. Devam etmek istediğinize emin misiniz?
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
                typeID: null,
                type: {},
                editedTypeData: {},
                loadingUpdateButton: false,
                loadingDeleteButton: false,
                loadingTable: true,
                edit: 0,
                deleteModal: false,
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.typeID = this.$route.params.types_id;
        this.getType();
    },
    methods: {
        getType() {
        axios.get('/api/sites/'+this.siteID+'/types/'+this.typeID)
            .then(response => {
                this.type = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTable = false;
            });
        },
        updateType(){
            this.loadingUpdateButton = true;
            axios.put('/api/sites/'+this.siteID+'/types/'+this.typeID, {
                name: this.editedTypeData.name,
                land_share: this.editedTypeData.land_share,
                gross: this.editedTypeData.gross,
                net: this.editedTypeData.net,
                fee_amount: this.editedTypeData.fee_amount
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.getType();
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
                Object.assign(this.editedTypeData,this.type);
            }
            this.edit = !this.edit;
        },
        deleteType(){
            this.loadingDeleteButton = true;
            axios.delete('/api/sites/'+this.siteID+'/types/'+this.typeID)
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.$router.push({ name: 'types', params: { sites_id: this.siteID} });
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

