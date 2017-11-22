# typescript-promise-pitfalls
A simple example of promise/race condition pitfalls.

The code itself is rudimentary it aims to highlight race condition issues. When using something as simple as node-fetch to retrieve data from a website.

installing is fairly straight forward 

Clone the repo

```git clone https://github.com/csharpgeek/typescript-promise-pitfalls.git```

Install the dependencies

```npm install```

Compile the typescript files

```tsc```

Execute it all

```node default.js```

Your output should resemble the following
```
0
1
2
Executing zero fetch
executing first fetch
PARALLEL EXECUTION
Done them all
Executing second fetch
```