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
        <b-field label="Adı Soyadı" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>

        <b-field label="Telefon 1" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>

        <b-field label="Telefon 2" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>

        <b-field label="TC Kimlik" :label-position="labelPosition">
            <b-input></b-input>
        </b-field>

        <b-field label="E-Mail"
            :label-position="labelPosition"
        >
        <b-input type="email">
            </b-input>
        </b-field>

    </section>
    </template>
                        </div>
                        <div class="column">
                <p>Bölüm Bilgisi</p>
    <ul class="new-person-property-list" style="font-size:14px">
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
                <b-button expanded icon-left="plus-box">Bölüm Ekle</b-button>

                            </div>
                    </div>
                            <b-field>
            <p class="control">
                <b-button expanded label="Kaydet" type="is-primary" />
            </p>
        </b-field>

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
