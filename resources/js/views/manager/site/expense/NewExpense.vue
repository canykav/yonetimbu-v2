<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container is-flex is-justify-content-space-between is-align-items-center">
                    <div name="hero-left-side">
                        <p class="is-size-4 mb-0">
                            Yeni Gider
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <div class="container block mt-6">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        <template>
                            <section>
                                <form id="newExpenseForm" @submit.prevent="createExpense()">
                                    <b-field label="Açıklama" v-model="newExpense.description" :label-position="labelPosition">
                                        <b-input v-model="newExpense.description"></b-input>
                                    </b-field>
                                    <b-field label="Hesap"
                                        :label-position="labelPosition">
                                        <b-select v-model="newExpense.accounts_id" expanded>
                                            <option v-for="account in accounts" :value="account.id" :key="account.id">{{account.name}}</option>
                                        </b-select>
                                    </b-field>
                                        <b-field label="Tarih" :label-position="labelPosition">
                                                <b-datepicker
                                                    v-model="newExpense.date"
                                                    icon="calendar-today"
                                                    trap-focus>
                                                </b-datepicker>
                                            </b-field>

                                <b-field label="Türü"
                                        :label-position="labelPosition">
                                        <b-select v-model="newExpense.expense_type" expanded>
                                            <option v-for="type in expenseTypes" :value="type">{{type}}</option>
                                        </b-select>
                                    </b-field>
                                    <b-field label="Tutar" :label-position="labelPosition">
                                        <b-input v-model="newExpense.amount"></b-input>
                                    </b-field>
                                <b-field label="Durumu"
                                        :label-position="labelPosition">
                                        <b-select v-model="newExpense.status" expanded>
                                            <option value="paid">Ödendi</option>
                                            <option value="pending">Ödenecek</option>
                                        </b-select>
                                    </b-field>

                                    <b-field v-if="newExpense.status=='paid'"
                                        label="Kasa"
                                        :label-position="labelPosition">
                                        <b-select v-model="newExpense.vaults_id" expanded>
                                            <option v-for="vault in vaults" :value="vault.id">{{vault.name}}</option>
                                        </b-select>
                                    </b-field>

                                    <b-field label="Vade Tarihi" :label-position="labelPosition">
                                        <b-datepicker
                                            v-model="newExpense.due_date"
                                            icon="calendar-today"
                                            trap-focus>
                                        </b-datepicker>
                                    </b-field>
                                    <b-field>
                                        <p class="control">
                                            <b-button expanded label="Kaydet" native-type="submit" type="is-primary" />
                                        </p>
                                    </b-field>
                                </form>
                            </section>
                        </template>
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
                accounts: [],
                newExpense: {},
                vaults: [],
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSiteAccounts();
        this.getSiteVaults();
    },
    methods: {
        getSiteAccounts() {
        axios.get('/api/sites/'+this.siteID+'/accounts', {
            params: {
                except: "person"
            }
        }
            )
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
        getSiteVaults() {
        axios.get('/api/sites/'+this.siteID+'/vaults')
            .then(response => {
                this.vaults = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTable = false;
            });
        },
        createExpense(){
            this.loadingButton = true;
            axios.post('/api/sites/'+this.siteID+'/expenses', {
                accounts_id: this.newExpense.accounts_id,
                description: this.newExpense.description,
                expense_type: this.newExpense.expense_type,
                date: (this.newExpense.date) ? this.newExpense.date.toLocaleDateString('tr-TR') : null,
                due_date: (this.newExpense.due_date) ? this.newExpense.due_date.toLocaleDateString('tr-TR') : null,
                amount: this.newExpense.amount,
                status: this.newExpense.status,
                vaults_id: this.newExpense.vaults_id
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.newDebit = {};
                this.$router.push({ name: 'expenses',  params: { sites_id: this.siteID } })
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
