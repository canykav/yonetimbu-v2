<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      {{company.name}}
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
            <b-dropdown-item aria-role="listitem" @click="$router.push({ name: 'newCollection', params: { persons_id: personID}})">Firmayı Sil</b-dropdown-item>
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
                        Firma Bilgisi
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
                                        <td width="30%">Firma Adı</td>
                                        <td><span v-if="edit==0">{{company.name}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedCompanyData.name"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Telefon</td>
                                        <td><span v-if="edit==0">{{company.phone1}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedCompanyData.phone1"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">TC Kimlik/Vergi No	</td>
                                        <td><span v-if="edit==0">{{company.citizenship_no}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedCompanyData.citizenship_no"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Vergi Dairesi</td>
                                        <td><span v-if="edit==0">{{company.tax_administration}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedCompanyData.tax_administration"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">IBAN</td>
                                        <td>
                                            <span v-if="edit==0">{{company.iban}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedCompanyData.iban"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Email</td>
                                        <td>
                                            <span v-if="edit==0">{{company.email}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedCompanyData.email"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Adres</td>
                                        <td>
                                            <span v-if="edit==0">{{company.address}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedCompanyData.address"></b-input>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                                <b-button v-if="edit==1" class="is-small" @click="updatecompany" type="is-primary" :loading="loadingUpdateButton" expanded>Kaydet</b-button>
                        </div>
                    </div>
                </div>

                <div class="card block">
                    <header class="card-header">
                        <p class="card-header-title">
                        Bakiye Detayları
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">

        <b-tabs type="is-toggle">
            <b-tab-item label="Firmanın Kalan Alacakları" icon="credit-card-outline">
                        <b-table
                        :striped=true
                        :data="receivables"
                        :loading="loadingTable"
                        >

                            <b-table-column label="Tarih" v-slot="props">
                                {{  props.row.date | turkishDate }}
                            </b-table-column>

                            <b-table-column label="Vade Tarihi" v-slot="props">
                                {{  props.row.due_date | turkishDate }}
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

                            <b-table-column label="Kalan" v-slot="props">
                                {{  props.row.amount - props.row.payments_sum_amount | turkishMoney }}
                            </b-table-column>
                            <template #empty>
                                <div class="has-text-centered">Kayıt yok</div>
                            </template>
                        </b-table>
            </b-tab-item>
            <b-tab-item label="Hesap Ekstresi" icon="receipt">
                        <b-table
                        :striped=true
                        :data="transactions"
                        >

                            <b-table-column label="Tarih" v-slot="props">
                                {{  props.row.date | turkishDate }}
                            </b-table-column>

                            <b-table-column label="Vade Tarihi" v-slot="props">
                                {{  props.row.due_date | turkishDate }}
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
            </b-tab-item>
        </b-tabs>
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
            companyID: null,
            company: {},
            editedCompanyData: {},
            loadingUpdateButton: false,
            isTableEmpty: false,
            edit: 0,
            transactions: [],
            receivables: [],
    }
},
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.companyID = this.$route.params.companies_id;
        this.getCompany();
    },
    methods: {
        getCompany() {
        axios.get('/api/sites/'+this.siteID+'/companies/'+this.companyID)
            .then(response => {
                this.company = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTable = false;
                this.getCompanyTransactions();
                this.getCompanyReceivables();
            });
        },
        getCompanyTransactions() {
        axios.get('/api/sites/'+this.siteID+'/transactions', {
            params: {
                companies_id: this.companyID,
            }
        })
            .then(response => {
                this.transactions = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            });
        },
        getCompanyReceivables() {
        axios.get('/api/sites/'+this.siteID+'/expenses', {
            params: {
                companies_id: this.companyID,
                transaction_type: 'expense'
            }
        })
            .then(response => {
                this.receivables = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            });
        },
        updatecompany(){
            this.loadingUpdateButton = true;
            axios.put('/api/sites/'+this.siteID+'/companies/'+this.companyID, {
                name: this.editedCompanyData.name,
                phone1: this.editedCompanyData.phone1,
                citizenship_no: this.editedCompanyData.citizenship_no,
                tax_administration: this.editedCompanyData.tax_administration,
                iban: this.editedCompanyData.iban,
                email: this.editedCompanyData.email,
                address: this.editedCompanyData.address,
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.getCompany();
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
                Object.assign(this.editedCompanyData, this.company);
                this.editedCompanyData.opening_date = new Date(this.editedCompanyData.opening_date);
            }
            this.edit = !this.edit;
        }
    }
}
</script>

