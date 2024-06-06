# 🔒 Password Encryptor

![Password Encryptor](https://cdn.discordapp.com/attachments/770019428174790699/1246889889975500821/encryptedpass.PNG?ex=6662a573&is=666153f3&hm=1d1b89cc37fd2dc8930b14f6a2ff2c8316de8a337f8d519d3f4019f32b281223&)

## Descripción del Proyecto
Este proyecto es un sencillo pero poderoso encriptador de contraseñas, implementado en Node.js. Utiliza bcrypt para encriptar contraseñas y guarda tanto la contraseña original como la encriptada en un archivo JSON.

#### **-> Lenguaje:** *:es:* 

## 🚀 Características

- **Encriptación Segura:** Utiliza bcrypt con 10 rondas de sal para encriptar contraseñas.
- **Interfaz de Línea de Comandos:** Solicita al usuario que ingrese una contraseña a través de la terminal.
- **Almacenamiento Seguro:** Guarda la contraseña original y la encriptada en un archivo JSON.

## 📋 Requisitos

- Node.js (v12 o superior).
- npm (v6 o superior).
- Bcrypt (Native).

## 🛠️ Instalación

1. Clona este repositorio en tu máquina local.

    ```bash
    git clone https://github.com/TheYiro/Password-Encryption---JS.git
    cd password-encryptor
    ```

2. Instala las dependencias necesarias.

    ```bash
    npm install
    npm i bcrypt
    ```

## 🏃 Ejecución

1. Para iniciar el script, simplemente ejecuta:

    ```bash
    node encryptPassword.js
    ```

2. Ingresa la contraseña cuando se te solicite.

3. La contraseña encriptada se guardará en el archivo `credentials.json` en el directorio del proyecto.

## 📷 Capturas de Pantalla

![Captura de Pantalla 1](https://cdn.discordapp.com/attachments/770019428174790699/1246894499209154600/image.png?ex=665e0c7e&is=665cbafe&hm=9ee3ad54150a822150d66b362cfc227bb3d43bfff1d5ac97d812ce529ab0c7e3&)
<br>*credentials.json - Credenciales Guardadas en el JSON*</br>

## 📂 Estructura del Proyecto

```plaintext
password-encryptor/
├── encryptPassword.js
├── credentials.json
├── package.json
├── package-lock.json
└── README.md
```
<h3 align="center"> By: 𝒥𝑜𝒶𝒸𝑜✨ </h3>
