# Progetto : Catalogo prodotti interattivo con carrello base

Creazione di un’applicazione web che mostri un catalogo prodotti e permetta di aggiungerli a un carrello virtuale con
aggiornamento del totale.

#### Concetti JavaScript da applicare

- Variabili: let , const , tipi primitivi ( String , Number , Boolean )
- Operatori: aritmetici, di assegnazione, comparazione, logici
- Controllo di flusso: if , else , else if , switch , && , || , !
- Cicli: for , while , for...of , for...in
- Funzioni: dichiarazione, parametri, return
- Array: indicizzazione, push , pop , splice , shift , unshift , indexOf , includes , .length
- Oggetti: oggetti letterali, proprietà, accesso
- Interazione utente semplice: alert , prompt , input HTML, eventi
- Template literals: per creare HTML dinamico

#### Concetti di DOM da poter applicare
- Selezione: getElementById , getElementsByClassName , querySelector , querySelectorAll
- Navigazione: parentElement , children , nextElementSibling , previousElementSibling
- Creazione: createElement , appendChild , append , prepend
- Contenuto: textContent , innerHTML , insertAdjacentHTML
- Stili e classi: element.style , classList.add/remove/toggle
- Attributi: setAttribute , getAttribute , removeAttribute , dataset
- Eventi: addEventListener

#### Requisiti del progetto
- File minimi richiesti
- index.html
- style.css
- script.js
- HTML Structure
- Una sezione per il product catalog
- Una sezione per il shopping cart
- Un’area per il total price
- Collegamenti ai file CSS e JS

#### CSS
- Layout semplice ma ordinato
- Classi per evidenziare, nascondere, ecc.

### JavaScript: Specifiche del Progetto
- Product Data, Crea un array productCatalog 
- Cart Data, Array cart , inizialmente vuoto, con oggetti.

#### showCatalog()
Genera dinamicamente il catalogo nella sezione dedicata:
Nome e prezzo prodotto
Immagine del prodotto (usando la proprietà imageUrl )
(crea un tag
<img> per ogni prodotto, imposta src con imageUrl e alt con il nome del
prodotto)
Pulsante “Add to Cart” con attributo data-id uguale all’id del prodotto

#### Eventi “Add to Cart”
Al click su un pulsante:
Leggi data-id
Cerca l’oggetto nel cart
Se esiste, incrementa quantity
Altrimenti, push nuovo oggetto con quantity: 1
Chiama updateCart() e updateTotal()

#### updateCart()
Genera l’HTML del carrello leggendo cart
Per ogni articolo:
Trova prodotto corrispondente nel productCatalog
Mostra name , quantity , subtotal
Aggiungi pulsante “Remove” con data-id

#### Eventi “Remove”
Recupera productId
Se quantity > 1 , decrementa
Se quantity === 1 , rimuovi dal cart con splice
Aggiorna cart e totale

#### updateTotal()
Itera su cart , calcola subtotal per ogni voce (prezzo * quantità)
Somma tutto e mostra il totale nell’HTML

#### Inizializzazione
Al DOMContentLoaded , chiama showCatalog()
cart è inizialmente vuoto
updateCart() mostra messaggio “Cart is empty”

### Consegna
- Consegna i tre file .html , .css , .js con codice:
- Ordinato e indentato
- Commentato dove necessario
- Conforme alle regole e ai vincoli

### Bonus Challenges (opzionali)
- Campo di input per cercare prodotti per nome nel catalogo
- Pulsante “Clear Cart” per svuotare tutto
- Miglioramenti estetici al CSS
- Aggiungi un README con un focus su “Come funziona”: una spiegazione passo-passo di cosa fa il codice principale (es. mostra catalogo, aggiunge prodotti al carrello,aggiorna il totale)