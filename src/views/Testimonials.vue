<template>
	<main>
		<div class="testimonios-page">
			<div class="test-hero">
				<div class="test-hero-inner">
					<div class="hero-pill" style="margin-bottom: 28px">
						<div class="dot" />
						<span>RESULTADOS REALES</span>
					</div>
					<h2 class="s-title reveal" style="color: var(--white)">Lo que dicen los negocios<br>que ya operan con IA.</h2>
					<p class="s-sub reveal" style="margin: 14px auto 0; color: #606070">Desliza sobre las tarjetas para descubrir cada historia.</p>
				</div>
			</div>

			<div id="spotlightSection" class="testimonios-section">
				<div class="test-grid">
					<div class="test-card">
						<div class="test-card-glow" />
						<div class="test-card-inner">
							<div class="test-stars">★★★★★</div>
							<p class="test-quote">Tenía miedo de que los clientes notaran que era un bot. Al mes, varios me preguntaron si había contratado a alguien nuevo. El sistema habla exactamente como hablo yo.</p>
							<div class="test-author">
								<div class="test-avatar" style="background: rgba(214, 40, 40, 0.15)">🛍️</div>
								<div>
									<h5>Carlos R.</h5>
									<p>Dueño de Carnicería · Caracas</p>
									<span class="test-tag">INVENTARIO + TELEGRAM</span>
								</div>
							</div>
						</div>
					</div>

					<div class="test-card">
						<div class="test-card-glow" />
						<div class="test-card-inner">
							<div class="test-stars">★★★★★</div>
							<p class="test-quote">Automatizar la atención de nuestra academia cambió las reglas del juego. Los alumnos consiguen información al instante, y yo puedo concentrarme completamente en enseñar.</p>
							<div class="test-author">
								<div class="test-avatar" style="background: rgba(214, 40, 40, 0.15)">🎓</div>
								<div>
									<h5>Elena M.</h5>
									<p>Directora de Academia · Valencia</p>
									<span class="test-tag">INSCRIPCIONES + CRM</span>
								</div>
							</div>
						</div>
					</div>

					<div class="test-card">
						<div class="test-card-glow" />
						<div class="test-card-inner">
							<div class="test-stars">★★★★★</div>
							<p class="test-quote">Antes perdía ventas los fines de semana porque nadie podía atender. Ahora el sistema cierra ventas mientras duermo. En el primer mes recuperé la inversión con creces.</p>
							<div class="test-author">
								<div class="test-avatar" style="background: rgba(214, 40, 40, 0.15)">🛒</div>
								<div>
									<h5>Miguel T.</h5>
									<p>Dueño de Tienda Online · Maracaibo</p>
									<span class="test-tag">VENTAS 24/7</span>
								</div>
							</div>
						</div>
					</div>

					<div class="test-card">
						<div class="test-card-glow" />
						<div class="test-card-inner">
							<div class="test-stars">★★★★★</div>
							<p class="test-quote">Las citas de mi consultorio ahora se agendan solas. Los recordatorios automáticos redujeron las cancelaciones un 60% y yo recuperé casi 2 horas diarias que antes usaba coordinando.</p>
							<div class="test-author">
								<div class="test-avatar" style="background: rgba(214, 40, 40, 0.15)">💆</div>
								<div>
									<h5>Adriana V.</h5>
									<p>Psicóloga Clínica · Caracas</p>
									<span class="test-tag">AGENDAMIENTO + RECORDATORIOS</span>
								</div>
							</div>
						</div>
					</div>

					<div class="test-card">
						<div class="test-card-glow" />
						<div class="test-card-inner">
							<div class="test-stars">★★★★★</div>
							<p class="test-quote">En 7 días ya tenía el sistema corriendo. Me sorprendió lo rápido que fue. Diego lo configuró con la voz exacta de mi restaurante y desde el día 1 ya estaba gestionando reservas solo.</p>
							<div class="test-author">
								<div class="test-avatar" style="background: rgba(214, 40, 40, 0.15)">🍽️</div>
								<div>
									<h5>Roberto L.</h5>
									<p>Propietario de Restaurante · Mérida</p>
									<span class="test-tag">RESERVAS + PEDIDOS</span>
								</div>
							</div>
						</div>
					</div>

					<div class="test-card">
						<div class="test-card-glow" />
						<div class="test-card-inner">
							<div class="test-stars">★★★★★</div>
							<p class="test-quote">Lo que más me impresionó es que el sistema entiende cómo hablamos aquí. Con venezolanismos y todo. Mis clientes se sienten atendidos de verdad — y yo tengo tiempo para crecer el negocio.</p>
							<div class="test-author">
								<div class="test-avatar" style="background: rgba(214, 40, 40, 0.15)">💼</div>
								<div>
									<h5>Sofía C.</h5>
									<p>Directora de Agencia · Barquisimeto</p>
									<span class="test-tag">ATENCIÓN + CRM</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="test-stats reveal">
					<div class="test-stat">
						<div class="val"><b>+40</b></div>
						<div class="lbl">Negocios automatizados</div>
					</div>
					<div class="test-stat">
						<div class="val"><b>98%</b></div>
						<div class="lbl">Clientes satisfechos</div>
					</div>
					<div class="test-stat">
						<div class="val"><b>2h+</b></div>
						<div class="lbl">Ahorradas por dueño al día</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useRevealOnMount } from '@/composables/useLandingEffects';

