<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      {{person.name}}
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
            <b-dropdown-item aria-role="listitem" @click="$router.push({ name: 'newDebit', params: { persons_id: personID} })">Borçlandır</b-dropdown-item>
            <b-dropdown-item aria-role="listitem" @click="$router.push({ name: 'newCollection', params: { persons_id: personID}})">Tahsil Et</b-dropdown-item>
            <b-dropdown-item aria-role="listitem" @click="$router.push({ name: '' })">Kişiyi Sil</b-dropdown-item>

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
                        Kişi Bilgisi
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
                                        <td width="30%">Adı Soyadı</td>
                                        <td><span v-if="edit==0">{{person.name}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedPersonData.name"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">E-Posta</td>
                                        <td>
                                            <span v-if="edit==0">{{person.email}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedPersonData.email"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Şifre</td>
                                        <td><span v-if="edit==0">{{person.password}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedPersonData.password"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">TC Kimlik</td>
                                        <td><span v-if="edit==0">{{person.citizenship_no}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedPersonData.citizenship_no"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Telefon</td>
                                        <td><span v-if="edit==0">{{person.phone1}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedPersonData.phone1"></b-input>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                                <b-button v-if="edit==1" class="is-small" @click="updatePerson" type="is-primary" :loading="loadingUpdateButton" expanded>Kaydet</b-button>
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
    <b-tabs type="is-toggle" class="m-0">
        <b-tab-item label="Ödenmemiş Borçlandırmalar" icon="credit-card-outline">
                    <b-table
                    :striped=true
                    :loading="loadingUnpaidDebitsTable"
                    :data="unpaidDebits"
                    >
                        <b-table-column label="Açıklama" v-slot="props">
                            {{  props.row.description }}
                        </b-table-column>

                        <b-table-column  label="Türü" v-slot="props">
                            {{  props.row.debit_type }}
                        </b-table-column>

                        <b-table-column label="Bölüm" v-slot="props">
                            {{  props.row.occupant.property.doorWithBlock }}
                        </b-table-column>

                        <b-table-column label="Tarih" v-slot="props">
                            {{  props.row.date | turkishDate }}
                        </b-table-column>

                        <b-table-column label="Vade Tarihi" v-slot="props">
                            {{  props.row.due_date | turkishDate }}
                        </b-table-column>

                        <b-table-column label="Durumu" v-slot="props">
                            {{  props.row.status }}
                        </b-table-column>

                        <b-table-column label="Toplam" v-slot="props">
                            {{  props.row.amount | turkishMoney }}
                        </b-table-column>

                        <b-table-column label="Kalan" v-slot="props">
                            {{  props.row.amount - props.row.payments_sum_amount | turkishMoney }}
                        </b-table-column>
                        <template #empty>
                            <div v-if="!loadingUnpaidDebitsTable" class="has-text-centered">Kayıt yok</div>
                        </template>
                    </b-table>

        </b-tab-item>
        <b-tab-item label="Hesap Ekstresi" icon="receipt">
                    <b-table
                    :striped=true
                    :data="transactions"
                    >
                        <b-table-column label="Açıklama" v-slot="props">
                            {{  props.row.description }}
                        </b-table-column>

                        <b-table-column  label="Türü" v-slot="props">
                            {{  props.row.transaction_type }}
                        </b-table-column>

                        <b-table-column label="Bölüm" v-slot="props">
                            {{  props.row.occupant.property.doorWithBlock }}
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
                        İlgili Bölümler
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <table class="table is-fullwidth">
                                <tbody>
                                    <tr v-for="property in person.properties">
                                        <td class="is-size-7 is-flex is-justify-content-space-between">
                                            <div>
                                                <div>
                                                    <span>
                                                        {{property.type}}
                                                    </span>
                                                    : {{property.doorWithBlock}}
                                                </div>
                                                <span class="has-text-grey">
                                                    Giriş:
                                                    {{property.entry_date | turkishDate }}
                                                </span>
                                                <br/>
                                                <span v-if="property.abandonment_date" class="has-text-grey">
                                                    Çıkış:
                                                    {{property.abandonment_date | turkishDate }}
                                                </span>
                                            </div>

                                            <div class="is-flex is-align-items-center" v-if="!property.abandonment_date">
                                                <b-button @click="isComponentModalActive = true; selectedOccupant=property.occupants_id" size="is-small" icon-left="exit-to-app">Çıkart</b-button>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>

        <b-modal
            v-model="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-label="Example Modal"
            aria-modal>
            <template #default="props">
                <abandon-form @abandon="takeOutOccupant" @close="props.close"></abandon-form>
            </template>
        </b-modal>

</div>
</template>

<script>
const AbandonForm = {
        props: ['canCancel'],
        data() {
            return {
                date: '',
                labelPosition: 'inside'
            }
        },
        methods: {
            abandon(date) {
                this.$emit('abandon', date);
            }
        },
        template: `
            <form @submit.prevent="abandon(date)">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Bölümden Çıkar</p>
                        <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Çıkış Tarihi" :label-position="labelPosition">
                            <b-datepicker
                                v-model="date"
                                icon="calendar-today"
                                trap-focus
                                >
                            </b-datepicker>
                        </b-field>

                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Vazgeç"
                            @click="$emit('close')"
                        />
                        <b-button
                            label="Kaydet"
                            type="is-primary"
                            native-type="submit"
                        />
                    </footer>
                </div>
            </form>
        `
    }

export default {
    components: {
        AbandonForm
    },
    props:  ['abandonmentDate'],
    data() {
        return {
                siteID: null,
                personID: null,
                person: {},
                editedPersonData: {},
                loadingUpdateButton: false,
                loadingUnpaidDebitsTable: true,
                isTableEmpty: false,
                edit: 0,
                unpaidDebits: [],
                transactions: [],
                isComponentModalActive: false,
                selectedOccupant: null,
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.personID = this.$route.params.persons_id;
        this.getPerson();
    },
    methods: {
        getPerson() {
        axios.get('/api/sites/'+this.siteID+'/persons/'+this.personID)
            .then(response => {
                this.person = response.data.data;
                this.person.properties.forEach(property => {
                    property.doorWithBlock = (property.block.name) ? property.block.name + '-'+ property.door_no : property.door_no;
                });
                this.getPersonDebits();
                this.getPersonTransactions();
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingUnpaidDebitsTable = false;
            });
        },
        getPersonDebits() {
        axios.get('/api/sites/'+this.siteID+'/debits', {
            params: {
                persons_id: this.personID,
                except: 'paid'
            }
        })
            .then(response => {
                this.unpaidDebits = response.data.data;
                this.unpaidDebits.forEach(debit => {
                    debit.occupant.property.doorWithBlock = (debit.occupant.property.block.name) ? debit.occupant.property.block.name + '-'+ debit.occupant.property.door_no : debit.occupant.property.door_no;
                });
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                 this.loadingUnpaidDebitsTable = false;
            });
        },
        getPersonTransactions() {
        axios.get('/api/sites/'+this.siteID+'/transactions', {
            params: {
                persons_id: this.personID,
            }
        })
            .then(response => {
                this.transactions = response.data.data;
                this.transactions.forEach(debit => {
                    debit.occupant.property.doorWithBlock = (debit.occupant.property.block.name) ? debit.occupant.property.block.name + '-'+ debit.occupant.property.door_no : debit.occupant.property.door_no;
                });
            })
            .catch(error => {
                console.log(error.response.data);
            });
        },
        updatePerson(){
            this.loadingUpdateButton = true;
            axios.put('/api/sites/'+this.siteID+'/persons/'+this.personID, {
                name: this.editedPersonData.name,
                email: this.editedPersonData.email,
                password: this.editedPersonData.password,
                citizenship_no: this.editedPersonData.citizenship_no,
                phone1: this.editedPersonData.phone1,
                phone2: this.editedPersonData.phone2
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.getPerson();
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
                Object.assign(this.editedPersonData, this.person);
            }
            this.edit = !this.edit;
        },
        takeOutOccupant(date) {
            axios.put('/api/sites/'+this.siteID+'/occupants/'+this.selectedOccupant, {
                abandonment_date: (date) ? date.toLocaleDateString('tr-TR') : null,
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.getPerson();
                this.isComponentModalActive = false;
            })
            .catch(error => {
                this.$buefy.toast.open({
                    message: error.response.data.message,
                    type: 'is-danger'
                })
            });
        }
    }
}
</script>

