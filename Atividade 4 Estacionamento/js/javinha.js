function calcularTotal() {
    const dias = parseFloat(document.getElementById('boxdias').value);
    const valorDia = parseFloat(document.getElementById('boxvalor').value);
    const nomeCliente = document.getElementById('boxdados').value;
    const nomeCarro = document.getElementById('boxmodelo').value;
    const placa = document.getElementById('boxplaca').value;

    let total = dias * valorDia;
    let totalComDesconto = total;
    if (total > 150) {
        totalComDesconto *= 0.9; 
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Nome do Cliente: ${nomeCliente}</p>
        <p>Nome do Carro: ${nomeCarro}</p>
        <p>Placa: ${placa}</p>
        <p>Quantidade de Dias: ${dias}</p>
        <p>Total a Pagar: R$ ${total.toFixed(2)}</p>
        ${total > 150 ? `<p>Total com Desconto: R$ ${totalComDesconto.toFixed(2)}</p>` : ''}
    `;
}

function limparCampos() {
    document.getElementById('boxdados').value = '';
    document.getElementById('boxmodelo').value = '';
    document.getElementById('boxplaca').value = '';
    document.getElementById('boxdias').value = '';
    document.getElementById('boxvalor').value = '';
    document.getElementById('result').innerHTML = '';
}