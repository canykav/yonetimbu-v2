<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      {{debit.description}}
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
            <b-dropdown-item @click="$router.push({ name: 'newDebitCollection', params: { debits_id: debitID , persons_id: debit.occupant.accounts_id, occupants_id: debit.occupants_id }})">Tahsilat Ekle</b-dropdown-item>
            <b-dropdown-item @click="deleteModal=true">Borçlandırmayı Sil</b-dropdown-item>
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
                        Borçlandırma Bilgisi
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
                                        <td><span v-if="edit==0">{{debit.description}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedDebitData.description"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Türü</td>
                                        <td><span v-if="edit==0">{{debit.debit_type}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedDebitData.debit_type"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Kişi</td>
                                        <td><span v-if="edit==0">{{debit.occupant.account.name}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedDebitData.occupant.account.name"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Bölüm</td>
                                        <td><span v-if="edit==0">{{debit.occupant.property.doorWithBlock}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedDebitData.occupant.property.doorWithBlock"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Tutar</td>
                                        <td>
                                            <span v-if="edit==0">{{debit.amount | turkishMoney}}</span>
                                            <vue-autonumeric
                                                v-if="edit==1"
                                                class="input is-small"
                                                v-model="editedDebitData.amount"
                                                :options="'commaDecimalCharDotSeparator'"
                                            ></vue-autonumeric>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Kalan Tutar</td>
                                        <td>
                                            <span v-if="edit==0">{{debit.amount - debit.debit_collections_sum_amount | turkishMoney}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedDebitData.email" readonly></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Tarih</td>
                                        <td>
                                            <span v-if="edit==0">{{debit.date | turkishDate}}</span>
                                            <b-datepicker
                                            v-if="edit==1"
                                            icon="calendar-today"
                                            v-model="editedDebitData.date"
                                            trap-focus
                                            custom-class="is-small">
                                            </b-datepicker>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Durumu</td>
                                        <td>
                                            <span v-if="edit==0">{{debit.status}}</span>
            <b-select size="is-small" v-if="edit==1" expanded v-model="editedDebitData.status">
                <option value="pending">Ödenmedi</option>
                <option value="partial">Kısmi Ödeme</option>
                <option value="paid">Ödendi</option>
            </b-select>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td width="30%">Son Ödeme Tarihi</td>
                                        <td>
                                            <span v-if="edit==0">{{debit.due_date | turkishDate}}</span>
                                            <b-datepicker
                                            v-if="edit==1"
                                            icon="calendar-today"
                                            v-model="editedDebitData.due_date"
                                            trap-focus
                                            custom-class="is-small">
                                            </b-datepicker>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                                <b-button v-if="edit==1" class="is-small" @click="updateDebit" type="is-primary" :loading="loadingUpdateButton" expanded>Kaydet</b-button>
                        </div>
                    </div>
                </div>

                <div class="card block" v-if="debit.status!='Ödenmedi'">
                    <header class="card-header">
                        <p class="card-header-title">
                        Geçmiş Ödemeler
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">


                        <b-table
                        :striped=true
                        :data="debit.debit_collections"
                        :loading="loadingTable"
                        >

                            <b-table-column label="Tarih" v-slot="props">
                                {{  props.row.collection.date | turkishDate }}
                            </b-table-column>

                            <b-table-column label="Açıklama" v-slot="props">
                                {{  props.row.collection.description }}
                            </b-table-column>

                            <b-table-column label="Kasa" v-slot="props">
                                {{  props.row.collection.vault.name }}
                            </b-table-column>

                            <b-table-column label="Tutar" v-slot="props">
                                {{  props.row.amount | turkishMoney }}
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
            <form @submit.prevent="deleteDebit()">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">İşlemi onaylayın</p>
                        <button
                            type="button"
                            class="delete"
                            @click="deleteModal=false"/>
                    </header>
                    <section class="modal-card-body">
                       Borçlandırma siliniyor. Devam etmek istediğinize emin misiniz?
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
            debitID: null,
            debit: {},
            editedDebitData: {},
            loadingUpdateButton: false,
            isTableEmpty: false,
            edit: 0,
            transactions: [],
            receivables: [],
            deleteModal: false,
            loadingDeleteButton: false,
    }
},
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.debitID = this.$route.params.debits_id;
        this.getDebit();
    },
    methods: {
        getDebit() {
        axios.get('/api/sites/'+this.siteID+'/debits/'+this.debitID)
            .then(response => {
                this.debit = response.data.data;
                this.debit.occupant.property.doorWithBlock = (this.debit.occupant.property.block.name) ? this.debit.occupant.property.block.name + '-'+ this.debit.occupant.property.door_no : this.debit.occupant.property.door_no;
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTable = false;
                this.getDebitTransactions();
                this.getDebitReceivables();
            });
        },
        updateDebit(){
            this.loadingUpdateButton = true;
            axios.put('/api/sites/'+this.siteID+'/debits/'+this.debitID, {
                description: this.editedDebitData.description,
                debit_type: this.editedDebitData.debit_type,
                occupants_id: this.editedDebitData.occupants_id,
                amount: this.editedDebitData.amount,
                date: (this.editedDebitData.date) ? this.editedDebitData.date.toLocaleDateString('tr-TR') : null,
                status: this.editedDebitData.status,
                due_date: (this.editedDebitData.due_date) ? this.editedDebitData.due_date.toLocaleDateString('tr-TR') : null
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.getDebit();
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
            deleteDebit(){
            this.loadingDeleteButton = true;
            axios.delete('/api/sites/'+this.siteID+'/debits/'+this.debitID)
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.$router.push({ name: 'debits', params: { sites_id: this.siteID} });
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
                Object.assign(this.editedDebitData, this.debit);
                this.editedDebitData.date = new Date(this.editedDebitData.date);
                this.editedDebitData.due_date = new Date(this.editedDebitData.due_date);
            }
            this.edit = !this.edit;
        }
    }
}
</script>

