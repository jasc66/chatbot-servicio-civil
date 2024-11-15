// Banco de preguntas y respuestas para sistemas de la DGSC
export const qaPairsSystems = [
    {
        question: "¿Qué es la Plataforma Integrada de Empleo Público (PIEP)?",
        keywords: ['piep', 'plataforma', 'integrada', 'empleo', 'publico'],
        answer: 'La Plataforma Integrada de Empleo Público (PIEP) es una herramienta que permite gestionar empleos públicos, donde puedes consultar puestos disponibles y registrar tu información.',
        category: 'Sistema',
        relatedQuestions: [
            "¿Cómo aplicar a un puesto en el Servicio Civil?",
            "¿Qué es el reclutamiento abierto y permanente?"
        ],
        examples: [
            "¿Cómo funciona PIEP?",
            "¿Dónde puedo encontrar empleo público?"
        ],
        tone: 'formal',
        resources: [
            { label: "Accede a PIEP", url: "https://piep.dgsc.go.cr/" }
        ]
    },
    {
        question: "¿Dónde puedo ver las vacantes disponibles?",
        keywords: ['vacantes', 'puestos', 'disponibles', 'ofertas de empleo'],
        answer: 'Puedes ver las vacantes disponibles en el sistema de Puestos Vacantes de la DGSC, donde se publican las oportunidades en el sector público.',
        category: 'Sistema',
        relatedQuestions: [
            "¿Cómo aplicar a un puesto en el Servicio Civil?",
            "¿Qué requisitos necesito para postularme?"
        ],
        examples: [
            "¿Dónde están las vacantes de empleo?",
            "¿Qué puestos hay disponibles?"
        ],
        tone: 'formal',
        resources: [
            { label: "Consulta de Vacantes", url: "https://vacantes.dgsc.go.cr/" }
        ]
    },
    {
        question: "¿Qué es el Campus Virtual CECADES?",
        keywords: ['campus', 'cecade', 'virtual', 'cursos'],
        answer: 'El Campus Virtual CECADES es una plataforma de formación en línea para capacitar a funcionarios públicos, ofreciendo cursos y recursos educativos.',
        category: 'Sistema',
        relatedQuestions: [
            "¿Qué cursos ofrece el CECADES?",
            "¿Cómo registrarme en el Campus Virtual?"
        ],
        examples: [
            "¿Dónde puedo encontrar capacitación?",
            "¿Hay cursos en línea para funcionarios?"
        ],
        tone: 'formal',
        resources: [
            { label: "Campus Virtual CECADES", url: "https://campus.dgsc.go.cr/" }
        ]
    },
    {
        question: "¿Qué es el Manual de Clases y Especialidades?",
        keywords: ['manual', 'clases', 'especialidades', 'clasificación de puestos'],
        answer: 'El Manual de Clases y Especialidades es una herramienta que describe los distintos puestos en el Servicio Civil y sus requisitos, facilitando la clasificación y selección de personal.',
        category: 'Documentación',
        relatedQuestions: [
            "¿Cómo se clasifican los puestos en la DGSC?",
            "¿Qué funciones tiene cada puesto?"
        ],
        examples: [
            "¿Dónde puedo ver el Manual de Clases?",
            "¿Qué puestos están clasificados?"
        ],
        tone: 'formal',
        resources: [
            { label: "Manual de Clases y Especialidades", url: "https://www.dgsc.go.cr/ts_clase_docente/" }
        ]
    },
    {
        question: "¿Dónde puedo consultar la Información Salarial?",
        keywords: ['información', 'salarial', 'escalas', 'salarios'],
        answer: 'La sección de Información Salarial contiene detalles sobre las escalas salariales aplicables a puestos bajo el Régimen de Servicio Civil.',
        category: 'Información',
        relatedQuestions: [
            "¿Cuáles son las escalas salariales?",
            "¿Cómo saber el salario de un puesto?"
        ],
        examples: [
            "¿Dónde puedo ver las escalas salariales?",
            "¿Qué salarios hay en el Servicio Civil?"
        ],
        tone: 'formal',
        resources: [
            { label: "Información Salarial", url: "https://www.dgsc.go.cr/informacion_salarial.html" }
        ]
    },
];
