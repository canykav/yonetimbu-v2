<template>
  <div>
      <section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      Yeni Bölüm
    </p>
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
        <form id="newPropertyForm" @submit.prevent="createProperty()">
        <b-field label="Blok"
            :label-position="labelPosition">
            <b-select expanded :loading="loadingBlocksInput" v-model="newProperty.blocks_id">
                <option v-for="block in blocks" :key="block.id" :value="block.id">{{block.name}}</option>
            </b-select>
        </b-field>
        <b-field label="Kapı Numarası" :label-position="labelPosition">
            <b-input v-model="newProperty.door_no"></b-input>
        </b-field>
        <b-field label="Tipi"
            :label-position="labelPosition">
            <b-select expanded v-model="newProperty.types_id">
                <option v-for="type in types" :key="type.id" :value="type.id">{{type.name}}</option>
            </b-select>
        </b-field>

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
            labelPosition: 'inside',
            blocks: [],
            types: [],
            siteID: null,
            loadingBlocksInput: true,
            loadingTypesInput: true,
            loadingButton: false,
            newProperty: {},
        }
    },
    mounted() {
        this.siteID = this.$route.params.sites_id;
        this.getSiteBlocks();
        this.getSiteTypes();
    },
    methods: {
        getSiteBlocks() {
        axios.get('/api/sites/'+this.siteID+'/blocks')
            .then(response => {
                this.blocks = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingBlocksInput = false;
            });
        },
        getSiteTypes() {
        axios.get('/api/sites/'+this.siteID+'/types')
            .then(response => {
                this.types = response.data.data;
            })
            .catch(error => {
                console.log(error.response.data);
            })
            .then(() => {
                this.loadingTypesInput = false;
            });
        },
            createProperty(){
            this.loadingButton = true;
            axios.post('/api/sites/'+this.siteID+'/properties', {
                blocks_id: this.newProperty.blocks_id,
                door_no: this.newProperty.door_no,
                types_id: this.newProperty.types_id,
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                this.$router.push({ name: 'properties',  params: { sites_id: this.siteID} })
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
