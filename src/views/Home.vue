<template>
	<main>
		<section class="hero">
			<canvas id="hero-particles-canvas" />
			<div id="hero-zone" class="hero-interactive-zone" />
			<div class="glow-1" aria-hidden="true" />
			<div class="glow-2" aria-hidden="true" />
			<div class="hero-inner">
				<div class="hero-pill">
					<div class="dot" />
					<span>{{ $t('_Home.hero.pill') }}</span>
				</div>
				<h1>{{ $t('_Home.hero._title.0') }}<br><em>{{ $t('_Home.hero._title.1') }}</em>.<br>{{ $t('_Home.hero._title.2') }} <u>{{ $t('_Home.hero._title.3') }}</u>.</h1>
				<p class="hero-lead">
					{{ $t('_Home.hero.lead') }}
				</p>
				<div class="hero-actions">
					<RouterLink class="btn-red" to="/contact">{{ $t('_Home.hero.cta_primary') }}</RouterLink>
					<RouterLink class="btn-outline" to="/pricing">{{ $t('_Home.hero.cta_secondary') }}</RouterLink>
				</div>
				<div class="hero-stats">
					<div class="h-stat">
						<div class="val">{{ $t('_Home.hero.stats.0.value') }}</div>
						<div class="lbl">{{ $t('_Home.hero.stats.0.label') }}</div>
					</div>
					<div class="h-stat">
						<div class="val">{{ $t('_Home.hero.stats.1.value') }}</div>
						<div class="lbl">{{ $t('_Home.hero.stats.1.label') }}</div>
					</div>
					<div class="h-stat">
						<div class="val">{{ $t('_Home.hero.stats.2.value') }}</div>
						<div class="lbl">{{ $t('_Home.hero.stats.2.label') }}</div>
					</div>
				</div>
			</div>
		</section>

		<section class="ia-highlight">
			<div class="ia-highlight-inner">
				<div class="ia-badge reveal">
					<div class="ia-badge-icon">✦</div>
					<span>{{ $t('_Home.ia.badge') }}</span>
				</div>
				<h2 class="reveal">{{ $t('_Home.ia._title.0') }}<br>{{ $t('_Home.ia._title.1') }}</h2>
				<p class="reveal reveal-delay-1">
					{{ $t('_Home.ia.description') }}
				</p>
				<div class="ia-features-mini reveal reveal-delay-2">
					<div class="ia-feat-mini"><span class="icon">🧠</span><span>{{ $t('_Home.ia.features.0') }}</span></div>
					<div class="ia-feat-mini"><span class="icon">🔗</span><span>{{ $t('_Home.ia.features.1') }}</span></div>
					<div class="ia-feat-mini"><span class="icon">⚡</span><span>{{ $t('_Home.ia.features.2') }}</span></div>
					<div class="ia-feat-mini"><span class="icon">🎯</span><span>{{ $t('_Home.ia.features.3') }}</span></div>
				</div>
			</div>
		</section>

		<section class="canales-section">
			<div class="canales-label"><span>{{ $t('_Home.channels.label') }}</span></div>
			<div class="carousel-wrapper">
				<div class="carousel-track">
					<template v-for="(_, repeatIndex) in [0, 1]" :key="repeatIndex">
						<div v-for="(channel, index) in homeChannelItems" :key="`${repeatIndex}-${index}`" class="canal-item">
							<div class="canal-icon" :class="channel.className">{{ channel.icon }}</div>
							<div>
								<h4>{{ channel.title }}</h4>
								<p>{{ channel.description }}</p>
							</div>
						</div>
					</template>
				</div>
			</div>
		</section>

		<section class="problema">
			<div style="max-width: 1160px; margin: 0 auto">
				<h2 class="s-title reveal">{{ $t('_Home.problem._title.0') }}<br>{{ $t('_Home.problem._title.1') }}</h2>
			</div>
			<div class="problema-grid">
				<div>
					<p class="s-sub reveal" style="max-width: 100%; margin-top: 24px; margin-bottom: 32px">
						No porque no quieras hacerlo bien — sino porque no hay horas suficientes en el día para
						atender, coordinar y además crecer. Eso tiene solución.
					</p>
					<div class="pain-list">
						<div v-for="(pain, index) in homePainItems" :key="index" class="pain-row reveal">
							<div class="pain-icon">{{ pain.icon }}</div>
							<div>
								<h4>{{ pain.title }}</h4>
								<p>{{ pain.description }}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="chat-card reveal">
					<div class="chat-top">
						<div class="chat-ava">👜</div>
						<div>
							<h5>{{ $t('_Home.problem.chat.title') }}</h5>
							<div class="chat-status">
								<div class="chat-status-dot" />
								<p>{{ $t('_Home.problem.chat.status') }}</p>
							</div>
						</div>
					</div>
					<div class="chat-msgs">
						<div class="msg msg-in">{{ homeChatMessages[0] }}</div>
						<div class="msg msg-out">{{ homeChatMessages[1] }}</div>
						<div class="msg-time">⚡ {{ $t('_Home.problem.chat.responded') }}</div>
						<div class="msg msg-in">{{ homeChatMessages[2] }}</div>
						<div class="msg msg-out">{{ homeChatMessages[3] }}</div>
						<div class="msg msg-in">{{ homeChatMessages[4] }}</div>
						<div class="msg msg-out">✅ {{ homeChatMessages[5] }}</div>
					</div>
					<div class="chat-note">✦ {{ $t('_Home.problem.chat.note') }}</div>
				</div>
			</div>
		</section>

		<section class="usos">
			<div class="usos-header">
				<h2 class="s-title reveal">{{ $t('_Home.uses._title.0') }}<br>{{ $t('_Home.uses._title.1') }}</h2>
				<p class="s-sub reveal">
					Si atiendes clientes, vendes algo o coordinas un equipo, RedTech puede automatizarlo.
				</p>
			</div>
			<div class="usos-grid">
				<div
					v-for="(useCard, index) in homeUseCards"
					:key="index"
					class="uso-card reveal"
					:class="{
						highlight: index === 0,
					}"
				>
					<div class="uso-emoji">{{ useCard.icon }}</div>
					<h4>{{ useCard.title }}</h4>
					<p>{{ useCard.description }}</p>
					<span class="uso-badge" :class="useCard.statusClass">{{ useCard.status }}</span>
				</div>
			</div>
		</section>

		<section id="nosotros" class="mv">
			<h2 class="s-title reveal">{{ $t('_Home.about.title') }}</h2>
			<div class="mv-cards">
				<div class="mv-card reveal">
					<div class="mv-label">{{ $t('_Home.about.mission') }}</div>
					<h3>{{ $t('_Home.about.mission_title') }}</h3>
					<p>{{ $t('_Home.about.mission_description') }}</p>
				</div>
				<div class="mv-card reveal reveal-delay-1">
					<div class="mv-label">{{ $t('_Home.about.vision') }}</div>
					<h3>{{ $t('_Home.about.vision_title') }}</h3>
					<p>{{ $t('_Home.about.vision_description') }}</p>
				</div>
			</div>
			<div class="valores">
				<div v-for="(valueItem, index) in homeValueItems" :key="index" class="valor-card reveal">
					<div class="val-icon">{{ valueItem.icon }}</div>
					<h4>{{ valueItem.title }}</h4>
					<p>{{ valueItem.description }}</p>
				</div>
			</div>
		</section>

		<section class="latam-strip reveal">
			<div class="latam-strip-inner">
				<div class="latam-left">
					<span class="latam-tag">🌎 {{ $t('_Home.latam.tag') }}</span>
					<h3>{{ $t('_Home.latam._title.0') }}<br>{{ $t('_Home.latam._title.1') }} <em>{{ $t('_Home.latam._title.2') }}</em></h3>
				</div>
				<div class="latam-flags">
					<span>🇻🇪</span><span>🇨🇴</span><span>🇵🇪</span>
					<span>🇪🇨</span><span>🇨🇱</span><span>🇲🇽</span><span>🇦🇷</span>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">	
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useRevealOnMount } from '@/composables/useLandingEffects';

