<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <a class="navbar-item" title="Kenar Çubuğu" v-on:click="toggleSidebar()">
                <b-icon icon="menu-open" v-bind:class="{ 'flip': !sidebar }"></b-icon>
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-end">
                <b-dropdown
                    v-model="navigation"
                    position="is-bottom-left"
                    append-to-body
                    aria-role="menu"
                    title="Kullanıcı"
                >
                    <template #trigger>
                        <a
                            class="navbar-item"
                            role="button">
                        <b-icon icon="account-box"></b-icon>
                        </a>
                    </template>
                    <b-dropdown-item value="settings">
                        <b-icon icon="cog"></b-icon>
                        Ayarlar
                    </b-dropdown-item>
                    <b-dropdown-item value="logout" aria-role="menuitem">
                        <b-icon icon="logout"></b-icon>
                        Oturumu Kapat
                    </b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                navigation: 'home',
                sidebar: true,
            }
        },
        methods: {
            toggleSidebar() {
                this.sidebar = !this.sidebar;
                this.$emit('sidebar', this.sidebar);
            }
        },
    }
</script>

<style scoped>
.navbar {
    padding: 6px;
    border-bottom: 1px solid rgba(0,0,0,0.14);
}
.flip {
    transform: scaleX(-1);
}
</style>
