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
            <b-dropdown-item aria-role="listitem" @click="$router.push({ name: 'newCollection', params: { persons_id: personID}})">Kasayı Sil</b-dropdown-item>
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
                        <button class="card-header-icon" aria-label="more options">
                        <a class="has-text-link is-size-7" v-if="edit==0" @click="toggleEdit()">Düzenle</a>
                        <a class="has-text-link is-size-7" v-if="edit==1" @click="toggleEdit()">Vazgeç</a>

                        </button>
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


</div>
</template>

<script>
export default {
data() {
    return {
            siteID: null,
            vaultID: null,
            vault: {},
            editedVaultData: {},
            loadingUpdateButton: false,
            isTableEmpty: false,
            edit: 0,
            transactions: [],
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
                this.transactions = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            });
        },
        updateVault(){
            this.loadingUpdateButton = true;
            axios.put('/api/sites/'+this.siteID+'/vaults/'+this.vaultID, {
                name: this.editedVaultData.name,
                opening_date: (this.editedVaultData.opening_date) ? this.editedVaultData.opening_date.toLocaleDateString('tr-TR') : null
            })
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

