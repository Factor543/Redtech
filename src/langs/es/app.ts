export default {
	App: {
		brand: 'RedTech',
	},

	MainNav: 'Navegacion principal',
	_MainNav: {
		home: 'Inicio',
		services: 'Servicios',
		pricing: 'Precios',
		testimonials: 'Testimonios',
		contact: 'Agendar llamada',
		open_menu: 'Abrir menu',
	},

	SiteFooter: 'Pie de pagina',
	_SiteFooter: {
		description:
			'Automatizacion de operaciones para negocios que quieren crecer sin hacer todo manualmente. Disenado para Latinoamerica.',
		services: 'Servicios',
		_services: {
			items: [
				'Atencion al cliente',
				'Automatizacion de ventas',
				'Agendamiento',
				'CRM automatico',
				'Procesos internos',
			],
		},
		company: 'Empresa',
		_company: {
			items: ['Como funciona', 'Mision y vision', 'Planes', 'Testimonios', 'Contacto'],
		},
		contact: 'Contacto',
		region: 'Caracas, Venezuela · Atencion regional',
		rights: 'Todos los derechos reservados.',
		made_in: 'Hecho con {heart} en Caracas, Venezuela',
	},

	Home: 'Inicio',
	_Home: {
		hero: {
			pill: 'AUTOMATIZACION CON IA PARA NEGOCIOS REALES',
			_title: ['Tu negocio', 'trabaja solo', 'Tu', 'descansas'],
			lead: 'Disenamos sistemas con inteligencia artificial que atienden clientes, cierran ventas, coordinan citas y gestionan procesos - funcionando 24/7 sin que tengas que intervenir.',
			cta_primary: 'Ver como funciona',
			cta_secondary: 'Conocer los planes',
			stats: [
				{ value: '<5 seg', label: 'Tiempo de respuesta a tus clientes' },
				{ value: '24/7', label: 'Tu negocio atendiendo sin parar' },
				{ value: '7 dias', label: 'De cero a sistema funcionando' },
			],
		},
		ia: {
			badge: 'Potenciado con Inteligencia Artificial',
			_title: ['No es un bot de menus.', 'Es inteligencia real operando tu negocio.'],
			description:
				'Un sistema RedTech entiende el lenguaje de tus clientes, razona, adapta su respuesta y toma decisiones - igual que lo haria un empleado capacitado, pero sin descansos ni errores.',
			features: [
				'Lenguaje natural real',
				'16+ integraciones',
				'Respuesta en segundos',
				'Personalizado a tu negocio',
			],
		},
		channels: {
			label: 'Se conecta con mas de 16 herramientas y canales',
			items: [
				['WhatsApp Business', 'Atencion directa'],
				['Instagram DMs', 'Redes sociales'],
				['Gmail', 'Correo electronico'],
				['Google Sheets', 'Hojas de calculo'],
				['Google Calendar', 'Agendamiento'],
				['Slack', 'Equipo interno'],
				['Notion', 'Documentacion'],
				['Telegram', 'Mensajeria alternativa'],
				['Trello', 'Gestion de tareas'],
				['Google Drive', 'Almacenamiento'],
				['HubSpot', 'CRM avanzado'],
				['Zapier', 'Automatizaciones'],
				['Airtable', 'Base de datos'],
				['Monday', 'Gestion de proyectos'],
				['Zoom', 'Videollamadas'],
				['Messenger', 'Facebook DMs'],
			],
		},
		problem: {
			_title: ['Cada hora que pierdes en tareas', 'repetitivas, es una hora que no creces.'],
			description:
				'No porque no quieras hacerlo bien - sino porque no hay horas suficientes en el dia para atender, coordinar y ademas crecer. Eso tiene solucion.',
			pains: [
				{
					title: 'Mensajes sin respuesta',
					description:
						'Mientras atiendes a alguien, otro cliente escribe y espera. A veces demasiado. Y compra en otro lado.',
				},
				{
					title: 'Las mismas preguntas, todos los dias',
					description:
						'"Cuanto cuesta?" "Tienen disponible?" - preguntas que consumen horas que deberias invertir en crecer.',
				},
				{
					title: 'Caos administrativo',
					description:
						'Citas cruzadas, inventario desactualizado, seguimientos olvidados. Todo en la cabeza del dueno.',
				},
				{
					title: 'Trabajas en el negocio, no para el negocio',
					description:
						'El dia se va apagando incendios. El negocio te consume en vez de darte libertad.',
				},
			],
			chat: {
				title: 'Sistema RedTech · En vivo',
				status: 'Operando sin intervencion humana',
				messages: [
					'Hola! tienen la cartera negra pequena? cuanto cuesta?',
					'Hola! Si, la cartera negra mini esta disponible a $38. Te la reservo?',
					'Si quiero! Me llamo Laura, pago por Zelle',
					'Perfecto, Laura. Te envio los datos de Zelle. Me confirmas tu direccion de envio?',
					'Av. Principal 123, Caracas',
					'Pedido confirmado! Cartera negra mini · $38 · Envio a Av. Principal 123. La duena fue notificada automaticamente. Gracias!',
				],
				responded: 'Respondido en 2 seg',
				note: 'Venta completa. La duena no toco el telefono.',
			},
		},
		uses: {
			_title: ['Funciona para cualquier', 'tipo de negocio.'],
			description:
				'Si atiendes clientes, vendes algo o coordinas un equipo, RedTech puede automatizarlo.',
			cards: [
				['Tiendas y comercios', 'Ventas, inventario y seguimiento de pedidos automatizados desde cualquier canal.', 'Activo'],
				['Restaurantes', 'Pedidos, reservas, menu actualizado y notificaciones al equipo de cocina.', 'Activo'],
				['Salud y bienestar', 'Citas, recordatorios, historial de pacientes y seguimiento post-consulta.', 'Activo'],
				['Academias y educacion', 'Inscripciones, horarios, pagos y comunicacion masiva con estudiantes.', 'Activo'],
				['Construccion y servicios', 'Cotizaciones automaticas, agenda de visitas y coordinacion de equipos en campo.', 'Activo'],
				['Automotriz', 'Citas de taller, presupuestos y seguimiento de mantenimiento por cliente.', 'Proximamente'],
				['Inmobiliaria', 'Filtrado de prospectos, agendamiento de visitas y seguimiento del embudo de ventas.', 'Proximamente'],
				['Servicios profesionales', 'Gestion de agenda, recordatorios de citas y seguimiento de casos o proyectos.', 'Proximamente'],
			],
		},
		about: {
			title: 'Por que existe RedTech.',
			mission: 'Mision',
			mission_title: 'Devolverle el tiempo al dueno de negocio.',
			mission_description:
				'Creemos que los emprendedores no deberian pasar sus dias respondiendo mensajes o coordinando tareas repetitivas. Existen para crear, crecer y vivir. La tecnologia debe trabajar para ellos, no al reves.',
			vision: 'Vision',
			vision_title: 'Que cada negocio en LATAM opere con IA.',
			vision_description:
				'Queremos ser el sistema operativo inteligente de los negocios latinoamericanos - desde una carniceria en Caracas hasta una clinica en Bogota. La automatizacion no deberia ser exclusiva de las grandes empresas.',
			values: [
				['Velocidad real', 'De conversacion a sistema funcionando en 7 dias, sin burocracia.'],
				['Sin tecnicismos', 'El dueno no toca nada tecnico. Nosotros construimos, tu ves los resultados.'],
				['Hecho para LATAM', 'Disenado para la realidad, el idioma y los canales que usa nuestro mercado.'],
				['Acompanamiento total', 'No desaparecemos despues de implementar. Seguimos disponibles para ajustar y mejorar.'],
			],
		},
		latam: {
			tag: 'Alcance regional',
			_title: ['Disenado para Latinoamerica.', 'Operamos de forma', '100% remota.'],
		},
	},

	Services: 'Servicios',
	_Services: {
		hero: {
			_title: ['No automatizamos tecnologia.', 'Automatizamos tu operacion.'],
			description:
				'Disenamos el sistema exacto que tu negocio necesita - desde atender clientes hasta coordinar tu equipo interno.',
			categories: ['Todos', 'Atencion al cliente', 'Ventas', 'Administracion', 'CRM', 'Operaciones'],
			cards: [
				['Atencion instantanea', 'Cualquier consulta recibe respuesta en segundos - cualquier hora, cualquier dia. El sistema entiende lenguaje natural y responde con el tono de tu negocio.'],
				['Cotizaciones automaticas', 'Tu cliente pide un presupuesto y lo recibe en minutos, calculado y formateado segun tus tarifas. Sin esperas, sin errores manuales.'],
				['Agendamiento inteligente', 'Tus clientes agendan, reagendan o cancelan solos. El sistema actualiza tu calendario y manda recordatorios automaticos antes de cada cita.'],
				['Cierre de ventas completo', 'Desde el primer interes hasta el pago - el sistema guia la conversacion, verifica disponibilidad de stock y confirma el pedido sin que toques el telefono.'],
				['CRM automatico', 'Cada cliente queda registrado con su historial completo, preferencias y ultima interaccion. El sistema hace seguimiento solo, sin que tengas que recordarlo.'],
				['Control de inventario', 'Tu inventario se actualiza con cada venta. Recibe alertas cuando algo se agota y gestiona listas de espera por producto automaticamente.'],
				['Reportes y metricas', 'Cuantos mensajes, ventas, citas y tiempos de respuesta - todo medido y resumido diariamente sin que tengas que abrir una hoja de calculo.'],
				['Notificaciones inteligentes', 'Alertas automaticas para ti y tu equipo: nuevas ventas, citas, clientes esperando respuesta, stock bajo, tareas pendientes.'],
				['IA para casos complejos', 'Cuando la conversacion requiere razonamiento avanzado, el sistema usa IA para generar respuestas precisas - y avisa al dueno si detecta algo que necesita atencion humana.'],
			],
		},
	},

	Pricing: 'Precios',
	_Pricing: {
		_title: ['Un sistema a la medida', 'de tu operacion.'],
		label: 'El precio depende del tamano de tu operacion',
		sub_label: 'no pagas por lo que no usas.',
		_guarantee: {
			title: '30 dias de garantia real.',
			description:
				'Si despues de un mes completo no sentis que RedTech ahorro tiempo y ayudo a tu negocio a vender mas - no pagas el mantenimiento. Sin letra chica.',
		},
	},

	Testimonials: 'Testimonios',
	_Testimonials: {
		pill: 'RESULTADOS REALES',
		_title: ['Lo que dicen los negocios', 'que ya operan con IA.'],
		description: 'Desliza sobre las tarjetas para descubrir cada historia.',
		stats: ['Negocios automatizados', 'Clientes satisfechos', 'Ahorradas por dueno al dia'],
	},

	Contact: 'Contacto',
	_Contact: {
		_title: ['Listo para que tu negocio', 'trabaje solo?'],
		description:
			'Una llamada de 20 minutos es suficiente para mostrarte como funciona. Sin compromiso, sin palabras tecnicas.',
		cards: [
			['WhatsApp directo', 'Escribenos y te respondemos en minutos. Es la forma mas rapida de empezar.'],
			['Correo electronico', 'Para propuestas formales, preguntas detalladas o documentacion del proyecto.'],
			['Ubicacion', 'Basados en Caracas, Venezuela. Trabajamos con negocios en toda Latinoamerica de forma remota.'],
		],
		links: {
			whatsapp: '+58 412-1582233',
			email: 'diegoalberto.4002@gmail.com',
			location: 'Caracas, Venezuela',
		},
	},
};
