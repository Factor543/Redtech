<template>
	<nav id="top">
		<RouterLink class="logo" to="/">
			<span class="red">Red</span><span class="tech">Tech</span>
		</RouterLink>
		<div class="nav-links">
			<RouterLink to="/" active-class="nav-active" exact-active-class="nav-active">{{ $t('_MainNav.home') }}</RouterLink>
			<RouterLink to="/services" active-class="nav-active">{{ $t('_MainNav.services') }}</RouterLink>
			<RouterLink to="/pricing" active-class="nav-active">{{ $t('_MainNav.pricing') }}</RouterLink>
			<RouterLink to="/testimonials" active-class="nav-active">{{ $t('_MainNav.testimonials') }}</RouterLink>
			<RouterLink to="/contact" class="nav-btn">{{ $t('_MainNav.contact') }}</RouterLink>
		</div>
		<button
			id="hamburger"
			class="nav-hamburger"
			:aria-label="$t('_MainNav.open_menu')"
			type="button"
			@click="isMobileOpen = !isMobileOpen"
		>
			<span />
			<span />
			<span />
		</button>
	</nav>

	<div id="mobileMenu" class="mobile-menu" :class="{ open: isMobileOpen }">
		<RouterLink to="/" active-class="nav-active" exact-active-class="nav-active" @click="isMobileOpen = false">{{ $t('_MainNav.home') }}</RouterLink>
		<RouterLink to="/services" active-class="nav-active" @click="isMobileOpen = false">{{ $t('_MainNav.services') }}</RouterLink>
		<RouterLink to="/pricing" active-class="nav-active" @click="isMobileOpen = false">{{ $t('_MainNav.pricing') }}</RouterLink>
		<RouterLink to="/testimonials" active-class="nav-active" @click="isMobileOpen = false">{{ $t('_MainNav.testimonials') }}</RouterLink>
		<RouterLink to="/contact" class="nav-btn" @click="isMobileOpen = false">{{ $t('_MainNav.contact') }}</RouterLink>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMobileOpen = ref(false);
</script>

<style lang="scss" scoped>
nav {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 200;
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 56px;
	background: rgba(12, 12, 14, 0.92);
	backdrop-filter: blur(24px) saturate(180%);
	border-bottom: 1px solid var(--dark-border);
}

.logo {
	font-family: 'Sora', sans-serif;
	font-weight: 900;
	font-size: 21px;
	display: flex;
}

.logo .red {
	color: var(--red);
}

.logo .tech {
	color: var(--white);
}

.nav-links {
	display: flex;
	align-items: center;
	gap: 8px;
}

.nav-links a {
	font-size: 13.5px;
	font-weight: 500;
	color: #888;
	padding: 6px 14px;
	border-radius: 8px;
}

.nav-links a.nav-active,
.nav-links a:hover {
	color: var(--white);
	background: rgba(255, 255, 255, 0.05);
}

.nav-btn {
	background: var(--red) !important;
	color: var(--white) !important;
	font-weight: 600 !important;
	padding: 9px 20px !important;
	border-radius: var(--radius-sm) !important;
}

.nav-hamburger {
	display: none;
	flex-direction: column;
	gap: 5px;
	cursor: pointer;
	background: transparent;
	border: 0;
}

.nav-hamburger span {
	width: 22px;
	height: 2px;
	background: #aaa;
}

.mobile-menu {
	display: none;
	position: fixed;
	top: 64px;
	left: 0;
	right: 0;
	z-index: 190;
	background: rgba(12, 12, 14, 0.98);
	padding: 16px 24px 24px;
}

.mobile-menu.open {
	display: flex;
	flex-direction: column;
}

.mobile-menu a {
	font-size: 16px;
	font-weight: 500;
	color: #aaa;
	padding: 12px 16px;
	border-radius: 10px;
	transition: all 0.2s;
}

.mobile-menu a:hover,
.mobile-menu a.nav-active {
	color: var(--white);
	background: rgba(255, 255, 255, 0.06);
}

.mobile-menu .nav-btn {
	margin-top: 8px;
	text-align: center;
}

@media (max-width: 960px) {
	nav {
		padding: 0 20px;
	}

	.nav-links {
		display: none;
	}

	.nav-hamburger {
		display: flex;
	}
}
</style>
