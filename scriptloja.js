var allprodutos = document.querySelectorAll('.produto');
var containerPedido = document.querySelector('#confirmar-pedido')

allprodutos.forEach(produto => {
    produto.addEventListener('click', () => confirmarPedido(produto));
});
function confirmarPedido(produto){
        var nomeProduto = produto.querySelector('.nome-produto').innerHTML;
        var precoProduto = produto.querySelector('.preco-produto').innerHTML;
        var imgScrProduto = produto.querySelector('img').src;
        console.log(imgScrProduto)
        containerPedido.innerHTML = `
                <div class="secao-confirmar-pedido">
                    <div class = "titulo-secao-confirmar-pedido">Item Selecionado</div>
                    <div class = "informacao-secao-confirmar-pedido">
                        <img src="${imgScrProduto}" alt="">
                        <p id = "nome-produto-confirmar-pedido">${nomeProduto}</p>
                    </div>   
                </div>
                    <div class="secao-confirmar-pedido">
                        <div class = "titulo-secao-confirmar-pedido">Quantidade</div>
                        <div class = "informacao-secao-confirmar-pedido">
                            <div id="formulario-quantidade">
                                <button id="btn-add-item-cart"><i class="fa-solid fa-plus"></i></button>
                                <p id="quantidade-items">1</p>
                                <button id="btn-minus-item-cart"><i class="fa-solid fa-minus"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="secao-confirmar-pedido">
                        <div class = "titulo-secao-confirmar-pedido">Valor</div>
                        <div class = "informacao-secao-confirmar-pedido">
                            <p id="valor-produto-confirmar-pedido">${precoProduto}</p>
                        </div>
                    </div>
                    <div class="secao-confirmar-pedido align-center">
                        <button id="btn-confirmar-pedido">Confirmar Compra<button>
                    </div>
                </div>
        `
        // confirmar pagamento

        var btnConfirmarPedido = document.querySelector('#btn-confirmar-pedido');
        btnConfirmarPedido.addEventListener('click', () => {containerPedido.innerHTML = ``;
        window.alert("Compra Confirmada")})
        

        console.log('confirmar')
}

// armazenar o inner text e o link da imagem de cada um deles

// ao clicar no produto a barra de confirmar pagamento aparece
// remove display:none do #confirmar-pedido

// ao clicar em confirmar em pagamento desaparece
