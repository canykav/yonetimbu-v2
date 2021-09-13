<template>
<div>
<div class="container">
<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Yeni Site
    </p>
  </header>

            <div class="card-content">
                <div class="content">
                    <form id="newSiteForm" @submit.prevent="createSite()">
                    <b-field label="Site Adı" label-position="inside">
                        <b-input v-model="newSite.name" required></b-input>
                    </b-field>

                    <b-field label="Blok Sayısı"
                        label-position="inside"
                    >
                    <div class="control is-clearfix">
                        <select class="select input is-fullwidth" v-model="newSite.total_block" v-on:change="controlBlocks()">
                            <option v-for="block in 20" :key="block" :value="block">{{block}}</option>
                        </select>
                    </div>
                    </b-field>

                    <div class="columns" :key="block.id" v-for="(block,index) in newSite.blocks">
                        <div class="column">
                            <b-field
                                :label="index+1+'.Blok Adı'"
                                label-position="inside"
                            >
                                <b-input v-model="newSite.blocks[index].name"></b-input>
                            </b-field>
                        </div>
                        <div class="column">
                            <b-field
                                label="Bölüm Sayısı"
                                label-position="inside"
                            >
                                <b-input v-model="newSite.blocks[index].property_count" required></b-input>
                            </b-field>
                        </div>
                    </div>
                    <b-field label="Adres" label-position="inside">
                        <b-input v-model="newSite.address"></b-input>
                    </b-field>
                    <div class="columns">
                    <div class="column">
                    <b-field label="Dönem Başlangıcı" label-position="inside">
                        <b-datepicker
                            icon="calendar-today"
                            trap-focus
                            v-model="newSite.term_start"
                            required
                            >
                        </b-datepicker>
                    </b-field>
                    </div>
                    <div class="column">
                    <b-field label="Dönem Sonu" label-position="inside">
                        <b-datepicker
                            icon="calendar-today"
                            trap-focus
                            v-model="newSite.term_end"
                            required
                            >
                        </b-datepicker>
                    </b-field>
                    </div>
                    </div>
                      <b-field>
            <p class="control">
                <b-button expanded label="Kaydet" type="is-primary" native-type="submit" :loading="loadingButton" form="newSiteForm"/>
            </p>
        </b-field>
        </form>
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
                <modal-form v-bind="formProps" @close="props.close"></modal-form>
            </template>
    </b-modal>
</div>
</template>

<script>
export default {
    data() {
        return {
            sites_id: 1,
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            isComponentModalActive: false,
            labelPosition: 'on-border',
            newSite: {
                total_block : 1,
                blocks: [
                    {
                        name: "",
                        property_count: null
                    }
                ],
            },
            loadingButton: false,
        }
    },
    methods: {
        goLink(link){
            window.location.href = link;
        },
        logout() {
            document.getElementById("logout-form").submit();
        },
        controlBlocks() {
              var difference;
                if(this.newSite.total_block>this.newSite.blocks.length) {
                  difference = this.newSite.total_block - this.newSite.blocks.length;
                  console.log(difference);
                  var i=1;
                  for(i=1; i<=difference; i++) {
                    this.newSite.blocks.push({name: "",property_count: null})
                  }
              } else if(this.newSite.blocks.length>this.newSite.total_block) {
                  difference = this.newSite.blocks.length-this.newSite.total_block
                  var i=1;
                  for(i=1; i<=difference; i++) {
                    this.newSite.blocks.pop()
                  }
              }
        },
        createSite(){
            this.loadingButton = true;
            axios.post('/api/sites/', {
                name: this.newSite.name,
                blocks: this.newSite.blocks,
                address: this.newSite.address,
                term_start: this.newSite.term_start,
                term_end: this.newSite.term_end,
            })
            .then(response => {
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: 'is-success'
                });
                window.location.href="/";
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
