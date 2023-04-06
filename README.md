# Enquête
Een digitale, interactieve enquête website voor de Minor Webdesign And Development.

<img src="docs/assets/imgs/readme-header-image.jpg" alt="Laptop met op het scherm een digitale enquête van de Hogeschool van Amsterdam omringd door blauw licht geplaatst op een stenenblok." width="100%">

Dit is de repository van <a href="https://danianmarengo.nl">Danian Marengo</a> zijn, enquête website. Deze website is gemaakt voor het project <a href="https://github.com/cmda-minor-web/browser-technologies-2223">Browser Technologies</a>, dat deel uitmaakt van de <a href="https://github.com/cmda-minor-web">Minor Webdesign And Development 2022- 2023</a> aan de <a href="https://www.hva.nl/">Amsterdamse Hogeschool voor de Kunsten</a>, onderdeel van het programma <a href="https://www.hva.nl/opleidingen/communication-and-multimedia-design?gclid=Cj0KCQiAgaGgBhC8ARIsAAAyLfFCp5OTcBLGcx-_uMWa2sowONOebB19jLA1KMt2yEmVFGWaHdsi9DwaAq0PEALw_wcB">Communicatie en Multimedia Design.</a>

<br>

## Beschrijving
Voor het vak Browser Technologies zijn we voorgesteld aan het concept van "Progressive Enhancement". Onze kennis en begrip van dit principe wordt getoetst door middel van een opdracht, waarbij we een product moeten opleveren gebaseerd op een Use Case. Tijdens dit proces leren we niet alleen de kernfunctionaliteit van een Use Case te begrijpen, maar ook Progressive Enhancement en Feature Detection te begrijpen en toepassen.

We bouwen een demo op volgens het principe van Progressive Enhancement in drie lagen en houden ons aan de toegankelijkheidsrichtlijnen voor websites door aandacht te besteden aan leesbaarheid, contrast en kleur. Daarnaast zorgen we voor een gebruiksvriendelijke ervaring door affordance en directe feedback op interactieve elementen. Het eindproduct zal niet alleen aan al deze eisen voldoen, maar ook professionaliteit uitstralen.

<br>


## Features in de Enquête
In dit hoofdstuk zal ik uitgebreid ingaan op de features en Browser Technologies die zijn gebruikt in de enquête en hoe Progressive Enhancement is toegepast. Ik zal inzicht geven in hoe deze elementen zijn ingezet om een optimale gebruikerservaring te creëren.

<br>
<br>

## Gebruikerservaring

<br>

###### Feature 1

### Opdelen van het formulier
Een feature in mijn enquete is het opdelen van de formuliervelden in stappen, waardoor de gebruiker niet alle velden tegelijkertijd hoeft te invullen. Dit is handig omdat het de gebruiker overzichtelijker maakt en voorkomt dat de gebruiker overweldigd wordt door een lange lijst aan velden. Hierdoor wordt de gebruikerservaring verbetert en wordt de kans op fouten in het invullen van het formulier verminderd.

<br>

#### HTML
De basis van het opdelen van het formulier is het schrijven van semantische HTML. Door gebruik te maken van semantische HTML-tags zoals <form>, <fieldset> en <input>, zorgen we ervoor dat de structuur van het formulier duidelijk en toegankelijk is voor zowel gebruikers als zoekmachines. Bovendien maakt het gebruik van semantische HTML het eenvoudiger om het formulier te stijlen met CSS en interactie toe te voegen met JavaScript.

<br>

#### CSS
Om het formulier visueel aantrekkelijk en overzichtelijk te maken, passen we CSS toe om de velden van het formulier onder elkaar te plaatsen en een duidelijke visuele hiërarchie te creëren. Door gebruik te maken van witruimte rondom de velden, wordt het gemakkelijker voor gebruikers om de verschillende delen van het formulier te onderscheiden en zich te concentreren op de vragen die ze moeten beantwoorden. Het gebruik van contrasterende kleuren en typografie draagt bij aan de leesbaarheid en zorgt ervoor dat de gebruiker zich op zijn gemak voelt bij het invullen van het formulier.

