# competitive-programming

## 環境構築

### Bun プロジェクトの作成

```sh
bun init -y

Done! A package.json file was saved in the current directory.
 + index.ts
 + .gitignore
 + tsconfig.json (for editor autocomplete)
 + README.md

To get started, run:
  bun run index.ts
```

### TypeScript のインストール

```sh
bun add -d typescript

bun add v1.2.1 (ce532901)

installed typescript@5.7.3 with binaries:
 - tsc
 - tsserver

[6.00ms] done
```

#### tsconfig.json の設定

> [!TIP]
> 基本的に Linter, Formatter は Biome を使用します。

```json
{
  "compilerOptions": {
    // Enable latest features
    "lib": [
      "ESNext"
    ],
    "target": "ESNext",
    "module": "ESNext",
    "moduleDetection": "force",
    "allowJs": false,
    // Bundler mode
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,
    // Best practices
    "strict": true,
    "skipLibCheck": true,
    "noFallthroughCasesInSwitch": true,
    // Some stricter flags (disabled by default)
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noPropertyAccessFromIndexSignature": false
  }
}
```

### Biome のインストール

```sh
bun add -d @biomejs/biome

bun add v1.2.1 (ce532901)

installed @biomejs/biome@1.9.4 with binaries:
 - biome

2 packages installed [1.86s]

Blocked 1 postinstall. Run `bun pm untrusted` for details.
```

```sh
bun pm trust --all

bun pm trust v1.2.1 (ce532901)

./node_modules/@biomejs/biome @1.9.4
 ✓ [postinstall]: node scripts/postinstall.js

 1 script ran across 1 package [64.00ms]
```

```sh
bunx biome init

Welcome to Biome! Let's get you started...

Files created 

  - biome.json
    Your project configuration. See https://biomejs.dev/reference/configuration

Next Steps 

  1. Setup an editor extension
     Get live errors as you type and format when you save.
     Learn more at https://biomejs.dev/guides/integrate-in-editor/

  2. Try a command
     biome check  checks formatting, import sorting, and lint rules.
     biome --help displays the available commands.

  3. Migrate from ESLint and Prettier
     biome migrate eslint   migrates your ESLint configuration to Biome.
     biome migrate prettier migrates your Prettier configuration to Biome.

  4. Read the documentation
     Find guides and documentation at https://biomejs.dev/guides/getting-started/

  5. Get involved with the community
     Ask questions and contribute on GitHub: https://github.com/biomejs/biome
     Seek for help on Discord: https://biomejs.dev/chat
```

#### Biome のフォーマット設定

```json:biome.json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "vcs": {
    "enabled": false,
    "clientKind": "git",
    "useIgnoreFile": false
  },
  "files": {
    "ignoreUnknown": false,
    "ignore": ["node_modules"]
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "lineWidth": 120
  },
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "double"
    }
  }
}
```

### AtCoder CLI のインストール

```sh
bun add -g atcoder-cli

bun add v1.2.1 (ce532901)

installed atcoder-cli@2.2.0 with binaries:
 - acc

219 packages installed [1.63s]

warn: To run "acc", add the global bin folder to $PATH:

export PATH="/Users/b150005/.bun/bin:$PATH"
```

### online-judge-tools のインストール

```sh
pipx install online-judge-tools

  installed package online-judge-tools 11.5.1, installed using Python 3.13.1
  These apps are now globally available
    - oj
⚠️  Note: '/Users/b150005/.local/bin' is not on your PATH environment variable. These apps will not be globally accessible until your PATH is updated. Run `pipx ensurepath` to automatically add it, or manually modify your PATH in your shell's config file (e.g. ~/.bashrc).
done! ✨ 🌟 ✨
```

```sh
pipx ensurepath

Success! Added /Users/b150005/.local/bin to the PATH environment variable.

Consider adding shell completions for pipx. Run 'pipx completions' for instructions.

You will need to open a new terminal or re-login for the PATH changes to take effect. Alternatively, you can source your shell's config file with e.g. 'source ~/.bashrc'.

Otherwise pipx is ready to go! ✨ 🌟 ✨
```

```sh
source ~/.zshrc

export plugin already enabled
```

```sh
pipx inject online-judge-tools setuptools

  injected package setuptools into venv online-judge-tools
done! ✨ 🌟 ✨
```