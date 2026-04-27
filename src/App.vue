<template>
	<MainNav />
	<RouterView />
	<SiteFooter />
</template>

<script setup lang="ts">
import MainNav from '@/layouts/MainNav.vue';
import SiteFooter from '@/layouts/SiteFooter.vue';
import { RouterView } from 'vue-router';
</script>
