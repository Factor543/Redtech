<template>
	<main>
		<section class="servicios" style="padding-top: 140px">
			<h2 class="s-title reveal" style="color: var(--white); max-width: 720px">
				{{ $t('_Services.hero._title.0') }}<br><em style="font-style: normal; color: var(--red)">{{ $t('_Services.hero._title.1') }}</em>
			</h2>
			<p class="s-sub reveal" style="margin-top: 14px; color: #808090">
				{{ $t('_Services.hero.description') }}
			</p>

			<div class="srv-cats reveal service-categories">
				<div
					v-for="(category, index) in serviceCategories"
					:key="category.filter"
					class="srv-cat service-category"
					:class="{ active: index === 0 }"
					:data-filter="category.filter"
				>
					{{ category.label }}
				</div>
			</div>

			<div class="srv-grid service-grid">
				<div v-for="(card, index) in serviceCards" :key="index" class="srv-card service-card" :data-category="card.category">
					<div class="srv-icon">{{ card.icon }}</div>
					<h3>{{ card.title }}</h3>
					<p>{{ card.description }}</p>
				</div>
			</div>
		</section>

		<section id="como" class="como">
			<h2 class="s-title reveal">De cero a funcionando<br>en <em style="font-style: normal; color: var(--red)">7 días</em>.</h2>
			<p class="s-sub reveal">Sin aprender tecnología. Sin configurar nada tú mismo. Nos das la información de tu negocio, nosotros construimos el sistema.</p>
			<div class="pasos">
				<div class="paso first reveal">
					<div class="paso-num">1</div>
					<div class="paso-body">
						<h4>Diagnóstico de 20 minutos</h4>
						<p>Conversamos para entender cómo opera tu negocio, qué procesos quieres automatizar y qué herramientas usas actualmente.</p>
						<span class="paso-badge">Día 1</span>
					</div>
				</div>
				<div class="paso reveal">
					<div class="paso-num">2</div>
					<div class="paso-body">
						<h4>Diseño del sistema</h4>
						<p>Mapeamos los flujos que va a manejar tu sistema: preguntas frecuentes, proceso de venta, agendamiento, inventario — lo que necesites.</p>
						<span class="paso-badge">Día 1–2</span>
					</div>
				</div>
				<div class="paso reveal">
					<div class="paso-num">3</div>
					<div class="paso-body">
						<h4>Configuración e integración</h4>
						<p>Conectamos el sistema con tus canales actuales (sin perder historial), configuramos la IA con el tono de tu negocio y enlazamos tus herramientas.</p>
						<span class="paso-badge">Día 2–5</span>
					</div>
				</div>
				<div class="paso reveal">
					<div class="paso-num">4</div>
					<div class="paso-body">
						<h4>Pruebas y ajustes</h4>
						<p>Simulamos escenarios reales contigo para asegurar que el sistema responde correctamente en todos los casos posibles.</p>
						<span class="paso-badge">Día 5–6</span>
					</div>
				</div>
				<div class="paso reveal">
					<div class="paso-num">5</div>
					<div class="paso-body">
						<h4>Lanzamiento</h4>
						<p>El sistema entra en producción. Desde este momento opera solo, 24/7. Tú recibes un resumen de todo lo que gestiona.</p>
						<span class="paso-badge">Día 7</span>
					</div>
				</div>
				<div class="paso reveal">
					<div class="paso-num">6</div>
					<div class="paso-body">
						<h4>Monitoreo de la primera semana</h4>
						<p>Revisamos el rendimiento en tiempo real durante los primeros 7 días y ajustamos lo que sea necesario para optimizar resultados.</p>
						<span class="paso-badge">Semana 2</span>
					</div>
				</div>
				<div class="paso reveal">
					<div class="paso-num">7</div>
					<div class="paso-body">
						<h4>Soporte continuo</h4>
						<p>Si tu negocio cambia, el sistema cambia contigo. Actualizamos precios, procesos, respuestas y flujos cuando lo necesites.</p>
						<span class="paso-badge">Siempre</span>
					</div>
				</div>
			</div>
		</section>

		<section class="ia-section">
			<div style="max-width: 1100px; margin: 0 auto">
				<h2 class="s-title reveal" style="color: var(--white)">RedTech vs. las alternativas.</h2>
				<p class="s-sub reveal" style="color: #808090">No todos los "sistemas de IA" son iguales. Esta es la diferencia.</p>
				<div class="ia-grid">
					<div class="ia-features">
						<div class="ia-feat reveal">
							<div class="ia-feat-icon">🗣️</div>
							<div>
								<h4>Entiende lenguaje natural</h4>
								<p>No le pidas al cliente que "escriba 1 para continuar". El sistema entiende cómo habla la gente real, con errores y todo.</p>
							</div>
						</div>
						<div class="ia-feat reveal reveal-delay-1">
							<div class="ia-feat-icon">🔗</div>
							<div>
								<h4>Opera todo tu ecosistema</h4>
								<p>Conectado a tu calendario, inventario, CRM y más. No es un chat aislado — es el sistema nervioso de tu negocio.</p>
							</div>
						</div>
						<div class="ia-feat reveal reveal-delay-2">
							<div class="ia-feat-icon">🤖</div>
							<div>
								<h4>Toma decisiones, no solo responde</h4>
								<p>Confirma disponibilidad, actualiza stock, agenda citas y notifica al equipo — sin que nadie dé instrucciones manualmente.</p>
							</div>
						</div>
						<div class="ia-feat reveal reveal-delay-3">
							<div class="ia-feat-icon">📈</div>
							<div>
								<h4>Aprende y mejora</h4>
								<p>Cada interacción refina el sistema. Con el tiempo, responde mejor y maneja situaciones que antes escalaba a humanos.</p>
							</div>
						</div>
					</div>
					<div>
						<div class="ia-compare-wrap reveal">
							<div class="ia-compare">
								<div class="ia-compare-head">
									<div>Capacidad</div>
									<div class="col-manual">Manual</div>
									<div class="col-basic">Bot básico</div>
									<div class="col-redtech">RedTech</div>
								</div>
								<div class="ia-compare-row">
									<div>Responde 24/7</div>
									<div class="x-mark">✗</div>
									<div class="partial">Parcial</div>
									<div class="check">✓</div>
								</div>
								<div class="ia-compare-row">
									<div>Entiende lenguaje natural</div>
									<div class="check">✓</div>
									<div class="x-mark">✗</div>
									<div class="check">✓</div>
								</div>
								<div class="ia-compare-row">
									<div>Cierra ventas solo</div>
									<div class="partial">Parcial</div>
									<div class="x-mark">✗</div>
									<div class="check">✓</div>
								</div>
								<div class="ia-compare-row">
									<div>Actualiza inventario</div>
									<div class="partial">Manual</div>
									<div class="x-mark">✗</div>
									<div class="check">✓</div>
								</div>
								<div class="ia-compare-row">
									<div>Integra 16+ herramientas</div>
									<div class="x-mark">✗</div>
									<div class="x-mark">✗</div>
									<div class="check">✓</div>
								</div>
								<div class="ia-compare-row">
									<div>CRM automático</div>
									<div class="x-mark">✗</div>
									<div class="x-mark">✗</div>
									<div class="check">✓</div>
								</div>
								<div class="ia-compare-row">
									<div>Reportes diarios</div>
									<div class="x-mark">✗</div>
									<div class="x-mark">✗</div>
									<div class="check">✓</div>
								</div>
							</div>
						</div>
						<div class="ia-cta reveal">
							<p>¿Listo para ver cómo funciona en tu negocio específico?</p>
							<RouterLink class="btn-red" to="/contact">Agendar diagnóstico</RouterLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useRevealOnMount, useServiceFilter } from '@/composables/useLandingEffects';