<br>

#### JS
De finishing touch voor het opdelen van het formulier is de toevoeging van JavaScript. Door JavaScript te gebruiken, kunnen we het formulier opdelen in kleinere, behapbare stukken, zodat gebruikers slechts vier vragen tegelijk krijgen. Dit helpt om de cognitieve belasting van het invullen van een lang formulier te verminderen en moedigt gebruikers onbewust aan om het formulier af te ronden zonder zich te realiseren hoe lang het daadwerkelijk is.

Dit kan worden bereikt door gebruik te maken van JavaScript om de zichtbaarheid van de verschillende delen van het formulier te beheren, evenals het toevoegen van navigatieknoppen om de gebruiker te helpen door het formulier te navigeren. Door het formulier op deze manier op te splitsen, bieden we een optimale gebruikerservaring die intuïtief en eenvoudig te gebruiken is.

<br>
<br>







###### Feature 2
### Indicatie van stappen in het formulier
Een feature in mijn enquete is een indicatie van stappen, die de gebruiker laat zien in welke stap van het formulier ze zich bevinden. Dit is goed omdat het de gebruiker overzicht biedt en hen helpt bij het volgen van de voortgang. Hierdoor wordt de gebruikerservaring verbetert en wordt de kans op verwarring en fouten in het invullen van het formulier verminderd.

<br>

#### HTML
De basis van de Step Indicator is het gebruik van een geordende lijst (<ol>) in de HTML-structuur. Deze lijst bevat evenveel list items (<li>) als er fieldsets zijn in het formulier. Binnen de <li>-elementen bevinden zich ankertags (<a>), die verwijzen naar hashs. Op deze manier kunnen gebruikers, zelfs in het ergste geval waarin geen CSS en JavaScript kunnen worden geladen, nog steeds gebruik maken van deze navigatiefunctie. Hoewel de ervaring minder ideaal is zonder CSS of JavaScript, blijft het mogelijk om snel te navigeren tussen de verschillende fieldsets.

<br>

#### CSS
Met behulp van CSS kunnen we de Step Indicator stijlen en positioneren voor een betere gebruikerservaring. Door de lijst met links te stijlen en position: fixed te gebruiken, zorgen we ervoor dat de Step Indicator altijd zichtbaar is bovenaan de viewport. Dit stelt gebruikers in staat om op elk moment tijdens het scrollen door het formulier te navigeren.

Daarnaast maken we met CSS duidelijk in welke fieldset de gebruiker zich bevindt. Dit wordt gedaan met behulp van de :visited pseudo-selector, die de stijl van de huidige link in de lijst wijzigt om aan te geven welk gedeelte van het formulier actief is.

<br>

#### JS
Door JavaScript toe te voegen aan de Step Indicator, verbeteren we de gebruikerservaring aanzienlijk. In combinatie met het opdelen van het formulier, kunnen we nu ook de voortgang van de gebruiker in het formulier weergeven. Dit geeft hen de mogelijkheid om vragen over te slaan, snel terug te keren naar een eerdere vraag of te zien waar ze zich in het invulproces bevinden.

De Step Indicator werkt naadloos samen met het opdelen van het formulier en biedt gebruikers een intuïtieve en gebruiksvriendelijke manier om door het formulier te navigeren.
<br>
<br>






## Persoonlijke Voorkeur

<br>

###### Feature 3
### Licht en Donker Modus
Een feature in mijn enquete is de mogelijkheid om tussen een licht en donker modus te schakelen. Dit is goed omdat het de gebruikerservaring verbetert door aan te passen aan de voorkeur van de gebruiker en de comfortabele leesomgeving te bieden, zowel overdag als 's nachts. Hierdoor kan de gebruiker het formulier op een manier invullen die voor hen het meest comfortabel is.