const { t } = useI18n();

const homeChannelItems = computed(() => [
	{ className: 'whatsapp', icon: '📱', title: t('_Home.channels.items.0.0'), description: t('_Home.channels.items.0.1') },
	{ className: 'instagram', icon: '📸', title: t('_Home.channels.items.1.0'), description: t('_Home.channels.items.1.1') },
	{ className: 'gmail', icon: '✉️', title: t('_Home.channels.items.2.0'), description: t('_Home.channels.items.2.1') },
	{ className: 'sheets', icon: '📊', title: t('_Home.channels.items.3.0'), description: t('_Home.channels.items.3.1') },
	{ className: 'calendar', icon: '📅', title: t('_Home.channels.items.4.0'), description: t('_Home.channels.items.4.1') },
	{ className: 'slack', icon: '💬', title: t('_Home.channels.items.5.0'), description: t('_Home.channels.items.5.1') },
	{ className: 'notion', icon: '📝', title: t('_Home.channels.items.6.0'), description: t('_Home.channels.items.6.1') },
	{ className: 'telegram', icon: '✈️', title: t('_Home.channels.items.7.0'), description: t('_Home.channels.items.7.1') },
	{ className: 'trello', icon: '📋', title: t('_Home.channels.items.8.0'), description: t('_Home.channels.items.8.1') },
	{ className: 'drive', icon: '📁', title: t('_Home.channels.items.9.0'), description: t('_Home.channels.items.9.1') },
	{ className: 'hubspot', icon: '🔶', title: t('_Home.channels.items.10.0'), description: t('_Home.channels.items.10.1') },
	{ className: 'zapier', icon: '⚡', title: t('_Home.channels.items.11.0'), description: t('_Home.channels.items.11.1') },
	{ className: 'airtable', icon: '🗃️', title: t('_Home.channels.items.12.0'), description: t('_Home.channels.items.12.1') },
	{ className: 'monday', icon: '📊', title: t('_Home.channels.items.13.0'), description: t('_Home.channels.items.13.1') },
	{ className: 'zoom', icon: '🎥', title: t('_Home.channels.items.14.0'), description: t('_Home.channels.items.14.1') },
	{ className: 'messenger', icon: '💬', title: t('_Home.channels.items.15.0'), description: t('_Home.channels.items.15.1') },
]);

