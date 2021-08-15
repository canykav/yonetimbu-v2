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
        <b-field label="Adı" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>
        <b-field label="Telefon" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>
        <b-field label="Cinsiyet"
            :label-position="labelPosition">
            <b-select expanded>
                <option value="m">Erkek</option>
                <option value="f">Kadın</option>
            </b-select>
        </b-field>
        <b-field label="TC Kimlik No." :label-position="labelPosition">
            <b-input></b-input>
        </b-field>
        <b-field label="Görevi" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>
        <b-field label="IBAN" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>
        <b-field label="Sigorta No." :label-position="labelPosition">
            <b-input></b-input>
        </b-field>
        <b-field label="Çalışan Tipi"
            :label-position="labelPosition">
            <b-select expanded>
                <option value="regular">Normal</option>
                <option value="retired">Emekli</option>
            </b-select>
        </b-field>
        <b-field label="Maaşı" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>
        <div class="columns">
            <div class="column">
         <b-field label="Giriş Tarihi" :label-position="labelPosition">
            <b-datepicker
                icon="calendar-today"
                trap-focus>
            </b-datepicker>
        </b-field>
            </div>
            <div class="column">
     <b-field label="Çıkış Tarihi" :label-position="labelPosition">
            <b-datepicker
                icon="calendar-today"
                trap-focus>
            </b-datepicker>
        </b-field>
        </div>
        </div>
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
