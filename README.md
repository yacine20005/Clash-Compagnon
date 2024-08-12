# Clash Companion

La structure globale du code dans les dossiers de votre workspace semble être organisée de manière à séparer les différentes fonctionnalités et composants de l'application. Voici une explication détaillée de la structure :

### Racine du projet
- [`.gitattributes`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2F.gitattributes%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\yacin\Documents\GitHub\Clash-Analyzer\.gitattributes"), [`.gitignore`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2F.gitignore%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\yacin\Documents\GitHub\Clash-Analyzer\.gitignore") : Fichiers de configuration pour Git.
- [`README.md`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\yacin\Documents\GitHub\Clash-Analyzer\README.md") : Documentation du projet.

### Dossier [`native`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\yacin\Documents\GitHub\Clash-Analyzer\native")
Ce dossier contient les ressources et scripts spécifiques à l'application native.

- **css/** : Contient les fichiers CSS pour le style de l'application.
  - `desktop.css`, `general.css`, [`header.css`](command:_github.copilot.openSymbolFromReferences?%5B%22header.css%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cyacin%5C%5CDocuments%5C%5CGitHub%5C%5CClash-Analyzer%5C%5Cnative%5C%5Cwindows%5C%5Csample-app-view.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsample-app-view.js%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsample-app-view.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A10%2C%22character%22%3A10%7D%7D%5D%5D "Go to definition"), `ingame.css`, `modal.css` : Fichiers CSS pour différents composants et vues de l'application.

- **icons/**, **img/** : Contiennent les icônes et images utilisées dans l'application.

- **manifest.json** : Fichier de configuration pour l'application.

- **scripts/** : Contient les scripts JavaScript pour les services et constantes.
  - **constants/** : Contient les fichiers de constantes.
    - [`games-features.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fscripts%2Fconstants%2Fgames-features.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\yacin\Documents\GitHub\Clash-Analyzer\native\scripts\constants\games-features.js") : Définit des constantes comme [`kGamesFeatures`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fscripts%2Fconstants%2Fgames-features.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22kGamesFeatures%22%5D "c:\Users\yacin\Documents\GitHub\Clash-Analyzer\native\scripts\constants\games-features.js").
  - **services/** : Contient les services utilisés dans l'application.
    - [`hotkeys-service.js`](command:_github.copilot.openSymbolFromReferences?%5B%22hotkeys-service.js%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cyacin%5C%5CDocuments%5C%5CGitHub%5C%5CClash-Analyzer%5C%5Cnative%5C%5Cwindows%5C%5Csecond%5C%5Csecond-controller.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsecond%2Fsecond-controller.js%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsecond%2Fsecond-controller.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A55%7D%7D%5D%5D "Go to definition"), [`running-game-service.js`](command:_github.copilot.openSymbolFromReferences?%5B%22running-game-service.js%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cyacin%5C%5CDocuments%5C%5CGitHub%5C%5CClash-Analyzer%5C%5Cnative%5C%5Cwindows%5C%5Csecond%5C%5Csecond-controller.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsecond%2Fsecond-controller.js%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsecond%2Fsecond-controller.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A59%7D%7D%5D%5D "Go to definition"), [`windows-service.js`](command:_github.copilot.openSymbolFromReferences?%5B%22windows-service.js%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cyacin%5C%5CDocuments%5C%5CGitHub%5C%5CClash-Analyzer%5C%5Cnative%5C%5Cwindows%5C%5Csample-app-view.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsample-app-view.js%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsample-app-view.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A52%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cyacin%5C%5CDocuments%5C%5CGitHub%5C%5CClash-Analyzer%5C%5Cnative%5C%5Cwindows%5C%5Csecond%5C%5Csecond-controller.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsecond%2Fsecond-controller.js%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsecond%2Fsecond-controller.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A3%2C%22character%22%3A55%7D%7D%5D%5D "Go to definition") : Services pour la gestion des raccourcis clavier, des jeux en cours d'exécution et des fenêtres.

- **windows/** : Contient les différents contrôleurs et vues pour les fenêtres de l'application.
  - **background/** : Contient le contrôleur pour la fenêtre de fond.
    - [`background-controller.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fbackground%2Fbackground-controller.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\yacin\Documents\GitHub\Clash-Analyzer\native\windows\background\background-controller.js") : Définit la classe [`BackgroundController`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fbackground%2Fbackground-controller.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22BackgroundController%22%5D "c:\Users\yacin\Documents\GitHub\Clash-Analyzer\native\windows\background\background-controller.js").
  - **desktop/**, **in-game/**, **second/** : Contiennent les contrôleurs et vues pour les différentes fenêtres de l'application.
    - [`sample-app-view.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsample-app-view.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\yacin\Documents\GitHub\Clash-Analyzer\native\windows\sample-app-view.js") : Définit la classe [`SampleAppView`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsample-app-view.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22SampleAppView%22%5D "c:\Users\yacin\Documents\GitHub\Clash-Analyzer\native\windows\sample-app-view.js").
    - [`second-controller.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsecond%2Fsecond-controller.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\yacin\Documents\GitHub\Clash-Analyzer\native\windows\second\second-controller.js") : Définit la classe [`SecondController`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsecond%2Fsecond-controller.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22SecondController%22%5D "c:\Users\yacin\Documents\GitHub\Clash-Analyzer\native\windows\second\second-controller.js").

### Dossier [`ts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\yacin\Documents\GitHub\Clash-Analyzer\ts")
Ce dossier semble contenir le code TypeScript et les configurations associées.

- [`.gitignore`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2F.gitignore%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\yacin\Documents\GitHub\Clash-Analyzer\.gitignore") : Fichier de configuration pour Git.
- [`overwolf.webpack.js`](command:_github.copilot.openSymbolFromReferences?%5B%22overwolf.webpack.js%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cyacin%5C%5CDocuments%5C%5CGitHub%5C%5CClash-Analyzer%5C%5Cnative%5C%5Cwindows%5C%5Csample-app-view.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsample-app-view.js%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsample-app-view.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A69%2C%22character%22%3A4%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cyacin%5C%5CDocuments%5C%5CGitHub%5C%5CClash-Analyzer%5C%5Cnative%5C%5Cwindows%5C%5Csecond%5C%5Csecond-controller.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsecond%2Fsecond-controller.js%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsecond%2Fsecond-controller.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A20%2C%22character%22%3A27%7D%7D%5D%5D "Go to definition"), `webpack.config.js` : Fichiers de configuration pour Webpack.
- [`package.json`](command:_github.copilot.openSymbolFromReferences?%5B%22package.json%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cyacin%5C%5CDocuments%5C%5CGitHub%5C%5CClash-Analyzer%5C%5Cts%5C%5C.gitignore%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fts%2F.gitignore%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fts%2F.gitignore%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A22%2C%22character%22%3A11%7D%7D%5D%5D "Go to definition") : Fichier de configuration pour npm.
- `tsconfig.json` : Fichier de configuration pour TypeScript.

- **public/** : Contient les ressources publiques comme les CSS, icônes, images et le manifest.
  - `css/`, `icons/`, `img/`, [`manifest.json`](command:_github.copilot.openSymbolFromReferences?%5B%22manifest.json%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cyacin%5C%5CDocuments%5C%5CGitHub%5C%5CClash-Analyzer%5C%5Cnative%5C%5Cwindows%5C%5Csample-app-view.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsample-app-view.js%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsample-app-view.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A69%2C%22character%22%3A44%7D%7D%5D%5D "Go to definition") : Ressources publiques.

- **src/** : Contient le code source TypeScript de l'application.
  - `AppWindow.ts`, `consts.ts`, [`background/`](command:_github.copilot.openSymbolFromReferences?%5B%22background%2F%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cyacin%5C%5CDocuments%5C%5CGitHub%5C%5CClash-Analyzer%5C%5Cnative%5C%5Cwindows%5C%5Csecond%5C%5Csecond-controller.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsecond%2Fsecond-controller.js%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%2Fwindows%2Fsecond%2Fsecond-controller.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A19%2C%22character%22%3A43%7D%7D%5D%5D "Go to definition"), `desktop/` : Fichiers et dossiers contenant le code source de l'application.

### Conclusion
La structure de votre projet est bien organisée avec une séparation claire entre les styles, les services, les constantes, les contrôleurs et les vues. Les dossiers [`native`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fnative%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\yacin\Documents\GitHub\Clash-Analyzer\native") et [`ts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fyacin%2FDocuments%2FGitHub%2FClash-Analyzer%2Fts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\yacin\Documents\GitHub\Clash-Analyzer\ts") contiennent respectivement le code JavaScript et TypeScript, avec des configurations et ressources associées.
