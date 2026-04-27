<template>
	<main>
		<section class="planes" style="padding-top: 140px">
			<div class="planes-header">
				<h2 class="s-title reveal">Un sistema a la medida<br>de tu operación.</h2>
			</div>

			<div class="pricing-label-row reveal">
				<p>📐 <span>El precio depende del tamaño de tu operación</span> — no pagás por lo que no usás.</p>
			</div>

			<div class="pricing-grid">
				<!-- Starter -->
				<div class="plan-card reveal">
					<div class="plan-header">
						<div class="plan-label">Starter</div>
						<h4>Solo o Freelance</h4>
						<p>Para emprendedores o negocios unipersonales que quieren automatizar su atención.</p>
					</div>
					<div class="plan-pricing">
						<div class="plan-price-item">
							<span class="label">Setup único</span>
							<span class="value">$199</span>
						</div>
						<div class="plan-divider" />
						<div class="plan-price-item">
							<span class="label">Mantenimiento</span>
							<span class="value small">$49</span>
							<span class="sub">/mes</span>
						</div>
					</div>
					<div class="plan-examples">
						<span class="plan-example">1 usuario</span>
						<span class="plan-example">1 canal</span>
						<span class="plan-example">Atención + ventas</span>
					</div>
					<a href="https://wa.me/584121582233" class="plan-btn">Comenzar</a>
				</div>

				<!-- Negocio (featured) -->
				<div class="plan-card featured reveal reveal-delay-1">
					<div class="plan-header">
						<div class="plan-label">Negocio</div>
						<h4>Equipo pequeño</h4>
						<p>Para negocios con equipo que necesitan automatizar ventas, agenda y operaciones.</p>
					</div>
					<div class="plan-pricing">
						<div class="plan-price-item">
							<span class="label">Setup único</span>
							<span class="value">$399</span>
						</div>
						<div class="plan-divider" />
						<div class="plan-price-item">
							<span class="label">Mantenimiento</span>
							<span class="value small">$99</span>
							<span class="sub">/mes</span>
						</div>
					</div>
					<div class="plan-examples">
						<span class="plan-example">Hasta 10 usuarios</span>
						<span class="plan-example">2 canales</span>
						<span class="plan-example">CRM incluido</span>
					</div>
					<a href="https://wa.me/584121582233" class="plan-btn featured-btn">Comenzar ahora</a>
				</div>

				<!-- Crecimiento -->
				<div class="plan-card reveal reveal-delay-2">
					<div class="plan-header">
						<div class="plan-label">Crecimiento</div>
						<h4>Operación mediana</h4>
						<p>Para negocios en expansión con múltiples canales, equipos y procesos complejos.</p>
					</div>
					<div class="plan-pricing">
						<div class="plan-price-item">
							<span class="label">Setup único</span>
							<span class="value">$799</span>
						</div>
						<div class="plan-divider" />
						<div class="plan-price-item">
							<span class="label">Mantenimiento</span>
							<span class="value small">$179</span>
							<span class="sub">/mes</span>
						</div>
					</div>
					<div class="plan-examples">
						<span class="plan-example">Hasta 30 usuarios</span>
						<span class="plan-example">Múltiples canales</span>
						<span class="plan-example">Reportes avanzados</span>
					</div>
					<a href="https://wa.me/584121582233" class="plan-btn">Comenzar</a>
				</div>

				<!-- Empresa -->
				<div class="plan-card reveal reveal-delay-3">
					<div class="plan-header">
						<div class="plan-label">Empresa</div>
						<h4>Operación compleja</h4>
						<p>Para empresas con operaciones complejas, múltiples áreas y necesidades a medida.</p>
					</div>
					<div class="plan-pricing">
						<div class="plan-price-item">
							<span class="label">Setup único</span>
							<span class="value" style="font-size: 20px">A medida</span>
						</div>
						<div class="plan-divider" />
						<div class="plan-price-item">
							<span class="label">Mantenimiento</span>
							<span class="value small">$329+</span>
							<span class="sub">/mes</span>
						</div>
					</div>
					<div class="plan-examples">
						<span class="plan-example">30+ usuarios</span>
						<span class="plan-example">Ilimitado</span>
						<span class="plan-example">Soporte prioritario</span>
					</div>
					<a href="https://wa.me/584121582233" class="plan-btn">Consultar</a>
				</div>
			</div>

			<div class="pricing-note reveal">
				💡 Todos los planes incluyen implementación completa en 7 días y soporte continuo.<br>
				<strong>Si en 30 días no sentís que ahorra tiempo y ayuda a vender más — no pagás el mantenimiento.</strong>
			</div>
		</section>

		<section class="garantia">
			<h2>30 días de garantía real.</h2>
			<p>Si después de un mes completo no sentís que RedTech ahorró tiempo y ayudó a tu negocio a vender más — no pagás el mantenimiento. Sin letra chica.</p>
			<a href="https://wa.me/584121582233" class="btn-white">Hablar con Diego</a>
		</section>
	</main>
</template>

<script setup lang="ts">
import { useRevealOnMount } from '@/composables/useLandingEffects';

useRevealOnMount();
</script>

<style lang="scss" scoped>
.planes {
	background: var(--dark-section);
	padding: 100px 56px;
}

.planes .s-title {
	color: var(--white);
}

.planes-header {
	text-align: center;
	max-width: 700px;
	margin: 0 auto 56px;
}

.planes-header .s-sub {
	margin: 14px auto 0;
	color: #808090;
}

.pricing-label-row {
	text-align: center;
	margin-bottom: 36px;
}

