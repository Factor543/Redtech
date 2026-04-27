<template>
	<footer>
		<div class="f-brand">
			<div class="f-logo"><span class="red">Red</span><span class="tech">Tech</span></div>
			<p>Automatización de operaciones para negocios que quieren crecer sin hacer todo manualmente. Diseñado para Latinoamérica.</p>
		</div>
		<div class="f-col">
			<h5>Servicios</h5>
			<RouterLink to="/services">Atención al cliente</RouterLink>
			<RouterLink to="/services">Automatización de ventas</RouterLink>
			<RouterLink to="/services">Agendamiento</RouterLink>
			<RouterLink to="/services">CRM automático</RouterLink>
			<RouterLink to="/services">Procesos internos</RouterLink>
		</div>
		<div class="f-col">
			<h5>Empresa</h5>
			<RouterLink to="/services">Cómo funciona</RouterLink>
			<RouterLink to="/">Misión y visión</RouterLink>
			<RouterLink to="/pricing">Planes</RouterLink>
			<RouterLink to="/testimonials">Testimonios</RouterLink>
			<RouterLink to="/contact">Contacto</RouterLink>
		</div>
		<div class="f-col">
			<h5>Contacto</h5>
			<p>Diego Ñañez</p>
			<a href="https://wa.me/584121582233" class="red-link">+58 412-1582233</a>
			<a href="mailto:diegoalberto.4002@gmail.com" class="red-link">diegoalberto.4002@gmail.com</a>
			<p style="margin-top: 16px; font-size: 12px; color: #505058">Caracas, Venezuela · Atención regional</p>
		</div>
		<div class="f-bottom">
			<p>&copy; 2026 <span>Red</span>Tech. Todos los derechos reservados.</p>
			<p>Hecho con <span>&hearts;</span> en Caracas, Venezuela</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
footer {
	background: var(--dark-section);
	border-top: 1px solid var(--dark-border);
	padding: 60px 56px 0;
	display: grid;
	grid-template-columns: 1.4fr 1fr 1fr 1fr;
	gap: 48px;
}

.f-brand .f-logo {
	font-family: 'Sora', sans-serif;
	font-weight: 900;
	font-size: 22px;
	letter-spacing: -0.5px;
	margin-bottom: 10px;
}

.f-brand .f-logo .red { color: var(--red); }
.f-brand .f-logo .tech { color: var(--white); }

.f-brand p {
	font-size: 14px;
	color: #606068;
	line-height: 1.6;
	max-width: 260px;
}

.f-col h5 {
	font-family: 'IBM Plex Mono', monospace;
	font-size: 10px;
	color: #505058;
	letter-spacing: 2px;
	text-transform: uppercase;
	margin-bottom: 18px;
}

.f-col a {
	display: block;
	font-size: 14px;
	color: #707078;
	text-decoration: none;
	margin-bottom: 10px;
	transition: color 0.2s;
	cursor: pointer;
}

.f-col a:hover { color: var(--white); }

.f-col p {
	font-size: 14px;
	color: #707078;
	margin-bottom: 8px;
}

.f-col a.red-link { color: var(--red); }

.f-bottom {
	border-top: 1px solid var(--dark-border);
	margin-top: 48px;
	padding: 20px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	grid-column: 1 / -1;
}

.f-bottom p {
	font-family: 'IBM Plex Mono', monospace;
	font-size: 11px;
	color: #404048;
}

.f-bottom span { color: var(--red); }

@media (max-width: 960px) {
	footer {
		grid-template-columns: 1fr 1fr;
		padding: 48px 24px 0;
	}

	.f-bottom {
		padding: 20px 24px;
		flex-direction: column;
		gap: 8px;
		text-align: center;
	}
}

@media (max-width: 600px) {
	footer {
		grid-template-columns: 1fr;
	}
}
</style>
