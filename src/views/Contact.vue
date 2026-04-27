<template>
	<main class="contacto-page">
		<section class="cta-final">
			<canvas id="cta-particles-canvas" />
			<div id="cta-zone" class="cta-interactive-zone" />
			<div class="cta-glow" />
			<h2>¿Listo para que tu negocio<br><em>trabaje solo</em>?</h2>
			<p>Una llamada de 20 minutos es suficiente para mostrarte cómo funciona. Sin compromiso, sin palabras técnicas.</p>
			<div class="cta-btns">
				<a href="https://wa.me/584121582233?text=Hola%20RedTech!%20Me%20gustar%C3%ADa%20ver%20c%C3%B3mo%20funciona%20el%20sistema." class="btn-red">Escribir por WhatsApp</a>
				<a href="mailto:diegoalberto.4002@gmail.com" class="btn-outline">Enviar un email</a>
			</div>
		</section>

		<section style="background: var(--dark-section); padding: 80px 56px">
			<div class="contacto-cards">
				<div class="contact-card reveal">
					<div class="contact-icon">📱</div>
					<h4>WhatsApp directo</h4>
					<p>Escríbenos y te respondemos en minutos. Es la forma más rápida de empezar.</p>
					<a href="https://wa.me/584121582233">+58 412-1582233</a>
				</div>
				<div class="contact-card reveal reveal-delay-1">
					<div class="contact-icon">✉️</div>
					<h4>Correo electrónico</h4>
					<p>Para propuestas formales, preguntas detalladas o documentación del proyecto.</p>
					<a href="mailto:diegoalberto.4002@gmail.com">diegoalberto.4002@gmail.com</a>
				</div>
				<div class="contact-card reveal reveal-delay-2">
					<div class="contact-icon">📍</div>
					<h4>Ubicación</h4>
					<p>Basados en Caracas, Venezuela. Trabajamos con negocios en toda Latinoamérica de forma remota.</p>
					<a href="#">Caracas, Venezuela</a>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
import { useRevealOnMount } from '@/composables/useLandingEffects';

useRevealOnMount();
</script>

<style lang="scss" scoped>
.contacto-page {
	--rojo: var(--red);
	--blanco: var(--white);
	--rojo-alpha: var(--red-alpha);
	--rojo-border: var(--red-border);
	--dark-border: var(--dark-border);
	--dark-card: var(--dark-card);
	background: var(--hero-bg);
}

.cta-final {
	background: var(--hero-bg);
	padding: 140px 56px;
	text-align: center;
	position: relative;
	overflow: hidden;
}
.cta-final::before {
	content: '';
	position: absolute;
	inset: 0;
	background-image: linear-gradient(var(--dark-border) 1px, transparent 1px),
		linear-gradient(90deg, var(--dark-border) 1px, transparent 1px);
	background-size: 72px 72px;
	mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%);
}
#cta-particles-canvas {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	pointer-events: none;
}
.cta-interactive-zone {
	position: absolute;
	inset: 0;
	z-index: 2;
}
.cta-glow {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 600px;
	height: 400px;
	border-radius: 50%;
	background: radial-gradient(circle, rgba(214, 40, 40, 0.14) 0%, transparent 68%);
	z-index: 0;
}
.cta-final h2 {
	font-family: 'Sora', sans-serif;
	font-size: clamp(36px, 5.5vw, 68px);
	font-weight: 900;
	color: var(--blanco);
	line-height: 1.05;
	letter-spacing: -2px;
	margin-bottom: 18px;
	position: relative;
	z-index: 3;
}
.cta-final h2 em {
	font-style: normal;
	color: var(--rojo);
}
.cta-final p {
	font-size: 17px;
	color: #808090;
	max-width: 480px;
	margin: 0 auto 44px;
	line-height: 1.65;
	position: relative;
	z-index: 3;
}
.cta-btns {
	display: flex;
	justify-content: center;
	gap: 14px;
	flex-wrap: wrap;
	position: relative;
	z-index: 3;
}

.contacto-cards {
	background: var(--dark-section);
	padding: 80px 56px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	max-width: 960px;
	margin: 0 auto;
}
.contact-card {
	background: var(--dark-card);
	border: 1px solid var(--dark-border);
	border-radius: var(--radius);
	padding: 36px 28px;
	text-align: center;
	transition: all 0.25s;
}
.contact-card:hover {
	border-color: var(--rojo-border);
	transform: translateY(-3px);
}
.contact-icon {
	font-size: 32px;
	margin-bottom: 16px;
}
.contact-card h4 {
	font-family: 'Sora', sans-serif;
	font-size: 16px;
	font-weight: 700;
	color: var(--blanco);
	margin-bottom: 8px;
}
.contact-card p {
	font-size: 13px;
	color: #808090;
	margin-bottom: 16px;
	line-height: 1.5;
}
.contact-card a {
	color: var(--rojo);
	text-decoration: none;
	font-size: 14px;
	font-weight: 600;
	transition: color 0.2s;
}
.contact-card a:hover {
	color: #ff6b6b;
}

@media (max-width: 1024px) {
	.contacto-cards {
		grid-template-columns: 1fr;
		max-width: 480px;
	}
}

@media (max-width: 960px) {
	.cta-final {
		padding: 72px 24px;
	}

	.contacto-cards {
		padding: 60px 24px;
	}
}

@media (max-width: 600px) {
	.contacto-cards {
		grid-template-columns: 1fr;
	}
}
</style>
