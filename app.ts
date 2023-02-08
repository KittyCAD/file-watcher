import fs from 'fs'
import fsp from 'fs/promises'
import { file } from '@kittycad/lib'

const cadFile = './tester.step';

(async ()=>{
    console.log(`Watching for file changes on ${cadFile}`);

    // Your token will be parsed from the environment
    // variable: 'KITTYCAD_TOKEN'.

    fs.watchFile(cadFile, async (_event: any, filename: any) =>  {
        if (filename) {
            console.log(`${filename} file Changed`);
            // Call the KittyCAD API to get the new mass.
            const response = await file.create_file_mass({
                material_density: 7,
                src_format: 'step',
                body: await fsp.readFile(cadFile, 'base64'),
            })
            if ('error_code' in response) throw response
            console.log(JSON.stringify(response, null, 2))
        } else {
            console.log('filename not provided');
        }
    });
})();

