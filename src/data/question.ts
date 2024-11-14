// Banco de preguntas y respuestas mejorado
export const qaPairs = [
    {
        question: "¿Qué es el Servicio Civil?",
        keywords: ['que', 'es', 'servicio', 'civil', 'significado de servicio civil', 'definicion de servicio civil'],
        answer: 'El Servicio Civil es un sistema de gestión de recursos humanos en el sector público costarricense que busca garantizar la eficiencia y transparencia en la administración pública.',
        category: 'Definición',
        relatedQuestions: [
            "¿Cuáles son las funciones de la DGSC?", 
            "¿Cómo aplicar a un puesto en el Servicio Civil?"
        ],
        examples: [
            "¿Qué significa Servicio Civil?",
            "¿Cuál es la definición de Servicio Civil?"
        ],
        tone: 'formal',
        resources: [
            { label: "Más detalles sobre el Servicio Civil", url: "https://www.dgsc.go.cr/dgsc_descripcion.html" }
        ]
    },
    {
        question: "¿Cuáles son las funciones de la DGSC?",
        keywords: ['funciones', 'dgsc', 'rol de dgsc', 'responsabilidades dgsc'],
        answer: 'La Dirección General de Servicio Civil (DGSC) se encarga de la selección, clasificación, valoración y promoción del personal en la Administración Pública, asegurando la idoneidad y competencia de los funcionarios públicos.',
        category: 'Funciones',
        relatedQuestions: [
            "¿Qué es el Servicio Civil?",
            "¿Qué competencias tiene la DGSC?"
        ],
        examples: [
            "¿Qué hace la DGSC?",
            "¿Cuáles son las tareas de la DGSC?"
        ],
        tone: 'formal',
        resources: [
            { label: "Funciones de la DGSC", url: "https://www.dgsc.go.cr/dgsc_areas.html" }
        ]
    },
    {
        question: "¿Cómo aplicar a un puesto en el Servicio Civil?",
        keywords: ['como', 'aplicar', 'puesto', 'trabajo', 'empleo', 'servicio civil', 'solicitar empleo dgsc'],
        answer: 'Para aplicar a un puesto en el Servicio Civil, debes registrarte en el sitio web de la DGSC y completar la Oferta de Servicios en el Proceso de Reclutamiento Abierto y Permanente (RAP).',
        category: 'Reclutamiento',
        relatedQuestions: [
            "¿Cuáles son los requisitos para participar en el reclutamiento abierto?",
            "¿Cómo actualizar la Oferta de Servicios?"
        ],
        examples: [
            "¿Dónde puedo solicitar empleo en el Servicio Civil?",
            "¿Cómo ingreso al Servicio Civil?"
        ],
        tone: 'formal',
        resources: [
            { label: "Reclutamiento Abierto y Permanente (RAP)", url: "https://www.dgsc.go.cr/dgsc_areas.html" }
        ]
    },
    {
        question: "¿Cuáles son los requisitos para participar en el reclutamiento abierto y permanente?",
        keywords: ['requisitos', 'participar', 'reclutamiento', 'abierto', 'permanente', 'condiciones rap'],
        answer: 'Los requisitos incluyen: completar la Oferta de Servicios en línea, aportar los documentos solicitados en formato digital, poseer aptitud moral, cumplir con los requisitos establecidos en el Manual de Clases y aprobar las pruebas de idoneidad con una calificación igual o superior a 70.',
        category: 'Reclutamiento',
        relatedQuestions: [
            "¿Cómo aplicar a un puesto en el Servicio Civil?",
            "¿Cómo reprogramar las pruebas de reclutamiento?"
        ],
        examples: [
            "¿Qué se necesita para el reclutamiento?",
            "¿Cuáles son las condiciones para aplicar?"
        ],
        tone: 'formal',
        resources: [
            { label: "Información sobre reclutamiento abierto", url: "https://www.dgsc.go.cr/dgsc_areas.html" }
        ]
    },
    {
        question: "¿Qué es el Registro de Elegibles?",
        keywords: ['que', 'es', 'registro', 'elegibles', 'definicion registro elegibles'],
        answer: 'El Registro de Elegibles es una lista de personas que han aprobado el proceso de reclutamiento y selección, obteniendo una calificación igual o superior a 70 en las pruebas de idoneidad, y están disponibles para ser consideradas en nombramientos dentro del Servicio Civil.',
        category: 'Registro',
        relatedQuestions: [
            "¿Cómo consultar el Registro de Inelegibles?",
            "¿Qué es el reclutamiento abierto y permanente?"
        ],
        examples: [
            "¿Qué significa estar en el Registro de Elegibles?",
            "¿Qué implica el Registro de Elegibles?"
        ],
        tone: 'formal',
        resources: [
            { label: "Registro de Elegibles", url: "https://www.dgsc.go.cr" }
        ]
    },
    {
        question: "¿Cómo actualizar la Oferta de Servicios?",
        keywords: ['como', 'actualizar', 'oferta', 'servicios', 'modificar oferta rap'],
        answer: 'Puedes ingresar al sitio web de la DGSC y acceder al Proceso de Reclutamiento Abierto y Permanente (RAP) para modificar y actualizar tu Oferta de Servicios las veces que lo consideres necesario.',
        category: 'Reclutamiento',
        relatedQuestions: [
            "¿Cómo aplicar a un puesto en el Servicio Civil?",
            "¿Cuáles son los requisitos para el reclutamiento abierto?"
        ],
        examples: [
            "¿Puedo cambiar mi oferta de servicios?",
            "¿Cómo modifico mi oferta en el RAP?"
        ],
        tone: 'formal',
        resources: [
            { label: "Reclutamiento Abierto y Permanente (RAP)", url: "https://www.dgsc.go.cr/dgsc_areas.html" }
        ]
    },
    {
        question: "¿Qué es el Estudio de Vida y Costumbres?",
        keywords: ['que', 'es', 'estudio', 'vida', 'costumbres', 'definicion estudio vida'],
        answer: 'Es un proceso investigativo que determina la idoneidad moral requerida para el desempeño de un cargo en el Servicio Civil, aplicable en casos como antecedentes penales o inexactitud en los atestados presentados.',
        category: 'Proceso',
        relatedQuestions: [
            "¿Qué es el período de prueba?",
            "¿Qué es la Boleta de Funcionalidad?"
        ],
        examples: [
            "¿Qué se investiga en el Estudio de Vida?",
            "¿Para qué es el Estudio de Costumbres?"
        ],
        tone: 'formal',
        resources: [
            { label: "Información sobre Estudio de Vida y Costumbres", url: "https://www.dgsc.go.cr/dgsc_areas.html" }
        ]
    },
    {
        question: "¿Qué es el período de prueba?",
        keywords: ['que', 'es', 'periodo', 'prueba', 'significado periodo prueba'],
        answer: 'Es un período de hasta tres meses durante el cual se evalúa el desempeño de una persona recién nombrada en un puesto del Servicio Civil para determinar su idoneidad y confirmar su nombramiento.',
        category: 'Proceso',
        relatedQuestions: [
            "¿Qué es el Estudio de Vida y Costumbres?",
            "¿Cómo aplicar a un puesto en el Servicio Civil?"
        ],
        examples: [
            "¿Cuál es la duración del período de prueba?",
            "¿Qué implica el período de prueba?"
        ],
        tone: 'formal',
        resources: [
            { label: "Información sobre el período de prueba", url: "https://www.dgsc.go.cr" }
        ]
    },
    {
        question: "¿Qué es la carrera administrativa?",
        keywords: ['que', 'es', 'carrera', 'administrativa', 'definicion carrera administrativa'],
        answer: 'Es el sistema que permite a los servidores públicos escalar a mejores posiciones mediante ascensos directos, concursos internos o externos, y otros mecanismos basados en su desempeño y cumplimiento de requisitos.',
        category: 'Definición',
        relatedQuestions: [
            "¿Qué es el Servicio Civil?",
            "¿Cuáles son las funciones de la DGSC?"
        ],
        examples: [
            "¿Cómo funciona la carrera administrativa?",
            "¿Qué significa carrera administrativa?"
        ],
        tone: 'formal',
        resources: [
            { label: "Información sobre la carrera administrativa", url: "https://www.dgsc.go.cr" }
        ]
    },
    {
        question: "¿Cómo obtener una certificación de discapacidad?",
        keywords: ['como', 'obtener', 'certificacion', 'discapacidad', 'proceso certificacion discapacidad'],
        answer: 'Debes dirigirte al Consejo Nacional de Personas con Discapacidad (CONAPDIS) para solicitar la certificación que verifica y evalúa las condiciones de discapacidad, la cual es necesaria para participar en procesos de reclutamiento del Servicio Civil.',
        category: 'Certificación',
        relatedQuestions: [
            "¿Qué es la Boleta de Funcionalidad?",
            "¿Qué es el Registro de Inelegibles?"
        ],
        examples: [
            "¿Dónde solicito la certificación de discapacidad?",
            "¿Cómo obtengo la certificación para aplicar?"
        ],
        tone: 'formal',
        resources: [
            { label: "Sitio de CONAPDIS", url: "https://www.conapdis.go.cr" }
        ]
    },
    {
        question: "¿Qué es el Manual de Clases y Especialidades?",
        keywords: ['que', 'es', 'manual', 'clases', 'especialidades', 'definicion manual clases'],
        answer: 'Es un documento que describe las diferentes clases de puestos en el Servicio Civil, incluyendo sus requisitos, funciones y responsabilidades, utilizado para la clasificación y selección de personal.',
        category: 'Documentación',
        relatedQuestions: [
            "¿Cuáles son las funciones de la DGSC?",
            "¿Cómo se clasifica el personal en el Servicio Civil?"
        ],
        examples: [
            "¿Qué información contiene el Manual de Clases?",
            "¿Para qué sirve el Manual de Clases?"
        ],
        tone: 'formal',
        resources: [
            { label: "Manual de Clases y Especialidades", url: "https://www.dgsc.go.cr/manuales.html" }
        ]
    },
    {
        question: "¿Qué es la Plataforma Integrada de Empleo Público?",
        keywords: ['que', 'es', 'plataforma', 'integrada', 'empleo', 'publico', 'piep'],
        answer: 'Es una herramienta informática que facilita la gestión del empleo público, permitiendo a las personas usuarias postularse para puestos vacantes en instituciones del Estado y consultar información relevante relacionada con la gestión de recursos humanos.',
        category: 'Herramientas',
        relatedQuestions: [
            "¿Cómo aplicar a un puesto en el Servicio Civil?",
            "¿Qué es el reclutamiento abierto y permanente?"
        ],
        examples: [
            "¿Dónde puedo buscar empleo público?",
            "¿Cómo accedo a la plataforma de empleo público?"
        ],
        tone: 'informal',
        resources: [
            { label: "Plataforma Integrada de Empleo Público (PIEP)", url: "https://www.dgsc.go.cr/piep.html" }
        ]
    },
    {
        question: "¿Cómo consultar el Registro de Inelegibles?",
        keywords: ['como', 'consultar', 'registro', 'inelegibles', 'informe inelegibles'],
        answer: 'Puedes consultar el Registro de Inelegibles a través de la Plataforma Integrada de Empleo Público (PIEP) en el sitio web de la DGSC, ingresando tu identificación para verificar si estás inhabilitado para el ejercicio de cargos públicos.',
        category: 'Registro',
        relatedQuestions: [
            "¿Qué es el Registro de Inelegibles?",
            "¿Qué es el Registro de Elegibles?"
        ],
        examples: [
            "¿Cómo puedo ver si estoy inelegible?",
            "¿Dónde consulto el registro de inelegibles?"
        ],
        tone: 'formal',
        resources: [
            { label: "Consulta de Registro de Inelegibles", url: "https://www.dgsc.go.cr/piep.html" }
        ]
    },
    {
        question: "¿Qué es el reclutamiento abierto y permanente?",
        keywords: ['que', 'es', 'reclutamiento', 'abierto', 'permanente', 'proceso reclutamiento'],
        answer: 'Es un proceso continuo de reclutamiento y selección de personal para puestos administrativos en el Servicio Civil, abierto a todas las personas interesadas que cumplan con los requisitos establecidos.',
        category: 'Reclutamiento',
        relatedQuestions: [
            "¿Cómo aplicar a un puesto en el Servicio Civil?",
            "¿Cuáles son los requisitos para el reclutamiento abierto?"
        ],
        examples: [
            "¿Qué significa reclutamiento abierto?",
            "¿Cómo funciona el reclutamiento permanente?"
        ],
        tone: 'formal',
        resources: [
            { label: "Reclutamiento Abierto y Permanente", url: "https://www.dgsc.go.cr/reclutamiento_abierto.html" }
        ]
    },
    {
        question: "¿Cómo participar en un concurso interno?",
        keywords: ['como', 'participar', 'concurso', 'interno', 'convocatoria concurso interno'],
        answer: 'Los concursos internos están dirigidos a personas que ya mantienen una relación de empleo dentro de instituciones públicas del Régimen de Servicio Civil. Debes estar atento a las convocatorias internas de tu institución y cumplir con los requisitos establecidos para participar.',
        category: 'Reclutamiento',
        relatedQuestions: [
            "¿Cómo aplicar a un puesto en el Servicio Civil?",
            "¿Qué es el reclutamiento abierto y permanente?"
        ],
        examples: [
            "¿Puedo postularme a concursos internos?",
            "¿Cómo me inscribo en un concurso interno?"
        ],
        tone: 'formal',
        resources: [
            { label: "Concursos Internos de la DGSC", url: "https://www.dgsc.go.cr/concursos_internos.html" }
        ]
    },
    {
        question: "¿Qué es el Registro de Inelegibles?",
        keywords: ['que', 'es', 'registro', 'inelegibles', 'definicion registro inelegibles'],
        answer: 'Es una lista digital que contiene los datos de personas que han sido declaradas inhabilitadas para el ejercicio de cargos públicos, ya sea por destitución por infracción de las disposiciones del Estatuto de Servicio Civil u otras razones.',
        category: 'Registro',
        relatedQuestions: [
            "¿Cómo consultar el Registro de Inelegibles?",
            "¿Qué es el Registro de Elegibles?"
        ],
        examples: [
            "¿Qué significa estar en el Registro de Inelegibles?",
            "¿Cuáles son las consecuencias de estar en el registro?"
        ],
        tone: 'formal',
        resources: [
            { label: "Registro de Inelegibles", url: "https://www.dgsc.go.cr/registro_inelegibles.html" }
        ]
    },
    {
        question: "¿Cómo reprogramar las pruebas de reclutamiento?",
        keywords: ['como', 'reprogramar', 'pruebas', 'reclutamiento', 'cambiar fecha prueba'],
        answer: 'Si no puedes asistir a las pruebas en la fecha programada por motivos de fuerza mayor, debes ingresar al sitio web de la DGSC y llenar el formulario de "Reprogramación de pruebas en los concursos de Título I", presentando la justificación correspondiente.',
        category: 'Pruebas',
        relatedQuestions: [
            "¿Cuáles son los requisitos para el reclutamiento abierto y permanente?",
            "¿Cómo actualizar la Oferta de Servicios?"
        ],
        examples: [
            "¿Puedo cambiar la fecha de mis pruebas?",
            "¿Cómo reprogramo mi examen de reclutamiento?"
        ],
        tone: 'formal',
        resources: [
            { label: "Formulario de Reprogramación de Pruebas", url: "https://www.dgsc.go.cr/formulario_reprogramacion.html" }
        ]
    },
    {
        question: "¿Qué es la Boleta de Funcionalidad?",
        keywords: ['que', 'es', 'boleta', 'funcionalidad', 'documento boleta funcionalidad'],
        answer: 'Es un documento que contiene información personal y particular de las personas oferentes con alguna condición de discapacidad, indicando el tipo de apoyo que requieren para realizar las pruebas de selección.',
        category: 'Certificación',
        relatedQuestions: [
            "¿Cómo obtener una certificación de discapacidad?",
            "¿Qué es el Estudio de Vida y Costumbres?"
        ],
        examples: [
            "¿Para qué sirve la Boleta de Funcionalidad?",
            "¿Qué incluye la Boleta de Funcionalidad?"
        ],
        tone: 'formal',
        resources: [
            { label: "Boleta de Funcionalidad", url: "https://www.dgsc.go.cr/boleta_funcionalidad.html" }
        ]
    },
    {
        question: "¿Cómo obtener la Boleta de Funcionalidad?",
        keywords: ['como', 'obtener', 'boleta', 'funcionalidad', 'solicitud boleta funcionalidad'],
        answer: 'La Dirección General de Servicio Civil te enviará la Boleta de Funcionalidad por medio de correo electrónico en el momento en que se atienda tu Oferta de Servicios, para que la completes y la devuelvas según las instrucciones proporcionadas.',
        category: 'Certificación',
        relatedQuestions: [
            "¿Qué es la Boleta de Funcionalidad?",
            "¿Cómo obtener una certificación de discapacidad?"
        ],
        examples: [
            "¿Dónde solicito la Boleta de Funcionalidad?",
            "¿Cómo obtengo la boleta para el examen?"
        ],
        tone: 'formal',
        resources: [
            { label: "Solicitud de Boleta de Funcionalidad", url: "https://www.dgsc.go.cr/solicitud_boleta.html" }
        ]
    },
    {
        "question": "¿Qué es el Régimen de Servicio Civil?",
        "keywords": ["qué", "es", "régimen", "servicio civil", "definición", "significado"],
        "answer": "El Régimen de Servicio Civil es un sistema jurídico-administrativo creado para atraer y mantener en el servicio público al personal con mayores méritos. Está constituido por un conjunto de instituciones, personas, normas y principios filosóficos, doctrinarios y técnicos, establecidos para garantizar la eficiencia de la Administración Pública, proteger los derechos de sus servidores y conservar una relación ordenada y equitativa en la administración del empleo público.",
        "category": "Definición",
        "relatedQuestions": [
            "¿Cuáles son los objetivos del Régimen de Servicio Civil?",
            "¿Qué principios rigen el Régimen de Servicio Civil?"
        ],
        "examples": [
            "¿Qué significa Régimen de Servicio Civil?",
            "¿Cuál es la definición de Régimen de Servicio Civil?"
        ],
        "tone": "formal",
        "resources": [
            {
                "label": "Acerca del Régimen del Servicio Civil",
                "url": "https://www.dgsc.go.cr/servicioCivil_acercade.html"
            }
        ]
    },
    {
        "question": "¿Cuál es la importancia del Régimen de Servicio Civil en Costa Rica?",
        "keywords": ["importancia", "régimen", "servicio civil", "Costa Rica", "relevancia"],
        "answer": "El Régimen de Servicio Civil es fundamental para el fortalecimiento de la democracia y la institucionalidad en Costa Rica. Ha contribuido a una Administración Pública ordenada y equilibrada, aplicando técnicas y políticas uniformes en la gestión de personal. Esto ha permitido erradicar la arbitrariedad y el favoritismo en el manejo del personal estatal, promoviendo la igualdad de oportunidades y reconociendo la capacidad y méritos de los servidores públicos.",
        "category": "Importancia",
        "relatedQuestions": [
            "¿Cómo ha influido el Régimen de Servicio Civil en la Administración Pública costarricense?",
            "¿Qué beneficios aporta el Régimen de Servicio Civil al Estado?"
        ],
        "examples": [
            "¿Por qué es importante el Régimen de Servicio Civil?",
            "¿Qué relevancia tiene el Régimen de Servicio Civil en la función pública?"
        ],
        "tone": "formal",
        "resources": [
            {
                "label": "Importancia del Régimen de Servicio Civil",
                "url": "https://www.dgsc.go.cr/servicioCivil_importancia.html"
            }
        ]
    },
    {
        "question": "¿Cuál es el fundamento jurídico del Régimen de Servicio Civil?",
        "keywords": ["fundamento", "jurídico", "régimen", "servicio civil", "base legal"],
        "answer": "El Régimen de Servicio Civil se fundamenta en los artículos 191 y 192 de la Constitución Política de Costa Rica. El artículo 191 establece que un estatuto de servicio civil regulará las relaciones entre el Estado y los servidores públicos, con el propósito de garantizar la eficiencia de la Administración. El artículo 192 indica que, con las excepciones que la Constitución y el estatuto de servicio civil determinen, los servidores públicos serán nombrados a base de idoneidad comprobada y solo podrán ser removidos por causales de despido justificado.",
        "category": "Fundamento Jurídico",
        "relatedQuestions": [
            "¿Qué leyes regulan el Régimen de Servicio Civil?",
            "¿Dónde se establece la base legal del Servicio Civil en Costa Rica?"
        ],
        "examples": [
            "¿Cuál es la base legal del Régimen de Servicio Civil?",
            "¿En qué artículos de la Constitución se fundamenta el Servicio Civil?"
        ],
        "tone": "formal",
        "resources": [
            {
                "label": "Fundamento jurídico del Régimen de Servicio Civil",
                "url": "https://www.dgsc.go.cr/servicioCivil_fundamentoJuridico.html"
            }
        ]
    },
    {
        "question": "¿Qué instituciones están cubiertas por el Régimen de Servicio Civil?",
        "keywords": ["instituciones", "cubiertas", "régimen", "servicio civil", "cobertura"],
        "answer": "El Régimen de Servicio Civil abarca a los distintos ministerios del Poder Ejecutivo, a sus organismos adscritos y al Instituto Nacional de Aprendizaje. Están excluidas instituciones como el Sistema Bancario Nacional, el Poder Judicial, el Tribunal Supremo de Elecciones, las Universidades, las Municipalidades y las instituciones autónomas o semiautónomas.",
        "category": "Cobertura",
        "relatedQuestions": [
            "¿Qué entidades forman parte del Régimen de Servicio Civil?",
            "¿Qué organismos están excluidos del Régimen de Servicio Civil?"
        ],
        "examples": [
            "¿Qué instituciones están incluidas en el Régimen de Servicio Civil?",
            "¿Cuáles entidades no están cubiertas por el Servicio Civil?"
        ],
        "tone": "formal",
        "resources": [
            {
                "label": "Cobertura del Régimen de Servicio Civil",
                "url": "https://www.dgsc.go.cr/servicioCivil_cobertura.html"
            }
        ]
    },
    {
        "question": "¿Cómo está organizada la Dirección General de Servicio Civil?",
        "keywords": ["organización", "dirección general", "servicio civil", "estructura"],
        "answer": "La Dirección General de Servicio Civil es la institución rectora encargada de dirigir y administrar la aplicación del Estatuto de Servicio Civil en las diferentes instituciones del Régimen. Cuenta con instancias como el Sistema de Gestión de Recursos Humanos (SIGEREH), que incluye las Oficinas de Gestión Institucional de Recursos Humanos (OGEREH), la Asamblea de Jefes de Gestión de Recursos Humanos y el Consejo Técnico Consultivo de Gestión de Recursos Humanos. Además, integra el Subsistema de Capacitación y Desarrollo del Régimen de Servicio Civil (SUCADES) y los Tribunales de Servicio Civil y de Carrera Docente.",
        "category": "Organización",
        "relatedQuestions": [
            "¿Qué departamentos conforman la Dirección General de Servicio Civil?",
            "¿Qué funciones tiene el SIGEREH dentro del Servicio Civil?"
        ],
        "examples": [
            "¿Cómo se estructura la Dirección General de Servicio Civil?",
            "¿Qué componentes integran la organización del Servicio Civil?"
        ],
        "tone": "formal",
        "resources": [
            {
                "label": "Organización del Régimen de Servicio Civil",
                "url": "https://www.dgsc.go.cr/servicioCivil_organizacion.html"
            }
        ]
    },
    {
        "question": "¿Cuáles son los trámites disponibles en la Dirección General de Servicio Civil?",
        "keywords": ["trámites", "disponibles", "dirección general", "servicio civil", "opciones"],
        "answer": "La Dirección General de Servicio Civil ofrece diversos trámites, incluyendo reprogramación de pruebas, reconocimiento de puntos adicionales por carreras acreditadas, devolución de resultados de pruebas, solicitudes de exclusión y re inclusión en el Registro de Elegibles, cambios de correo, modificación de oferta de servicios en la carrera docente, certificaciones salariales, y denuncias sobre irregularidades de oficinas.",
        "category": "Trámites",
        "relatedQuestions": [
            "¿Cómo solicitar una reprogramación de pruebas?",
            "¿Qué trámites están disponibles en el Servicio Civil?"
        ],
        "examples": [
            "¿Qué trámites puedo realizar en el Servicio Civil?",
            "¿Cuáles son los servicios de la DGSC?"
        ],
        "tone": "formal",
        "resources": [
            {
                "label": "Trámites y Servicios en la DGSC",
                "url": "https://www.dgsc.go.cr/tramitesServicios.html"
            }
        ]
    },
    {
        "question": "¿Cuáles son los servicios que brinda la Dirección General de Servicio Civil?",
        "keywords": ["servicios", "brinda", "dirección general", "servicio civil", "ofrecidos"],
        "answer": "La Dirección General de Servicio Civil proporciona servicios para el Régimen de Servicio Civil, como concursos internos, guías de mantenimiento de manual descriptivo de especialidades, formularios de modificación de especialidades, y declaraciones de atinencias académicas.",
        "category": "Servicios",
        "relatedQuestions": [
            "¿Qué servicios se ofrecen en el Régimen de Servicio Civil?",
            "¿Dónde puedo ver los servicios de la DGSC?"
        ],
        "examples": [
            "¿Cuáles son los servicios de la DGSC?",
            "¿Qué servicios están disponibles en la Dirección General de Servicio Civil?"
        ],
        "tone": "formal",
        "resources": [
            {
                "label": "Trámites y Servicios en la DGSC",
                "url": "https://www.dgsc.go.cr/tramitesServicios.html"
            }
        ]
    }
];