const homePainItems = computed(() => [
	{ icon: '📵', title: t('_Home.problem.pains.0.title'), description: t('_Home.problem.pains.0.description') },
	{ icon: '🔁', title: t('_Home.problem.pains.1.title'), description: t('_Home.problem.pains.1.description') },
	{ icon: '🗂️', title: t('_Home.problem.pains.2.title'), description: t('_Home.problem.pains.2.description') },
	{ icon: '😓', title: t('_Home.problem.pains.3.title'), description: t('_Home.problem.pains.3.description') },
]);

const homeChatMessages = computed(() => [
	t('_Home.problem.chat.messages.0'),
	t('_Home.problem.chat.messages.1'),
	t('_Home.problem.chat.messages.2'),
	t('_Home.problem.chat.messages.3'),
	t('_Home.problem.chat.messages.4'),
	t('_Home.problem.chat.messages.5'),
]);

const homeUseCards = computed(() => [
	{ icon: '🛍️', title: t('_Home.uses.cards.0.0'), description: t('_Home.uses.cards.0.1'), status: t('_Home.uses.cards.0.2'), statusClass: 'u-activo' },
	{ icon: '🍽️', title: t('_Home.uses.cards.1.0'), description: t('_Home.uses.cards.1.1'), status: t('_Home.uses.cards.1.2'), statusClass: 'u-activo' },
	{ icon: '💆', title: t('_Home.uses.cards.2.0'), description: t('_Home.uses.cards.2.1'), status: t('_Home.uses.cards.2.2'), statusClass: 'u-activo' },
	{ icon: '🎓', title: t('_Home.uses.cards.3.0'), description: t('_Home.uses.cards.3.1'), status: t('_Home.uses.cards.3.2'), statusClass: 'u-activo' },
	{ icon: '🏗️', title: t('_Home.uses.cards.4.0'), description: t('_Home.uses.cards.4.1'), status: t('_Home.uses.cards.4.2'), statusClass: 'u-activo' },
	{ icon: '🚗', title: t('_Home.uses.cards.5.0'), description: t('_Home.uses.cards.5.1'), status: t('_Home.uses.cards.5.2'), statusClass: 'u-pronto' },
	{ icon: '🏠', title: t('_Home.uses.cards.6.0'), description: t('_Home.uses.cards.6.1'), status: t('_Home.uses.cards.6.2'), statusClass: 'u-pronto' },
	{ icon: '⚖️', title: t('_Home.uses.cards.7.0'), description: t('_Home.uses.cards.7.1'), status: t('_Home.uses.cards.7.2'), statusClass: 'u-pronto' },
]);

