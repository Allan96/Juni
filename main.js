var produtoNome = $('.productName').html();
var produtoValor = $('.skuBestPrice').html();
var produtoValorSemCifrao = produtoValor.split(' ')[1];
var produtoValorSemPonto = parseInt(produtoValorSemCifrao.replace('.', ''));
var produtoValorComDesconto = (produtoValorSemPonto * .9).toFixed(2);
var produtoImagem = $('.product__image').attr('src');
$('.produto-nome').html(produtoNome);
$('.valor-sem-deconto').html(produtoValor);
$('.valor-com-desconto').html(produtoValorComDesconto.replace('.', ','));
$('.imagem-do-produto').attr('src', produtoImagem);
$('.box-body .button_adicionar').click(function(e) {
    e.preventDefault();
    $(".button--buy").click();
});
$('.box-body .close').click(function(e) {
    e.preventDefault();
    $("#box").animate({
        bottom: "-142px",
    }, 300, function() {});

});