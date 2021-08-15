<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container is-flex is-justify-content-space-between is-align-items-center">
                    <div name="hero-left-side">
                        <p class="is-size-4 mb-0">
                            Yeni Toplu Borçlandırma
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
                                <b-field label="Borçlandırma Şekli"
                                    :label-position="labelPosition">
                                    <b-select expanded>
                                        <option value="Aidat">Toplu Aidat Borçlandırması</option>
                                        <option value="Demirbaş">Toplu Demirbaş Borçlandırması</option>
                                        <option value="Sayaç" disabled>Sayaç Endeksi Borçlandırması</option>
                                    </b-select>
                                </b-field>
                                <b-field label="Açıklama" :label-position="labelPosition">
                                    <b-input></b-input>
                                </b-field>
                                <b-field label="Kişiler"
                                    :label-position="labelPosition">
                                    <b-select expanded>
                                        <option value="Kiracilar">Kiracilar, Yoksa Kat Malikleri</option>
                                        <option value="Kiracilar">Kat Malikleri</option>
                                    </b-select>
                                </b-field>
                                <div class="columns mb-0">
                                    <div class="column">
                                        <b-field label="Tarih" :label-position="labelPosition">
                                            <b-datepicker
                                                icon="calendar-today"
                                                trap-focus>
                                            </b-datepicker>
                                        </b-field>
                                    </div>
                                    <div class="column">
                                        <b-field label="Vade Tarihi" :label-position="labelPosition">
                                            <b-datepicker
                                                icon="calendar-today"
                                                trap-focus>
                                            </b-datepicker>
                                        </b-field>
                                    </div>
                                </div>
                                <b-field label="Tutar" :label-position="labelPosition">
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