useRevealOnMount();

let teardownSpotlight: (() => void) | null = null;

function initSpotlight(): () => void {
	const section = document.getElementById('spotlightSection');
	if (!section) return () => {};

	const cards = section.querySelectorAll<HTMLElement>('.test-card');
	const glows = section.querySelectorAll<HTMLElement>('.test-card-glow');

	const handleMove = (e: MouseEvent) => {
		const sRect = section.getBoundingClientRect();
		const sx = e.clientX - sRect.left;
		const sy = e.clientY - sRect.top;
		section.style.setProperty('--mouse-x', `${sx}px`);
		section.style.setProperty('--mouse-y', `${sy}px`);

		cards.forEach((card, i) => {
			const cRect = card.getBoundingClientRect();
			const cx = e.clientX - cRect.left;
			const cy = e.clientY - cRect.top;
			card.style.setProperty('--mouse-x', `${cx}px`);
			card.style.setProperty('--mouse-y', `${cy}px`);
			if (glows[i]) {
				glows[i].style.setProperty('--mouse-x', `${cx}px`);
				glows[i].style.setProperty('--mouse-y', `${cy}px`);
			}
		});
	};

	const handleLeave = () => {
		cards.forEach((card) => {
			card.style.setProperty('--mouse-x', '-100%');
			card.style.setProperty('--mouse-y', '-100%');
		});
	};

	section.addEventListener('mousemove', handleMove);
	section.addEventListener('mouseleave', handleLeave);

	return () => {
		section.removeEventListener('mousemove', handleMove);
		section.removeEventListener('mouseleave', handleLeave);
	};
}

onMounted(() => {
	teardownSpotlight = initSpotlight();
});

onUnmounted(() => {
	teardownSpotlight?.();
});
</script>

