confirm("Insira seu cartão.")

let nome = prompt("Qual é seu nome? ")
let saldo = 200.27;
let alternativas;
const senha = 3589;
let historico = [];

comeco();

function comeco() {
    alternativas = parseFloat(prompt("Bem vindo " + nome + ", o que gosta de acessar? \n1. Saldo/Extrato \n2. Saque \n3. Deposito \n4. Transferência \n5. Sair"));
    console.log("A senha para acessar as opções é 3589");
    switch (alternativas) {
        case 1:
            usu_senha();
            extrato();
            break;
        case 2:
            usu_senha();
            saque();
            break;
        case 3:
            usu_senha();
            deposito();
            break;
        case 4:
            usu_senha();
            transf();
            break;
        case 5:
            alert(nome +", foi um prazer ter você por aqui! Obrigado por utilizar nossos serviços.")
            confirm("Retire seu cartão.")
            break;
        default:
            alert("Opção inválida, Por favor informe um número valido.");
            comeco();
    }
}

function colocarespaco(padrão, comprimento) {
    let espacos = "";
    for (var i = 0; i < comprimento; i++) {
        espacos += padrão;
    }
    return espacos;
}

function extrato() {
    let espacos = colocarespaco(" ", 20);
    const msgextrato = "Extrato\nPonto Frio" + colocarespaco(" ", 22) + "- R$ 327,83\nCasas Bahia" + espacos + "- R$ 548,29\nAmericanas" + espacos + "- R$ 210,25\n" + historico.join("\n");
    alert(msgextrato + "\n\nSeu saldo é " + colocarespaco(" ", 22) + saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "\n");
    console.log("Aqui e mostrado o saldo do usuario.");
    comeco();
}

function saque() {
    let espacos = colocarespaco(" ", 13)
    let valor = parseFloat(prompt("Qual o valor que gostaria de sacar?"));
    if (saldo >= valor) {
        saldo = saldo - valor;
        historico.push("Saque realizado" + espacos + "- " + valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        alert("Seu saldo agora é " + saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        console.log("Aqui e mostrado o saque realizado.");
        comeco();
    } else if (saldo <= valor || isNaN(valor) || valor < 0) {
        alert("Por favor informe um número valido.");
        saque();
    }
}

function transf() {
    let espacos = colocarespaco(" ", 17);
    let agencia = parseInt(prompt("Informe o número da agência: "));
    let conta = parseInt(prompt("Informe o número da conta: "));
    let din_transf = parseFloat(prompt("informe o valor: "))
    if (saldo >= din_transf) {
        saldo = saldo - din_transf;
        historico.push("Transferência " + espacos + "- " + din_transf.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        alert("Você acaba de tranferir o valor " + din_transf.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "\nSeu saldo agora é " + saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        console.log("Aqui são as transferências realizadas.");
        comeco();
    } else if (saldo <= din_transf || isNaN(din_transf) || isNaN(agencia) || isNaN(conta) || din_transf < 0) {
        alert("Por favor, informe um número valido.");
        transf();
    }
}

function deposito() {
    let espacos = colocarespaco(" ", 23);
    let din_dep = parseFloat(prompt("Digite o valor para realizar o deposito"));
    if(saldo = saldo + din_dep){
        historico.push("Deposito " + espacos + "+ " + din_dep.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
        alert("Seu saldo agora é " + saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        console.log("Aqui e mostrado o deposito realizado.")
        comeco();
    } else if (isNaN(din_dep) || din_dep < 0){
        alert("Por favor, informe um número valido.")
    }
}

function usu_senha() {
    let dig_senh = parseFloat(prompt("Digite a senha"));
    if (dig_senh === senha) {
        return;
    } else {
        alert("informe a senha corretamente.");
        usu_senha();
    }
}