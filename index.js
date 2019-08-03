#!/usr/bin/env node
const FS = require("fs");

exports.ignore_nm = () => FS.writeFileSync(".gitignore", "node-modules");
