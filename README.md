# Learning TypeScript

## Lesson 1:

    - npm i typescript -g - _ install typescript globally _
    - tsc main.ts -w - _ watching for file changes*
    - tsc --init  - _ tsconfig.json-file _
      - *set settings*
        - "rootDir": './src'
        - "outDir": './build/js' - _ where the js will be compiled _
        - "target": "es2016"
        - "include": ["src"] - _ not compile .ts-file outside the src-dir. _
        - "noEmitOnError": true - _ if preferred, stop compiling if there is an error in the .ts-file _
