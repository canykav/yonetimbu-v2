<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      {{employee.name}}
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
            <b-dropdown-item aria-role="listitem" @click="deleteModal=true">Personeli Sil</b-dropdown-item>
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
                        Personel Bilgisi
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
                                        <td width="30%">Personel Adı</td>
                                        <td><span v-if="edit==0">{{employee.name}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedEmployeeData.name"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Telefon</td>
                                        <td><span v-if="edit==0">{{employee.phone1}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedEmployeeData.phone1"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Görevi</td>
                                        <td><span v-if="edit==0">{{employee.employee_job}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedEmployeeData.employee_job"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">TC Kimlik/Vergi No	</td>
                                        <td><span v-if="edit==0">{{employee.citizenship_no}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedEmployeeData.citizenship_no"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Vergi Dairesi</td>
                                        <td><span v-if="edit==0">{{employee.tax_administration}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedEmployeeData.tax_administration"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">IBAN</td>
                                        <td>
                                            <span v-if="edit==0">{{employee.iban}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedEmployeeData.iban"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Email</td>
                                        <td>
                                            <span v-if="edit==0">{{employee.email}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedEmployeeData.email"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Adres</td>
                                        <td>
                                            <span v-if="edit==0">{{employee.address}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedEmployeeData.address"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Sigorta No</td>
                                        <td><span v-if="edit==0">{{employee.social_sec_no}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedEmployeeData.social_sec_no"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Çalışan Tipi</td>
                                        <td><span v-if="edit==0">{{employee.employee_type}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedEmployeeData.employee_job"></b-input>
                                        </td>
                                    </tr>
                                     <tr>
                                        <td width="30%">Maaşı</td>
                                        <td><span v-if="edit==0">{{employee.employee_salary | turkishMoney}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedEmployeeData.employee_job"></b-input>
                                        </td>
                                    </tr>
                                     <tr>
                                        <td width="30%">İşe Giriş Tarihi</td>
                                        <td><span v-if="edit==0">{{employee.employee_start_date| turkishDate}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedEmployeeData.employee_start_date"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">İşten Çıkış Tarihi</td>
                                        <td><span v-if="edit==0">{{employee.employee_leave_date| turkishDate}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedEmployeeData.employee_leave_date"></b-input>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                                <b-button v-if="edit==1" class="is-small" @click="updateemployee" type="is-primary" :loading="loadingUpdateButton" expanded>Kaydet</b-button>
                        </div>
                    </div>
                </div>

                <div class="card block">
                    <header class="card-header">
                        <p class="card-header-title">
                        Ekstre
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <b-notification
                                id="balance-info"
                                :class="{'is-hidden' : balance==null, 'is-danger is-light': balance<0, 'is-success is-light': balance>=0 }"
                                >
                                <b-icon
                                    icon="cash-multiple"
                                >
                                </b-icon>
                                Toplam Bakiye:
                                {{ balance | turkishMoney }}
                            </b-notification>
                  <b-tabs type="is-toggle">
            <b-tab-item label="Personelin Kalan Alacakları" icon="credit-card-outline">
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


        <b-modal
            v-model="deleteModal"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-modal
        >
            <form @submit.prevent="deleteEmployee()">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">İşlemi onaylayın</p>
                        <button
                            type="button"
                            class="delete"
                            @click="deleteModal=false"/>
                    </header>
                    <section class="modal-card-body">
                       Personel siliniyor. Devam etmek istediğinize emin misiniz?
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
            employeeID: null,
            employee: {},
            editedEmployeeData: {},
            loadingUpdateButton: false,
            isTableEmpty: false,
            edit: 0,
            transactions: [],
            deleteModal: false,
            loadingDeleteButton: false,
            balance: null,
    }
},
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.employeeID = this.$route.params.employees_id;
        this.getEmployee();
    },
    methods: {
        getEmployee() {
        axios.get('/api/sites/'+this.siteID+'/employees/'+this.employeeID)
            .then(response => {
                this.employee = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTable = false;
                this.getEmployeeReceivables();
                this.getCompanyTransactions();
            });
        },
        getCompanyTransactions() {
        axios.get('/api/sites/'+this.siteID+'/transactions', {
            params: {
                employees_id: this.employeeID,
            }
        })
            .then(response => {
                this.transactions = response.data.data.transactions;
                this.balance = response.data.data.balance;
            })
            .catch(error => {
                console.log(error.response.data);
            });
        },
        getEmployeeReceivables() {
        axios.get('/api/sites/'+this.siteID+'/expenses', {
            params: {
                employees_id: this.employeeID,
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
        updateEmployee(){
            this.loadingUpdateButton = true;
            axios.put('/api/sites/'+this.siteID+'/employees/'+this.employeeID, {
                name: this.editedEmployeeData.name,
                phone1: this.editedEmployeeData.phone1,
                citizenship_no: this.editedEmployeeData.citizenship_no,
                tax_administration: this.editedEmployeeData.tax_administration,
                iban: this.editedEmployeeData.iban,
                email: this.editedEmployeeData.email,
                address: this.editedEmployeeData.address,
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.getEmployee();
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
        deleteEmployee(){
            this.loadingDeleteButton = true;
            axios.delete('/api/sites/'+this.siteID+'/accounts/'+this.employeeID)
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.$router.push({ name: 'employees', params: { sites_id: this.siteID} });
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
                Object.assign(this.editedEmployeeData, this.employee);
                this.editedEmployeeData.opening_date = new Date(this.editedEmployeeData.opening_date);
            }
            this.edit = !this.edit;
        }
    }
}
</script>

