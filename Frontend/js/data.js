/*
TIPOS DE USARIOS  
0 usuario normal
1 para usuario que ofrece sus serivicios
2 para usuario admon
*/


/*
TIPOS DE SERVICIOS
0 carpinteria
1 sastreria
2 belleza
3 mecanica
4 construccion
5 fletes
6 concina
7 abogados
8 doctores
9 tutores de aprendizaje
*/

let usuarios = [{
    id: 1,
    tipoUsuario: 1,
    nombre: 'Mario',
    apellido: 'Rosales',
    nombreUsuario: 'josue1198',
    contrasena: 'asd.456',
    correo: 'ejemplo@gmail.com',
    telefono:'88765432',
    fotoPerfil: 'https://img.icons8.com/bubbles/2x/user.png',
    publicaciones: ['Muy buenas tardes compatriotas en esta tarde quisiera compartirles mis servicios de carpinteria, se hace de todo, mesas, sillas. mi número se encuntra en mi perfil, espero estar en contacto con ud pronto, que tenga lindo día.' , 'Buenas, si ud tiene algun problema con su coche contacteme por chat o en el número anclado a mi perfil, será un placer ayudarle.'],
    servicios: [{
        idServicio: 0,
        categoria: 'Carpintería',
        descripcion: 'experto con el uso de maderas puras.'
    },
    {
        idServicio: 3,
        categoria: 'Mecánica',
        descripcion: 'Trabajos de mecánica automotriz general.'
    }],
    descripcion: '10 años de experiencia en carpintería y 15 años en mecánica'
},
{
    id: 2,
    tipoUsuario: 1,
    nombre: 'Diana',
    apellido: 'Sánchez',
    nombreUsuario: 'DYSC',
    contrasena: 'asd.456',
    correo: 'ejemplo2@gmail.com',
    telefono:'98745432',
    fotoPerfil: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
    publicaciones: ['Les invito a visitar el salón de belleza toxin, para sus cortes de cabello o arreglo de uñas. Estamos ubicados en el blvd Fuerzas armadas frente a colonia las brisas, sera un placer atenderle.' , 'En tiempos de COVID les ofrecemos envios a domicilio de mis deliciosos platillos, contacte conmigo para poder preparar su envio.'],
    servicios: [{
        idServicio: 2,
        categoria: 'Estilista',
        descripcion: 'Especialista en arreglo de uñas y alisado de cabello.'
    },
    {
        idServicio: 6,
        categoria: 'Cocinera',
        descripcion: 'Especialista en pastas.'
    }],
    descripcion: 'experta en cortes de cabello. Mi plato especial es el spagettie (lo unico que se hacer).'
},
{
    id: 6,
    tipoUsuario: 1,
    nombre: 'Jaime',
    apellido: 'Paguaga',
    nombreUsuario: 'Jaipa',
    contrasena: 'asd.456',
    correo: 'ejemplo10@gmail.com',
    telefono:'98745432',
    fotoPerfil: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
    publicaciones: ['En esta día quisiera ofrecer mis servicios como albañil, se cobra por obra terminada y se hace en el menor tiempo posible, un trabajo honesto y bien hecho, contactenme, buen día.'],
    servicios: [{
        idServicio: 4,
        categoria: 'Albañil',
        descripcion: 'Obras de hogar y construcción de edificios.'
    }],
    descripcion: 'He sido albañil desde el 2000, habiendo trabajado en proyectos grandes como la construcción del edificio mas alto de tegucigalpa y en la creación de lindas viviendas tanto en barrios como residenciales.'
},
{
    id: 7,
    tipoUsuario: 1,
    nombre: 'Lorena',
    apellido: 'López',
    nombreUsuario: 'Lore',
    contrasena: 'asd.456',
    correo: 'ejemplo10@gmail.com',
    telefono:'98775232',
    fotoPerfil: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
    publicaciones: ['En estos tiempos de covid cuando mas se no hace dificil contactar con nuestros familiares le ofrezco mis servicios de viajes para que ud sea capaz de enviar cosas a sus familiares.'],
    servicios: [{
        idServicio: 5,
        categoria: 'Fletes',
        descripcion: 'Viajes de tegucigalpa al norte.'
    }],
    descripcion: 'Hago viajes desde hace mucho tiempo de tegucigalpa a cualquier parte del norte donde se pueda llegar en carretera.'
},
{
    id: 8,
    tipoUsuario: 1,
    nombre: 'Juan',
    apellido: 'Cuña',
    nombreUsuario: 'Juan1904',
    contrasena: 'asd.456',
    correo: 'ejemplo10@gmail.com',
    telefono:'88735432',
    fotoPerfil: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
    publicaciones: ['Para cualquier evento, baby shower, cumpleaños, sus 15, lo que sea! Se le ofrece comida gourmet llevada hasta la puerta de su casa respetando todas las normas de bioseguridad.'],
    servicios: [{
        idServicio: 6,
        categoria: 'Cocinero',
        descripcion: 'Especialista en comida gourmet.'
    }],
    descripcion: 'Cocinero de principio empirico, habiendo sacado cursos de manera online en conocimientos de comidas europeas, si quiere probar el sazón de oriente soy su mejor opción.'
},
{
    id: 9,
    tipoUsuario: 1,
    nombre: 'Rodolfo',
    apellido: 'Sandoval',
    nombreUsuario: 'Fofo1904',
    contrasena: 'asd.456',
    correo: 'ejemplo10@gmail.com',
    telefono:'95735432',
    fotoPerfil: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
    publicaciones: ['Ud sabe que la energía electrica de su casa es un tema delicado, asi que le ofrezco mis servicios como electricista con bastos años de experiencia, respetando todas las normas actuales para la instalción electricas actual, espero su mensaje o llamada, que tengan un lindo día.'],
    servicios: [{
        idServicio: 4,
        categoria: 'Electricista',
        descripcion: 'Instalaciones electricas de hogar e industriales.'
    }],
    descripcion: 'Graduado como técnico electricista contando con mas de 20 años de experiencia y manteniendome siempre al día con los estandares de instalaciones electrivas le aseguro ser su mejor opción.'
},
{
    id: 10,
    tipoUsuario: 1,
    nombre: 'Betulia',
    apellido: 'Carranza',
    nombreUsuario: 'Betu104',
    contrasena: 'asd.456',
    correo: 'ejemplo10@gmail.com',
    telefono:'95735432',
    fotoPerfil: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
    publicaciones: ['Estoy ubicada en colonia buenos aires, hago arreglo de ropa tanto masculina como femenina.'],
    servicios: [{
        idServicio: 1,
        categoria: 'Sastre',
        descripcion: 'Arreglo en ropa.'
    }],
    descripcion: 'Más de 30 años de experiencia y con buen gusto para la moda.'
},
{
    id: 11,
    tipoUsuario: 1,
    nombre: 'Dante',
    apellido: 'Rosales',
    nombreUsuario: 'Dante11',
    contrasena: 'asd.456',
    correo: 'ejemplo10@gmail.com',
    telefono:'95735432',
    fotoPerfil: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
    publicaciones: ['Se hacen consultas a sus niños en la puerta de su casa, con una medicación prudente y respetando todos los protocolos de bioseguridad.'],
    servicios: [{
        idServicio: 8,
        categoria: 'Doctor',
        descripcion: 'Especialista en pediatría.'
    }],
    descripcion: 'Graduado en la universidad nacional de Honduras y especialidad sacada en Alemania.'
},
{
    id: 12,
    tipoUsuario: 1,
    nombre: 'Luis',
    apellido: 'Gonzales',
    nombreUsuario: 'LuisGo',
    contrasena: 'asd.456',
    correo: 'ejemplo10@gmail.com',
    telefono:'95735432',
    fotoPerfil: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
    publicaciones: ['Se hacen fletes a cualquier parte del país que ud lo requiera, contacteme sin ningún tipo de compromiso.'],
    servicios: [{
        idServicio: 5,
        categoria: 'Fletes',
        descripcion: 'Fletes a todo lo largo y ancho del país.'
    },
    {
        idServicio: 0,
        categoria: 'Carpintero',
        descripcion: 'Especialista en confección de muebles de cocina.'
    }],
    descripcion: 'Conductor de camiones y vehiculos pesados para poder cargar con cualquier envío y carpintero desde los 16 años con gran experiencia.'
},
{
    id: 13,
    tipoUsuario: 1,
    nombre: 'Elisa',
    apellido: 'Dominguez',
    nombreUsuario: 'Eli99',
    contrasena: 'asd.456',
    correo: 'ejemplo10@gmail.com',
    telefono:'95735432',
    fotoPerfil: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
    publicaciones: ['Se hacen arreglos y se hace ropa femenina y tambien se hacen peinados lindos para que puedas lucir con tus prendas favoritas.'],
    servicios: [{
        idServicio: 1,
        categoria: 'Costurera',
        descripcion: 'Arreglo y creación de ropa femenina.'
    },
    {
        idServicio: 2,
        categoria: 'Estilista',
        descripcion: 'Experta en peinados de boda.'
    }],
    descripcion: 'Apasionada por la moda y el buen estilo, cada uno de los servicios que te ofrezco prometo son de calidad.'
},
{
    id: 14,
    tipoUsuario: 1,
    nombre: 'Gerson',
    apellido: 'Raudales',
    nombreUsuario: 'Gera',
    contrasena: 'asd.456',
    correo: 'ejemplo10@gmail.com',
    telefono:'95735432',
    fotoPerfil: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
    publicaciones: [''],
    servicios: [{
        idServicio: 3,
        categoria: 'Mecanico',
        descripcion: 'Especialista en reparacion de motos.'
    },
    {
        idServicio: 4,
        categoria: 'Albañil',
        descripcion: 'Albañil de construcción pesada.'
    }],
    descripcion: 'Mecánico con muchos años de experiencia y apasionado de las motocicletas, manejo de equipo pesado en construcción.'
},
{
    id: 15,
    tipoUsuario: 1,
    nombre: 'Raul',
    apellido: 'Chacon',
    nombreUsuario: 'Raul29',
    contrasena: 'asd.456',
    correo: 'ejemplo10@gmail.com',
    telefono:'95735432',
    fotoPerfil: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
    publicaciones: ['Si tienes algún problema legal o estas pasando por alguna separación cuenta con mi asesoria profesional para llevar el proceso de la mejor forma.'],
    servicios: [{
        idServicio: 7,
        categoria: 'Abogado',
        descripcion: 'Especialista derecho familiar.'
    }],
    descripcion: 'Abogado graduado de la universidad nacional autonoma de Honduras.'
},
{
    id: 16,
    tipoUsuario: 1,
    nombre: 'Sofia',
    apellido: 'Alvarez',
    nombreUsuario: 'Sofi29',
    contrasena: 'asd.456',
    correo: 'ejemplo10@gmail.com',
    telefono:'95735432',
    fotoPerfil: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
    publicaciones: ['Ven a nuestro salón de belleza a aplicarte uñas acliricas para lucir hermosa.', 'Te ofrecemos muebles hermosos para lucir en el patio de tu casa.'],
    servicios: [{
        idServicio: 0,
        categoria: 'Carpintera',
        descripcion: 'Especialista en diseño de muebles de exterior.'
    },
    {
        idServicio: 2,
        categoria: 'Estilista',
        descripcion: 'Especialista en diseño de uñas acliricas.'
    }],
    descripcion: 'Amo la carpinteria, el diseñar y crear cosas que no existen a partir de hermosa madera es mi pasión.'
},
{   id: 3,
    tipoUsuario: 0,
    nombre: "Ledys",
    apellido: "Santos",
    nombreUsuario: "Lidis",
    contrasena: "asd.456",
    correo: "ejemplo3@gmail.com",
    telefono: "93765469",
    fotoPerfil: "https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png"
},    
{
    id: 4,
    tipoUsuario: 2,
    nombre: 'Michael',
    apellido: 'Banegas',
    nombreUsuario: 'Micky',
    contrasena: 'asd.456',
    correo: 'ejemplo4@gmail.com',
    telefono:'85789031',
    fotoPerfil: 'https://img.icons8.com/bubbles/2x/user.png',
},];


