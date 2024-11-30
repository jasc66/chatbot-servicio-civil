export const qaPairsContact = [
    {
        question: "¿Cómo contactar la Contraloría de Servicios?",
        keywords: ['contraloría', 'servicios', 'contacto', 'quejas'],
        answer: 'La Contraloría de Servicios de la DGSC ofrece atención al usuario para consultas y quejas relacionadas con los servicios brindados por la institución.',
        category: 'Contacto',
        relatedQuestions: [
            "¿Dónde presentar una queja en el Servicio Civil?",
            "¿Cómo contactar la Contraloría de Servicios de la DGSC?"
        ],
        examples: [
            "¿Cuál es el número de la Contraloría?",
            "¿Cómo reportar un problema en la DGSC?"
        ],
        tone: 'formal',
        resources: [
            { label: "Contraloría de Servicios", url: "https://www.dgsc.go.cr/contraloria.html" }
        ],
        additionalInfo: {
            contactPerson: "Departamento de Contraloría de Servicios",
            phone: "(506) 2586-8309",
            email: "contraloria@dgsc.go.cr",
            hours: "Lunes a Viernes, de 7:30 AM a 3:30 PM"
        }
    },
    {
        question: "¿Qué es el Campus Virtual CECADES?",
        keywords: ['campus', 'virtual', 'cecade', 'cursos', 'capacitación'],
        answer: 'El Campus Virtual CECADES es una plataforma de formación en línea diseñada para capacitar a los funcionarios públicos a través de cursos y recursos educativos.',
        category: 'Sistema',
        relatedQuestions: [
            "¿Qué cursos ofrece el CECADES?",
            "¿Cómo registrarse en el Campus Virtual?"
        ],
        examples: [
            "¿Hay cursos en línea para empleados públicos?",
            "¿Qué tipo de capacitaciones ofrece la DGSC?"
        ],
        tone: 'formal',
        resources: [
            { label: "Campus Virtual CECADES", url: "https://campus.dgsc.go.cr/" }
        ],
        additionalInfo: {
            contactPerson: "Centro de Capacitación y Desarrollo (CECADES)",
            phone: "(506) 2227-0270",
            email: "cecade@dgsc.go.cr"
        }
    },
    {
        question: "¿Dónde se encuentra el Manual de Clases y Especialidades?",
        keywords: ['manual', 'clases', 'especialidades', 'clasificación'],
        answer: 'El Manual de Clases y Especialidades describe los distintos puestos del Servicio Civil y sus requisitos.',
        category: 'Documentación',
        relatedQuestions: [
            "¿Cómo se clasifican los puestos?",
            "¿Qué puestos están disponibles en el Servicio Civil?"
        ],
        examples: [
            "¿Cuáles son las especialidades en la DGSC?",
            "¿Qué posiciones están documentadas en el manual?"
        ],
        tone: 'formal',
        resources: [
            { label: "Manual de Clases y Especialidades", url: "https://www.dgsc.go.cr/ts_clase_docente/" }
        ],
        additionalInfo: {
            contactPerson: "Departamento de Clasificación y Valoración de Puestos",
            phone: "(506) 2586-8300"
        }
    },
    {
        question: "¿Cómo acceder a la Información Salarial?",
        keywords: ['información', 'salarial', 'escalas', 'salarios'],
        answer: 'La sección de Información Salarial ofrece detalles sobre las escalas salariales aplicables a los puestos bajo el Régimen de Servicio Civil.',
        category: 'Información',
        relatedQuestions: [
            "¿Cuáles son las escalas salariales de la DGSC?",
            "¿Dónde consultar el salario de un puesto?"
        ],
        examples: [
            "¿Qué escala salarial aplica para un puesto?",
            "¿Dónde encontrar información sobre salarios?"
        ],
        tone: 'formal',
        resources: [
            { label: "Información Salarial", url: "https://www.dgsc.go.cr/informacion_salarial.html" }
        ],
        additionalInfo: {
            contactPerson: "Departamento de Información Salarial",
            phone: "(506) 2586-8300",
            email: "info_salarial@dgsc.go.cr"
        }
    },
    {
        question: "¿Cómo contactar al Centro de Información Documental (CIDSECI)?",
        keywords: ['centro', 'información', 'cidseci', 'documental', 'contacto'],
        answer: 'El Centro de Información Documental del Servicio Civil (CIDSECI) es responsable de gestionar y facilitar el acceso a documentos y normativa institucional.',
        category: 'Contacto',
        relatedQuestions: [
            "¿Qué documentos tiene el CIDSECI?",
            "¿Cómo puedo acceder a la normativa del Servicio Civil?"
        ],
        examples: [
            "¿Cómo contactar al CIDSECI?",
            "¿Dónde encontrar documentos del Servicio Civil?"
        ],
        tone: 'formal',
        resources: [
            { label: "Centro de Información Documental (CIDSECI)", url: "https://cidseci.dgsc.go.cr/" }
        ],
        additionalInfo: {
            contactPerson: "Centro de Información Documental (CIDSECI)",
            phone: "(506) 2296-9570",
            email: "cidseci@dgsc.go.cr"
        }
    },
    {
        question: "¿Cuál es el horario de la DGSC?",
        keywords: ['horario', 'atención', 'apertura', 'cierre'],
        answer: 'La Dirección General del Servicio Civil (DGSC) atiende al público de lunes a viernes, de 7:30 AM a 3:30 PM.',
        category: 'Horario',
        relatedQuestions: [
            "¿Cuáles son los horarios de atención de la DGSC?",
            "¿A qué hora abre la DGSC?"
        ],
        examples: [
            "¿A qué hora cierran?",
            "¿Cuál es el horario de atención al público?"
        ],
        tone: 'formal',
        resources: [],
        additionalInfo: {
            officeHours: "Lunes a Viernes, 7:30 AM a 3:30 PM",
            contactPerson: "Departamento de Recursos Humanos",
            phone: "(506) 2586-8305",
            email: "rrhh@dgsc.go.cr"
        }
    },
    {
        question: "¿Cómo contactar al Departamento de Recursos Humanos?",
        keywords: ['contacto', 'recursos humanos', 'RRHH', 'personal', 'teléfono', 'correo'],
        answer: 'Puede contactar al Departamento de Recursos Humanos de la DGSC para consultas relacionadas con el personal y gestiones administrativas.',
        category: 'Contacto',
        relatedQuestions: [
            "¿Cómo puedo hablar con Recursos Humanos?",
            "¿Cuál es el correo de Recursos Humanos?"
        ],
        examples: [
            "¿Teléfono de Recursos Humanos?",
            "¿Dónde enviar una consulta sobre personal?"
        ],
        tone: 'formal',
        resources: [],
        additionalInfo: {
            contactPerson: "Departamento de Recursos Humanos",
            phone: "(506) 2586-8305",
            email: "rrhh@dgsc.go.cr"
        }
    }
        
];
