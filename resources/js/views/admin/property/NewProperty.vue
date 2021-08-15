<template>
  <div>
      <section class="hero">
  <div class="hero-body">
    <div class="container is-flex is-justify-content-space-between is-align-items-center">
        <div name="hero-left-side">
    <p class="is-size-4 mb-0">
      Yeni Bölüm
    </p>
    <p class="has-text-grey is-size-7">Sitede bulunan veya siteye bağlı yeni bir daire veya dükkan.</p>
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
        <b-field label="Blok"
            :label-position="labelPosition">
            <b-select expanded>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </b-select>
        </b-field>
        <b-field label="Kapı Numarası" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>
        <b-field label="Tipi"
            :label-position="labelPosition">
            <b-select expanded>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </b-select>
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