const { t } = useI18n();

const serviceCategories = computed(() => [
	{ filter: 'all', label: t('_Services.hero.categories.0') },
	{ filter: 'atencion', label: t('_Services.hero.categories.1') },
	{ filter: 'ventas', label: t('_Services.hero.categories.2') },
	{ filter: 'admin', label: t('_Services.hero.categories.3') },
	{ filter: 'crm', label: t('_Services.hero.categories.4') },
	{ filter: 'operaciones', label: t('_Services.hero.categories.5') },
]);

const serviceCards = computed(() => [
	{ category: 'atencion', icon: '⚡', title: t('_Services.hero.cards.0.0'), description: t('_Services.hero.cards.0.1') },
	{ category: 'ventas', icon: '📋', title: t('_Services.hero.cards.1.0'), description: t('_Services.hero.cards.1.1') },
	{ category: 'admin', icon: '📅', title: t('_Services.hero.cards.2.0'), description: t('_Services.hero.cards.2.1') },
	{ category: 'ventas', icon: '🛍️', title: t('_Services.hero.cards.3.0'), description: t('_Services.hero.cards.3.1') },
	{ category: 'crm', icon: '🗂️', title: t('_Services.hero.cards.4.0'), description: t('_Services.hero.cards.4.1') },
	{ category: 'operaciones', icon: '📦', title: t('_Services.hero.cards.5.0'), description: t('_Services.hero.cards.5.1') },
	{ category: 'admin', icon: '📊', title: t('_Services.hero.cards.6.0'), description: t('_Services.hero.cards.6.1') },
	{ category: 'operaciones', icon: '🔔', title: t('_Services.hero.cards.7.0'), description: t('_Services.hero.cards.7.1') },
	{ category: 'atencion', icon: '🧠', title: t('_Services.hero.cards.8.0'), description: t('_Services.hero.cards.8.1') },
]);

