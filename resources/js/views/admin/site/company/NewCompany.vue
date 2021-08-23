<template>
  <div>
      <section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      Yeni Firma
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
        <b-field label="Adı" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>
        <b-field label="Vergi No./TC No." :label-position="labelPosition">
            <b-input></b-input>
        </b-field>
        <b-field label="Vergi Dairesi" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>
        <b-field label="Telefon" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>
        <b-field label="IBAN" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>
        <b-field label="E-Mail" :label-position="labelPosition">
            <b-input type="email"></b-input>
        </b-field>
     <b-field label="Adres" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>

        <b-field>
            <p class="control">
                <b-button expanded label="Kaydet" type="is-primary" />
            </p>
        </b-field>

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
                labelPosition: 'inside'
        }
    }
}
</script>

<style>

</style>