<br>

#### HTML
Met behulp van pure HTML geven we gebruikers de mogelijkheid om een lichte of donkere interface te hebben, afhankelijk van hun systeeminstellingen. Dit betekent dat de gebruikerservaring zich automatisch aanpast aan de voorkeuren van de gebruiker zonder extra inspanning van hun kant. In dit stadium wordt de standaardstijl van de user agent gehandhaafd.

<br>

#### CSS
Met CSS passen we de Light en Dark mode aan onze eigen stijl aan en zorgen we voor een aangename gebruikerservaring. In plaats van simpelweg zwart en wit te gebruiken voor de verschillende modi, kiezen we voor wit en donkergrijs om een beter contrast te creëren. Dit zorgt ervoor dat het verschil tussen de twee modi niet te groot is, wat bijdraagt aan een betere gebruikerservaring in zowel de Light als de Dark mode.

Daarnaast maken we gebruik van CSS media queries om automatisch te schakelen tussen de Light en Dark mode op basis van de systeeminstellingen van de gebruiker. Dit zorgt ervoor dat de gebruiker altijd de meest geschikte interface krijgt, ongeacht zijn of haar persoonlijke voorkeuren.

<br>

#### JS
Tot slot voegen we met JavaScript de mogelijkheid toe voor gebruikers om hun voorkeur voor Light of Dark mode handmatig te kiezen, ongeacht hun systeeminstellingen. Dit doen we door een "checkbox" te implementeren waarmee gebruikers kunnen aangeven of ze de Light of Dark mode willen inschakelen of uitschakelen. Door deze optie te bieden, geven we gebruikers meer controle over hun ervaring en kunnen ze kiezen welke modus het beste bij hun situatie past.

In conclusie, door het combineren van HTML, CSS en JavaScript, creëren we een Light en Dark mode die toegankelijk, gebruiksvriendelijk en visueel aantrekkelijk is. Het toepassen van progressive enhancement zorgt ervoor dat deze functie goed werkt op een breed scala aan apparaten en browsers, en biedt tegelijkertijd de best mogelijke ervaring voor de gebruiker.

<br>
<br>






## Validatie

<br>

###### Feature 1
### Studentnummer valideren
Het valideren van een studentnummer is essentieel voor het waarborgen van de nauwkeurigheid van de gegevens die door gebruikers worden ingevoerd. Door gebruik te maken van progressive enhancement, zorgen we ervoor dat de validatie van het studentnummer goed werkt op verschillende apparaten en browsers, en bieden we een verbeterde gebruikerservaring.

<br>

#### HTML
Met behulp van HTML zorgen we ervoor dat op mobiele apparaten het juiste toetsenbord wordt weergegeven voor het invoeren van het studentnummer. Dit doen we door het input type "text" te gebruiken met de inputmode "numeric". Hierdoor kunnen er op mobiele apparaten geen letters ingevoerd worden, wat helpt bij het invoeren van correcte gegevens.

Daarnaast maken we gebruik van een pattern attribuut om ervoor te zorgen dat het studentnummer met een 5 of 6 begint en dat het maximaal aantal karakters tussen de 0 en 9 ligt. Dit helpt bij het waarborgen van de nauwkeurigheid van het ingevoerde studentnummer.

<br>

#### CSS
Door middel van CSS voegen we een tweede laag validatie toe en maken we met de :invalid en :valid pseudo-selectors duidelijk of het studentnummer juist of onjuist is ingevoerd. Dit helpt gebruikers om gemakkelijker eventuele fouten te herkennen en corrigeren voordat ze het formulier indienen.

<br>

#### JS
Tot slot voegen we met JavaScript een derde laag validatie toe om de gebruikerservaring te verbeteren. We zorgen ervoor dat de gebruiker op de hoogte wordt gebracht wanneer het ingevoerde nummer ongeldig is. Zodra het nummer geldig is, krijgt de gebruiker dit te zien in het invoerveld zelf, bijvoorbeeld door middel van een vinkje.

