<template>
<div>
  <section class="hero is-white">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      Hoşgeldin, Can Yiğit Kav.
    </p>
    <p class="has-text-grey is-size-7">5 adet bekleyen ödeme ve 2 yeni bildirim var.</p>
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
                        <div class="has-text-weight-medium">{{siteDetails.stats.total_debited_monthly | turkishMoney}}</div>
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
                        <div class="has-text-weight-medium">{{siteDetails.stats.total_collected_monthly | turkishMoney}}</div>
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
                        <div class="has-text-weight-medium">{{siteDetails.stats.total_cost | turkishMoney}}</div>
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
                        <div class="has-text-weight-medium">{{siteDetails.stats.total_receivables | turkishMoney}}</div>
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
            <div class="has-text-weight-medium mb-1">Adı</div>
            <div class="has-text-grey">{{siteDetails.info.name}}</div>
        </li>
        <li>
            <div class="has-text-weight-medium mb-1">Adresi</div>
            <div class="has-text-grey">{{siteDetails.info.address}}</div>
        </li>
        <li>
            <div class="has-text-weight-medium mb-1">Toplam Blok - Toplam Bölüm</div>
            <div class="has-text-grey">{{siteDetails.info.blocks_count}} Blok - {{siteDetails.info.properties_count}} Bölüm</div>
        </li>
        <li>
            <div class="has-text-weight-medium mb-1">Yönetim Dönemi</div>
            <div class="has-text-grey">{{siteDetails.info.term_start | turkishDate }} - {{siteDetails.info.term_end | turkishDate}}</div>
        </li>
        <li>
            <div class="has-text-weight-medium mb-1">Vergi Dairesi ve Numarası</div>
            <div class="has-text-grey">{{siteDetails.info.tax_administration}} - {{siteDetails.info.tax_no}}</div>
        </li>
    </ul>
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

    <ul class="list" style="font-size:14px">
        <li class="is-flex is-justify-content-space-between">
            <div>
            <div class="has-text-weight-medium mb-1">Aydınlatma Değişimi</div>
            <span class="has-text-grey">
                <b-icon
                icon="calendar-month"
                size="is-small">
                </b-icon>
                13.01.2021
            </span>
            <span class="has-text-grey">
                <b-icon
                icon="account-tie"
                size="is-small">
                </b-icon>
                Gediz Elektrik
            </span>
            <span class="has-text-grey">
                <b-icon
                icon="cash-multiple"
                size="is-small">
                </b-icon>
                3500,00 TL
            </span>
            </div>
            <div class="is-flex is-align-items-center">
                <a href="">
                <b-icon
                    icon="chevron-right"
                >
                </b-icon>
                </a>
            </div>
        </li>
           <li class="is-flex is-justify-content-space-between">
            <div>
            <div class="has-text-weight-medium mb-1">2021 Ocak Elektrik Faturası</div>
            <span class="has-text-grey">
                <b-icon
                icon="calendar-month"
                size="is-small">
                </b-icon>
                13.01.2021
            </span>
            <span class="has-text-grey">
                <b-icon
                icon="account-tie"
                size="is-small">
                </b-icon>
                Gediz Elektrik
            </span>
            <span class="has-text-grey">
                <b-icon
                icon="cash-multiple"
                size="is-small">
                </b-icon>
                3500,00 TL
            </span>
            </div>
            <div class="is-flex is-align-items-center">
                <b-icon
                    icon="chevron-right"
                >
                </b-icon>
            </div>
        </li>
              <li class="is-flex is-justify-content-space-between">
            <div>
            <div class="has-text-weight-medium mb-1">Aydınlatma Değişimi</div>
            <span class="has-text-grey">
                <b-icon
                icon="calendar-month"
                size="is-small">
                </b-icon>
                13.01.2021
            </span>
            <span class="has-text-grey">
                <b-icon
                icon="account-tie"
                size="is-small">
                </b-icon>
                Gediz Elektrik
            </span>
            <span class="has-text-grey">
                <b-icon
                icon="cash-multiple"
                size="is-small">
                </b-icon>
                3500,00 TL
            </span>
            </div>
            <div class="is-flex is-align-items-center">
                <b-icon
                    icon="chevron-right"
                >
                </b-icon>
            </div>
        </li>
             <li class="is-flex is-justify-content-space-between">
            <div>
            <div class="has-text-weight-medium mb-1">Aydınlatma Değişimi</div>
            <span class="has-text-grey">
                <b-icon
                icon="calendar-month"
                size="is-small">
                </b-icon>
                13.01.2021
            </span>
            <span style="color:rgb(100,116,139)">
                <b-icon
                icon="account-tie"
                size="is-small">
                </b-icon>
                Gediz Elektrik
            </span>
            <span class="has-text-grey">
                <b-icon
                icon="cash-multiple"
                size="is-small">
                </b-icon>
                3500,00 TL
            </span>
            </div>
            <div class="is-flex is-align-items-center">
                <b-icon
                    icon="chevron-right"
                >
                </b-icon>
            </div>
        </li>
    </ul>
    <a href="" class="is-flex is-justify-content-flex-end is-size-7 has-text-info">Devamını Göster</a>

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
            siteDetails: {
                info: {},
                stats: {},
            },
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
                this.siteDetails = response.data;
            })
            .catch(error => {
                console.log(error.response.data);
            });
        },
    }

}
</script>

<style>

</style>
