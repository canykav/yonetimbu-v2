<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      {{vault.name}}
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
            <b-dropdown-item aria-role="listitem" @click="deleteModal=true">Kasayı Sil</b-dropdown-item>
        </b-dropdown>
    </div>
  </div>
  </div>
</section>
<div class="container block mt-6">
        <div class="columns">
            <div class="column is-9">
                <div class="card block">
                    <header class="card-header">
                        <p class="card-header-title">
                        Kasa/Banka Bilgisi
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
                                        <td width="30%">Kasa/Banka Adı</td>
                                        <td><span v-if="edit==0">{{vault.name}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedVaultData.name"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Tipi</td>
                                        <td>
                                            <span v-if="edit==0">{{vault.type}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedVaultData.type" readonly></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Açılış Tarihi</td>
                                        <td><span v-if="edit==0">{{vault.opening_date | turkishDate}}</span>
                                            <b-datepicker
                                            v-if="edit==1"
                                            icon="calendar-today"
                                            v-model="editedVaultData.opening_date"
                                            trap-focus
                                            custom-class="is-small">
                                            </b-datepicker>
                                        </td>
                                    </tr>
                                    <tr v-if="vault.type=='Banka Hesabı'">
                                        <td width="30%">IBAN</td>
                                        <td>
                                            <span v-if="edit==0">{{vault.iban}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedVaultData.iban"></b-input>
                                        </td>
                                    </tr>
                                    <tr v-if="vault.type=='Banka Hesabı'">
                                        <td width="30%">Banka</td>
                                        <td>
                                            <span v-if="edit==0">{{vault.bank}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedVaultData.bank"></b-input>
                                        </td>
                                    </tr>
                                    <tr v-if="vault.type=='Banka Hesabı'">
                                        <td width="30%">Şube</td>
                                        <td>
                                            <span v-if="edit==0">{{vault.branch}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedVaultData.branch"></b-input>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                                <b-button v-if="edit==1" class="is-small" @click="updateVault" type="is-primary" :loading="loadingUpdateButton" expanded>Kaydet</b-button>
                        </div>
                    </div>
                </div>

                <div class="card block">
                    <header class="card-header">
                        <p class="card-header-title">
                        Ekstre
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                        <b-table
                        :striped=true
                        :data="transactions"
                        :loading="loadingTable"
                        >

                            <b-table-column label="Tarih" v-slot="props">
                                {{  props.row.date | turkishDate }}
                            </b-table-column>

                            <b-table-column  label="Türü" v-slot="props">
                                {{  props.row.extract_type }}
                            </b-table-column>

                            <b-table-column label="Açıklama" v-slot="props">
                                {{  props.row.description }}
                            </b-table-column>

                            <b-table-column label="Tutar" v-slot="props">
                                {{  props.row.amount | turkishMoney }}
                            </b-table-column>

                            <b-table-column label="Bakiye" v-slot="props">
                                {{  props.row.balance | turkishMoney }}
                            </b-table-column>
                            <template #empty>
                                <div class="has-text-centered">Kayıt yok</div>
                            </template>
                        </b-table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-3">
<div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        Notlar
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">

                        </div>
                    </div>
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
            <form @submit.prevent="deleteVault()">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">İşlemi onaylayın</p>
                        <button
                            type="button"
                            class="delete"
                            @click="deleteModal=false"/>
                    </header>
                    <section class="modal-card-body">
                       Kasa siliniyor. Devam etmek istediğinize emin misiniz?
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
            deleteModal: false,
            siteID: null,
            vaultID: null,
            vault: {},
            editedVaultData: {},
            loadingUpdateButton: false,
            isTableEmpty: false,
            edit: 0,
            transactions: [],
            loadingDeleteButton: false,
            loadingTable: false,
            balance : null,
    }
},
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.vaultID = this.$route.params.vaults_id;
        this.getVault();
    },
    methods: {
        getVault() {
        axios.get('/api/sites/'+this.siteID+'/vaults/'+this.vaultID)
            .then(response => {
                this.vault = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTable = false;
                this.getVaultTransactions();
            });
        },
        getVaultTransactions() {
        axios.get('/api/sites/'+this.siteID+'/transactions', {
            params: {
                vaults_id: this.vaultID,
            }
        })
            .then(response => {
                this.transactions = response.data.data.transactions;
                this.balance = response.data.data.balance;
            })
            .catch(error => {
                console.log(error.response.data);
            });
        },
        updateVault(){
            this.loadingUpdateButton = true;
            var updateVaultData = {
                name: this.editedVaultData.name,
                opening_date: (this.editedVaultData.opening_date) ? this.editedVaultData.opening_date.toLocaleDateString('tr-TR') : null
            }
            if(this.vault.type=='Banka Hesabı') {
                updateVaultData['iban'] = this.editedVaultData.iban;
                updateVaultData['bank'] = this.editedVaultData.bank;
                updateVaultData['branch'] = this.editedVaultData.branch;
            }

            axios.put('/api/sites/'+this.siteID+'/vaults/'+this.vaultID, updateVaultData)
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.getVault();
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
        deleteVault() {
            this.loadingDeleteButton = true;
            axios.delete('/api/sites/'+this.siteID+'/vaults/'+this.vaultID)
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.$router.push({ name: 'vaults', params: { sites_id: this.siteID} });
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
        toggleEdit() {
            if(this.edit==0) {
                Object.assign(this.editedVaultData, this.vault);
                this.editedVaultData.opening_date = new Date(this.editedVaultData.opening_date);
            }
            this.edit = !this.edit;
        }
    }
}
</script>

