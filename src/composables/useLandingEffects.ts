import { nextTick, onMounted, onUnmounted } from 'vue';

type Cleanup = () => void;

function initReveal(): Cleanup {
	const els = document.querySelectorAll('.reveal:not(.visible)');
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
	);

	els.forEach((el) => observer.observe(el));
	return () => observer.disconnect();
}

export function useRevealOnMount(): void {
	let cleanup: Cleanup | null = null;
	onMounted(async () => {
		await nextTick();
		cleanup = initReveal();
	});
	onUnmounted(() => cleanup?.());
}

export function useServiceFilter(): void {
	onMounted(async () => {
		await nextTick();
		const categories = document.querySelectorAll('.service-category');
		const cards = document.querySelectorAll('.service-card');
		categories.forEach((category) => {
			category.addEventListener('click', () => {
				categories.forEach((item) => item.classList.remove('active'));
				category.classList.add('active');
				const filter = category.getAttribute('data-filter');
				cards.forEach((card) => {
					if (filter === 'all') {
						card.classList.remove('hidden');
						return;
					}
					card.classList.toggle('hidden', card.getAttribute('data-category') !== filter);
				});
			});
		});
	});
}
