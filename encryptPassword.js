//DEPENDENCIES/DEPENDENCIAS
const bcrypt = require('bcrypt');
const readline = require('readline');
const fs = require('fs').promises;
const path = require('path');

// Configuración centralizada para parámetros de seguridad y rutas de archivo.
// Centralized configuration for security parameters and file paths.
const CONFIG = {
    saltRounds: 10, //Número de rondas sal hashing
    outputFilePath: path.join(__dirname, 'credentials.json') //Ruta Archivo salida
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function encryptPassword(password, saltRounds) {
    try {
        // Generación de sal con el numero de rondas especificadas de hashing
        const salt = await bcrypt.genSalt(saltRounds);
        // Hashing de la contraseña de sal generada
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword; //Return Encrypted Pass
    } catch (error) {
        console.error('Error encriptando la contraseña:', error);
        throw error;
    }
}

async function saveCredentialsToFile(credentials) {
    try {
        // Escritura de las credenciales en un archivo con formato JSON
        await fs.writeFile(CONFIG.outputFilePath, JSON.stringify(credentials, null, 4));
        console.log('Credenciales guardadas exitosamente en', CONFIG.outputFilePath);
    } catch (error) {
        console.error('Error guardando las credenciales en el archivo:', error);
        throw error; // Lanzamiento del error para ser manejado por el llamador
    }
}

rl.question('Por favor, ingrese la contraseña a encriptar: ', async (password) => {
   //Validación Input no vacio
    if (!password){
    console.error('La contraseña no puede estar vacia.');
    rl.close();
    return;
   }

    try {
        // Encriptación de la contraseña ingresada.
        const hashedPassword = await encryptPassword(password, CONFIG.saltRounds);

        // Creacion del credentials object con la encrypted password.
        const credentials = {
            originalPassword: password,
            password: hashedPassword
        };

        // Guardado de las credenciales en el JSON
        await saveCredentialsToFile(credentials);
    } catch (error) {
        console.error('Error encriptando la contraseña:', error);
    } finally {
        rl.close();
    }
});

// ⠀⠀⠀⠀⣄⠀⠀⠀
// ⢰⣤⣀⣼⣿⠀⠀⠀
// ⠀⣱⠆⠀⢨⣓⣦⠄
// ⠴⠷⠒⢆⣿⠅⠀⠀
// ⠀⠀⠀⠈⠋⠂⠀⠀
