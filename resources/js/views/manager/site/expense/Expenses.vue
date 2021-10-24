<template>
    <div>
        <section class="hero">
        <div class="hero-body">
            <div class="container is-flex is-justify-content-space-between is-align-items-center">
                <div name="hero-left-side">
                    <p class="is-size-4 mb-0">
                    Giderler
                    </p>
                </div>
                <div class="buttons">
                    <b-button
                        class="is-primary"
                        icon-left="plus"
                        tag="router-link"
                        to="expenses/new"
                    >
                        Gider Ekle
                    </b-button>
                    <b-button
                        class="is-primary"
                        icon-left="plus"
                        tag="router-link"
                        to="payments/new"
                    >
                        Ödeme Ekle
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
                            :striped=true
                            :data="expenses"
                            :loading="loadingTable"
                            @click="goToExpense($event)"
                            class="is-clickable"
                            :hoverable=true
                            >
                                <b-table-column field="description" label="Açıklama" v-slot="props">
                                    {{  props.row.description }}
                                </b-table-column>

                                <b-table-column field="expense_type"  label="Türü" v-slot="props">
                                    {{  props.row.expense_type }}
                                </b-table-column>

                                <b-table-column field="account.name" label="Hesap" v-slot="props">
                                    <span v-if="props.row.account">{{  props.row.account.name }}</span>
                                </b-table-column>

                                <b-table-column field="date" label="Tarih" v-slot="props">
                                    {{  props.row.date | turkishDate }}
                                </b-table-column>

                                <b-table-column field="status" label="Durumu" v-slot="props">
                                    {{  props.row.status }}
                                </b-table-column>

                                <b-table-column field="amount" label="Toplam" v-slot="props">
                                    {{  props.row.amount | turkishMoney }}
                                </b-table-column>

                                <b-table-column field="remaining_amount" label="Kalan" v-slot="props">
                                    {{  props.row.remaining_amount | turkishMoney }}
                                </b-table-column>
                                <template #empty>
                                    <div v-if="!loadingTable" class="has-text-centered">Kayıt yok</div>
                                </template>
                            </b-table>
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
        expenses: [],
        loadingTable: true,
    }
},
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSiteExpenses();
    },
    methods: {
        getSiteExpenses() {
        axios.get('/api/sites/'+this.siteID+'/expenses')
            .then(response => {
                this.expenses = response.data.data;
                this.expenses.forEach(expense => {
                    expense.remaining_amount = expense.amount - expense.payments_sum_amount;
                });
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTable = false;
            });
        },
        goToExpense(expense) {
            this.$router.push({ name: 'expense',  params: { sites_id: this.siteID, expenses_id: expense.id } })
        }
    }
}
</script>

<style>

</style>
