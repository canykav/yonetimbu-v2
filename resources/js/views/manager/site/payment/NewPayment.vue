<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container is-flex is-justify-content-space-between is-align-items-center">
                    <div name="hero-left-side">
                        <p class="is-size-4 mb-0">
                            Yeni Ödeme
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
                                <form id="newExpenseForm" @submit.prevent="createPayment()">
                                <b-field label="Gider"
                                    :label-position="labelPosition">
                                    <b-select v-model="newPayment.transactions_id" expanded>
                                        <option
                                            v-for="expense in expenses"
                                            :value="expense.id"
                                            :key="expense.id">
                                            {{ expense.description }}
                                        </option>
                                    </b-select>
                                </b-field>

                                <b-field label="Açıklama" :label-position="labelPosition">
                                    <b-input v-model="newPayment.description"></b-input>
                                </b-field>

                                <b-field label="Tarih" :label-position="labelPosition">
                                        <b-datepicker
                                            v-model="newPayment.date"
                                            icon="calendar-today"
                                            trap-focus>
                                        </b-datepicker>
                                </b-field>

                                <b-field label="Tutar" :label-position="labelPosition">
                                    <div class="control is-clearfix">
                                        <vue-autonumeric
                                            class="input"
                                            v-model="newPayment.amount"
                                            :options="'commaDecimalCharDotSeparator'"
                                        ></vue-autonumeric>
                                    </div>
                                </b-field>

                                <b-field label="Kasa"
                                    :label-position="labelPosition">
                                    <b-select v-model="newPayment.vaults_id" expanded>
                                        <option
                                            v-for="vault in vaults"
                                            :value="vault.id"
                                            :key="vault.id">
                                            {{ vault.name }}
                                        </option>
                                    </b-select>
                                </b-field>

                                <b-field>
                                    <p class="control">
                                        <b-button expanded label="Kaydet" type="is-primary" native-type="submit"/>
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
                expenses: [],
                vaults: [],
                newPayment: {},
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSiteExpenses();
        this.getSiteVaults();
    },
    methods: {
        getSiteExpenses() {
        axios.get('/api/sites/'+this.siteID+'/expenses', {
            params: {
                except: 'paid'
            }
        })
            .then(response => {
                this.expenses = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            });
        },
        getSiteVaults() {
            axios.get('/api/sites/'+this.siteID+'/vaults')
                .then(response => {
                    this.vaults = response.data.data;
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        },
        createPayment(){
            this.loadingButton = true;
            axios.post('/api/sites/'+this.siteID+'/payments', {
                transactions_id: this.newPayment.transactions_id,
                description: this.newPayment.description,
                date: this.newPayment.date.toLocaleDateString('tr-TR'),
                amount: this.newPayment.amount,
                vaults_id: this.newPayment.vaults_id,
                type: 'expense_payment'
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.$router.push({ name: 'expenses',  params: { sites_id: this.siteID } })
                this.newPayment = {};
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

<style>

</style>
