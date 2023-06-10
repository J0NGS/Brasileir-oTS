// Entidade jogador
interface Jogador{
    nome: string;
    posicao: string;
    altura: number;
    peso: number;
    nascimento: string;
}

// Entidade time
interface Time{
    nome:string;
    elenco: Jogador[];
}