Deze combinatie van HTML, CSS en JavaScript zorgt ervoor dat de validatie van het studentnummer zowel effectief als gebruiksvriendelijk is. Gebruikers kunnen eenvoudig hun gegevens invoeren en ontvangen directe feedback over de juistheid van hun invoer, wat helpt bij het waarborgen van nauwkeurige en betrouwbare gegevens.

In conclusie, door het combineren van HTML, CSS en JavaScript, creëren we een effectieve en gebruiksvriendelijke validatie van het studentnummer. Het toepassen van progressive enhancement zorgt ervoor dat deze functie goed werkt op een breed scala aan apparaten en browsers, en biedt tegelijkertijd de best mogelijke ervaring voor de gebruiker.

<br>
<br>






###### Feature 1
### E- mailadres valideren
Het valideren van een e-mailadres is cruciaal om ervoor te zorgen dat gebruikers accurate contactinformatie verstrekken. Door gebruik te maken van progressive enhancement, zorgen we ervoor dat de validatie van het e-mailadres goed werkt op verschillende apparaten en browsers, en bieden we een verbeterde gebruikerservaring.

<br>

#### HTML
Met behulp van HTML zorgen we voor een basisvalidatie van het e-mailadres door het input type "email" te gebruiken. Dit zorgt ervoor dat de browser automatisch controleert of het ingevoerde e-mailadres aan de basisvereisten voor een geldig e-mailadres voldoet, zoals de aanwezigheid van een "@"-symbool en een domeinnaam.

Daarnaast kunnen we het required attribuut toevoegen om ervoor te zorgen dat gebruikers een e-mailadres moeten invoeren voordat ze het formulier kunnen indienen.

<br>

#### CSS
Met CSS voegen we een tweede laag validatie toe om gebruikers visuele feedback te geven over de geldigheid van hun ingevoerde e-mailadres. We maken gebruik van de :invalid en :valid pseudo-selectors om de stijl van het invoerveld te wijzigen op basis van de geldigheid van het e-mailadres. Dit helpt gebruikers om gemakkelijk eventuele fouten te herkennen en corrigeren voordat ze het formulier indienen.

<br>

#### JS
Tot slot voegen we met JavaScript een derde laag validatie toe om de gebruikerservaring verder te verbeteren. We kunnen een event listener toevoegen die de validatie uitvoert wanneer de gebruiker het e-mailadres invoert of het veld verlaat. Deze validatie kan bijvoorbeeld controleren op veelvoorkomende fouten, zoals het ontbreken van een topleveldomein (bijvoorbeeld ".com").

Als het e-mailadres ongeldig is, kan JavaScript een foutmelding weergeven om de gebruiker te informeren over de specifieke fout en hoe deze kan worden gecorrigeerd. Als het e-mailadres geldig is, kan JavaScript een bevestiging weergeven, zoals een vinkje, om aan te geven dat het e-mailadres correct is ingevoerd.

<br>
<br>






###### Feature 1
### Start- en einddatum valideren
Het valideren van start- en einddatums is belangrijk om ervoor te zorgen dat gebruikers correcte en logische datums invoeren in een formulier. Door gebruik te maken van progressive enhancement, zorgen we ervoor dat de validatie van start- en einddatums goed werkt op verschillende apparaten en browsers, en bieden we een verbeterde gebruikerservaring.

<br>

#### HTML
In het formulier gebruiken we twee inputvelden met input type "text" en inputmode "numeric" voor het invoeren van de start- en einddatums. Dit zorgt ervoor dat gebruikers alleen numerieke waarden kunnen invoeren op mobiele apparaten en helpt bij het invoeren van correcte gegevens.

<br>

