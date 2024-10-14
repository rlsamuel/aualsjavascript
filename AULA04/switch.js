//switch -ok

let atendimento = 4

switch (atendimento) {
    case 1:
        console.log(`Otimo.`);
        break;
    case 2:
        console.log(`bom.`);
        break;
    case 3:
        console.log(`regular.`);
        break;
    case 4:
        console.log(`ruim.`);
        break
    case 5:
        console.log(`pessimo.`);

        break;
    default:
        console.log(`valor nao encontrado`);
        break;
}