
const div = document.createElement('div')
var texto = `
<div class="row justify-content-center align-items-center animete bounceIn py-5">
<div class="col-5">
    <form action="" class="bg-secondary p-4">
        <div class="form-header">
            <h4>formulario</h4>
        </div>
        <div class="form-group">
            <label for="">Nombre</label>
            <input type="text" class="form-control" placeholder="Panda">
        </div>
        <div class="form-group">
            <label for="">Apellido</label>
            <input type="text" class="form-control" placeholder="Idiota">
        </div>
        <button type="button" class="btn btn-success">Enviar</button>
    </form>
</div>
</div>`;

container.addEventListener('click',()=>{
    const container =document.getElementById('container');
    const div = document.createElement('div');
    div.innerHTML=texto;
    
    const logo = document.getElementById('logo').remove();
    container.appendChild(div);

})