#### CSS
Met CSS voegen we een tweede laag validatie toe om gebruikers visuele feedback te geven over de geldigheid van hun ingevoerde start- en einddatums. We maken gebruik van de :invalid en :valid pseudo-selectors om de stijl van de invoervelden te wijzigen op basis van de geldigheid van de datums. Dit helpt gebruikers om gemakkelijk eventuele fouten te herkennen en corrigeren voordat ze het formulier indienen.

<br>

#### JS
Tot slot voegen we met JavaScript een derde laag validatie toe om de gebruikerservaring verder te verbeteren. We kunnen event listeners toevoegen die de validatie uitvoeren wanneer de gebruiker de start- en einddatums invoert of de velden verlaat. Deze validatie kan bijvoorbeeld controleren of de startdatum voor de einddatum ligt en of de ingevoerde datums geldig zijn.

Daarnaast zorgt JavaScript ervoor dat de ingevoerde getallen automatisch worden omgezet naar het formaat dd-mm-jj. Dit biedt een consistente weergave van datums voor gebruikers, ongeacht hun invoerformaat.

Als de datums ongeldig zijn, kan JavaScript een foutmelding weergeven om de gebruiker te informeren over de specifieke fout en hoe deze kan worden gecorrigeerd. Als de datums geldig zijn, kan JavaScript een bevestiging weergeven, zoals een vinkje, om aan te geven dat de datums correct zijn ingevoerd.

<br>
<br>






## Browser Technologies in de Enquête
In dit hoofdstuk zal ik uitgebreid ingaan op de browser technologies die zijn gebruikt in de enquête en. Ik zal inzicht geven in hoe deze technologieën zijn ingezet om een optimale gebruikerservaring te creëren en hoe deze bijdragen aan het succes van de enquête.

###### Browser Technologie 1
<br>

### The @supports rule
Een Browser Technologie die ik heb toegepast is de @supports regel. Deze regel is toegepast om de browsercompatibiliteit te waarborgen en de stijl van de enquête op een consistente en verwachte manier te laten worden weergegeven in verschillende browsers. Hierdoor is de gebruikerservaring verbeterd en zijn er geen problemen met het correct weergeven van elementen of het correct functioneren van de enquête.

<br>

#### HTML
Over de HTML.

<br>

#### CSS
Over de CSS.

<br>

#### JS
Over de JS.

<br>
<br>






## Testrapport

## Mobiel

<br>

### Apple IOS
<br>

###### Mobiel Browser 1
### Google Chrome
Beschrijving

<br>

<blockquote>
  Opdelen van formulier: Werkt vlekkeloos, werkt op mobiel erg prettig omdat alles altijd in een "kleinere omgeving is".
</blockquote>

<blockquote>
  Opdelen van formulier: Ondanks dat het opdelen vlekkeloos werkt, lijkt het alsof er aan rechterkant van de pagina een soort witruimte is ontstaan, deze is onverklaarbaar en komt waarschijnlijk door een overflow probleem.
</blockquote>


<br>

<blockquote>
  Step indicator: Step indicator werkt goed, ondanks dat de url balk bovenin zit is er genoeg ruimte om op te drukken, wat je op het eerste gezicht misschien niet zou denken.
</blockquote>

<br>

<blockquote>
  Licht en donker: Licht en donker erg eenvoudig aan te passen op IOS systeem, werkt vlekkeloos.
</blockquote>

<br>

<blockquote>
  Validatie: Validatie werkt goed.
</blockquote>


<br>
<br>






###### Mobiel Browser 2
### Safari
Beschrijving

<blockquote>
  Opdelen van formulier: Werkt vlekkeloos, werkt op mobiel erg prettig omdat alles altijd in een "kleinere omgeving is".
</blockquote>

<br>

<blockquote>
  Step indicator: Step indicator werkt fijn, de links zijn kleiner en fijn te bedienen. Zelfs zonder de links te stijlen, daarnaast wordt alles goed uitgevoerd door de javascript. Prettig omdat deze nu ook boven in beeld staat en de url balk onderin is. 
