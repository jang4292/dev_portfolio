import fs from "node:fs";

import path from "node:path";
import xlsx from "xlsx";


function parseArgs(argv) {
    const args = { _: [] };
    for (const a of argv.slice(2)) {
        if (!a.startsWith("--")) args._.push(a);
        else {
            const [k, v = "true"] = a.slice(2).split("=");
            args[k] = v;
        }
    }
    return args;
}

const args = parseArgs(process.argv);
const inputPath = args._[0];


const wb = xlsx.readFile(inputPath);

// console.log(wb)
// console.log(wb.SheetNames[1])
// debugger


const targetSheet = wb.SheetNames[1]
// const targetSheet = sheetName || wb.SheetNames[0];
const sheet = wb.Sheets[targetSheet];

// console.log(sheet)

const rows = xlsx.utils.sheet_to_json(sheet, { defval: "", raw: false });

// debugger;
rows.forEach(row => console.log(row.dea))
console.log(rows[0]);

// console.log(JSON.stringify(rows, null, 2));


// const jsonOutput = JSON.stringify(rows, null, 2);

// fs.writeFileSync(outputPath, jsonOutput, "utf8");
// console.log(`Converted sheet "${targetSheet}" to JSON and saved to ${outputPath}`);import fs from "fs";
// import xlsx from "xlsx";
// import path from "path";    