.pricing-label-row p {
	display: inline-flex;
	align-items: center;
	gap: 10px;
	background: rgba(255, 255, 255, 0.04);
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: 50px;
	padding: 10px 22px;
	font-size: 13px;
	color: #909098;
	font-weight: 500;
}

.pricing-label-row p span {
	color: var(--red);
	font-weight: 700;
}

.pricing-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 16px;
	max-width: 1200px;
	margin: 0 auto;
}

.plan-card {
	background: #1a1a1e;
	border: 1px solid #2a2a30;
	border-radius: var(--radius);
	padding: 28px 24px;
	transition: all 0.25s;
	position: relative;
	display: flex;
	flex-direction: column;
}

.plan-card:hover {
	border-color: #404048;
	transform: translateY(-4px);
}

.plan-card.featured {
	border-color: var(--red);
	background: linear-gradient(160deg, #1e1a1a 0%, rgba(214, 40, 40, 0.07) 100%);
}

.plan-card.featured::before {
	content: 'MÁS POPULAR';
	position: absolute;
	top: -11px;
	left: 50%;
	transform: translateX(-50%);
	background: var(--red);
	color: white;
	font-family: 'IBM Plex Mono', monospace;
	font-size: 9px;
	font-weight: 600;
	letter-spacing: 1px;
	padding: 4px 14px;
	border-radius: 4px;
	white-space: nowrap;
}

.plan-header {
	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid #2a2a30;
}

.plan-card.featured .plan-header {
	border-color: rgba(214, 40, 40, 0.25);
}

.plan-label {
	font-family: 'IBM Plex Mono', monospace;
	font-size: 10px;
	color: #606068;
	letter-spacing: 2px;
	text-transform: uppercase;
	margin-bottom: 8px;
}

.plan-card.featured .plan-label {
	color: var(--red);
}

.plan-header h4 {
	font-family: 'Sora', sans-serif;
	font-size: 20px;
	font-weight: 800;
	color: var(--white);
	margin-bottom: 6px;
}

.plan-header p {
	font-size: 13px;
	color: #707080;
	line-height: 1.4;
}

.plan-pricing {
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 20px;
}

.plan-price-item {
	display: flex;
	flex-direction: column;
}

.plan-price-item .label {
	font-size: 10px;
	color: #505058;
	font-family: 'IBM Plex Mono', monospace;
	margin-bottom: 2px;
}

.plan-price-item .value {
	font-family: 'Sora', sans-serif;
	font-size: 26px;
	font-weight: 800;
	color: var(--white);
	line-height: 1;
}

.plan-price-item .value.small {
	font-size: 20px;
}

.plan-price-item .sub {
	font-size: 11px;
	color: #707080;
	margin-top: 2px;
}

.plan-divider {
	height: 1px;
	background: #2a2a30;
	margin: 4px 0 14px;
}

.plan-examples {
	display: flex;
	gap: 5px;
	flex-wrap: wrap;
	margin-bottom: 20px;
}

.plan-example {
	background: rgba(255, 255, 255, 0.04);
	color: #808090;
	font-size: 10px;
	padding: 3px 8px;
	border-radius: 4px;
}

.plan-card.featured .plan-example {
	background: var(--red-alpha);
	color: #e07070;
}

.plan-btn {
	display: block;
	text-align: center;
	padding: 13px 20px;
	border-radius: var(--radius-sm);
	font-family: 'Sora', sans-serif;
	font-weight: 700;
	font-size: 13px;
	text-decoration: none;
	transition: all 0.2s;
	border: 1px solid #3a3a44;
	color: var(--white);
	margin-top: auto;
}

.plan-btn:hover {
	background: #2a2a30;
}

.plan-btn.featured-btn {
	background: var(--red);
	border-color: var(--red);
}

.plan-btn.featured-btn:hover {
	background: var(--red-hover);
}

.pricing-note {
	max-width: 600px;
	margin: 32px auto 0;
	padding: 18px 24px;
	background: rgba(255, 255, 255, 0.02);
	border: 1px solid #2a2a30;
	border-radius: var(--radius-sm);
	font-size: 13px;
	color: #808090;
	text-align: center;
	line-height: 1.7;
}

.pricing-note strong {
	color: var(--green);
}

.garantia {
	background: var(--red);
	padding: 80px 56px;
	text-align: center;
}

.garantia h2 {
	font-family: 'Sora', sans-serif;
	font-size: clamp(26px, 4vw, 46px);
	font-weight: 900;
	color: var(--white);
	letter-spacing: -1px;
	margin-bottom: 16px;
}

.garantia p {
	font-size: 17px;
	color: rgba(255, 255, 255, 0.85);
	max-width: 560px;
	margin: 0 auto 36px;
	line-height: 1.65;
}

.btn-white {
	display: inline-block;
	background: var(--white);
	color: var(--red);
	padding: 15px 36px;
	border-radius: var(--radius-sm);
	font-family: 'Sora', sans-serif;
	font-weight: 700;
	font-size: 15px;
	text-decoration: none;
	transition: all 0.2s;
}

.btn-white:hover {
	transform: translateY(-2px);
	box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1024px) {
	.pricing-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 960px) {
	.planes,
	.garantia {
		padding: 72px 24px;
	}
}

@media (max-width: 600px) {
	.pricing-grid {
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	}

	.plan-card {
		padding: 22px 18px;
	}

	.plan-price-item .value {
		font-size: 22px;
	}
}

@media (max-width: 400px) {
	.pricing-grid {
		grid-template-columns: 1fr;
	}
}
</style>