</blockquote>

<br>

<blockquote>
  Licht en donker: Licht en donker erg eenvoudig aan te passen op IOS systeem, werkt vlekkeloos.
</blockquote>

<br>

<blockquote>
  Validatie: Validatie werkt goed.
</blockquote>

<br>






### Android
Beschrijving.

<br>

###### Mobiel Browser 1
### Google Chrome

<br>

<blockquote>
  Opdelen van formulier: Werkt vlekkeloos, werkt op mobiel erg prettig omdat alles altijd in een "kleinere omgeving is".
</blockquote>

<br>

<blockquote>
  Step indicator: Step indicator werkt fijn, de links zijn kleiner en fijn te bedienen. Zelfs zonder de links te stijlen.
</blockquote>

<br>

<blockquote>
  Licht en donker: Licht en donker erg eenvoudig aan te passen op IOS systeem, werkt vlekkeloos.
</blockquote>

<br>

<blockquote>
  Validatie: Validatie werkt goed.
</blockquote>






###### Mobiel Browser 2
### Samsung Internet

<blockquote>
  Opdelen van formulier: Werkt vlekkeloos, werkt op mobiel erg prettig.
</blockquote>

<br>

<blockquote>
  Step indicator: Step indicator werkt fijn, de links zijn kleiner en fijn te bedienen. Zelfs zonder de links te stijlen.
</blockquote>

<br>

<blockquote>
  Licht en donker: Licht en donker erg eenvoudig aan te passen op IOS systeem, werkt vlekkeloos.
</blockquote>

<br>

<blockquote>
  Validatie: Validatie werkt goed.
</blockquote>






## Desktop

<br>

### MacOS

<br>

###### Desktop Browser 1
### Google Chrome

<br>

<blockquote>
  Opdelen van formulier: Werkt vlekkeloos, werkt op MacOs Google chrome.
</blockquote>

<br>

<blockquote>
  Step indicator: Step indicator werkt fijn, heb de preciesie van een muis dus werkt goed. Werkt ook goed zonder het gebruiken van de muis dus door middel van muis en toetsenbord en te tabben.
</blockquote>

<br>

<blockquote>
  Licht en donker: Licht en donker erg eenvoudig aan te passen op MacOs systeem, werkt vlekkeloos.
</blockquote>

<br>

<blockquote>
  Validatie: Validatie werkt goed, geen problemen. 
</blockquote>

<blockquote>
  Toegankelijkheid: Problemen bij het tabben door de radio buttons. Is best onduidelijk wanneer je bent begonnen met tabben erin, wordt pas duidelijk bij gebruik van pijltjes toetsen.
</blockquote>






###### Desktop Browser 2
### Mozilla FireFox
Beschrijving

<br>

<blockquote>
  Before element werkt niet op firefox, vandaar dat ik ervoor heb gekozen om de * voor required maar als span in de HTML te plaatsen, je zou het overigens kunnen zien als content in plaats van styling 
</blockquote>

<blockquote>
  Opdelen van formulier: Werkt vlekkeloos, werkt op MacOs Firefox.
</blockquote>

<br>

<blockquote>
  Step indicator: Step indicator werkt fijn, heb de preciesie van een muis dus werkt goed. Werkt ook goed zonder het gebruiken van de muis dus door middel van muis en toetsenbord en te tabben.
</blockquote>

<br>

<blockquote>
  Licht en donker: Licht en donker erg eenvoudig aan te passen op MacOs systeem, werkt vlekkeloos.
</blockquote>

<br>

<blockquote>
  Validatie: Validatie werkt goed, geen problemen. 
</blockquote>

<blockquote>
  Toegankelijkheid: Problemen bij het tabben door de radio buttons. Is best onduidelijk wanneer je bent begonnen met tabben erin, wordt pas duidelijk bij gebruik van pijltjes toetsen.
