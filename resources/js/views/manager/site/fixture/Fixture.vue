<template>
<div>
    <section class="hero">
        <div class="hero-body">
            <div class="container is-flex is-justify-content-space-between is-align-items-center">
                <div name="hero-left-side">
                    <p class="is-size-4 mb-0">
                    {{fixture.name}}
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
                        <b-dropdown-item aria-role="listitem" @click="deleteModal=true">Demirbaşı Sil</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
        </div>
    </section>
    <div class="container block mt-6">
                <div class="card block">
                    <header class="card-header">
                        <p class="card-header-title">
                        Demirbaş Bilgisi
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
                                        <td width="30%">Demirbaş Adı</td>
                                        <td><span v-if="edit==0">{{fixture.name}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedFixtureData.name"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Zimmetli</td>
                                        <td>
                                            <span v-if="edit==0">{{fixture.keeper}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedFixtureData.land_share"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                <td width="30%">Alış Tarihi	</td>
                                        <td><span v-if="edit==0">{{fixture.bought_date | turkishDate}}</span>
                                            <b-datepicker
                                            v-if="edit==1"
                                            icon="calendar-today"
                                            v-model="editedFixtureData.bought_date"
                                            trap-focus
                                            custom-class="is-small">
                                            </b-datepicker>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Adet</td>
                                        <td><span v-if="edit==0">{{fixture.unit}}</span>
                                            <b-input custom-class="is-small" v-if="edit==1" v-model="editedFixtureData.unit"></b-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="30%">Adet Fiyatı</td>
                                        <td>
                                            <span v-if="edit==0">{{fixture.unit_price | turkishMoney}}</span>
                                            <vue-autonumeric
                                                v-if="edit==1"
                                                class="input is-small"
                                                v-model="editedFixtureData.unit_price"
                                                :options="'commaDecimalCharDotSeparator'"
                                            ></vue-autonumeric>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                                <b-button v-if="edit==1" class="is-small" @click="updateFixture" type="is-primary" :loading="loadingUpdateButton" expanded>Kaydet</b-button>
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
            <form @submit.prevent="deleteFixture()">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">İşlemi onaylayın</p>
                        <button
                            type="button"
                            class="delete"
                            @click="deleteModal=false"/>
                    </header>
                    <section class="modal-card-body">
                       Demirbaş siliniyor. Devam etmek istediğinize emin misiniz?
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
                fixtureID: null,
                fixture: {},
                editedFixtureData: {},
                loadingUpdateButton: false,
                loadingDeleteButton: false,
                loadingTable: true,
                edit: 0,
                deleteModal: false,
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.fixtureID = this.$route.params.fixtures_id;
        this.getFixture();
    },
    methods: {
        getFixture() {
        axios.get('/api/sites/'+this.siteID+'/fixtures/'+this.fixtureID)
            .then(response => {
                this.fixture = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTable = false;
            });
        },
        updateFixture(){
            this.loadingUpdateButton = true;
            axios.put('/api/sites/'+this.siteID+'/fixtures/'+this.fixtureID, {
                name: this.editedFixtureData.name,
                keeper: this.editedFixtureData.keeper,
                bought_date: (this.editedFixtureData.bought_date) ? this.editedFixtureData.bought_date.toLocaleDateString('tr-TR') : null,
                unit: this.editedFixtureData.unit,
                unit_price: this.editedFixtureData.unit_price
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.getFixture();
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
                Object.assign(this.editedFixtureData,this.fixture);
                this.editedFixtureData.bought_date = new Date(this.editedFixtureData.bought_date);
            }
            this.edit = !this.edit;
        },
        deleteFixture(){
            this.loadingDeleteButton = true;
            axios.delete('/api/sites/'+this.siteID+'/fixtures/'+this.fixtureID)
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.$router.push({ name: 'fixtures', params: { sites_id: this.siteID} });
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
        }
    }
}
</script>