<style lang="scss" scoped>
.testimonios-page { background: #09090c; }

.hero-pill {
	display: inline-flex;
	align-items: center;
	gap: 9px;
	background: var(--red-alpha);
	border: 1px solid var(--red-border);
	border-radius: 50px;
	padding: 7px 16px;
}

.hero-pill .dot {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: var(--red);
	flex-shrink: 0;
	box-shadow: 0 0 8px var(--red);
}

.hero-pill span {
	font-family: 'IBM Plex Mono', monospace;
	font-size: 11px;
	color: #e07070;
	letter-spacing: 1.5px;
}

.test-hero {
	padding: 120px 56px 80px;
	background: #09090c;
	text-align: center;
	position: relative;
	overflow: hidden;
}
.test-hero::before {
	content: '';
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 800px;
	height: 400px;
	background: radial-gradient(ellipse, rgba(214, 40, 40, 0.08) 0%, transparent 70%);
}
.test-hero-inner { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; }
.test-hero .s-title { color: var(--white); }
.test-hero .s-sub { color: #606070; margin: 14px auto 0; }

.testimonios-section {
	padding: 80px 56px 120px;
	background: #09090c;
	position: relative;
	--mouse-x: 50%;
	--mouse-y: 50%;
}
.testimonios-section::before {
	content: '';
	position: absolute;
	inset: 0;
	background: radial-gradient(700px circle at var(--mouse-x) var(--mouse-y), rgba(214, 40, 40, 0.05), transparent 60%);
	pointer-events: none;
	z-index: 0;
	transition: background 0.05s;
}

.test-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	max-width: 1160px;
	margin: 0 auto;
	position: relative;
	z-index: 1;
}

.test-card {
	position: relative;
	padding: 1px;
	border-radius: 18px;
	background: rgba(255, 255, 255, 0.05);
	--mouse-x: -100%;
	--mouse-y: -100%;
	transition: background 0.3s;
}
.test-card::before {
	content: '';
	position: absolute;
	inset: 0;
	border-radius: inherit;
	background: radial-gradient(280px circle at var(--mouse-x) var(--mouse-y), rgba(214, 40, 40, 0.85), rgba(214, 40, 40, 0.2) 40%, transparent 70%);
	opacity: 0;
	transition: opacity 0.4s;
	z-index: 0;
}
.testimonios-section:hover .test-card::before { opacity: 1; }

.test-card-inner {
	position: relative;
	z-index: 1;
	background: #111116;
	border-radius: 17px;
	padding: 32px;
	height: 100%;
	display: flex;
	flex-direction: column;
	transition: background 0.3s;
}
.test-card:hover .test-card-inner { background: #13131a; }

.test-card-glow {
	position: absolute;
	inset: 0;
	border-radius: 17px;
	overflow: hidden;
	pointer-events: none;
	z-index: 0;
}
.test-card-glow::after {
	content: '';
	position: absolute;
	inset: 0;
	background: radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), rgba(214, 40, 40, 0.08), transparent 70%);
	opacity: 0;
	transition: opacity 0.4s;
}
.testimonios-section:hover .test-card-glow::after { opacity: 1; }

.test-stars { color: var(--red); font-size: 14px; margin-bottom: 18px; letter-spacing: 3px; position: relative; z-index: 2; }
.test-quote {
	font-size: 15px;
	color: #909098;
	line-height: 1.7;
	flex: 1;
	position: relative;
	z-index: 2;
	margin-bottom: 24px;
}
.test-quote::before {
	content: '"';
	font-family: 'Sora', sans-serif;
	font-size: 48px;
	color: rgba(214, 40, 40, 0.2);
	display: block;
	line-height: 0.8;
	margin-bottom: 12px;
}
.test-author {
	display: flex;
	align-items: center;
	gap: 14px;
	position: relative;
	z-index: 2;
	padding-top: 20px;
	border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.test-avatar {
	width: 44px;
	height: 44px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	flex-shrink: 0;
	border: 2px solid rgba(214, 40, 40, 0.3);
}
.test-author h5 { font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 700; color: var(--white); margin-bottom: 2px; }
.test-author p { font-size: 12px; color: #606070; }
.test-tag {
	display: inline-block;
	margin-top: 6px;
	font-size: 10px;
	font-family: 'IBM Plex Mono', monospace;
	color: var(--red);
	background: var(--red-alpha);
	border: 1px solid var(--red-border);
	padding: 2px 8px;
	border-radius: 4px;
	letter-spacing: 1px;
}

.test-stats {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1px;
	background: rgba(255, 255, 255, 0.05);
	max-width: 700px;
	margin: 64px auto 0;
	border-radius: 16px;
	overflow: hidden;
}
.test-stat { background: #111116; padding: 32px 24px; text-align: center; }
.test-stat .val { font-family: 'Sora', sans-serif; font-size: 36px; font-weight: 900; color: var(--white); letter-spacing: -2px; }
.test-stat .val b { color: var(--red); }
.test-stat .lbl { font-size: 13px; color: #606070; margin-top: 6px; }

@media (max-width: 1024px) {
	.test-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 960px) {
	.test-hero { padding: 100px 24px 60px; }
	.testimonios-section { padding: 60px 24px 80px; }
	.test-grid { grid-template-columns: 1fr; }
	.test-stats { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 600px) {
	.test-stats { grid-template-columns: 1fr; }
}
</style>
