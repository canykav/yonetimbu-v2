<template>
  <div>
      <section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      Yeni Bölüm Tipi
    </p>
    <p class="has-text-grey is-size-7">..</p>
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
        <b-field label="Açıklama" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>
        <b-field label="Arsa Payı" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>
        <div class="columns mt-0">
            <div class="column">
                <b-field label="Net m²" :label-position="labelPosition">
                    <b-input></b-input>
                </b-field>
            </div>
                        <div class="column">
        <b-field label="Brüt m²" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>
                    </div>
        </div>
        <b-field label="Kapı Numarası" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>
        <b-field label="Aidat Tutarı" :label-position="labelPosition">
            <div class="control is-clearfix">
                <vue-autonumeric
                    class="input"
                    v-model="myValue"
                    :options="'commaDecimalCharDotSeparator'"
                ></vue-autonumeric>
            </div>
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