</blockquote>

<blockquote>
  FireFox heeft geen :Has() selector, waardoor de radio buttons niet werken, moet opgelost worden door de radio button zelf zichtbaar te maken of door middel van JavaScript.
</blockquote>







###### Desktop Browser 3
### Flow

<br>

<blockquote>
  formulier opdelen: placeholders lijken niet direct in te laden.
</blockquote>

<blockquote>
  formulier opdelen: Met JavaScript werkt het en door het verplaatsen van een class ook, in flow hebben links alleen geen underline van zichzelf.
</blockquote>

<blockquote>
  Step indicator lijkt niet te werken in flow, de class verplaatst zich niet 
</blockquote>

<blockquote>
  Aspect-ratio: werkt niet in flow. 
</blockquote>

<blockquote>
  flexbox: gap, lijkt niet te werken waardoor ruimtes verdwijnen.
</blockquote>

<blockquote>
  Flow heeft geen has selector waardoor radio buttons er vreemd uitzien, daanaast lijkt appearance: none ook niet te werken.
</blockquote>

<br>
<br>






### Windows
Beschrijving.

<br>

###### Desktop Browser 1
### Google Chrome

<br>


<br>

<blockquote>
  Opdelen van formulier: Werkt vlekkeloos, werkt op MacOs Google chrome.
</blockquote>

<br>

<blockquote>
  Step indicator: Step indicator werkt fijn, heb de preciesie van een muis dus werkt goed. Werkt ook goed zonder het gebruiken van de muis dus door middel van muis en toetsenbord en te tabben.
</blockquote>

<br>

<blockquote>
  Licht en donker: Licht en donker erg eenvoudig aan te passen op MacOs systeem, werkt vlekkeloos.
</blockquote>

<br>

<blockquote>
  Validatie: Validatie werkt goed, geen problemen. 
</blockquote>

<blockquote>
  Toegankelijkheid: Problemen bij het tabben door de radio buttons. Is best onduidelijk wanneer je bent begonnen met tabben erin, wordt pas duidelijk bij gebruik van pijltjes toetsen.
</blockquote>






###### Desktop Browser 2
### Mozilla FireFox

<br>

<blockquote>
  Before element werkt niet op firefox, vandaar dat ik ervoor heb gekozen om de * voor required maar als span in de HTML te plaatsen, je zou het overigens kunnen zien als content in plaats van styling 
</blockquote>

<blockquote>
  Opdelen van formulier: Werkt vlekkeloos, werkt op MacOs Firefox.
</blockquote>

<br>

<blockquote>
  Step indicator: Step indicator werkt fijn, heb de preciesie van een muis dus werkt goed. Werkt ook goed zonder het gebruiken van de muis dus door middel van muis en toetsenbord en te tabben.
</blockquote>

<br>

<blockquote>
  Licht en donker: Licht en donker erg eenvoudig aan te passen op MacOs systeem, werkt vlekkeloos.
</blockquote>

<br>

<blockquote>
  Validatie: Validatie werkt goed, geen problemen. 
</blockquote>

<blockquote>
  Toegankelijkheid: Problemen bij het tabben door de radio buttons. Is best onduidelijk wanneer je bent begonnen met tabben erin, wordt pas duidelijk bij gebruik van pijltjes toetsen.
</blockquote>

<blockquote>
  FireFox heeft geen :Has() selector, waardoor de radio buttons niet werken, moet opgelost worden door de radio button zelf zichtbaar te maken of door middel van JavaScript.
</blockquote>

<br>
<br>











## Credits
<ul>
  <li></li>
</ul>

<br>






## Miscellaneous
Follow Danian Marengo, <a href="https://www.danianmarengo.nl">Website</a>

<br>






## License
<a href="https://github.com/Marengd/kwoot/blob/main/LICENSE"> Mit</a>
<br>
Written by Danian Marengo