export const basicQuestions = [
    {
        question: "Hola",
        keywords: ["hola", "buenas", "saludo"],
        answer: "¡Hola! ¿En qué puedo ayudarte hoy?",
        category: "Saludos",
        relatedQuestions: ["¿Cómo estás?", "¿Qué tal?"],
        examples: ["Hola, ¿me puedes ayudar?", "Hola, necesito información"],
        tone: "informal",
        resources: []
    },
    {
        question: "Buenos días",
        keywords: ["buenos días", "buen día", "día"],
        answer: "¡Buenos días! ¿Cómo puedo asistirte?",
        category: "Saludos",
        relatedQuestions: ["Buenas tardes", "Buenas noches"],
        examples: ["Buenos días, necesito ayuda", "Buen día, ¿me puedes ayudar?"],
        tone: "informal",
        resources: []
    },
    {
        question: "Buenas tardes",
        keywords: ["buenas tardes", "tarde", "buenas"],
        answer: "¡Buenas tardes! Espero que estés teniendo un buen día. ¿En qué puedo ayudarte?",
        category: "Saludos",
        relatedQuestions: ["Buenos días", "Buenas noches"],
        examples: ["Buenas tardes, necesito información", "Buenas, ¿me puedes ayudar?"],
        tone: "informal",
        resources: []
    },
    {
        question: "Buenas noches",
        keywords: ["buenas noches", "noche", "buenas"],
        answer: "¡Buenas noches! ¿Hay algo en lo que pueda ayudarte antes de que termine el día?",
        category: "Saludos",
        relatedQuestions: ["Buenos días", "Buenas tardes"],
        examples: ["Buenas noches, tengo una consulta", "Noche, ¿puedes ayudarme?"],
        tone: "informal",
        resources: []
    },
    {
        question: "¿Cómo estás?",
        keywords: ["cómo estás", "qué tal", "cómo te va"],
        answer: "¡Gracias por preguntar! Estoy aquí para ayudarte en lo que necesites. ¿Cómo puedo asistirte hoy?",
        category: "Saludos",
        relatedQuestions: ["Hola", "¿Qué tal?"],
        examples: ["¿Cómo estás?", "¿Qué tal?"],
        tone: "informal",
        resources: []
    },
    {
        question: "¿Me puedes ayudar?",
        keywords: ["me puedes ayudar", "puedes ayudarme", "ayuda"],
        answer: "¡Por supuesto! Estoy aquí para ayudarte. ¿En qué tienes dudas?",
        category: "Ayuda",
        relatedQuestions: ["¿Qué puedes hacer?", "Necesito ayuda"],
        examples: ["¿Puedes ayudarme?", "Necesito asistencia"],
        tone: "informal",
        resources: []
    },
    {
        question: "¿Qué puedes hacer?",
        keywords: ["qué puedes hacer", "qué sabes hacer", "funciones"],
        answer: "Puedo responder tus preguntas sobre nuestros servicios y ayudarte a encontrar la información que necesitas. ¡Dime en qué te gustaría saber más!",
        category: "Ayuda",
        relatedQuestions: ["¿Me puedes ayudar?", "¿Qué servicios ofrecen?"],
        examples: ["¿Qué puedes hacer?", "¿Cuáles son tus funciones?"],
        tone: "informal",
        resources: []
    },
    {
        question: "Gracias",
        keywords: ["gracias", "agradezco", "te agradezco"],
        answer: "¡De nada! Estoy aquí para ayudarte. Si necesitas algo más, solo avísame.",
        category: "Cortesía",
        relatedQuestions: ["Muchas gracias", "Te lo agradezco"],
        examples: ["Gracias por tu ayuda", "Agradezco tu respuesta"],
        tone: "formal",
        resources: []
    },
    {
        question: "Adiós",
        keywords: ["adiós", "hasta luego", "nos vemos"],
        answer: "¡Hasta luego! Espero verte pronto. Cuídate.",
        category: "Despedida",
        relatedQuestions: ["Nos vemos", "Chao"],
        examples: ["Adiós", "Hasta luego, gracias"],
        tone: "informal",
        resources: []
    }
];