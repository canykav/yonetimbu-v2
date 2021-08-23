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
            <form method="POST" action="/register" name="signup-form" class="px-6">
                <p class="is-size-4 has-text-weight-medium">Yönetici Kayıt Formu</p>
                <p class="is-size-7 mb-6">Zaten hesabınız var mı?<a class="has-text-primary"> Giriş Yapın</a></p>
                <input type="hidden" name="_token" :value="csrf">
                <b-field label="Ad Soyad">
                    <b-input
                        name="name"
                        v-model="loginInfo.name"
                    >
                    </b-input>
                </b-field>
                    <b-field label="Email">
                    <b-input
                        type="email"
                        name="email"
                        v-model="loginInfo.email"
                    >
                    </b-input>
                </b-field>
                <b-field label="Şifre">
                    <b-input
                        type="password"
                        name="password"
                        v-model="loginInfo.password"
                        password-reveal>
                    </b-input>
                </b-field>
                <b-field>
                    <b-checkbox
                        class="is-size-7"
                        name="kvkk"
                        v-model="loginInfo.kvkk"
                    >
                        <a class="has-text-link">KVKK Aydınlatma Metni</a>'ni okudum ve kabul ediyorum.
                    </b-checkbox>
                </b-field>
                <b-button
                    type="is-primary"
                    native-type="submit"
                    rounded
                    expanded
                >
                    Kayıt Ol
                </b-button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
data() {
    return  {
        csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        loginInfo: {
            name: "",
            email: "",
            password: "",
            kvkk: false,
        }
    }
}


}
</script>

<style scoped>
.hero {
    border-bottom: 0;
}
form[name="signup-form"] {
    max-width: 347px;
}
</style>
