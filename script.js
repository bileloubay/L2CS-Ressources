const __Advanced_Python = {
    "Informations": [
        {
            "caption" : "Code Classroom",
            "text": "cew2ia4f"
        }
    ],
    "Cours": [
        {
            "caption":"Lien du Cours",
            "link": "https://bileloubay.github.io/gestion-d-entreprise/"
        }
    ]}
const __Conception_des_Systemes_d_Information = {}
const __Genie_Logiciel_et_Données = {}
const __Gestion_d_Entreprise = {
    "Cours": [
        {
            "caption":"Lien du Cours",
            "link": "https://bileloubay.github.io/gestion-d-entreprise/"
        }
    ]
}
const __Graphes_et_Optimisation = {}
const __Ingénierie_des_Bases_de_Donnees = {}
const __Probabilites_et_Statistiques = {}
const __Programmation_Java = {}
const __Services_des_Réseaux = {}
const __Theorie_des_Langages_et_Automates = {}

const subject_headers = [
    "Informations",
    "Cours",
    "Videos"
]

const sections = {
    "Advanced Python" :                       __Advanced_Python,
    "Conception des Systèmes d'Information" : __Conception_des_Systemes_d_Information,
    "Génie Logiciel et Données" :             __Genie_Logiciel_et_Données,
    "Gestion d'Entreprise" :                  __Gestion_d_Entreprise,
    "Graphes et Optimisation" :               __Graphes_et_Optimisation,
    "Ingénierie des Bases de Données" :       __Ingénierie_des_Bases_de_Donnees,
    "Probabilités et Statistiques" :          __Probabilites_et_Statistiques,
    "Programmation Java" :                    __Programmation_Java,
    "Services des Réseaux" :                  __Services_des_Réseaux,
    "Théorie des Langages et Automates" :     __Theorie_des_Langages_et_Automates 
}

const content = document.querySelector("main-content");
let subject = ""
const expand_off = "∇";
const expand_on  = "∆";


const subject_header_content = (element, header) =>{
    console.log(element);
    console.log(header);
    
    if (Object.hasOwn(element, "link")) {
        let keys = Object.keys(element);
        console.log(keys);
        
        if (keys.length == 2 && keys.includes("caption")) {
            return `<a href='${element.link}'>${element.caption}</a>`;
        }
    } else {
        return `${element.caption} : ${element.text}`
    }
}
Object.keys(sections).forEach(key => {

    subject = 
`<subject-container>
    <subject-title>
        ${key}
        <subject-expander 
            data-state="on" 
            >
            ${expand_on}
        </subject-expander>
    </subject-title>
    <subject-body>`;
    console.log(sections[key]);
    console.log(Object.keys(sections[key]));
    
    subject_headers.forEach(header => {
        if (Object.hasOwn(sections[key], header)) {
            subject += 
        `<subject-header>${header}</subject-header>
        `;
        
        sections[key][header].forEach(element => {
            subject += subject_header_content(element, header)
        });
               
        }
    });
    subject += 
    `</subject-body>
</subject-container>`;
    console.log(subject);
    
    content.innerHTML += subject;
});

const subject_expand = (title, expander, body) =>{
    if (expander.dataset.state == "off") {
        console.log(title.textContent.substring(0, 1) + " to on");
        
        expander.innerHTML = expand_on;
        expander.dataset.state = "on";
        body.style.display = "block";
        title.style.borderBottom = "2px solid";
        
    } else {
        console.log(title.innerText.substring(0, title.innerText.indexOf(" ")) + " to off");
        expander.innerHTML = expand_off;
        expander.dataset.state = "off";
        body.style.display = "none";
        title.style.borderBottom = "none";
        
    }
}
    
document.querySelectorAll("subject-title").forEach(title =>{
    title.setAttribute("onclick", `subject_expand(
        this, 
        this.querySelector('subject-expander'),
        this.parentElement.querySelector('subject-body'),
        )`);

    title.click();
}
)