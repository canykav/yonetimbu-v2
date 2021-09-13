<template>
     <b-navbar type="is-primary" wrapper-class="container" class="block">
        <template #brand>
            <b-navbar-item href="/">
               <img
                    src="/img/logo-b.png"
                    alt="Yönetimbu"
                    style="max-height:28px;"
                />
            </b-navbar-item>
        </template>
        <template #start>

        </template>

        <template #end>
               <b-navbar-dropdown :label="$attrs.manager.name">
                <b-navbar-item @click="logout()">
                    Oturumu Kapat
                </b-navbar-item>
                <form method="post" action="/logout" id="logout-form">
                    <input type="hidden" name="_token" :value="csrf">
                    <input type="hidden" name="id" :value="$attrs.manager.id">
                </form>
            </b-navbar-dropdown>
        </template>
    </b-navbar>
</template>

<script>
export default {
    data() {
        return {
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        }
    },
    methods: {
        logout() {
            document.getElementById("logout-form").submit();
        }
    }
}
</script>

<style>

</style>