//ocalStorage.setItem('usuarios', JSON.stringify(usuarios) );
/* console.log(JSON.parse( localStorage.getItem('usuarios')) ); */



    (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }else{
            event.preventDefault();
            event.stopPropagation();
            let usuario ={
                    nombre: document.getElementById("input-name").value,
                    apellido: document.getElementById("input-apellido").value,
                    nombreUsuario: document.getElementById("input-user").value,
                    contrasena: document.getElementById("input-password").value,
                    correo: document.getElementById("input-email").value,
                    telefono: document.getElementById("input-tel").value,
            };
            let parametros = `nombre=${usuario.nombre}&apellido=${usuario.apellido}&usuario=${usuario.nombreUsuario}&contrasena=${usuario.contrasena}&correo=${usuario.correo}&telefono=${usuario.telefono}`;
            $.ajax({
                url:'https://app-chambaline.herokuapp.com/api/register',
                data: parametros,
                method: 'POST',
                datatype:'JSON',
                success: function(res){
                    console.log(res);
                    if ( res.success == true ){
                        swal.fire({
                            icon: 'success',
                            title: 'Usuario registrado con exito',
                            timer: 2500,
                            timerProgressBar: true,
                        })
                        setTimeout( () => window.location = 'login.html', 3000)
                    }
                },
                error: function(err){
                    console.log(err);
                    let error = err.responseJSON.errors.errors[0];
                    swal.fire({
                        icon: 'error',
                        title: error.param + ": " + error.msg,
                        cancelButton: true,
                        timer: 1500,
                        timerProgressBar: true,
                    })

                }
            })
            // 
        }
        form.classList.add('was-validated'); 
           }, false);
       });
    }, false);
    })();




    // tipoUsuario: 1,
    // nombre: document.getElementById("input-name").value,
    // apellido: document.getElementById("input-apellido").value,
    // nombreUsuario: document.getElementById("input-user").value,
    // contrasena: document.getElementById("input-password").value,
    // correo: document.getElementById("input-email").value,
    // telefono: document.getElementById("input-tel").value,
