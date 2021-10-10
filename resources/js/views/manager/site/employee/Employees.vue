<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
            <p class="is-size-4 mb-0">
            Personeller
            </p>
        </div>
    <div class="buttons">
        <b-button
            class="is-primary"
            icon-left="plus"
            tag="router-link"
            to="employees/new"
        >
            Personel Ekle
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
                    :data="employees"
                    :loading="loadingTable"
                    @click="goToEmployee($event)"
                    style="cursor:pointer"
                    >

                    <b-table-column label="ID" v-slot="props">
                        {{ props.row.id }}
                    </b-table-column>

                    <b-table-column  label="Adı" v-slot="props">
                        {{  props.row.name }}
                    </b-table-column>

                    <b-table-column label="Telefon" v-slot="props">
                        {{  props.row.phone1 }}
                    </b-table-column>

                    <b-table-column label="Görevi" v-slot="props">
                        {{  props.row.employee_job}}
                    </b-table-column>

                    <b-table-column label="Bakiye" v-slot="props">
                        {{  props.row.id }}
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
        employees: [],
        loadingTable: true,
    }
},
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSiteEmployees();
    },
    methods: {
        getSiteEmployees() {
        axios.get('/api/sites/'+this.siteID+'/employees')
            .then(response => {
                this.employees = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTable = false;
            });
        },
        goToEmployee(employee) {
            this.$router.push({ name: 'employee',  params: { sites_id: this.siteID, employees_id: employee.id } })
        }
    }
}
</script>
