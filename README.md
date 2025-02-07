# Competitive Programming with TypeScript(Node.js)

## 🕹️ コマンド集

| コマンド | 用途 | 実行例 |
| --- | --- | --- |
| `bun run new` | 問題とサンプルの取得 | `bun run new abc101` |
| `bun run test` | コードのテスト | `bun run test -c "bun abc101/a/abc101-a.ts" -d abc101/a/tests` |
| `bun run lint-and-format` | コードの提出 | `bun run submit abc101/a/abc101-a.ts -t abc101_a -c abc101 -- -l 5058` |

## ⚙️ 環境構築

### Bun プロジェクトの作成

- [Bun](https://bun.sh/)

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

- [TypeScript](https://www.typescriptlang.org/ja/)

```sh
bun add -d typescript

bun add v1.2.1 (ce532901)

installed typescript@5.7.3 with binaries:
 - tsc
 - tsserver

[6.00ms] done
```

#### tsconfig.json の設定

- [TSConfig リファレンス](https://www.typescriptlang.org/ja/tsconfig/)

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

- [Biome](https://biomejs.dev/ja/)

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

- [Configure Biome](https://biomejs.dev/guides/configure-biome/)

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

### atcoder-cli のインストール

- [atcoder-cli](https://github.com/Tatamo/atcoder-cli)

```sh
bun add -g atcoder-cli

bun add v1.2.1 (ce532901)

installed atcoder-cli@2.2.0 with binaries:
 - acc

219 packages installed [1.63s]

warn: To run "acc", add the global bin folder to $PATH:

export PATH="/Users/b150005/.bun/bin:$PATH"
```

```sh
echo 'export PATH="/Users/b150005/.bun/bin:$PATH"' >> ~/.zshrc
```

```sh
source ~/.zshrc

export plugin already enabled
```

```sh
acc login

(node:56032) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
? username: b150005
? password: [hidden]
OK
```

```sh
acc config default-task-choice all

default-task-choice = all
```

#### テンプレートの作成

```sh
cd `acc config-dir`
```

```sh
mkdir ts && cd $_
```

```sh
touch main.ts && touch template.json
```

```sh
open .
```

```json:template.json
{
  "task": {
    "program": [["main.ts", "{ContestID}-{tasklabel}.ts"]],
    "submit": "{ContestID}/{tasklabel}/{ContestID}-{tasklabel}.ts",
    "cmd": "jq -r --arg tid \"$TASK_ID\" '{ contest_title: .contest.title, contest_url: .contest.url, task: .tasks[] | select(.id == $tid) } | \"CONTEST_TITLE=\\\"\\(.contest_title)\\\" CONTEST_URL=\\\"\\(.contest_url)\\\" TASK_LABEL=\\\"\\(.task.label)\\\" TASK_TITLE=\\\"\\(.task.title)\\\" TASK_URL=\\\"\\(.task.url)\\\"\"' ../contest.acc.json > /tmp/vars && . /tmp/vars && export TASK_LABEL_LOWER=$(echo $TASK_LABEL | tr '[:upper:]' '[:lower:]') && sed -i \"\" \"s|\\${CONTEST_ID}|$CONTEST_ID|g; s|\\${CONTEST_TITLE}|$CONTEST_TITLE|g; s|\\${CONTEST_URL}|$CONTEST_URL|g; s|\\${TASK_ID}|$TASK_ID|g; s|\\${TASK_LABEL}|$TASK_LABEL|g; s|\\${TASK_TITLE}|$TASK_TITLE|g; s|\\${TASK_URL}|$TASK_URL|g; s|\\${SUBMIT}|$CONTEST_ID/$TASK_LABEL_LOWER/$CONTEST_ID-$TASK_LABEL_LOWER.ts|g; s|\\${TEST_DIR}|$TASK_LABEL_LOWER/tests|g\" \"$CONTEST_ID-$TASK_LABEL.ts\""
  }
}
```

```ts:main.ts
/*
CONTEST
  ID: ${CONTEST_ID}
  TITLE: ${CONTEST_TITLE}
  URL: ${CONTEST_URL}

TASK
  ID: ${TASK_ID}
  LABEL: ${TASK_LABEL}
  TITLE: ${TASK_TITLE}
  URL: ${TASK_URL}

To test , run the following command:
  bun run test -c "bun ${SUBMIT}" -d ${CONTEST_ID}/${TEST_DIR}

To submit, run the following command:
  bun run submit ${SUBMIT} -t ${TASK_ID} -c ${CONTEST_ID} -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8");
```

```sh
acc config default-template ts

default-template = ts
```

### online-judge-tools のインストール

- [online-judge-tools](https://github.com/online-judge-tools/oj)

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

```sh
acc check-oj

online-judge-tools is available. found at:
/Users/b150005/.local/bin/oj
```

```sh
oj login https://atcoder.jp/

[INFO] GET: https://pypi.org/pypi/online-judge-tools/json
[INFO] 200 OK
[INFO] GET: https://pypi.org/pypi/online-judge-api-client/json
[INFO] 200 OK
[INFO] online-judge-tools 11.5.1 (+ online-judge-api-client 10.10.1)
[INFO] load cookie from: /Users/b150005/Library/Application Support/online-judge-tools/cookie.jar
[NETWORK] GET: https://atcoder.jp/contests/agc001/submit
[NETWORK] 302 Found
[FAILURE] You are not signed in.
[ERROR] Selenium is not installed. Please run $ pip3 install selenium
[WARNING] Switch to use CUI-based login instead of Selenium
[NETWORK] GET: https://atcoder.jp/contests/agc001/submit
[NETWORK] 302 Found
[NETWORK] GET: https://atcoder.jp/login
[NETWORK] 200 OK
[WARNING] AtCoder says: × Please sign in first.
Username: b150005
Password: 
[NETWORK] POST: https://atcoder.jp/login
[NETWORK] redirected to: https://atcoder.jp/home
[NETWORK] 200 OK
[WARNING] AtCoder says: × Welcome, b150005.
[INFO] Welcome,
[NETWORK] GET: https://atcoder.jp/contests/agc001/submit
[NETWORK] 200 OK
[SUCCESS] You have already signed in.
[INFO] save cookie to: /Users/b150005/Library/Application Support/online-judge-tools/cookie.jar
```

### コマンドの追加

```json:package.json
{
  "name": "competitive-programming",
  "module": "index.ts",
  "type": "module",
  "scripts": {
    "lint": "biome lint --write --diagnostic-level=error",
    "format": "biome check --write --linter-enabled=false",
    "lint-and-format": "biome check --write --diagnostic-level=error",
    "lint-and-format:ci": "biome ci --verbose --diagnostic-level=error",
    "new": "acc new",
    "test": "oj test",
    "submit": "acc submit"
  },
  "devDependencies": {
    "@biomejs/biome": "latest",
    "@types/bun": "latest"
  },
  "peerDependencies": {
    "typescript": "latest"
  },
  "trustedDependencies": ["@biomejs/biome"]
}
```