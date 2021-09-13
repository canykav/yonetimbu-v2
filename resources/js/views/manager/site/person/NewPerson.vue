<template>
  <div>
      <section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      Yeni Kişi
    </p>
    <p class="has-text-grey is-size-7">Sitede oturan ya da mülk sahibi olarak ekleyebileceğin yeni bir kişi.</p>
        </div>
  </div>
  </div>
</section>
      <div class="container block mt-6">
        <div class="card">
            <div class="card-content">
                <div class="content">
                    <div class="columns">
                        <div class="column">
                <p>Kişi Bilgisi</p>
      <template>
    <section>
        <form id="newPersonForm" @submit.prevent="createPerson()">
        <b-field label="Adı Soyadı" :label-position="labelPosition">
            <b-input v-model="newPerson.name" required></b-input>
        </b-field>

        <b-field label="Telefon 1" :label-position="labelPosition">
            <b-input v-model="newPerson.phone1"></b-input>
        </b-field>

        <b-field label="Telefon 2" :label-position="labelPosition">
            <b-input v-model="newPerson.phone2"></b-input>
        </b-field>

        <b-field label="TC Kimlik" :label-position="labelPosition">
            <b-input v-model="newPerson.citizenship_no"></b-input>
        </b-field>

        <b-field label="E-Mail" :label-position="labelPosition">
            <b-input type="email" v-model="newPerson.email"></b-input>
        </b-field>
        </form>
    </section>
    </template>
                        </div>
                        <div class="column">
                <p>Bölüm Bilgisi</p>
    <ul class="new-person-property-list ml-0" style="font-size:14px">
        <li class="is-flex is-justify-content-space-between">
            <div>
                <div class="has-text-weight-medium mb-1">Kat Maliki: A-01</div>
                <span class="has-text-grey">
                    Giriş:
                    13.01.2021
                </span>
                <span class="has-text-grey">
                    Çıkış:
                    13.02.2021
                </span>
            </div>
            <div class="is-flex is-align-items-center">
                <a href="">
                    <b-icon
                        icon="trash-can"
                    >
                    </b-icon>
                </a>
            </div>
        </li>

        <li class="is-flex is-justify-content-space-between">
            <div>
                <div class="has-text-weight-medium mb-1">Kat Maliki: A-01</div>
                <span class="has-text-grey">
                    Giriş:
                    13.01.2021
                </span>
                <span class="has-text-grey">
                    Çıkış:
                    13.02.2021
                </span>
            </div>
            <div class="is-flex is-align-items-center">
                <a href="">
                    <b-icon
                        icon="trash-can"
                    >
                    </b-icon>
                </a>
            </div>
        </li>
    </ul>
            <b-button @click="isComponentModalActive = true" expanded icon-left="plus-box">Bölüm Ekle</b-button>
            </div>
        </div>
        <b-field>
            <p class="control">
                <b-button expanded label="Kaydet" type="is-primary" native-type="submit" :loading="loadingButton" form="newPersonForm"/>
            </p>
        </b-field>

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
                <modal-form v-bind="formProps" :properties="properties" @close="props.close"></modal-form>
            </template>
        </b-modal>

  </div>
</template>

<script>
const ModalForm = {
        props: ['properties', 'password', 'canCancel', 'loadingBlocksInput','newProperty.date'],
        template: `
            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Bölüm Bağla</p>
                        <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Bölüm">
                            <b-select expanded>
                                <option v-for="property in properties" :key="property.id" :value="property.id">{{property.doorWithBlock}}</option>
                            </b-select>
                        </b-field>
                        <b-field label="Durum">
                            <b-select expanded>
                                <option value="householder">Kat Maliki</option>
                                <option value="tenant">Kiracı</option>
                            </b-select>
                        </b-field>

                        <b-field label="Giriş Tarihi" :label-position="labelPosition">
                            <b-datepicker
                                icon="calendar-today"
                                trap-focus>
                            </b-datepicker>
                        </b-field>
                        <b-field label="Çıkış Tarihi" :label-position="labelPosition">
                            <b-datepicker
                                icon="calendar-today"
                                trap-focus>
                            </b-datepicker>
                        </b-field>

                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Vazgeç"
                            @click="$emit('close')" />
                        <b-button
                            label="Kaydet"
                            type="is-primary" />
                    </footer>
                </div>
            </form>
        `
    }

export default {
    components: {
        ModalForm
    },
    data() {
        return {
            siteID: null,
            newPerson : {},
            newProperties: [],
            labelPosition: 'inside',
            loadingButton: false,
            isComponentModalActive: false,
            properties: [],
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSiteProperties();
    },
    methods: {
        getSiteProperties() {
        axios.get('/api/sites/'+this.siteID+'/properties')
            .then(response => {
                this.properties = response.data.data;
                this.properties.forEach(property => {
                    property.doorWithBlock = (property.block.name) ? property.block.name + '-'+ property.door_no : property.door_no;
                });
            })
            .catch(error => {
                console.log(error.response.data);
            });
        },
        createPerson(){
            this.loadingButton = true;
            axios.post('/api/sites/'+this.siteID+'/persons', {
                name: this.newPerson.name,
                phone1: this.newPerson.phone1,
                phone2: this.newPerson.phone2,
                citizenship_no: this.newPerson.citizenship_no,
                email: this.newPerson.email,
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.newPerson = {};
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
