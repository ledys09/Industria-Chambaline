'use strict'
let conectado = sessionStorage.getItem('conectado');
let tipoUsuario =sessionStorage.getItem('tipo_usuario');
let nombreUsuario = sessionStorage.getItem('nombreUsuario')

if(conectado){
 console.log('tipo usuario', tipoUsuario);
 document.getElementById('a-usuario').innerText = nombreUsuario;
}else{
    window.location.href = 'login.html';
}


function logout(){
    sessionStorage.clear();
    window.location.href = 'login.html';
}

function buscarCategoria(i){
    $.ajax({
        url:`http://app-chambaline.herokuapp.com/api/datadb/services/${i}`,
        method: 'GET',
        dataType: 'JSON',
        success: function(res){
            console.log(res);
            let contenedor = document.getElementById('cont-servicios');
            contenedor.innerHTML = ``;
            for (let j = 0; j < res.length;  j++){
                for (let k = 0; k < res[j].servicios.length; k++){
                    if (res[j].servicios[k].categoria === i){
                        contenedor.innerHTML += `<div class="row animated fadeIn">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 shadow p-3 mb-5 bg-white rounded mt-4">
                                <table>
                                    <tr>
                                        <td>
                                            <div class="cont-img">
                                                <img loading="lazy" class="img-perfil" src="${res[j].fotoPerfil}" alt="">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="informacion">
                                                <div class="nombre">
                                                    ${res[j].primerNombre} ${res[j].segundoNombre} ${res[j].primerApellido}
                                                </div>
                                                <div class="trabajo">
                                                    ${res[j].servicios[k].nombreServicio}
                                                </div>
                                                <div class="descripcion">
                                                    ${res[j].servicios[k].descripcionServicio}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                <div style="float: right;"><button onclick="mostrarUsuario(event)" class="btn-mas-inf mt-4" data-toggle="modal" data-target="#masInformacion" data-id="${res[j]._id}">Más información</button></div> 
                                </div> 
                            </div>`
                    }
                    
                }
            }
        },
        error: function(err){
            console.log(err);
        }
    });
}

function mostrarUsuario(e){
    // console.log(e.target.dataset.id);
    let idUsuario = e.target.dataset.id;
    let modal = document.getElementById('modal-body');
    $.ajax({
        url:`http://app-chambaline.herokuapp.com/api/datadb/userservice/${idUsuario}`,
        method: 'GET',
        dataType: 'JSON',
        success: function(res){
            console.log(res);
            let divServicios = ``;
            for (let servicios of res.servicios){
                divServicios += `<div class="descripcion">${servicios.descripcionServicio}</div><br>`;
            }
            modal.innerHTML = `<div class="nombre-informacion">
            Datos de contacto
        </div>
      <div class="cont-img-informacion">
          <img class="img-informacion border border-info" src="${res.fotoPerfil}" alt="">
      </div>
      <div class="informacion-completa">
          <table>
            <tr>
                <td><b>Nombre completo:</b></td>
                <td class="dato">${res.primerNombre} ${res.segundoNombre} ${res.primerApellido} ${res.segundoApellido}</td>
            </tr>
            <tr>
                <td><b>Correo electrónico:</b></td>
                <td class="dato">${res.correo}</td>
            </tr>
            <tr>
                <td><b>Teléfono:</b></td>
                <td class="dato">${res.telefono}</td>
            </tr>
          </table>
      </div>
      <div class="cont-descripcion-completa">
          <b>Descripción completa de servicios</b>
          <div class="descripcion">
            ${divServicios}
          </div>
      </div>`
        },
        error: function(err){
            console.log(err);
        }
    });
}