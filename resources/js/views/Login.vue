<template>
    <div class="columns full-height-for-columns">
        <div class="column is-8 manager-auth-left is-flex is-align-items-center">
<section class="hero">
  <div class="hero-body">
    <p class="title has-text-white">
      Yönetimbu
    </p>
    <p class="subtitle has-text-grey">
      Topluluğumuza Hoşgeldiniz
    </p>
  </div>
</section>
        </div>
        <div class="column is-4 has-background-white is-flex is-align-items-center">
            <div name="login-form" class="px-6">
                <p class="is-size-4 has-text-weight-medium">Giriş</p>
                <p class="is-size-7 mb-6">Hesabınız yok mu?<a class="has-text-primary"> Kayıt Olun</a></p>
                    <b-field label="Email">
                    <b-input type="email"></b-input>
                </b-field>
                <b-field label="Şifre">
                    <b-input type="password"
                        password-reveal>
                    </b-input>
                </b-field>
                <b-field>
                    <b-checkbox class="is-size-7">Beni Hatırla</b-checkbox>
                </b-field>
                <b-button type="is-primary" rounded expanded>Giriş Yap</b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {



}
</script>

<style scoped>
.hero {
    border-bottom: 0;
}
</style>
