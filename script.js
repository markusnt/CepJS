let nro_cep = document.querySelector('#nro_cep');
let modal = document.querySelector('#modalCEP');
let test = document.getElementById("test").value = nro_cep;

document.querySelector('#test').addEventListener('click', buscarCEP );

$(document).ready(function(){
    $('#nro_cep').mask("99999-999");
});

function buscarCEP(event){
    event.preventDefault();
    fetch(`https://viacep.com.br/ws/${test.value}/json/`)
    .then(function(response){
        return response.json();
    }).then(data => {
        if (data.erro) {
            alert("Cep não encontrado");
        } else {
        modal.innerHTML =  
            `<div class='modal fade' id='Modal' tabindex='-1' role='dialog' aria-hidden='true'>
                <div class='modal-dialog' role='document'>
                    <div class='modal-content'>
                        <div class='modal-header'>
                            <h5 class='modal-title' id='exampleModalLabel'><strong>Cep:</strong> ${test.value} </h5>
                            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div class='modal-body'>
                            <form>
                                <label><strong>Rua:</strong> ${data.logradouro} </label>
                                    <br>
                                <label><strong>Bairro:</strong> ${data.bairro} </label>
                                    <br>
                                <label><strong>Cidade:</strong> ${data.localidade} </label>
                                    <br>
                                <label><strong>Estado:</strong> ${data.uf} </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`;
     }}).catch(err => console.warn(err));
}
