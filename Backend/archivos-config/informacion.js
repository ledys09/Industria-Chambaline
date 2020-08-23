/*
    Base de datos para la plataforma Chambaline
    Trabaja con tres tipos de usuarios definidos de la siguiente manera:
        Tipo 1: Usuario normal (Solamente puede visualizar las publicaciones del usuario Tipo 2).
        Tipo 2; Usuario que ofrece sus servicios dentro de la plataforma.
        Tipo 3 Usuario administrador.
    Los servicios se dividen en las siguientes categorías:
        Categoría 1: Carpintería
        Categoría 2: Sastrería
        Categoría 3: Belleza 
        Categoría 4: Mecánica
        Categoría 5: Construcción
        Categoría 6: Fletes
        Categoría 7: Cocina
        Categoría 8: Tutores
        Categoría 9: Abogados 
        Categoría 10: Doctores
 */
db.usuarios.insert([
    {
        primerNombre: 'Diana',
        segundoNombre: 'Yolibeth',
        primerApellido: 'Sánchez',
        segundoApellido: 'Canales',
        edad: 22,
        telefono: 98551006,
        correo: 'diana@gmail.com',
        nombreUsuario: '@diana',
        password: '12345',
        fotoPerfil: 'https://media.metrolatam.com/2019/07/13/cabello-2f2578c29f86795d310ba05b0b7a235d-1200x600.jpg',
        tipoUsuario: 2,
        servicios: [
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Estilista profesional',
                descripcionServicio: 'Especialista cambio de imagen en el cabello, cuidado y mantenimiento de éste.',
                categoria: 3,
                publicaciones: [
                    {
                        contenido: 'Cambio de color de cabello.',
                        imagen: 'https://www.instyle.es/medio/2018/10/31/clara-lago-cambio-radical_d0944c27_900x600.jpg'
                    },
                    {
                        contenido: 'Productos que utilizo para el cuidado del cabello.',
                        imagen: 'https://www.diariolibre.com/binrepository/546x354/0c2/546d350/none/10904/YRAF/shutterstock-421335289_13609568_20200406194910.jpg'
                    },
                ]
            }
        ],
    },
    {
        primerNombre: 'Ledys',
        segundoNombre: 'Estefany',
        primerApellido: 'Santos',
        segundoApellido: 'Alvarado',
        edad: 22,
        telefono: 98782332,
        correo: 'ledys@gmail.com',
        nombreUsuario: '@ledys',
        password: 'abcde',
        fotoPerfil: 'https://image.freepik.com/foto-gratis/peluquero-mujer-cortando-pelo-hombre_85574-4886.jpg',
        tipoUsuario: 2,
        servicios: [
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Estilista para hombres',
                descripcionServicio: 'Experiencia de 10 años en corte de cabello y de barba.',
                categoria: 3,
                publicaciones: [
                    {
                        contenido: 'Cambio radical en mi cliente',
                        imagen: 'https://www.recreoviral.com/wp-content/uploads/2017/10/Cambios-de-look-hombres-alfa-recreoviral-6-700x700.jpg'
                    },
                    {
                        contenido: 'Diversidad de diseño de barbas',
                        imagen: 'https://cortesdecabellohombre.com/wp-content/uploads/2018/12/barba-heavy-para-hombres.jpg'
                    },
                ]        
            }
        ],   
    },
    {
        primerNombre: 'Mario',
        segundoNombre: 'Josué',
        primerApellido: 'Rosales',
        segundoApellido: 'Aguilar',
        edad: 21,
        telefono: 98553006,
        correo: 'mario@gmail.com',
        nombreUsuario: '@mario',
        password: '67890',
        fotoPerfil: 'https://d2xtbylwu97mzb.cloudfront.net/blog/corporativo/wp-content/uploads/2018/12/mentir-abogados-cliente-consecuencias-812x447.jpg?x83011',
        tipoUsuario: 2,
        servicios: [
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Abogado penalista',
                descripcionServicio: 'Graduado en la Universidad Nacional Autónoma de Honduras, dispuesto a defender los derechos de buenos ciudadanos',
                categoria: 9,
            },
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Abogado de familia',
                descripcionServicio: 'Graduado en la Universidad Nacional Autónoma de Honduras, interesado en conseguir estabilidad en las familias hondureñas',
                categoria: 9,
                publicaciones: [
                    {
                        contenido: 'Mi título universitario, de mis mejores tesoros',
                        imagen: 'https://www.elheraldo.hn/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=UTUv3Zt9os2vWyODVJua28$daE2N3K4ZzOUsqbU5sYuOqiadXspX$C6E0fpf3eOM6FB40xiOfUoExWL3M40tfzssyZqpeG_J0TFo7ZhRaDiHC9oxmioMlYVJD0A$3RbIiibgT65kY_CSDiCiUzvHvODrHApbd6ry6YGl5GGOZrs-&CONTENTTYPE=image/jpeg'
                    }
                ]
            }

        ],
        

    },
    {
        primerNombre: 'Michael',
        segundoNombre: 'Wilfredo',
        primerApellido: 'Banegas',
        segundoApellido: 'López',
        edad: 22,
        telefono: 98551007,
        correo: 'michael@gmail.com',
        nombreUsuario: '@michael',
        password: '12345',
        fotoPerfil: 'https://image.freepik.com/foto-gratis/composicion-moderna-mecanico-automoviles_23-2147881912.jpg',
        tipoUsuario: 2,
        servicios: [
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Especialista en mecánica automotriz',
                descripcionServicio: 'Me dedico a la mecánica desde mis 7 años, todo lo aprendí de mi papá y lo que hago está 100% garantizado.',
                categoria: 4,
                publicaciones: [
                    {
                        contenido: 'Cambio de aceite realizado en pocos minutos',
                        imagen: 'https://t1.uc.ltmcdn.com/images/9/0/7/img_con_que_frecuencia_se_debe_cambiar_el_aceite_del_motor_25709_600.jpg'
                    },
                    {
                        contenido: 'Cambio de caja automática a mecánica hecho en mi taller',
                        imagen: 'https://img.motoryracing.com/noticias/portada/23000/23084-n.jpg'
                    },
                ]
        
            }
        ],        
    },
    {
        primerNombre: 'Bessy',
        segundoNombre: 'Gisselle',
        primerApellido: 'Sánchez',
        segundoApellido: 'Canales',
        edad: 25,
        telefono: 98551006,
        correo: 'bessy@gmail.com',
        nombreUsuario: '@bessy',
        password: 'abcde',
        fotoPerfil: 'https://eresmama.com/wp-content/uploads/2017/12/chica-profesora-500x334.jpg',
        tipoUsuario: 2,
        servicios: [
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Tutor escolar',
                descripcionServicio: 'Brindo tutorías de todas las materías de primaria, ya sea de manera individual como grupal',
                categoria: 8,
                publicaciones: [
                    {
                        contenido: 'Tutorías grupales de la clase de matemáticas',
                        imagen: 'https://e.radio-capital.io/large/2019/04/03/300530_773887.jpg'
                    },
                    {
                        contenido: 'Excelente trato para las personas a las que brindo tutorías',
                        imagen: 'http://www.fundacioncadah.org/j289eghfd7511986_uploads/TDAH_PT.jpg'
                    },
                ]
            }
        ],
    },
    {
        primerNombre: 'Óscar',
        segundoNombre: 'Geovanni',
        primerApellido: 'Sánchez',
        segundoApellido: 'Cruz',
        edad: 47,
        telefono: 98551006,
        correo: 'oscar@gmail.com',
        nombreUsuario: '@oscar',
        password: '12345',
        fotoPerfil: 'https://www.thecooksters.com/wp-content/uploads/2019/08/pasion-600x397.jpg',
        tipoUsuario: 2,
        servicios: [
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Cocinero de comida mexicana',
                descripcionServicio: 'Viví en México durante 20 años, me enamoré de la comida mexicana, puedo hacer desde el platillo más sencillo hasta el más lujoso',
                categoria: 7,
                publicaciones: [
                    {
                        contenido: 'Enchiladas con salsa merge',
                        imagen: 'https://www.mexicoenmicocina.com/wp-content/uploads/2013/11/Red2BEnchiladas-1-A.jpg'
                    },
                    {
                        contenido: 'Platillos hechos para la boda de la famosa Silvia Pinal',
                        imagen: 'https://www.infobae.com/new-resizer/5Qo61WJNxmIczrNk8yM086L3pKk=/768x432/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/05/16145940/Comida-Mexicana-y-Tex-Mex.jpg'
                    },
                ]
            }
        ],
        

    },
    {
        primerNombre: 'Samuel',
        segundoNombre: 'José',
        primerApellido: 'Reyes',
        segundoApellido: 'Miralda',
        edad: 40,
        telefono: 98782332,
        correo: 'samuel@gmail.com',
        nombreUsuario: '@samuel',
        password: 'abcde',
        fotoPerfil: 'https://previews.123rf.com/images/lacheev/lacheev1711/lacheev171100274/90818341-el-pastelero-est%C3%A1-preparando-un-pastel-en-la-cocina-de-la-pasteler%C3%ADa-.jpg',
        tipoUsuario: 2,
        servicios: [
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Pastelero profesional',
                descripcionServicio: 'Me dedico a realizar los mejores postres del país a un precio bastante accesible para todos.',
                categoria: 7,
                publicaciones: [
                    {
                        contenido: 'Celebración de cumpleaños con mis postres',
                        imagen: 'https://i.ytimg.com/vi/vpLzNh9eXW4/maxresdefault.jpg'
                    }
                ]
            }
        ],
    },
    {
        primerNombre: 'Elias',
        segundoNombre: 'Jose',
        primerApellido: 'Espinal',
        segundoApellido: 'Garcia',
        edad: 20,
        telefono: 96965454,
        correo: 'elias@gmail.com',
        nombreUsuario: '@elias',
        password: '12345',
        fotoPerfil: 'https://s3.eu-central-1.amazonaws.com/lillypad-es/WP/wp-content/uploads/robertvallejo-642x642.jpg',
        tipoUsuario: 2,
        servicios: [
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Carpinteria',
                descripcionServicio: 'Realizo trabajos de carpinteria de calidad y al mejor precio.',
                categoria: 1,
                publicaciones: [
                    {
                        contenido: 'Sillas de diferentes tamaños y colores.',
                        imagen: 'https://www.bodegademuebles.com/wp-content/uploads/2017/08/sillas-de-madera-carpinteria-en-monterrey.jpg'
                    },
                    {
                        contenido: 'Utilizamos barniz del mejor en nuestros trabajos.',
                        imagen: 'https://www.quotatis.es/consejos-reformas/wp-content/uploads/sites/2/2019/02/shutterstock_764511949-min.jpg'
                    },
                ]
            },
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Flete seguro',
                descripcionServicio: 'Viaje y traslade sus cosas de la forma más segura dentro y fuera de la ciudad.',
                categoria: 6,
                publicaciones: [
                    {
                        contenido: 'Utilizamos herramientas para no dañar sus pertenencias.',
                        imagen: 'https://st3.depositphotos.com/1010613/18046/i/450/depositphotos_180462478-stock-photo-two-young-delivery-men-uniform.jpg'
                    },
    
                ]
            }
        ]
    },   
    {
        primerNombre: 'Yajaira',
        segundoNombre: 'Elizabeth',
        primerApellido: 'Gonzales',
        segundoApellido: 'Mejia',
        edad: 21,
        telefono: 97975252,
        correo: 'eli@gmail.com',
        nombreUsuario: '@eli',
        password: '12345',
        fotoPerfil: 'https://tusimagenesde.com/wp-content/uploads/2018/02/fotos-de-personas-2.jpg',
        tipoUsuario: 2,
        servicios: [
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Sastreria fina',
                descripcionServicio: 'Diseñamos los mejores atuendos, uniformes y reparamos su ropa.',
                categoria: 2,
                publicaciones: [
                    {
                        contenido: 'Manejamos telas finas y perdurable.',
                        imagen: 'https://www.antonioguirado.com/wp-content/uploads/2017/07/muestrario-tejidos-trajes-hombres-2017.jpg'
                    },
                ]
            },
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Cocina y postres',
                descripcionServicio: 'Con ingredientes de calidad cocinamos los mejores platillos, para sus celebraciones.',
                categoria: 7,
                publicaciones: [
                    {
                        contenido: 'Nuestros platillos especiales, para sus momentos especiales',
                        imagen: 'https://www.cocinayaficiones.com/wp-content/uploads/2014/12/platos-navide%C3%B1os-collage-ok.jpg'
                    },
                    {
                        contenido: 'Los postres más deliciosos de los cuales puedes disfrutar.',
                        imagen: 'https://estag.fimagenes.com/img/3/1/R/L/B/1RLB_900.jpg'
                    },
    
                ]
            }
        ]
    },  
    {
        primerNombre: 'Denia',
        segundoNombre: 'Maricela',
        primerApellido: 'Dominguez',
        segundoApellido: 'Funez',
        edad: 25,
        telefono: 95958989,
        correo: 'denia@gmail.com',
        nombreUsuario: '@denia',
        password: '12345',
        fotoPerfil: 'https://miro.medium.com/max/1200/1*6EJewTXKO29I2FCvSwjoRw.jpeg',
        tipoUsuario: 2,
        servicios: [
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Estilista',
                descripcionServicio: 'Si deseas un cambio de look, arreglar tus uñas, cejas o pestañas estamos listos para atenderte.',
                categoria: 3,
                publicaciones: [
                    {
                        contenido: 'Con los mejores procedimientos para tus cejas.',
                        imagen: 'https://i.pinimg.com/originals/75/4b/ab/754babf5bf516926fbe7ed372c3e717a.jpg'
                    },
                ]
            },
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Tutora Matematicas',
                descripcionServicio: 'Te apoyamos en tus clases de matematicas ya sea de secundaria o universitaria.',
                categoria: 8,
                publicaciones: [
                    {
                        contenido: 'Para ayudarte manejamos los libros que están a tu alcance.',
                        imagen: 'https://http2.mlstatic.com/juego-de-6-libros-calculo-algebra-trigonometria-y-redes-D_NQ_NP_684458-MLV26733610390_012018-F.jpg'
                    },
                    {
                        contenido: 'Consultas personalizadas.',
                        imagen: 'https://lpsingenieria.com/wp-content/uploads/2018/12/team-of-student-and-teacher-P4FS2RT-1170x780.jpg'
                    },
    
                ]
            }
        ]
    },  
    {
        primerNombre: 'Roberto',
        segundoNombre: 'Raul',
        primerApellido: 'Vasquez',
        segundoApellido: 'Moran',
        edad: 28,
        telefono: 33525265,
        correo: 'roberto@gmail.com',
        nombreUsuario: '@roberto',
        password: '12345',
        fotoPerfil: 'https://cdn.pixabay.com/photo/2020/03/21/17/55/person-4954785_960_720.jpg',
        tipoUsuario: 2,
        servicios: [
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Mecánico Automotriz',
                descripcionServicio: 'Reparamos y pulimos todo tipo de autos, visitanos o podemos llegar a donde te encuentres.',
                categoria: 4,
                publicaciones: [
                    {
                        contenido: 'Cambios de aceite, parche de llantas entre otros servicios que ofrecemos.',
                        imagen: 'https://d26m4ikkajfmz.cloudfront.net/wp-content/uploads/2018/09/llantera-domicilio-3.jpg'
                    },
                    {
                        contenido: 'Tambien reparamos tu moto.',
                        imagen: 'https://4.bp.blogspot.com/-5UJerjSU-Z8/WNbV7hCwTAI/AAAAAAAADtQ/ZN_iXzD-930gfXf0i3lhIDrZ6yoOQMV1QCLcB/s640/Mecanica%2Bmotos.jpg'
                    },
                ]
            },
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Abogado Notario',
                descripcionServicio: 'Realizamos traspasos, autenticar papeles, y muchas cosas más. Bufete Moran y asociados',
                categoria: 9,
                publicaciones: [
                    {
                        contenido: 'Trabajamos directamente con la secretaria de relaciones exteriores para papeleo en el extranjero.',
                        imagen: 'https://tramiteshn.com/wp-content/uploads/2019/11/nuevodocumento-2019-11-12-143018368416305229005..jpg'
                    },
    
    
                ]
            }
        ]
    }, 
    {
        primerNombre: 'Rebeca',
        segundoNombre: 'Marisol',
        primerApellido: 'Fuentes',
        segundoApellido: 'Torres',
        edad: 29,
        telefono: 99987458,
        correo: 'rebeca@gmail.com',
        nombreUsuario: '@rebeca',
        password: '12345',
        fotoPerfil: 'https://www.eldistrito.es/wp-content/uploads/2019/11/fichero_37808_20170927.jpg',
        tipoUsuario: 2,
        servicios: [
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Pediatra',
                descripcionServicio: 'Doctora cirujana con especialidad en pediatria, servicio a domicilio y en clinica privada.',
                categoria: 10,
                publicaciones: [
                    {
                        contenido: 'Aplicamos las vacunas correspondientes a sus hijos.',
                        imagen: 'https://nacersano.marchofdimes.org/images/2018-vaccinations-schedule.jpg'
                    },
                    {
                        contenido: 'Instalaciones adeacuadas para los pequeños de casa.',
                        imagen: 'https://i.pinimg.com/originals/a1/7e/ca/a17ecac087ac635645e0239f49819b51.jpg'
                    },
                ]
            },
        ]
    },
    {
        primerNombre: 'Nelson',
        segundoNombre: 'Eduardo',
        primerApellido: 'Perez',
        segundoApellido: 'Elvir',
        edad: 30,
        telefono: 87685454,
        correo: 'nelson@gmail.com',
        nombreUsuario: '@nelson',
        password: '12345',
        fotoPerfil: 'https://p0.pikist.com/photos/481/493/male-model-male-model-male-models-young-man-handsome-guy-portrait.jpg',
        tipoUsuario: 2,
        servicios: [
            {
                _idServicio: ObjectId(),
                nombreServicio: 'Albañil con experiencia',
                descripcionServicio: 'Soy maestro de obra, me desempeño en todo tipo de contrucción ya sea por proyecto o trabajo por hora.',
                categoria: 5,
                publicaciones: [
                    {
                        contenido: 'Proyecto de casas que he realizado.',
                        imagen: 'https://www.serveisiconstruccio.com/media/crop/800/500/Listados/Servicios/Albanileria.jpg'
                    },
                ]
            },
        ]
    },
    {
        primerNombre: 'Héctor',
        segundoNombre: 'José',
        primerApellido: 'Bardales',
        segundoApellido: 'Sánchez',
        edad: 21,
        telefono: 89258876,
        correo: 'hector@gmail.com',
        nombreUsuario: '@hector',
        password: '1234',
        fotoPerfil: 'https://img.icons8.com/bubbles/2x/user.png',
        tipoUsuario: 2,
        servicios: [
        {
            _idServicio: ObjectId(),
            nombreServicio: 'Carpintero profesional',
            descripcionServicio: 'Especialista en confeccion de muebles de cocina.',
            categoria: 1,
            publicaciones: [
                {
                    contenido: 'Estantes de cocina de madera pura.',
                    imagen: 'https://http2.mlstatic.com/muebles-de-cocina-a-medida-modernos-y-tradicionales-D_NQ_NP_770526-MLC32301581384_092019-F.jpg'
                },
                {
                    contenido: 'Isla hecha completamente de madera para el centro de tu cocina.',
                    imagen: 'https://casaydiseno.com/wp-content/uploads/2020/04/islas-de-cocina-clasica.jpg'
                },
            ]
        },
        {
            _idServicio: ObjectId(),
            nombreServicio: 'Doctor',
            descripcionServicio: 'Especialista en enfermedades cardio respiratorias.',
            categoria: 10,
            publicaciones: [
                {
                    contenido: 'Consultas a domicilio en estos tiempos de pandemia respetando todos los protocolos de bioseguridad.',
                    imagen: 'https://ak.picdn.net/shutterstock/videos/4192342/thumb/1.jpg'
                }
            ]
        }]
    },
    {
        primerNombre: 'Montserrat',
        segundoNombre: 'Nazareth',
        primerApellido: 'Sánchez',
        segundoApellido: 'Bonilla',
        edad: 22,
        telefono: 98251934,
        correo: 'montse@gmail.com',
        nombreUsuario: '@montse',
        password: '1234',
        fotoPerfil: 'https://media.metrolatam.com/2019/07/13/cabello-2f2578c29f86795d310ba05b0b7a235d-1200x600.jpg',
        tipoUsuario: 2,
        servicios: [
        {
            _idServicio: ObjectId(),
            nombreServicio: 'Sastre profesional',
            descripcionServicio: 'Especialista manufactura y arreglo de cualquier prenda o zapato.',
            categoria: 2,
            publicaciones: [
                {
                    contenido: 'Ultimo arreglo hecho, clienta feliz.',
                    imagen: 'https://i.pinimg.com/564x/3f/c0/41/3fc041a24d6e55bce1ee3374bfe8a3d6.jpg'
                },
                {
                    contenido: 'Arreglo de zapatos de hombre o mujer.',
                    imagen: 'https://growlermag-media.s3.amazonaws.com/011717_Growler_Georges_041.jpg'
                },
            ]
        },
        {
            _idServicio: ObjectId(),
            nombreServicio: 'Cocinera',
            descripcionServicio: 'Especialista comidas gourmet.',
            categoria: 7,
            publicaciones: [
                {
                    contenido: 'Exquisitos platillos para cualquier evento que se presente.',
                    imagen: 'https://assets.bonappetit.com/photos/5e7a6c79edf206000862e452/8:5/w_2295,h_1434,c_limit/Cooking-Home-Collection.jpg'
                }
            ]
        }]
    },
    {
        primerNombre: 'Carlos',
        segundoNombre: 'Wilfredo',
        primerApellido: 'Banegas',
        segundoApellido: 'Lopez',
        edad: 22,
        telefono: 38871934,
        correo: 'carlos@gmail.com',
        nombreUsuario: '@carlos',
        password: '1234',
        fotoPerfil: 'https://img.icons8.com/bubbles/2x/user.png',
        tipoUsuario: 2,
        servicios: [
        {
            _idServicio: ObjectId(),
            nombreServicio: 'Mecánico',
            descripcionServicio: 'Especialista en mecánica automotriz.',
            categoria: 4,
            publicaciones: [
                {
                    contenido: 'Cambio de aceite y mantenimiento general a su coche.',
                    imagen: 'https://i.ytimg.com/vi/O1hF25Cowv8/maxresdefault.jpg'
                },
                {
                    contenido: 'Alineo y balanceo para su coche a un modico precio.',
                    imagen: 'https://lh3.googleusercontent.com/proxy/T4G4lhrD23ISfdtE1iKlFWL1O-Ug_E2m0-egQ7Gg_uPFbtkaVXOjjo3j3BkRS4ys9FbjVOXG-f2s-t1fTbmt9FyoxaSfsTgpTXWxq-wXiAlUJ96CMoqmSAPVLi9Eo7AK7wtYpyx4mZzwEZnhDXMJk2d8jcA2MNUk'
                },
            ]
        },
        {
            _idServicio: ObjectId(),
            nombreServicio: 'Abogado',
            descripcionServicio: 'Especialista en derecho de patentes.',
            categoria: 9,
            publicaciones: [
                {
                    contenido: 'Cualquier duda o consulta estamos a la orden para servirle y ser su representante legal.',
                    imagen: 'https://robertdebry.com/wp-content/uploads/2019/02/shutterstock_746018851.jpg'
                }
            ]
        }]
    },
    {
        primerNombre: 'José',
        segundoNombre: 'Alejandro',
        primerApellido: 'Da silva',
        segundoApellido: 'Santos',
        edad: 21,
        telefono: 88879924,
        correo: 'jose@gmail.com',
        nombreUsuario: '@jose',
        password: '1234',
        fotoPerfil: 'https://img.icons8.com/bubbles/2x/user.png',
        tipoUsuario: 2,
        servicios: [
        {
            _idServicio: ObjectId(),
            nombreServicio: 'Fletes',
            descripcionServicio: 'Viajes a todo lo ancho y largo del país.',
            categoria: 6,
            publicaciones: [
                {
                    contenido: 'Viajes y envios a todo el país por un comodo precio.',
                    imagen: 'https://cdn.vox-cdn.com/thumbor/dXnH-ySPU85VXbzb9YOQE3Ac9sw=/0x0:4243x3079/1400x933/filters:focal(1783x1201:2461x1879):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/65022936/TuSimple_Self_Drving_Truck_4_copy.0.jpg'
                }
            ]
        },
        {
            _idServicio: ObjectId(),
            nombreServicio: 'Albañil',
            descripcionServicio: 'Construccion industrial y residencial.',
            categoria: 5,
            publicaciones: [
                {
                    contenido: 'Orgulloso de haber sido parte de la creación de este gran proyecto, un logro mas a mi carrera.',
                    imagen: 'https://cdn1.businessmodulehub.com/wp-content/uploads/2018/08/12100913/building-construction.jpg'
                }
            ]
        }]
    },
    {
        primerNombre: 'Luisa',
        segundoNombre: 'Fernanda',
        primerApellido: 'Ramirez',
        segundoApellido: 'Cortez',
        edad: 29,
        telefono:988879924,
        correo: 'luisa@gmail.com',
        nombreUsuario: '@luisa',
        password: '1234',
        fotoPerfil: 'https://media.metrolatam.com/2019/07/13/cabello-2f2578c29f86795d310ba05b0b7a235d-1200x600.jpg',
        tipoUsuario: 2,
        servicios: [
        {
            _idServicio: ObjectId(),
            nombreServicio: 'Estilista',
            descripcionServicio: 'Especialista en cortes y diseños de uñas.',
            categoria: 3,
            publicaciones: [
                {
                    contenido: 'Ven a mi salon y hazte un lindo diseño de uñas.',
                    imagen: 'https://es.allnailart.com/wp-content/uploads/2019/04/un%CC%83as-acrilicas-2019-nude--883x1024.jpg'
                }
            ]
        },
        {
            _idServicio: ObjectId(),
            nombreServicio: 'Tutora',
            descripcionServicio: 'Tutora de nivel basico primaria e intermedio secundaria.',
            categoria: 5,
            publicaciones: [
                {
                    contenido: 'Se ofrecen clases de tutorias de todas las materias a 300 lps la hora, actualmente a traves de tele conferencias.',
                    imagen: 'https://www.cambridgeenglish.org/Images/TE-AP-002-640460.jpg'
                }
            ]
        }]
    },
    {
        primerNombre: 'Dante',
        segundoNombre: 'Josué',
        primerApellido: 'Sandoval',
        segundoApellido: 'Cortez',
        edad: 10,
        telefono:385879924,
        correo: 'dante@gmail.com',
        nombreUsuario: '@dante',
        password: '1234',
        fotoPerfil: 'https://img.icons8.com/bubbles/2x/user.png',
        tipoUsuario: 2,
        servicios: [
        {
            _idServicio: ObjectId(),
            nombreServicio: 'Electricista',
            descripcionServicio: 'Instalaciones electricas industriales y residenciales.',
            categoria: 5,
            publicaciones: [
                {
                    contenido: 'Instalaciones electricas respetando los estandares actuales.',
                    imagen: 'https://electrical-engineering-portal.com/wp-content/uploads/2019/02/start-design-electrical-installation-1.jpg'
                }
            ]
        },
        {
            _idServicio: ObjectId(),
            nombreServicio: 'Cocinero',
            descripcionServicio: 'Experto en cocina a la plancha.',
            categoria: 7,
            publicaciones: [
                {
                    contenido: 'Ven a mi restaurante ubicado a las alturas del blv Suyapa frente a la UNAH.',
                    imagen: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/4/23/0/BX1607_Foolproof-Ribs-with-Barbecue-Sauce_s4x3.jpg.rend.hgtvcom.826.620.suffix/1556054940245.jpeg'
                }
            ]
        }]
    }
])
