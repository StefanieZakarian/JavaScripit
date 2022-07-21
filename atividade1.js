// Exercício 1

const calcularPreco = (produto, valor) => {
    let custoEnvio;

    if (valor > 1 && valor <= 2000) {
        custoEnvio = 300;
    } else if (valor > 2000 && valor <= 4000) {
        custoEnvio = 450;
    } else if ( valor > 4000) {
        custoEnvio = 700;
    }

    const valorFinal = valor + custoEnvio;

    console.log(`O produto ${produto} custa ${formatarValor(valor)}. Seu custo de envio é ${formatarValor(custoEnvio)}. Portanto, o preço final é ${formatarValor(valorFinal)}`);
}

const formatarValor = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

calcularPreco ('Macbook', 2500);
calcularPreco ('Celular', 500);
calcularPreco ('Playstation', 4500);