const homeValueItems = computed(() => [
	{ icon: '⚡', title: t('_Home.about.values.0.0'), description: t('_Home.about.values.0.1') },
	{ icon: '🎯', title: t('_Home.about.values.1.0'), description: t('_Home.about.values.1.1') },
	{ icon: '🌎', title: t('_Home.about.values.2.0'), description: t('_Home.about.values.2.1') },
	{ icon: '🤝', title: t('_Home.about.values.3.0'), description: t('_Home.about.values.3.1') },
]);

useRevealOnMount();
</script>

<style lang="scss" scoped>

.reveal-delay-1 {
	transition-delay: 0.1s;
}
.reveal-delay-2 {
	transition-delay: 0.2s;
}
.reveal-delay-3 {
	transition-delay: 0.3s;
}

.hero {
	background: var(--hero-bg);
	padding: 148px 56px 100px;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	overflow: hidden;
}
.hero::before {
	content: '';
	position: absolute;
	inset: 0;
	z-index: 0;
	background-image: linear-gradient(var(--dark-border) 1px, transparent 1px),
		linear-gradient(90deg, var(--dark-border) 1px, transparent 1px);
	background-size: 72px 72px;
	mask-image: radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 100%);
}
#hero-particles-canvas {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
}
.hero-interactive-zone {
	position: absolute;
	inset: 0;
	z-index: 2;
}
.glow-1 {
	position: absolute;
	z-index: 0;
	width: 700px;
	height: 700px;
	border-radius: 50%;
	background: radial-gradient(circle, rgba(214, 40, 40, 0.16) 0%, transparent 68%);
	top: -200px;
	right: -160px;
	animation: pulse-glow 4s ease-in-out infinite;
}
.glow-2 {
	position: absolute;
	z-index: 0;
	width: 420px;
	height: 420px;
	border-radius: 50%;
	background: radial-gradient(circle, rgba(214, 40, 40, 0.08) 0%, transparent 68%);
	bottom: -80px;
	left: 8%;
	animation: pulse-glow 6s ease-in-out infinite reverse;
}
@keyframes pulse-glow {
	0%,
	100% {
		transform: scale(1);
		opacity: 1;
	}
	50% {
		transform: scale(1.08);
		opacity: 0.75;
	}
}
.hero-inner {
	position: relative;
	z-index: 3;
	max-width: 860px;
}
.hero-pill {
	display: inline-flex;
	align-items: center;
	gap: 9px;
	background: var(--red-alpha);
	border: 1px solid var(--red-border);
	border-radius: 50px;
	padding: 7px 16px;
	margin-bottom: 36px;
}
.hero-pill .dot {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: var(--red);
	flex-shrink: 0;
	animation: blink 2s ease-in-out infinite;
	box-shadow: 0 0 8px var(--red);
}
@keyframes blink {
	0%,
	100% {
		opacity: 1;
		box-shadow: 0 0 8px var(--red);
	}
	50% {
		opacity: 0.3;
		box-shadow: none;
	}
}
.hero-pill span {
	font-family: 'IBM Plex Mono', monospace;
	font-size: 11px;
	color: #e07070;
	letter-spacing: 1.5px;
}
.hero h1 {
	font-family: 'Sora', sans-serif;
	font-size: clamp(44px, 6.5vw, 82px);
	font-weight: 900;
	color: var(--white);
	line-height: 1.02;
	letter-spacing: -2.5px;
	margin-bottom: 24px;
}
.hero h1 em {
	font-style: normal;
	color: var(--red);
}
.hero h1 u {
	text-decoration-color: var(--red);
	text-underline-offset: 7px;
	text-decoration-thickness: 3px;
}
.hero-lead {
	font-size: 18px;
	font-weight: 300;
	color: #a8a8b8;
	max-width: 540px;
	line-height: 1.7;
	margin-bottom: 44px;
}
.hero-actions {
	display: flex;
	gap: 14px;
	flex-wrap: wrap;
}
.hero-stats {
	display: flex;
	gap: 0;
	margin-top: 80px;
	padding-top: 40px;
	border-top: 1px solid var(--dark-border);
	position: relative;
	z-index: 3;
}
.h-stat {
	flex: 1;
	padding-right: 40px;
}
.h-stat + .h-stat {
	padding-left: 40px;
	border-left: 1px solid var(--dark-border);
}
.h-stat .val {
	font-family: 'Sora', sans-serif;
	font-size: 34px;
	font-weight: 900;
	color: var(--white);
	letter-spacing: -1px;
	line-height: 1;
}
.h-stat .val b {
	color: var(--red);
}
.h-stat .lbl {
	font-size: 13px;
	color: #606070;
	margin-top: 6px;
}

