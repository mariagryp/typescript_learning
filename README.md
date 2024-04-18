# Learning TypeScript

## Lesson 1:

    - npm i typescript -g //install typescript globally
    - tsc main.ts -w // watching for file changes
    - tsc --init // tsconfig.json-file
      - *set settings*
        - "rootDir": './src'
        - "outDir": './build/js' // where the js will be compiled
        - "target": "es2016"
        - "include": ["src"] // not compile .ts-file outside the src-dir.
        - "noEmitOnError": true // if preferred, stop compiling if there is an error in the .ts-file
