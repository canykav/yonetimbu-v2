<template>
<div>
    <section class="hero">
        <div class="hero-body">
            <div class="container is-flex is-justify-content-space-between is-align-items-center">
                <div name="hero-left-side">
                    <p class="is-size-4 mb-0">
                    {{expense.name}}
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
                        <b-dropdown-item aria-role="listitem" @click="deleteModal=true">Gideri Sil</b-dropdown-item>
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
                        Gider Bilgisi
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
                                        <td><span v-if="edit==0">{{expense.description}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedExpenseData.description"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Türü</td>
                                        <td><span v-if="edit==0">{{expense.expense_type}}</span>
                                            <b-select size="is-small" v-if="edit==1" v-model="editedExpenseData.expense_type" expanded>
                                                <option v-for="type in expenseTypes" :value="type">{{type}}</option>
                                            </b-select>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td width="30%">Tarih</td>
                                        <td><span v-if="edit==0">{{expense.date | turkishDate}}</span>
                                            <b-datepicker
                                            v-if="edit==1"
                                            icon="calendar-today"
                                            v-model="editedExpenseData.date"
                                            trap-focus
                                            custom-class="is-small">
                                            </b-datepicker>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Hesap</td>
                                        <td>
                                            <span v-if="edit==0"><router-link v-if="expense.account" :to="{ name: 'account', params: { sites_id: siteID, persons_id: expense.account.id }}" >{{expense.account.name}}</router-link></span>
                                            <b-select v-if="edit==1" v-model="editedExpenseData.accounts_id" size="is-small" expanded>
                                                <option
                                                    v-for="account in accounts"
                                                    :value="account.id"
                                                    :key="account.id"
                                                >
                                                    {{ account.name }}
                                                </option>
                                            </b-select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Tutar</td>
                                        <td>
                                            <span v-if="edit==0">{{expense.amount | turkishMoney}}</span>
                                            <vue-autonumeric
                                                v-if="edit==1"
                                                class="input is-small"
                                                v-model="editedExpenseData.amount"
                                                :options="'commaDecimalCharDotSeparator'"
                                            ></vue-autonumeric>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                                <b-button v-if="edit==1" class="is-small" @click="updateExpense" type="is-primary" :loading="loadingUpdateButton" expanded>Kaydet</b-button>
                        </div>
                    </div>
                </div>

<div class="card block">
                    <header class="card-header">
                        <p class="card-header-title">
                        Geçmiş Ödemeler
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <b-table
                            :striped=true
                            :data="expense.payments"
                            :loading="loadingTable"
                            >

                                <b-table-column label="Tarih" v-slot="props">
                                    {{  props.row.date | turkishDate }}
                                </b-table-column>

                                <b-table-column label="Açıklama" v-slot="props">
                                    {{  props.row.description }}
                                </b-table-column>

                                <b-table-column label="Kasa" v-slot="props">
                                    {{  props.row.vault.name }}
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
            <form @submit.prevent="deleteExpense()">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">İşlemi onaylayın</p>
                        <button
                            type="button"
                            class="delete"
                            @click="deleteModal=false"/>
                    </header>
                    <section class="modal-card-body">
                       Gider siliniyor. Devam etmek istediğinize emin misiniz?
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
                expenseID: null,
                expense: {},
                editedExpenseData: {},
                loadingUpdateButton: false,
                loadingDeleteButton: false,
                loadingTable: true,
                edit: 0,
                deleteModal: false,
                accounts: [],
                expenseTypes: [
                    'Asansör Bakımı',
                    'Bakım Onarım',
                    'Demirbaş',
                    'Elektrik',
                    'Genel',
                    'Personel',
                    'SGK',
                    'Temizlik',
                    'Vergi',
                    'Yakıt',
                    'Yönetim'
                ],
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.expenseID = this.$route.params.expenses_id;
        this.getExpense();
        this.getAccountsExceptPersons();
    },
    methods: {
        getExpense() {
        axios.get('/api/sites/'+this.siteID+'/expenses/'+this.expenseID)
            .then(response => {
                this.expense = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTable = false;
            });
        },
        getAccountsExceptPersons() {
        axios.get('/api/sites/'+this.siteID+'/accounts', {
            params: {
                except: 'person'
            }
        })
            .then(response => {
                this.accounts = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTable = false;
            });
        },
        updateExpense(){
            this.loadingUpdateButton = true;
            axios.put('/api/sites/'+this.siteID+'/expenses/'+this.expenseID, {
                description: this.editedExpenseData.description,
                expense_type: this.editedExpenseData.expense_type,
                date: (this.editedExpenseData.date) ? this.editedExpenseData.date.toLocaleDateString('tr-TR') : null,
                accounts_id: this.editedExpenseData.accounts_id,
                amount: this.editedExpenseData.amount
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.getExpense();
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
                Object.assign(this.editedExpenseData,this.expense);
                this.editedExpenseData.date = new Date(this.editedExpenseData.date);
            }
            this.edit = !this.edit;
        },
        deleteExpense(){
            this.loadingDeleteButton = true;
            axios.delete('/api/sites/'+this.siteID+'/expenses/'+this.expenseID)
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.$router.push({ name: 'expenses', params: { sites_id: this.siteID} });
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

