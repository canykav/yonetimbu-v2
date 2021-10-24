<template>
<div>
  <section class="hero is-white">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      {{ site.info.name }}
    </p>
    <p class="has-text-grey is-size-7" v-if="site.unpaidExpenses.length>0">{{ site.unpaidExpenses.length }} bekleyen ödeme var.</p>
        </div>
    <div class="buttons">
        <b-button
            class="is-primary"
            icon-left="cog"
            tag="router-link"
            :to="{ name: 'settings' }"
        >
            Site Ayarları
        </b-button>
    </div>
  </div>
  </div>

</section>

<div class="container block mt-6">
 <section>

    <div class="columns">
        <div class="column">
               <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
            <template #trigger="props">
                <div
                    class="card-header"
                    role="button"
                    aria-controls="contentIdForA11y3">
                    <p class="card-header-title">
                        Borçlandırılan(Bu Ay)
                    </p>
                    <a class="card-header-icon">
                        <b-icon
                            :icon="props.open ? 'menu-down' : 'menu-up'">
                        </b-icon>
                    </a>
                </div>
            </template>

            <div class="card-content">
                <div class="content has-text-centered">
                    <div class="is-size-4 mb-0">
                        <div class="has-text-weight-medium">{{site.stats.total_debited_monthly | turkishMoney}}</div>
                        <div class="is-size-7">Türk Lirası</div>
                    </div>                </div>
            </div>
        </b-collapse>
        </div>
        <div class="column">
               <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
            <template #trigger="props">
                <div
                    class="card-header"
                    role="button"
                    aria-controls="contentIdForA11y3">
                    <p class="card-header-title">
                        Tahsil Edilen(Bu Ay)
                    </p>
                    <a class="card-header-icon">
                        <b-icon
                            :icon="props.open ? 'menu-down' : 'menu-up'">
                        </b-icon>
                    </a>
                </div>
            </template>

            <div class="card-content">
                <div class="content has-text-centered">
                    <div class="is-size-4 mb-0">
                        <div class="has-text-weight-medium">{{site.stats.total_collected_monthly | turkishMoney}}</div>
                        <div class="is-size-7">Türk Lirası</div>
                    </div>
                </div>
            </div>
        </b-collapse>
        </div>
        <div class="column">
  <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
            <template #trigger="props">
                <div
                    class="card-header"
                    role="button"
                    aria-controls="contentIdForA11y3">
                    <p class="card-header-title">
                        Borçlarım
                    </p>
                    <a class="card-header-icon">
                        <b-icon
                            :icon="props.open ? 'menu-down' : 'menu-up'">
                        </b-icon>
                    </a>
                </div>
            </template>

            <div class="card-content">
                <div class="content has-text-centered">
                    <div class="is-size-4 mb-0">
                        <div class="has-text-weight-medium">{{site.stats.total_cost | turkishMoney}}</div>
                        <div class="is-size-7">Türk Lirası</div>
                    </div>
                </div>
            </div>
        </b-collapse>
        </div>
            <div class="column">
        <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
            <template #trigger="props">
                <div
                    class="card-header"
                    role="button"
                    aria-controls="contentIdForA11y3">
                    <p class="card-header-title">
                        Alacaklarım
                    </p>
                    <a class="card-header-icon">
                        <b-icon
                            :icon="props.open ? 'menu-down' : 'menu-up'">
                        </b-icon>
                    </a>
                </div>
            </template>

            <div class="card-content">
                <div class="content has-text-centered">
                    <div class="is-size-4 mb-0">
                        <div class="has-text-weight-medium">{{site.stats.total_receivables | turkishMoney}}</div>
                        <div class="is-size-7">Türk Lirası</div>
                    </div>
                </div>
            </div>
        </b-collapse>
        </div>
    </div>
<div class="columns">
    <div class="column">
 <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
            <template #trigger="props">
                <div
                    class="card-header"
                    role="button"
                    aria-controls="contentIdForA11y3">
                    <p class="card-header-title">
                        Site Bilgisi
                    </p>
                    <a class="card-header-icon">
                        <b-icon
                            :icon="props.open ? 'menu-down' : 'menu-up'">
                        </b-icon>
                    </a>
                </div>
            </template>

            <div class="card-content">
                <div class="content">

    <ul class="list" style="font-size:14px">
        <li>
            <div class="has-text-grey mb-1">Adı</div>
            <div>{{site.info.name}}</div>
        </li>
        <li v-if="site.info.address">
            <div class="has-text-grey mb-1">Adresi</div>
            <div>{{site.info.address}}</div>
        </li>
        <li>
            <div class="has-text-grey mb-1">Toplam Blok - Toplam Bölüm</div>
            <div>{{site.info.blocks_count}} Blok - {{site.info.properties_count}} Bölüm</div>
        </li>
        <li>
            <div class="has-text-grey mb-1">Yönetim Dönemi</div>
            <div>{{site.info.term_start | turkishDate }} - {{site.info.term_end | turkishDate}}</div>
        </li>
        <li v-if="site.info.tax_administration || site.info.tax_no">
            <div class="has-text-grey mb-1">Vergi Dairesi ve Numarası</div>
            <div>{{site.info.tax_administration}} - {{site.info.tax_no}}</div>
        </li>
    </ul>
                </div>
            </div>
        </b-collapse>
    </div>
 <div class="column is-9">
 <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
            <template #trigger="props">
                <div
                    class="card-header"
                    role="button"
                    aria-controls="contentIdForA11y3">
                    <p class="card-header-title">
                        Bekleyen Ödemeler
                    </p>
                    <a class="card-header-icon">
                        <b-icon
                            :icon="props.open ? 'menu-down' : 'menu-up'">
                        </b-icon>
                    </a>
                </div>
            </template>

            <div class="card-content">
                <div class="content">

    <ul class="list unpaid-expenses-list">
        <li v-for="expense in site.unpaidExpenses.slice(0, parseInt(expenseLimit))" @click="goToExpense(expense)">
            <div>
                    <b-icon class="has-text-grey" icon="bell"></b-icon>
            </div>
            <div>
            <span class="has-text-grey">
                {{ expense.due_date | turkishDate }}
            </span>
            <div>{{ expense.description }} ({{ expense.amount-expense.payments_sum_amount | turkishMoney }})</div>
            </div>
        </li>
    </ul>
    <a
    v-if="site.unpaidExpenses.length>1 && expenseLimit!=site.unpaidExpenses.length && expenseLimit<site.unpaidExpenses.length" @click="expenseLimit=site.unpaidExpenses.length"
    class="is-flex is-justify-content-flex-end is-size-7 has-text-info"
    >
        Devamını Göster
    </a>

                </div>
            </div>
        </b-collapse>
    </div>
    </div>

    </section>
</div>



    </div>
</template>

<script>
export default {
    data() {
        return {
            siteID: null,
            site: {
                info: {},
                stats: {},
                unpaidExpenses: [],
            },
            expenseLimit: 5,
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSiteDashboard();
    },
    methods: {
        getSiteDashboard() {
        axios.get('/api/sites/'+this.siteID+'/dashboard')
            .then(response => {
                this.site = response.data;
            })
            .catch(error => {
                console.log(error.response.data);
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
