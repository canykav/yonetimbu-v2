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
            <form name="register-form" class="px-6" method="post" action="register">
                <p class="is-size-4 has-text-weight-medium">Kayıt</p>
                <p class="is-size-7 mb-6">Hesabınız var mı?<a class="has-text-primary" href="/login"> Giriş yapın</a></p>
                    <input type="hidden" name="_token" :value="csrf">
                <b-field label="Ad Soyad">
                    <b-input type="text" name="name" required="required"></b-input>
                </b-field>
                <b-field label="Email">
                    <b-input type="email" name="email" required="required"></b-input>
                </b-field>
                <b-field label="Şifre">
                    <b-input type="password" name="password" required="required"
                        password-reveal>
                    </b-input>
                </b-field>
                 <b-field label="Şifre(tekrar)">
                    <b-input type="password" name="password_confirmation" required="required"
                        password-reveal>
                    </b-input>
                </b-field>
                <b-button type="is-primary" native-type="submit" rounded expanded>Kayıt Ol</b-button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
    }
}
</script>

<style scoped>
.hero {
    border-bottom: 0;
}
</style>
