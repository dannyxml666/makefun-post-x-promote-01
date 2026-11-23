import * as fs from 'node:fs';
import * as path from 'node:path';

function runCopy(): void {
    const botDir: string = process.env.MAKEFUN_BOT_DIR || '/bot';
    const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || '/output';

    const sourceFile: string = path.join(botDir, 'POST.json');
    const targetFile: string = path.join(outputDir, 'POST.json');

    try {
        fs.mkdirSync(outputDir, { recursive: true });
        const fileContent: Buffer = fs.readFileSync(sourceFile);
        fs.writeFileSync(targetFile, fileContent);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        process.stderr.write(`Failed to copy POST.json: ${message}\n`);
        process.exit(1);
    }
}

runCopy();

