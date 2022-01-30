console.log(' ');
console.log('----Televizorių gamyba----');
// pagaminti pagal schema televizorių ir parduoti pirkejams

class TV {
    static programa = ['LRT', 'TV3', 'LNK', 'BBC', 'NBC']; //bendra visiems busimiems objektams
    // TV priklauso klasei. statinis dalykas visai klasei bendras
    // Po objekto sukurimo construktoriumi, galime koreguoti visiems bendrai savybes ar objektus naudojant statini elementa
    // statiniame metode this nusako ne objekta, o klase
    static naujaPrograma(pr) {
        this.programa = pr; //this rodo i klase
    }

    constructor() {
        this.savininkas = 'Parduotuvė';
        this.kanalas = null; //neijungtas TV
    }
    tvPirkimas(vardas) {
        this.savininkas = vardas; //this rodo i objekta
    }
    perjungtiKanala(nr) {
        this.kanalas = nr;
    }
    infoApieTv() {
        console.log(`
    Savinikas: ${this.savininkas} 
    Kanalas: ${this.kanalas}
    Programa: ${TV.programa[this.kanalas]}
    `);
    }
};

const tv1 = new TV();
const tv2 = new TV();
const tv3 = new TV();

tv1.programa = ['MTV', 'TNT', 'TV6', 'SAT1'];
tv2.programa = ['MTV', 'TNT', 'TV6', 'SAT1'];
tv3.programa = ['MTV', 'TNT', 'TV6', 'SAT1'];


tv2.tvPirkimas('Antanas');
tv3.tvPirkimas('Birute');

tv2.perjungtiKanala(2);
tv3.perjungtiKanala(3);

tv1.infoApieTv();
tv2.infoApieTv();
tv3.infoApieTv();

TV.programa = ['Muzika', 'Sportas', 'Kinas', 'Info'];

