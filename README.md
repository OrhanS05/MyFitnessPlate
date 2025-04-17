# Installatiehandleiding MyFitnessPlate

## Inhoudsopgave

- Inleiding 
- Screenshot
- Benodigdheden
- De applicatie draaien
- Overige commando's
- Testgebruikers

## Inleiding 

Van harte welkom bij **MyFitnessPlate**! Deze applicatie is ontwikkeld om gebruikers te ondersteunen bij het behalen van hun gezondheidsdoelen. In MyFitnessPlate kun je je dagelijkse calorieën, eiwitten, koolhydraten en vetten bijhouden, net als je waterinname, stappendoel en gewicht.
Je kunt handmatig voedingsmiddelen toevoegen of recepten zoeken via de geïntegreerde Spoonacular API. Daarbij is het mogelijk om te zoeken naar specifieke recepten op basis van naam of juist op basis van macrodoelen zoals calorieën, eiwitten, koolhydraten en vetten. Na het zoeken krijg je per recept een overzichtelijke samenvatting, inclusief bereidingswijze, bereidingstijd, of het gerecht vegan is, en een lijst met ingrediënten.
Daarnaast biedt de app een overzichtelijk dagboek om je eetgeschiedenis terug te zien, en een dashboard dat in één oogopslag je voortgang laat zien.
Of je nu fitter wilt worden, afvallen of gewoon inzicht wilt krijgen in je eetpatroon: **MyFitnessPlate** helpt je op weg. Veel succes en plezier met het gebruik van de app!

![Screenshot van de dashboardpagina](./src/assets/read.me/dashboard.png)



## Benodigdheden

- **Google Chrome**
-  Ik raad je zeker aan om Chrome te installeren. Deze applicatie is namelijk ontwikkeld en getest in Google Chrome.
- klik [hier](https://www.google.com/intl/nl/chrome/) om zo de laatste versie van Google Chrome te installeren.

- **IDE (naar eigen keuze)** 
- Er is een IDE vereist om de applicatie te draaien.
- Persoonlijk vind ik Visual Studio Code optimaal, maar dat verschilt per persoon. Daarnaast is deze IDE ook gratis.
- Klik [hier](https://code.visualstudio.com/) om Visual Studio Code te installeren. 

**Node.js**
- Node.js is vereist om de commando's in de terminal te kunnen uitvoeren.
- klik [hier](https://nodejs.org/en/download/current) om de laatste versie te installeren van node.js.

**Api Key**
- Indien je een docent van **Novi** bent, dan hoef je zelf geen API key aan te maken. De benodigde gegevens zijn al toegevoegd in het .env- bestand van dit project.
- Wil je als developer zelf een eigen API key genereren om de app lokaal te testen? Volg dan onderstaande stappen:
1. Ga naar [Spooncular-Api](https://spoonacular.com/food-api).
2. Maak gratis een account aan.
3. Vraag een API Key aan via je account-dashboard.
4. Voeg deze toe in een `.env` bestand in de hoofdmap van het project, zoals hieronder:

```env
VITE_API_KEY= jouw_api_key
```

## De applicatie draaien
1. Installeer Google Chrome
2. installeer Visual Studio Code of jouw IDE naar keuze;
    - ik raad je Visual Studio Code aan omdat het gratis en en veel wordt gebruikt.
    - Optioneel: installeer handige extensies zoals ESLint, Prettier,  JavaScript (ES6) code snippets. Deze extensies zijn niet verplicht , maar zouden wel zorgen voor een betere ontwikkelervaring.

3. Installeer Node.js
    - zodra je Node.js hebt geïnstalleerd is het nu tijd om te controleren of Node.js correct geïnstalleerd is. 
    - Start je IDE eens opnieuw op.
    - Open de terminal en type het volgende commando: `node-v.`
    - Je zal nu het versienummer moeten krijgen waar je op zit, bijvoorbeeld `v18.18.0`.
    - Daarnaast doe je `npm -v` om te kijken of NPM correct is mee geinstalleerd.
    - Krijg je een foutmelding hierbij? Installeer Node.js dan opnieuw.

4. Applicatie binnenhalen op je eigen machine
    - Nadat je Git hebt geinstalleerd ga je naar [Deze]() directory.
    - Klik op de groene button met `<> Code` en kopieër de **HTTPS-link**
    - Open je IDE druk op Ctrl + Shift + P (of Cmd + Shift + P op Mac) om de Command Palette te openen. (of gebruik git clone <link> in je terminal).
    - Type en klik op Git: Clone.
    - Plak hier de gekopieërde GitHub-link.
    - Kies een map op je computer waarin je het project wilt opslaan.
    - Zodra het downloaden voltooid is, zal je IDE vragen of je de map wilt openen. Klik op "**Open**".  

5. Dependencies installeren:
    - Nu je Node.js en NPM hebt geïnstalleerd, gaan we de benodigde dependencies binnenhalen die je nodig hebt om de applicatie te draaien.
    - Type het commando: `npm install` in je terminal en druk op Enter:
    - Dit kan even duren, natuurlijk afhankelijk van je internetverbinding en computerprestaties.
    - hierna is je project voorzien van de benodigde packages en kun je doorgaan met de volgende stap. 
    ### npm install

6. Applicatie starten
 - Nu alle dependencies zijn geïnstalleerd, ben je klaar om de applicatie te starten. 
 - Type het commando: `**npm run dev**` in je terminal en druk op Enter:
 - Als het goed is geegaan wordt de app gestart op http://localhost:5173/. Je kan erop klikken door Ctrl + klik (met je muis), te doen of ga naar de browser en zoek http://localhost:5173/ op om MyFitnessPlate te openen. 


## Overige commando's

| Commando          | Beschrijving                                                            |
|-------------------|-------------------------------------------------------------------------|
| `npm run dev`     | Start de ontwikkelserver en opent de app op `http://localhost:5173`     |
| `npm run build`   | Bouwt de applicatie voor productie in de `dist` map                     |
| `npm run lint`    | Voert ESLint uit om de code te controleren op fouten                    |
| `npm run preview` | Start een lokale server om de gebouwde productieversie te bekijken      |

## Testgebruikers
**Registratievereisten** 
- **Gebruikersnaam**: Minimaal 6 karakters
- **Wachtwoord**: Minimaal 6 karakters
- **Mailadres**: Geldig email adres