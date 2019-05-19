const projectsList = [
    {
        heading: "Eventa",
        subheading:
            "Dizajn i izrada frontenda četiri razine sustava – web aplikacija za kreiranje evenata, web aplikacija za moderiranje evenata, web korisnička aplikacija i web aplikacija za prikaz stanja u prezentaciji",
        technologies:
            "Vanilla js, Node.js (Socket.io) hostani na Google Cloud serveru",
        description: "Real time web aplikacija za interakciju na događanjima",
        functionalities: [
            "Kreiranje kvizova ili pitanja u prezentaciji – administrator kreira i moderira, korisnik odgovara na postavljeno pitanje koje je prikazano u korisničkoj aplikaciji i na platnu.",
            "Kreiranje anketa – administrator kreira i aktivira anketu, korisnik ispunjava",
            "Postavljanje pitanja iz publike i prikaz na projekcijskom platnu",
            "Prikaz rasporeda i predavača događanja",
            "Automatsko generiranje izvještaja sa događanja"
        ],
        images: [...new Array(14)].map((elem, index) => {
            return {
                src: `http://tvportfolio.net/img/project-images/eventa/eventa-${
                    index > 8 ? index + 1 : "0" + (index + 1)
                }.png`
            };
        })
    },
    {
        heading: "Dani nastavnika",
        subheading: "Izrada kompletne strukture aplikacije.",
        technologies:
            "Node.js (Socket.io) hostani na Google Cloud serveru, Vanilla.js, Cordova/PhoneGap app, OneSignal push notifications system",
        description:
            "Mobilna aplikacija sa backend sustavom korištena za interakciju na događanju Dani nastavnika",
        github: "https://github.com/tinvalincic/dani-nastavnika",
        functionalities: [
            "Slanje push notifikacija korisnicima",
            "Pregled rasporeda događanja",
            "Pregled biografija predavača i njihovih predavanja",
            "Pregled mape događanja, informacija o događanju i projektu"
        ],
        images: []
    },
    {
        heading: "World Skills Croatia",
        subheading: "Izrada kompletne strukture aplikacije.",
        technologies:
            "Node.js (Socket.io) hostani na Google Cloud serveru, Vanilla.js, Cordova/PhoneGap app, OneSignal push notifications system",
        description:
            "Mobilna aplikacija sa backend sustavom korištena za interakciju na događanju Dani nastavnika",
        functionalities: [
            "Slanje push notifikacija korisnicima",
            "Pregled rasporeda događanja",
            "Pregled natjecatelja na događanju i njihovih mentora",
            "Pregled biografija mentora",
            "Pregled mape događanja, informacija o događanju i projektu"
        ],
        images: []
    },
    {
        heading: "Fušing",
        subheading: "Dizajn i izrada kompletne strukture aplikacije.",
        technologies: "Laravel, MySql, Vanilla.js",
        description: "Web aplikacija za pronalazak poslova u slobodno vrijeme.",
        functionalities: [
            "Kreiranje korisničkog profila",
            "Objava oglasa kao ponuđač ili potražitelj poslova",
            "Kontaktiranje poslodavca/posloprimca",
            "Ostavljanje recenzija za odrađeni posao"
        ],
        images: []
    },
    {
        heading: "Timer aplikacija",
        subheading: "Izrada kompletne strukture aplikacije",
        technologies:
            "Node.js (Socket.io) server, Vanilla js, Cordova/PhoneGap app",
        description:
            "Tablet aplikacija sa backend sustavom za odbrojavanje vremena  do kraja predavanja",
        functionalities: [
            "Backend sustav u kojemu se postavlja vrijeme trajanja predavanja i vrijeme trajanja sekcije",
            "Dvije(ili više) odvojene frontend aplikacije koje primaju instrukcije, odbrojavaju vrijeme te vizualno i zvukovno  obavještavaju predavača/moderatore kada se bliži kraj predavanja/sekcije",
            "Reset timer-a i ponovno pokretanje, mute uređaja iz backenda"
        ],
        images: []
    },
    {
        heading: "RPE kalkulator",
        subheading: "Izrada aplikacije.",
        technologies: "React.js",
        description:
            "Jednostavna React.js web aplikacija za izračun potrebnih parametara u powerlifting treningu",
        github: "https://github.com/tinvalincic/rpe-calculator/",
        link: "http://tvportfolio.net/rpe/",
        functionalities: [
            "Jednostavna React.js web aplikacija za izračun potrebnih parametara u powerlifting treningu",
            "Aplikacija napravljena za osobne potrebe"
        ],
        images: []
    }
];
const smallProjects = [
    {
        heading: "Facebook aplikacije za DM Hrvatska/BiH/Srbija",
        technologies: "JS, PHP, MySql",
        description:
            "Dizajn i izrada web aplikacija za Facebook nagradne igre.",
        link: "http://dedal.hr/dm-2018/pronadi-igracku/"
    },
    {
        heading: "Anketni sustavi",
        technologies: "JS, PHP, MySql",
        description:
            "izrada nekoliko anketnih sustava za praćenje raznih podataka (najčešćeće praćenje ishoda liječenja/terapija), generiranje izvještaja",
        link: "http://dedal.hr/dm-2018/pronadi-igracku/"
    },
    {
        heading: "Streaming platforma",
        technologies: "JS, PHP, MySql",
        description:
            "Web platforma za video streaming. Korisnici mogu vidjeti youtube video streama, raspored i predavače na događanju te postavljati pitanja predavačima. Moderator kroz administraciju vidi prijavljene gledatelje i postavljena pitanja, te prikazuje pitanja predavačima na platno ili drugi uređaj.",
        link: "http://live.e-medikus.com",
        text: "Voucher za prijavu: emedikus"
    },
    {
        heading: "Web stranice",
        technologies:
            "JavaScript, PHP, MySql, Expressionengine, Craft CMS, WordPress",
        description:
            "Dizajn i izrada brojnih web stranica u različitim CMS sustavima (Expressionengine, Craft CMS, WordPress) ili bez CMS sustava"
    }
];

export { projectsList, smallProjects };