useRevealOnMount();
useServiceFilter();
</script>

<style lang="scss" scoped>
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }

.servicios { background: var(--dark-section); padding: 100px 56px; }
.servicios .s-title { color: var(--white); }
.servicios .s-sub { color: #808090; }

.srv-cats { display: flex; gap: 10px; flex-wrap: wrap; margin: 36px 0 48px; }
.srv-cat {
	padding: 9px 20px; border-radius: 50px; border: 1px solid #3a3a44;
	font-size: 13px; font-weight: 500; color: #909098;
	cursor: pointer; transition: all 0.2s; background: transparent;
}
.srv-cat:hover { border-color: #555; color: var(--white); }
.srv-cat.active { background: var(--red); border-color: var(--red); color: var(--white); }

.srv-grid {
	display: flex; flex-wrap: wrap;
	gap: 1px; background: #1e1e24;
	border-radius: 18px; overflow: hidden;
	max-width: 1160px; margin: 0 auto;
}
.srv-card {
	flex: 1 1 calc(33.333% - 2px);
	min-width: 260px;
	background: var(--dark-card); padding: 36px 28px;
	transition: all 0.25s; position: relative;
}
.srv-card:hover { background: #1c1c22; }
.srv-card.hidden { display: none; }
.srv-card::after {
	content: ''; position: absolute; left: 0; top: 0;
	width: 2px; height: 0; background: var(--red);
	transition: height 0.35s ease;
}
.srv-card:hover::after { height: 100%; }
.srv-icon { font-size: 28px; margin-bottom: 16px; }
.srv-card h3 { font-family: 'Sora', sans-serif; font-size: 17px; font-weight: 700; color: var(--white); margin-bottom: 8px; line-height: 1.2; }
.srv-card p { font-size: 13px; color: #808090; line-height: 1.6; }

.como { background: var(--white); padding: 100px 56px; }
.pasos { max-width: 760px; margin: 56px auto 0; }
.paso { display: flex; gap: 24px; padding: 28px 0; position: relative; }
.paso::after {
	content: ''; position: absolute; left: 24px; top: 76px;
	width: 2px; height: calc(100% - 48px);
	background: linear-gradient(180deg, var(--light-border) 0%, transparent 100%);
}
.paso:last-child::after { display: none; }
.paso-num {
	width: 48px; height: 48px; border-radius: 50%;
	background: var(--light-bg); color: #999;
	font-family: 'Sora', sans-serif; font-weight: 800; font-size: 16px;
	display: flex; align-items: center; justify-content: center; flex-shrink: 0;
	border: 2px solid var(--light-border); position: relative; z-index: 1;
}
.paso.first .paso-num { background: var(--red); color: var(--white); border-color: var(--red); box-shadow: 0 0 20px rgba(214, 40, 40, 0.4); }
.paso-body h4 { font-family: 'Sora', sans-serif; font-size: 17px; font-weight: 700; margin-bottom: 5px; }
.paso-body p { font-size: 14px; color: var(--text-muted); line-height: 1.55; }
.paso-badge { display: inline-block; margin-top: 10px; background: var(--light-bg); color: #707080; font-size: 11px; font-weight: 600; font-family: 'IBM Plex Mono', monospace; padding: 3px 11px; border-radius: 20px; border: 1px solid var(--light-border); }

.ia-section { background: var(--hero-bg); padding: 100px 56px; }
.ia-section .s-title { color: var(--white); }
.ia-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; max-width: 1100px; margin: 48px auto 0; }
.ia-features { display: flex; flex-direction: column; gap: 20px; }
.ia-feat {
	display: flex; gap: 16px; align-items: flex-start;
	background: #18181c; border-radius: var(--radius-sm); padding: 22px 24px;
	border: 1px solid var(--dark-border); transition: border-color 0.25s;
}
.ia-feat:hover { border-color: var(--red-border); }
.ia-feat-icon { width: 40px; height: 40px; border-radius: 9px; background: var(--red-alpha); display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
.ia-feat h4 { font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 700; color: var(--white); margin-bottom: 4px; }
.ia-feat p { font-size: 13px; color: #808090; line-height: 1.5; }

.ia-compare-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; border-radius: var(--radius); }
.ia-compare {
	background: #18181c; border-radius: var(--radius); border: 1px solid var(--dark-border);
	overflow: hidden; min-width: 460px;
}
.ia-compare-head { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; background: #111114; }
.ia-compare-head div {
	padding: 14px 16px; font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700;
	border-right: 1px solid var(--dark-border); text-align: center;
}
.ia-compare-head div:first-child { text-align: left; color: #606068; }
.ia-compare-head div:last-child { border: none; }
.ia-compare-head .col-manual { color: #606068; }
.ia-compare-head .col-basic { color: #808088; }
.ia-compare-head .col-redtech { color: var(--red); background: rgba(214, 40, 40, 0.08); }
.ia-compare-row { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; border-top: 1px solid var(--dark-border); }
.ia-compare-row div {
	padding: 14px 16px; font-size: 13px;
	border-right: 1px solid var(--dark-border); text-align: center;
	color: #909098; display: flex; align-items: center; justify-content: center;
}
.ia-compare-row div:first-child { text-align: left; justify-content: flex-start; color: #b0b0b8; font-weight: 500; }
.ia-compare-row div:last-child { border: none; color: var(--green); font-weight: 600; background: rgba(22, 163, 74, 0.05); }
.ia-compare-row .partial { color: #d97706; }
.ia-compare-row .check { color: var(--green); font-size: 16px; }
.ia-compare-row .x-mark { color: #505058; font-size: 16px; }
.ia-cta {
	margin-top: 24px; padding: 20px 24px;
	background: var(--red-alpha); border-radius: var(--radius-sm); border: 1px solid var(--red-border);
	display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
}
.ia-cta p { font-size: 14px; color: #e07070; font-weight: 500; }

@media (max-width: 1024px) {
	.ia-grid { grid-template-columns: 1fr; }
}

@media (max-width: 960px) {
	.servicios, .como, .ia-section { padding: 72px 24px; }
	.srv-card { flex: 1 1 100%; }
}
</style>
