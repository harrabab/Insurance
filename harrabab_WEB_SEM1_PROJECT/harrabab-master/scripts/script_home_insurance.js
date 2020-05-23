//Hidding the error span

let error_fname = document.getElementById("error_fname");
error_fname.hidden = true;
let error_lname = document.getElementById("error_lname");
error_lname.hidden = true;
let error_age = document.getElementById("error_age");
error_age.hidden = true;
let error_prop = document.getElementById("error_prop");
error_prop.hidden = true;
let error_owner = document.getElementById("error_owner");
error_owner.hidden = true;
let error_address = document.getElementById("error_address");
error_address.hidden = true;
let error_builtdate = document.getElementById("error_builtdate");
error_builtdate.hidden = true;
let error_basement = document.getElementById("error_basement");
error_basement.hidden = true;
let error_claims = document.getElementById("error_claims");
error_claims.hidden = true;

//Populate dropd Down

let selecttypehouse = document.getElementById("propertyType");
let ownershipType = document.getElementById("ownershipType");
let noofclaim = document.getElementById("earlierClaims")
let type_house = ["House", "condo", "Apartment"];
let owner_type = ["I own and live in it", "I rent it from someone else", "I own I dont live or rent"];
let noof_claim = ["0", "1", "more than one"];
//Poluating dropdown for Type of house
for (let i = 0; i < type_house.length; i++) {
    let opt = type_house[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selecttypehouse.appendChild(el);
}
//Poluating dropdown for Type of owner
for (let i = 0; i < owner_type.length; i++) {
    let opt = owner_type[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    ownershipType.appendChild(el);
}
//Poluating dropdown for no of claim
for (let i = 0; i < noof_claim.length; i++) {
    let opt = noof_claim[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    noofclaim.appendChild(el);
}


// Disabling home option
document.getElementById("propertyType").disabled = true;
document.getElementById("ownershipType").disabled = true;
document.getElementById("earlierClaims").disabled = true;
document.getElementById("yearHouseBuilt").disabled = true;
document.getElementById("search_input").disabled = true;
document.getElementById("yearHouseBuilt").disabled = true;
document.getElementById("yearHouseBuiltYes").disabled = true;
document.getElementById("yearHouseBuiltNo").disabled = true;
let submitId = document.getElementById("submitId");
document.getElementById("submitId").disabled = true;
let resultLink = document.getElementById("resultLink");
document.getElementById("propertyValidate").disabled = true;

let successValidate = document.getElementById("successValidate");
successValidate.hidden = true;
let successValidateProperty = document.getElementById("successValidateProperty");
successValidateProperty.hidden = true;


//translation javascript function
let translations = {
    "en": {

        "Home": "Home",
        "home_insurance": "Home Insurance",
        "auto_insurance": "Auto Insurance",
        "contact_us": "Contact Us",
        "blog": "Blog",
        "process": "5-10 business days to process the claim",
        "home_insurance_detail": "Get the coverage that fits your lifestyle Your home is your sanctuary. Keep it that way. Ensure that you have the best home insurance to fit your needs. You deserve the peace of mind that comes with knowing that the people you love and the things you cherish will be taken care of if anything beyond your control were to happen. Whether you're a tenant, a condo owner or a homeowner, you can customize your insurance coverage to best suit your needs.",
        "auto_insurance_detail": "Whether you lease, finance, or own your car, it is mandatory to have car insurance. However, in order to be eligible for car insurance, certain conditions and restrictions apply. To begin with, you (and all drivers you wish to include in the policy) must have a valid driver's license and be a resident of Canada. Next, insurance companies will look at your prior driving record to determine eligibility and rates. However, rates will vary depending on whether you are looking for a new insurance policy altogether or if you wish to renew an existing one. Other eligibility restrictions may arise from past convictions. This too, will vary depending on when your last conviction occurred and the nature of the conviction.",
        "contact_us_details": "Questions? We're here to help Our Customer Care Centre hours are Monday to Friday from 8 a.m. to 8 p.m. ET. In Quebec, Monday to Friday from 8 a.m. to 6 p.m. ET. For general questions, send us a note online - we'll get back to you within one business day.",
        "faq_details": "Questions Can I change my payment frequency? yes — but only at renewal. Don’t worry, we will notify you well in advance so you have time to make any changes. Payment options are catered due to the information you provided to us- typically our options are to pay monthly or annually.",
        "faq": "Faq",
        "blog_heading_1": "Will my current homeowners insurance policy provide sufficient coverage while my home is being remodeled?",
        "blog_heading_2": "Will my policy protect me if a contractor, subcontractor or construction worker is hurt on my property while working on my home remodel?",
        "blog_heading_3": "Get in Touch",
        "blog_detail_1": "If you are planning to move out of your home temporarily while your renovation project is completed, this can impact your existing insurance policy. This is especially true if you will be out of your home for 30 days or longer. You may need to change your home’s status to “under construction” or obtain a home vacancy permit in order to have coverage for perils like vandalism or theft while your home is unoccupied.",
        "blog_detail_2": "The simplest answer to this complicated question is often “no.” You need to verify that your contractor carries a general liability insurance policy, and also that they are covered by workers compensation. If you do the work yourself, obviously the risk of a contractor damaging your home or being injured is not a factor. However, this doesn’t change your need to notify your insurer about remodel plans. DIY renovations are still home renovations.",
        "blog_detail_3": "Planning a home renovation and need to update your homeowners insurance coverage accordingly? Our friendly, knowledgeable team of insurance brokers can help! Contact us online or give us a call at 1-888-853-5552.",
        "opinion_heading": "Opinion Poll",
        "opinion_title": "Do you like to get insurance on yearly basis ?",
        "poll_result": "Poll Result",
        "yes_label": "Yes",
        "no_label": "No",
        "insurance_wing": "Insurance got you under our wing. Without it, Insurance is like a parachute - If you don't have it when you need it, you will never need it again!",
        "help_text": "Looking for affordable insurance products? Insurdinary offers the best insurance rates in Canada. now you can compare Canadian insurance providers side-by-side and get the best quotes for you. Get instant Health Insurance, Life Insurance, Travel Insurance and other insurance product quotes online – fast!",
        "have_question": "Have a Questions?",
        "nav_home": "Home",
        "nav_home_insurance": "Home Insurance",
        "nav_auto_insurance": "Auto Insurance",
        "nav_contact_us": "Contact Us",
        "nav_blog": "Blog",
        "nav_faq": "Faq",
        "nav_claims": "Claims",
        "help": "Help"




    },
    "fr": {

        "Home": "page d'accueil",
        "home_insurance": "Assurance habitation",
        "auto_insurance": "Assurance automobile",
        "contact_us": "Contactez-nous",
        "blog": "Blog",
        "process": "5-10 jours ouvrables pour traiter la demande",
        "home_insurance_detail": "Obtenez la couverture qui correspond à votre style de vie Votre maison est votre sanctuaire. Continue comme ça. Assurez-vous d'avoir la meilleure assurance habitation pour répondre à vos besoins. Vous méritez la tranquillité d'esprit que procure le fait de savoir que les personnes que vous aimez et les choses que vous chérissez seront prises en charge si quelque chose hors de votre contrôle se produisait. Que vous soyez locataire, propriétaire d'un condo ou propriétaire, vous pouvez personnaliser votre couverture d'assurance pour qu'elle réponde au mieux à vos besoins.",
        "auto_insurance_detail": "Que vous louiez, financez ou possédiez votre voiture, il est obligatoire de souscrire une assurance voiture. Toutefois, pour pouvoir bénéficier de l’assurance automobile, certaines conditions et restrictions s’appliquent. Pour commencer, vous (et tous les conducteurs que vous souhaitez inclure dans la police) devez posséder un permis de conduire valide et être un résident du Canada. Ensuite, les compagnies d’assurance examineront votre casier judiciaire pour déterminer l’admissibilité et les taux. Cependant, les taux varient selon que vous recherchez une nouvelle police d'assurance ou si vous souhaitez renouveler une police existante. D'autres restrictions d'éligibilité peuvent découler de condamnations antérieures. Cela aussi dépendra du moment où votre dernière condamnation a eu lieu et de la nature de la condamnation.",
        "contact_us_details": "Des questions? Nous sommes ici pour aider Notre centre de service à la clientèle est ouvert du lundi au vendredi de 8h00 à 20h00. ET. Au Québec, du lundi au vendredi de 8h à 18h ET. Pour des questions d'ordre général, envoyez-nous une note en ligne - nous vous contacterons dans un délai d'un jour ouvrable.",
        "faq_details": "Questions Puis-je changer ma fréquence de paiement? oui - mais seulement au renouvellement. Ne vous inquiétez pas, nous vous en informerons suffisamment à l'avance pour que vous ayez le temps d'apporter des modifications. Les options de paiement sont prises en compte en raison des informations que vous nous avez fournies. En règle générale, nos options sont de payer tous les mois ou tous les ans.",
        "faq": "questions - réponses",
        "blog_heading_1": "Est-ce que ma police d'assurance habitation actuelle fournit une couverture suffisante pendant le réaménagement de ma maison?",
        "blog_heading_2": "Ma politique me protégera-t-elle si un entrepreneur, un sous-traitant ou un ouvrier du bâtiment est blessé sur ma propriété alors qu'il travaille à la rénovation de ma maison?",
        "blog_heading_3": "Entrer en contact",
        "blog_detail_1": "Si vous envisagez de quitter temporairement votre maison à la fin de votre projet de rénovation, cela peut avoir une incidence sur votre police d'assurance existante. Cela est particulièrement vrai si vous allez quitter votre maison pendant 30 jours ou plus. Vous devrez peut-être modifier le statut de votre maison pour devenir «en construction» ou obtenir un permis de vacance afin de couvrir les risques de vandalisme ou de vol lorsque votre maison est inoccupée.",
        "blog_detail_2": "La réponse la plus simple à cette question complexe est souvent «non». Vous devez vérifier que votre entrepreneur a souscrit une police d'assurance de responsabilité civile générale et qu'il est également couvert par l'indemnisation des accidents du travail. Si vous faites le travail vous-même, le risque qu'un entrepreneur endommage votre maison ou se blesse soit évidemment évité. Toutefois, cela ne change rien à votre besoin d'informer votre assureur de vos projets de rénovation. Les rénovations de bricolage sont toujours des rénovations à la maison.",
        "blog_detail_3": "Vous planifiez une rénovation domiciliaire et vous devez mettre à jour votre couverture d'assurance habitation en conséquence? Notre équipe amicale et compétente de courtiers en assurance peut vous aider! Contactez-nous en ligne ou appelez-nous au 1-888-853-5552.",
        "opinion_heading": "Sondage d'opinion",
        "opinion_title": "Aimez-vous obtenir une assurance sur une base annuelle?",
        "poll_result": "Résultat du sondage",
        "yes_label": "Oui",
        "no_label": "non",
        "insurance_wing": "L'assurance vous a sous notre aile. Sans elle, l'assurance est comme un parachute - Si vous n'en avez pas quand vous en avez besoin, vous n'en aurez plus jamais besoin!",
        "help_text": "Vous recherchez des produits d'assurance abordables? Insurdinary offre les meilleurs tarifs d'assurance au Canada. Vous pouvez maintenant comparer côte à côte les fournisseurs d’assurance canadiens et obtenir les meilleures soumissions pour vous. Obtenez une assurance santé instantanée, une assurance vie, une assurance voyageet autres offres de produits d'assurance en ligne - rapidement!",
        "have_question": "Vous avez des questions?",
        "nav_home": "page d'accueil",
        "nav_home_insurance": "Assurance habitation",
        "nav_auto_insurance": "Assurance automobile",
        "nav_contact_us": "Contactez-nous",
        "nav_blog": "Blog",
        "nav_faq": "questions - réponses",
        "nav_claims": "réclamations",
        "help": "Aidez-moi"



    },

};



function writeInLanguage() {

    let home = document.getElementById("home_text");
    let homeInsurance = document.getElementById("home_insurance");
    let autoInsurance = document.getElementById("auto_insurance");
    let contactus = document.getElementById("contact_us");
    let blog = document.getElementById("blog");
    let process = document.getElementById("process");
    let home_insurance_heading = document.getElementById("home_insurance_heading");
    let auto_insurance_heading = document.getElementById("auto_insurance_heading");
    let contact_us_heading = document.getElementById("contact_us_heading");
    let faq_heading = document.getElementById("faq_heading");
    let blog_heading = document.getElementById("blog_heading");
    let blog_heading_1 = document.getElementById("blog_heading_1");
    let blog_heading_2 = document.getElementById("blog_heading_2");
    let blog_heading_3 = document.getElementById("blog_heading_3");
    let blog_detail_1 = document.getElementById("blog_detail_1");
    let blog_detail_2 = document.getElementById("blog_detail_2");
    let blog_detail_3 = document.getElementById("blog_detail_3");
    let opinion_heading = document.getElementById("opinion_heading");
    let opinion_title = document.getElementById("opinion_title");
    let poll_result = document.getElementById("poll_result");
    let yes_label = document.getElementById("yes_label");
    let no_label = document.getElementById("no_label");
    let insurance_wing = document.getElementById("insurance_wing");
    let help_text = document.getElementById("help_text");
    let have_question = document.getElementById("have_question");
    let nav_home = document.getElementById("nav_home");
    let nav_home_insurance = document.getElementById("nav_home_insurance");
    let nav_auto_insurance = document.getElementById("nav_auto_insurance");
    let nav_blog = document.getElementById("nav_blog");
    let nav_faq = document.getElementById("nav_faq");
    let nav_claims = document.getElementById("nav_claims");
    let help = document.getElementById("help");





    let translate_home = translations[language].Home;
    let translate_home_insurance = translations[language].home_insurance;
    let translate_auto_insurance = translations[language].auto_insurance;
    let translate_contact_us = translations[language].contact_us;
    let translate_blog = translations[language].blog;
    let translate_process = translations[language].process;
    let translate_faq = translations[language].faq;
    let translate_blog_heading_1 = translations[language].blog_heading_1;
    let translate_blog_heading_2 = translations[language].blog_heading_2;
    let translate_blog_heading_3 = translations[language].blog_heading_3;
    let translate_blog_detail_1 = translations[language].blog_detail_1;
    let translate_blog_detail_2 = translations[language].blog_detail_2;
    let translate_blog_detail_3 = translations[language].blog_detail_3;
    let translate_opinion_heading = translations[language].opinion_heading;
    let translate_opinion_title = translations[language].opinion_title;
    let translate_poll_result = translations[language].poll_result;
    let translate_yes_label = translations[language].yes_label;
    let translate_no_label = translations[language].no_label;
    let translate_insurance_wing = translations[language].insurance_wing;
    let translate_help_text = translations[language].help_text;
    let translate_have_question = translations[language].have_question;
    let translate_nav_claims = translations[language].nav_claims;
    let translate_help = translations[language].help;







    home.innerText = translate_home;
    homeInsurance.innerText = translate_home_insurance;
    autoInsurance.innerText = translate_auto_insurance;
    autoInsurance.innerText = translate_auto_insurance;
    contactus.innerText = translate_contact_us;
    blog.innerText = translate_blog;
    process.innerText = translate_process;
    blog_heading.innerText = translate_blog;
    blog_heading_1.innerText = translate_blog_heading_1;
    blog_heading_2.innerText = translate_blog_heading_2;
    blog_heading_3.innerText = translate_blog_heading_3;
    blog_detail_1.innerText = translate_blog_detail_1;
    blog_detail_2.innerText = translate_blog_detail_2;
    blog_detail_3.innerText = translate_blog_detail_3;
    opinion_heading.innerText = translate_opinion_heading;
    opinion_title.innerText = translate_opinion_title;
    poll_result.innerText = translate_poll_result;
    yes_label.innerText = translate_yes_label;
    no_label.innerText = translate_no_label;
    insurance_wing.innerText = translate_insurance_wing;
    help_text.innerText = translate_help_text;
    have_question.innerText = translate_have_question;
    nav_home.innerText = translate_home;
    nav_home_insurance.innerText = translate_home_insurance;
    nav_auto_insurance.innerText = translate_auto_insurance;
    nav_blog.innerText = translate_blog;
    nav_faq.innerText = translate_auto_insurance;
    nav_claims.innerText = translate_nav_claims;
    help.innerText = translate_help;





}

$("#language").on("change", function() {
    language = $("#language").val();
    writeInLanguage();

    if (language == "en") {
        localStorage.clear();
        localStorage.setItem("language", "en");
    }

    if (language == "fr") {
        localStorage.clear();

        localStorage.setItem("language", "fr");
    }


});
let language = localStorage.getItem("language");
if (language = "en") {
    writeInLanguage();
}
if (language = "fr") {
    writeInLanguage();

}



//user validation
function validate_user_info() {

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    error_fname.hidden = true;
    error_lname.hidden = true;
    error_age.hidden = true;
    let nameRGEX = /^[a-z ,.'-]+$/i;


    let today = new Date();
    let birthdate = new Date(document.getElementById("birthday").value);
    let presentdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let age = today.getFullYear() - birthdate.getFullYear();
    let m = today.getMonth() - birthdate.getMonth();


    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }




    let firstnameresult = nameRGEX.test(firstName);
    let lastnameresult = nameRGEX.test(lastName);

    if (firstnameresult == false || firstName.length < 4) {

        error_fname.hidden = false;



    }

    if (firstnameresult == true && firstName.length >= 4) {

        if (lastnameresult == false || lastName.length < 4) {

            error_lname.hidden = false;
        }
        if (lastnameresult == true && lastName.length >= 4) {
            if (birthdate == "Invalid Date") {

                error_age.hidden = false;
            }
            if (age < 18) {

                error_age.hidden = false;
            }


            if (age > 18 && !(birthdate == "Invalid Date")) {
                document.getElementById("myProgress").value = "50";
                document.getElementById("propertyValidate").disabled = false;
                document.getElementById("propertyType").disabled = false;
                document.getElementById("ownershipType").disabled = false;
                document.getElementById("earlierClaims").disabled = false;
                document.getElementById("yearHouseBuilt").disabled = false;
                document.getElementById("search_input").disabled = false;
                document.getElementById("yearHouseBuilt").disabled = false;
                document.getElementById("yearHouseBuiltYes").disabled = false;
                document.getElementById("yearHouseBuiltNo").disabled = false;
                successValidate.hidden = false;
            }



        }






    }

}
//property validation
function validate_property_info() {


    let propertyType = document.getElementById("propertyType").value;
    let ownershipType = document.getElementById("ownershipType").value;
    let earlierClaims = document.getElementById("earlierClaims").value;
    let homebuiltdate = document.getElementById("yearHouseBuilt").value;
    let address = document.getElementById("search_input").value;
    let yearHouseBuilt = new Date(document.getElementById("yearHouseBuilt").value);
    error_prop.hidden = true;
    error_owner.hidden = true;
    error_address.hidden = true;
    error_builtdate.hidden = true;
    error_basement.hidden = true;
    error_claims.hidden = true;




    if (!(propertyType == "Choose the type of Property")) {
        if (!(propertyType == "Choose the type of Property")) {

            if (ownershipType == "Choose the type of Ownership") {


                error_owner.hidden = false;
            } else {

                if (address == "") {

                    error_address.hidden = false;
                } else {

                    if (yearHouseBuilt == "Invalid Date") {


                        error_builtdate.hidden = false;


                    } else {
                        if (!(document.getElementById("yearHouseBuiltYes").checked || document.getElementById("yearHouseBuiltNo").checked)) {



                            error_basement.hidden = false;

                        } else {
                            if (!(earlierClaims == "Choose no. of claims")) {


                                document.getElementById("myProgress").value = "100";
                                document.getElementById("submitId").disabled = false;
                                successValidateProperty.hidden = false;



                            } else {


                                error_claims.hidden = false;;
                            }



                        }
                    }


                }





            }



        }
    } else {

        error_prop.hidden = false;

    }
}

var searchInput = 'search_input';

$(document).ready(function() {
    if (localStorage.getItem("language") == "en") {
        $("#language").val("en");
    }
    if (localStorage.getItem("language") == "fr") {
        $("#language").val("fr");
    }


    var autocomplete;
    var geocoder = new google.maps.Geocoder;

    autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
        types: ['geocode'],
    });


});