.ia-highlight {
	background: linear-gradient(180deg, var(--hero-bg) 0%, #14141a 100%);
	padding: 80px 56px;
	position: relative;
	overflow: hidden;
}
.ia-highlight::before {
	content: '';
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 700px;
	height: 350px;
	background: radial-gradient(ellipse, rgba(214, 40, 40, 0.1) 0%, transparent 70%);
	pointer-events: none;
}
.ia-highlight-inner {
	max-width: 900px;
	margin: 0 auto;
	text-align: center;
	position: relative;
	z-index: 1;
}
.ia-badge {
	display: inline-flex;
	align-items: center;
	gap: 10px;
	background: var(--red-alpha);
	border: 1px solid var(--red-border);
	border-radius: 50px;
	padding: 10px 20px;
	margin-bottom: 28px;
}
.ia-badge-icon {
	width: 28px;
	height: 28px;
	background: var(--red);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
}
.ia-badge span {
	font-family: 'Sora', sans-serif;
	font-size: 13px;
	font-weight: 600;
	color: #e07070;
}
.ia-highlight h2 {
	font-family: 'Sora', sans-serif;
	font-size: clamp(28px, 4vw, 44px);
	font-weight: 800;
	color: var(--white);
	line-height: 1.15;
	letter-spacing: -1px;
	margin-bottom: 16px;
}
.ia-highlight h2 em {
	font-style: normal;
	background: linear-gradient(90deg, var(--red), #ff6b6b);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
}
.ia-highlight p {
	font-size: 17px;
	color: #808090;
	max-width: 600px;
	margin: 0 auto 32px;
	line-height: 1.7;
}
.ia-features-mini {
	display: flex;
	justify-content: center;
	gap: 24px;
	flex-wrap: wrap;
}
.ia-feat-mini {
	display: flex;
	align-items: center;
	gap: 10px;
	background: rgba(255, 255, 255, 0.03);
	border: 1px solid rgba(255, 255, 255, 0.06);
	border-radius: 50px;
	padding: 12px 20px;
	transition: all 0.25s;
}
.ia-feat-mini:hover {
	border-color: var(--red-border);
	background: var(--red-alpha);
}
.ia-feat-mini .icon {
	font-size: 18px;
}
.ia-feat-mini span {
	font-size: 14px;
	color: #c0c0c8;
	font-weight: 500;
}

.canales-section {
	background: var(--light-bg);
	padding: 48px 0;
	border-bottom: 1px solid var(--light-border);
	overflow: hidden;
}
.canales-label {
	text-align: center;
	margin-bottom: 28px;
}
.canales-label span {
	font-family: 'IBM Plex Mono', monospace;
	font-size: 11px;
	color: var(--text-muted);
	letter-spacing: 2.5px;
	text-transform: uppercase;
}
.carousel-wrapper {
	position: relative;
	width: 100%;
	overflow: hidden;
	mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
}
.carousel-track {
	display: flex;
	gap: 20px;
	animation: scroll 38s linear infinite;
	width: max-content;
}
.carousel-track:hover {
	animation-play-state: paused;
}
@keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-50%);
	}
}
.canal-item {
	display: flex;
	align-items: center;
	gap: 12px;
	background: var(--white);
	border: 1px solid var(--light-border);
	border-radius: 12px;
	padding: 14px 22px;
	flex-shrink: 0;
	transition: all 0.25s;
}
.canal-item:hover {
	border-color: var(--red);
	box-shadow: 0 4px 20px rgba(214, 40, 40, 0.1);
	transform: translateY(-2px);
}
.canal-icon {
	width: 38px;
	height: 38px;
	border-radius: 9px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	flex-shrink: 0;
}
.canal-icon.whatsapp {
	background: #25d366;
	color: #fff;
}
.canal-icon.instagram {
	background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
	color: #fff;
}
.canal-icon.gmail {
	background: #ea4335;
	color: #fff;
}
.canal-icon.sheets {
	background: #0f9d58;
	color: #fff;
}
.canal-icon.calendar {
	background: #4285f4;
	color: #fff;
}
.canal-icon.slack {
	background: #4a154b;
	color: #fff;
}
.canal-icon.notion {
	background: #000;
	color: #fff;
}
.canal-icon.telegram {
	background: #0088cc;
	color: #fff;
}
.canal-icon.trello {
	background: #0079bf;
	color: #fff;
}
.canal-icon.drive {
	background: #fbbc04;
	color: #fff;
}
.canal-icon.hubspot {
	background: #ff7a59;
	color: #fff;
}
.canal-icon.zapier {
	background: #ff4a00;
	color: #fff;
}
.canal-icon.airtable {
	background: #18bfff;
	color: #fff;
}
.canal-icon.monday {
	background: #ff3d57;
	color: #fff;
}
.canal-icon.zoom {
	background: #2d8cff;
	color: #fff;
}
.canal-icon.messenger {
	background: #0084ff;
	color: #fff;
}
.canal-item h4 {
	font-family: 'Sora', sans-serif;
	font-size: 13px;
	font-weight: 700;
	color: var(--text-dark);
}
.canal-item p {
	font-size: 11px;
	color: var(--text-muted);
	margin-top: 2px;
}

