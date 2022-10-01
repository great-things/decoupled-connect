# decoupled-connect
A NodeJS script to connect the input and output streams of two programs

## Installation
Note: This installation currently only works on Linux and macOS. You need to have NodeJS installed: https://nodejs.org/

You can either leave the `decoupled-connect` file where it is and reference it via an absolute path every time, or you can move it to `/usr/local/bin` to make it available globally, so you only have to write `decoupled-connect` to use it.

## Usage
This assumes you have the script installed globally.

```
decoupled-connect program1 program2
```

For more complex commands:
```
decoupled-connect connect.js 'program1 parameter' 'program2 something'
```
