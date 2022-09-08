<script setup>
import { useI18n } from 'vue-i18n';
const i18n = useI18n();
provide('i18n', i18n);
</script>

<template>
  <router-view />
</template>

<style lang="scss" scoped></style>