.problema {
	background: var(--light-bg);
	padding: 100px 56px;
}
.problema-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 72px;
	align-items: start;
	max-width: 1160px;
	margin: 56px auto 0;
}
.pain-list {
	display: flex;
	flex-direction: column;
}
.pain-row {
	display: flex;
	gap: 18px;
	padding: 22px 0;
	border-bottom: 1px solid var(--light-border);
	transition: all 0.2s;
}
.pain-row:last-child {
	border: none;
}
.pain-row:hover {
	padding-left: 8px;
}
.pain-icon {
	width: 42px;
	height: 42px;
	border-radius: 10px;
	background: var(--white);
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
}
.pain-row h4 {
	font-family: 'Sora', sans-serif;
	font-size: 15px;
	font-weight: 700;
	margin-bottom: 4px;
}
.pain-row p {
	font-size: 13px;
	color: var(--text-muted);
	line-height: 1.55;
}
.chat-card {
	background: var(--dark-card);
	border-radius: 20px;
	padding: 36px;
	border: 1px solid var(--dark-border);
	position: relative;
	overflow: hidden;
}
.chat-card::before {
	content: '';
	position: absolute;
	top: -80px;
	right: -80px;
	width: 240px;
	height: 240px;
	border-radius: 50%;
	background: radial-gradient(circle, rgba(214, 40, 40, 0.12) 0%, transparent 68%);
}
.chat-top {
	display: flex;
	align-items: center;
	gap: 12px;
	padding-bottom: 20px;
	border-bottom: 1px solid var(--dark-border);
	margin-bottom: 20px;
}
.chat-ava {
	width: 38px;
	height: 38px;
	border-radius: 50%;
	background: var(--red);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 17px;
	flex-shrink: 0;
}
.chat-status {
	display: flex;
	align-items: center;
	gap: 6px;
	margin-top: 2px;
}
.chat-status-dot {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: #22c55e;
	animation: blink 2s infinite;
}
.chat-top h5 {
	color: var(--white);
	font-size: 14px;
	font-weight: 600;
}
.chat-top p {
	font-size: 12px;
	color: #606070;
}
.chat-msgs {
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.msg {
	font-size: 13px;
	padding: 11px 14px;
	border-radius: 12px;
	line-height: 1.5;
	max-width: 88%;
}
.msg-in {
	background: #1e1e22;
	color: #c8c8d0;
	border-radius: 3px 12px 12px 12px;
	align-self: flex-start;
}
.msg-out {
	background: #143322;
	color: #7dd49a;
	border-radius: 12px 3px 12px 12px;
	align-self: flex-end;
}
.msg-time {
	font-size: 10px;
	color: #505058;
	align-self: flex-end;
	margin-top: -4px;
}
.chat-note {
	margin-top: 16px;
	padding: 10px 14px;
	background: var(--red-alpha);
	border-radius: 8px;
	font-size: 11px;
	font-family: 'IBM Plex Mono', monospace;
	color: #e07070;
	text-align: center;
	letter-spacing: 0.5px;
}

.usos {
	background: var(--white);
	padding: 100px 56px;
}
.usos-header {
	text-align: center;
	max-width: 620px;
	margin: 0 auto 64px;
}
.usos-header .s-sub {
	margin: 14px auto 0;
}
.usos-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 18px;
	max-width: 1160px;
	margin: 0 auto;
}
.uso-card {
	background: var(--white);
	border-radius: var(--radius);
	padding: 28px 22px;
	border: 1px solid var(--light-border);
	transition: all 0.25s;
	cursor: default;
}
.uso-card:hover {
	border-color: var(--red);
	box-shadow: 0 8px 32px rgba(214, 40, 40, 0.08);
	transform: translateY(-4px);
}
.uso-card.highlight {
	border-color: var(--red);
	background: #fff8f8;
}
.uso-emoji {
	font-size: 32px;
	margin-bottom: 14px;
}
.uso-card h4 {
	font-family: 'Sora', sans-serif;
	font-size: 15px;
	font-weight: 700;
	margin-bottom: 7px;
}
.uso-card p {
	font-size: 13px;
	color: var(--text-muted);
	line-height: 1.5;
}
.uso-badge {
	display: inline-block;
	margin-top: 14px;
	font-size: 11px;
	font-weight: 600;
	font-family: 'IBM Plex Mono', monospace;
	padding: 3px 11px;
	border-radius: 20px;
}
.u-activo {
	background: #fff0f0;
	color: var(--red);
}
.u-pronto {
	background: #fffbeb;
	color: var(--amarillo);
}

