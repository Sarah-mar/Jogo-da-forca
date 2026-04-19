const themes = {
    "animais": [
        "cachorro", "gato", "elefante", "leão", "tigre", "urso", "lobo", "raposa", "girafa", "zebra",
        "macaco", "gorila", "chimpanze", "cavalo", "vaca", "boi", "porco", "ovelha", "cabra", "coelho",
        "rato", "camundongo", "esquilo", "castor", "lontra", "hiena", "guepardo", "panda", "canguru", "coalha",
        "ornitorrinco", "tatu", "tamandua", "preguica", "doninha", "furão", "texugo", "chacal", "dingo", "leopardo",
        "jaguar", "pantera", "bisão", "búfalo", "alce", "rena", "cervo", "antílope", "gazela", "iaque"
    ],
    "cores": [
        "vermelho", "azul", "verde", "amarelo", "roxo", "laranja", "rosa", "marrom", "preto", "branco",
        "cinza", "turquesa", "ciano", "magenta", "lilás", "bege", "bordô", "vinho", "mostarda", "ocre",
        "salmão", "coral", "anil", "esmeralda", "jade", "oliva", "pêssego", "caramelo", "chocolate", "grafite",
        "prata", "dourado", "bronze", "índigo", "lavanda", "menta", "marfim", "pérola", "areia", "terracota",
        "ameixa", "azul-marinho", "verde-limão", "verde-musgo", "rosa-choque", "vermelho-escuro", "azul-claro", "cinza-claro", "cinza-escuro", "amarelo-claro"
    ],
    "frutas": [
        "maçã", "banana", "laranja", "limão", "abacaxi", "manga", "uva", "pera", "pêssego", "ameixa",
        "cereja", "morango", "framboesa", "amora", "melancia", "melão", "kiwi", "maracujá", "goiaba", "acerola",
        "jabuticaba", "pitanga", "graviola", "caju", "figo", "tâmara", "damasco", "nectarina", "romã", "carambola",
        "lichia", "mangostão", "physalis", "coco", "cupuaçu", "umbu", "siriguela", "sapoti", "cabeludinha", "bacaba",
        "buriti", "açaí", "pequi", "jenipapo", "pinha", "ata", "fruta-do-conde", "grapefruit", "toranja", "kumquat"
    ],
    "profissões": [
        "médico", "engenheiro", "professor", "advogado", "arquiteto", "dentista", "enfermeiro", "psicólogo", "contador", "economista",
        "programador", "analista", "cientista", "pesquisador", "designer", "artista", "fotógrafo", "jornalista", "escritor", "ator",
        "diretor", "produtor", "músico", "cantor", "dançarino", "chef", "cozinheiro", "garçom", "barman", "piloto",
        "motorista", "mecânico", "eletricista", "encanador", "pedreiro", "carpinteiro", "marceneiro", "agricultor", "veterinário", "biólogo",
        "químico", "físico", "astrônomo", "geólogo", "historiador", "sociólogo", "filósofo", "bibliotecário", "secretário", "recepcionista"
    ],
    "países": [
        "brasil", "argentina", "chile", "peru", "colômbia", "venezuela", "equador", "bolívia", "paraguai", "uruguai",
        "méxico", "canadá", "estados unidos", "cuba", "haiti", "jamaica", "panamá", "costa rica", "honduras", "guatemala",
        "espanha", "portugal", "frança", "alemanha", "itália", "holanda", "bélgica", "suíça", "áustria", "polônia",
        "rússia", "ucrânia", "china", "japão", "coreia do sul", "índia", "paquistão", "indonésia", "tailândia", "vietnã",
        "austrália", "nova zelândia", "egito", "nigéria", "áfrica do sul", "marrocos", "argélia", "tunísia", "turquia", "grécia"
    ]
}

let theme = null;

function selectTheme(event) {
    theme = event.target.id;
    console.log("Tema selecionado:", theme);

}

const options = document.querySelectorAll('.options');

options.forEach(option => {
    option.addEventListener('click', selectTheme);
});


