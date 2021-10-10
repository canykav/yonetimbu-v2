<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
            <p class="is-size-4 mb-0">
            Borçlandırmalar
            </p>
        </div>
    <div class="buttons">
        <b-dropdown aria-role="list" class="mr-2">
            <template #trigger="{ active }">
                <b-button
                    label="Borçlandırma Ekle"
                    type="is-primary"
                    icon-left="plus"
                    :icon-right="active ? 'menu-up' : 'menu-down'" />
            </template>
            <b-dropdown-item aria-role="listitem" @click="$router.push({ name: 'newDebit' })">Borçlandırma Ekle</b-dropdown-item>
            <b-dropdown-item aria-role="listitem" @click="$router.push({ name: 'newMultiDebit' })">Toplu Borçlandırma Ekle</b-dropdown-item>
        </b-dropdown>
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
                    :data="debits"
                    :loading="loadingTable"
                    class="is-clickable"
                    :hoverable=true
                    @click="goToDebit($event)"
                    >

                        <b-table-column label="Açıklama" v-slot="props">
                            {{ props.row.description }}
                        </b-table-column>

                        <b-table-column  label="Kişi" v-slot="props">
                            {{  props.row.account.name }}
                        </b-table-column>

                        <b-table-column label="Blok" v-slot="props">
                            {{  props.row.property.block.name }}
                        </b-table-column>

                        <b-table-column label="Kapı No" v-slot="props">
                            {{  props.row.property.door_no }}
                        </b-table-column>

                        <b-table-column label="Tarih" v-slot="props">
                            {{  props.row.date | turkishDate }}
                        </b-table-column>

                        <b-table-column label="Vade Tarihi" v-slot="props">
                            {{  props.row.due_date | turkishDate }}
                        </b-table-column>

                        <b-table-column label="Tutar" v-slot="props">
                            {{  props.row.amount | turkishMoney }}
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
        siteID: null,
        debits: [],
        loadingTable: true,
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSiteDebits();
    },
    methods: {
        getSiteDebits() {
        axios.get('/api/sites/'+this.siteID+'/debits')
            .then(response => {
                this.debits = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTable = false;
            });
        },
        goToDebit(debit) {
            this.$router.push({ name: 'debit',  params: { sites_id: this.siteID, debits_id: debit.id } })
        }
    }
}
</script>