.mv {
	background: var(--dark-section);
	padding: 100px 56px;
}
.mv .s-title {
	color: var(--white);
}
.mv-cards {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
	max-width: 1100px;
	margin: 56px auto 0;
}
.mv-card {
	background: var(--dark-card);
	border: 1px solid var(--dark-border);
	border-radius: var(--radius);
	padding: 40px 36px;
	transition: border-color 0.25s;
}
.mv-card:hover {
	border-color: var(--red-border);
}
.mv-label {
	font-family: 'IBM Plex Mono', monospace;
	font-size: 11px;
	color: var(--red);
	letter-spacing: 2.5px;
	text-transform: uppercase;
	margin-bottom: 18px;
}
.mv-card h3 {
	font-family: 'Sora', sans-serif;
	font-size: 22px;
	font-weight: 800;
	color: var(--white);
	margin-bottom: 14px;
	line-height: 1.2;
}
.mv-card p {
	font-size: 15px;
	color: #808090;
	line-height: 1.7;
}
.valores {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 16px;
	max-width: 1100px;
	margin: 24px auto 0;
}
.valor-card {
	background: var(--dark-card);
	border-radius: var(--radius);
	padding: 28px 22px;
	border: 1px solid var(--dark-border);
	transition: all 0.25s;
}
.valor-card:hover {
	transform: translateY(-3px);
	border-color: var(--red-border);
}
.val-icon {
	font-size: 26px;
	margin-bottom: 12px;
}
.valor-card h4 {
	font-family: 'Sora', sans-serif;
	font-size: 14px;
	font-weight: 700;
	color: var(--white);
	margin-bottom: 6px;
}
.valor-card p {
	font-size: 13px;
	color: #808090;
	line-height: 1.5;
}

