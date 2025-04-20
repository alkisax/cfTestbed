node --experimental-strip-types example2.ts

```
npm install -global typescript
```

```
tsc example2.ts
npm install -global ts-node
```

### extension vscode coderunner

## tsconfig.json
```
{
  "compilerOptions": {
    "module": "CommonJS",
    "esModuleInterop": true,
    "target": "ES6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "sourceRoot": "src",
    "strict": true //added
  },
  "lib": ["ES2024"]
}
```
### και με το βελάκι |> επάνω δεξια στο vs το τρέχει

# εγκατάσταση Angular
```bash
npm install -g @angular/cli
ng version
```
# καινούργιο Angular
## αρχικα settings:
```bash
ng new angular-introduction
```
#### (το πήγα στον εξωτερικο σκληρο λογο χωρου)
- cd /e/coding/CF7TESTBEDANGULAR

### στο tsconfig.json
```
    "baseUrl": "./",
```

## το τρέχω με
```bash
ng serve
```

 εγκαθηστώ το angular language Service (addon)

 prettier code formater (addon)

 ### bootstrap
 ```bash
 npm install bootstrap
 ```
 ## angular.json
```
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.rtl.min.css"
],
```` 
(προσοχη στα /)
```bash
npm install --save-dev prettier
```

φτιάχνω αρχείο .pretierrc
```
{
  "overrides": [{
    "files": "*.html",
    "options": {
      "parser": "angular"
    }
  }]
}
```

# github pages
git init κάνει απο μόνο του το Angular
```bash
git remote add origin git@github.com:alkisax/cf7-angular-introduction.git
git push -u origin main

ng add angular-cli-ghpages

```

## package.json
οταν τρέξουμε το deploy ανεβάζει αυτό που κάνει build στην σελίδα που δίνουμε
```
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "deploy": "ng deploy --base-href=https://alkisax.github.io/cf7-angular-introduction/"
  },
```
```bash
npm run deploy
```
και αν πάω στην σελίδα το βλέπω

# αρχίζουμε την εφαρμογή
θέλω να περάσω απο το component (που είναι ο controller μου) στο html (που είναι το template μου). Αυτή είναι η λογική του angular

### στο components.ts
```typescript
export class AppComponent {
  name = 'Alkis'

  person = {
    givenName: "Alkis",
    surName: "kopakakis",
    age: 44,
    email: 'alkisax@gmail.com'
  }
}
```

### την μεταβλητή στο html
```
{{ name }}
{{person.givenName}}
{{person.surName}}
{{person.age}}
```
και
```bash
ng serve
```

### δημιουργία νέου component

```bash
ng generate component components/person-table
```
αφού φτιάξω την TS του Component καλώ με {{}} οτι χρειάζετε απο αυτό στο αντίστοιχο html του component

στο app.component.ts
```typescript
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
```

στο κεντρικό μου app.component.html
```html
<div class="d-flex gap-5 text-nowrap">
  <app-person-table></app-person-table>
</div>
```

και με npm run deploy ανεβένει και στο github page










