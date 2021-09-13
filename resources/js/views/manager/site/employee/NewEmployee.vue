<template>
  <div>
      <section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      Yeni Personel
    </p>
    <p class="has-text-grey is-size-7">......</p>
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
        <form id="newEmployeeForm" @submit.prevent="createEmployee()">
        <b-field label="Adı" :label-position="labelPosition">
            <b-input v-model="newEmployee.name"></b-input>
        </b-field>
        <b-field label="Telefon" :label-position="labelPosition">
            <b-input v-model="newEmployee.phone1"></b-input>
        </b-field>
        <!-- <b-field label="Cinsiyet" :label-position="labelPosition">
            <b-select v-model="newEmployee.gender" expanded>
                <option value="m">Erkek</option>
                <option value="f">Kadın</option>
            </b-select>
        </b-field> -->
        <b-field label="TC Kimlik No." :label-position="labelPosition">
            <b-input v-model="newEmployee.citizenship_no"></b-input>
        </b-field>
        <b-field label="Görevi" :label-position="labelPosition">
            <b-input v-model="newEmployee.employee_job"></b-input>
        </b-field>
        <b-field label="IBAN" :label-position="labelPosition">
            <b-input v-model="newEmployee.iban"></b-input>
        </b-field>
        <b-field label="Sigorta No." :label-position="labelPosition">
            <b-input v-model="newEmployee.social_sec_no"></b-input>
        </b-field>
        <b-field label="Çalışan Tipi"
            :label-position="labelPosition">
            <b-select expanded v-model="newEmployee.employee_type">
                <option value="normal">Normal</option>
                <option value="retired">Emekli</option>
            </b-select>
        </b-field>
        <b-field label="Maaşı" :label-position="labelPosition">
            <div class="control is-clearfix">
                <vue-autonumeric
                    class="input"
                    v-model="newEmployee.employee_salary"
                    :options="'commaDecimalCharDotSeparator'"
                ></vue-autonumeric>
            </div>
        </b-field>
        <div class="columns">
            <div class="column">
         <b-field label="Giriş Tarihi" :label-position="labelPosition">
            <b-datepicker
                icon="calendar-today"
                trap-focus
                v-model="newEmployee.employee_start_date">
            </b-datepicker>
        </b-field>
            </div>
            <div class="column">
     <b-field label="Çıkış Tarihi" :label-position="labelPosition">
            <b-datepicker
                icon="calendar-today"
                trap-focus
                v-model="newEmployee.employee_leave_date">
            </b-datepicker>
        </b-field>
        </div>
        </div>
        <b-field>
            <p class="control">
                <b-button expanded label="Kaydet" type="is-primary" native-type="submit" :loading="loadingButton"/>
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
            siteID: null,
            newEmployee : {},
            labelPosition: 'inside',
            loadingButton: false,        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
    },
    methods: {
        createEmployee(){
            this.loadingButton = true;
            axios.post('/api/sites/'+this.siteID+'/employees', {
                name: this.newEmployee.name,
                phone1: this.newEmployee.phone1,
                employee_job: this.newEmployee.employee_job,
                iban: this.newEmployee.iban,
                social_sec_no: this.newEmployee.social_sec_no,
                employee_type: this.newEmployee.employee_type,
                employee_salary: this.newEmployee.employee_salary,
                employee_start_date: this.newEmployee.employee_start_date,
                employee_leave_date: this.newEmployee.employee_leave_date,
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.$router.push({ name: 'employees',  params: { sites_id: this.siteID} })
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