.latam-strip {
	background: var(--dark-section);
	border-top: 1px solid var(--dark-border);
	border-bottom: 1px solid var(--dark-border);
	padding: 48px 56px;
}
.latam-strip-inner {
	max-width: 1100px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 40px;
	flex-wrap: wrap;
}
.latam-left {
	max-width: 520px;
}
.latam-tag {
	display: inline-block;
	font-family: 'IBM Plex Mono', monospace;
	font-size: 11px;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: var(--red);
	background: var(--red-alpha);
	border: 1px solid var(--red-border);
	padding: 5px 14px;
	border-radius: 50px;
	margin-bottom: 16px;
}
.latam-left h3 {
	font-family: 'Sora', sans-serif;
	font-size: clamp(22px, 3vw, 34px);
	font-weight: 800;
	color: var(--white);
	line-height: 1.2;
	letter-spacing: -1px;
}
.latam-left h3 em {
	font-style: normal;
	color: var(--red);
}
.latam-flags {
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	align-items: center;
}
.latam-flags span {
	font-size: 28px;
	filter: grayscale(0.2);
	transition: transform 0.2s;
	cursor: default;
}
.latam-flags span:hover {
	transform: scale(1.3);
	filter: none;
}

@media (max-width: 960px) {
	.hero {
		padding: 120px 24px 72px;
	}
	.hero-stats {
		flex-wrap: wrap;
	}
	.h-stat {
		padding: 16px 0 !important;
		border-left: none !important;
		border-top: 1px solid var(--dark-border);
	}
	.ia-highlight,
	.problema,
	.usos,
	.mv {
		padding: 72px 24px;
	}
	.problema-grid {
		grid-template-columns: 1fr;
		gap: 48px;
	}
	.usos-grid {
		grid-template-columns: 1fr 1fr;
	}
	.mv-cards {
		grid-template-columns: 1fr;
	}
	.valores {
		grid-template-columns: 1fr 1fr;
	}
	.latam-strip {
		padding: 48px 24px;
	}
	.latam-strip-inner {
		flex-direction: column;
		align-items: flex-start;
		gap: 24px;
	}
}

@media (max-width: 600px) {
	.usos-grid {
		grid-template-columns: 1fr;
	}
	.valores {
		grid-template-columns: 1fr;
	}
	.ia-features-mini {
		flex-direction: column;
		align-items: center;
	}
}
</style>
