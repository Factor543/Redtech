import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Services from '@/views/Services.vue';
import Pricing from '@/views/Pricing.vue';
import Testimonials from '@/views/Testimonials.vue';
import Contact from '@/views/Contact.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/services',
			name: 'services',
			component: Services,
		},
		{
			path: '/pricing',
			name: 'pricing',
			component: Pricing,
		},
		{
			path: '/testimonials',
			name: 'testimonials',
			component: Testimonials,
		},
		{
			path: '/contact',
			name: 'contact',
			component: Contact,
		},
	],
});

export default router;
