## Documentación solución prueba
#### Tecnologías implementadas
- Node js
- Express js
- Sequelize
- Postgres

#### Pasos para probar solución
- Crear una una base de datos en postgres llamada: **empresa**
 Acá un en ejemplo desde el SQL Shell
![creacion BD](https://github.com/gErsinho11/jerarquia-empleados-middle-fs/assets/90161649/0f7ef33c-0b47-4f8f-8106-699998584bd5)
		
- Crear un archivo en la carpeta raíz llamado **.env** que contenga la siguiente información:
		DB_USER=postgres
		DB_PASSWORD=postgres.
		DB_HOST=localhost
Cambiar las credenciales por las propias. Tener en cuenta que el puerto del motor de la BD debe ser el que viene por defecto: **5432**.
- Instalar los paquetes y dependencias del desarrollo en una terminal de comandos con el comando: **npm install**
- Ejecutar el comando **npm start** para inicializar la aplicación, donde automáticamente creará las tablas y relaciones necesarias en la BD **empresa**, previamente creada. EL servidor quedará arriba en el puerto 3001.
- Para ejecutar las pruebas se pueden realizar desde una herramienta de testeo de APIs como Postman.
- Se cuentan con 4 EndPoints:
![EndPoints](https://github.com/gErsinho11/jerarquia-empleados-middle-fs/assets/90161649/3d7e4325-716e-445b-92a6-d256a3469602)
	- http://127.0.0.1:3001/empleado  de tipo POST, para creación de nuevos usuarios, con la siguiente estructura (sino tiene jefe inmediato se debe asignar null al campo jefeId). Se crearán 5 usuarios para evidenciar con un ejemplo el funcionamiento de la aplicación.
![post-empleado](https://github.com/gErsinho11/jerarquia-empleados-middle-fs/assets/90161649/e01c8eb2-c4f6-4c0a-9665-389b10088e61)
	- http://127.0.0.1:3001/empleado de tipo GET, para mostrar todos los empleados existentes.
![get-empleado](https://github.com/gErsinho11/jerarquia-empleados-middle-fs/assets/90161649/28e315c9-0020-4d66-9a60-4501e95b22a6)

![get-empleado-2](https://github.com/gErsinho11/jerarquia-empleados-middle-fs/assets/90161649/744c5978-1c28-4159-8a4f-30a83db37ca5)
	- http://127.0.0.1:3001/empleado/jerarquia de tipo GET, para mostrar el orden jerarquico actual de la compañía.
![get-empleado-jerarquia-1](https://github.com/gErsinho11/jerarquia-empleados-middle-fs/assets/90161649/b6cb68ae-76eb-4bb5-814c-30eca5209f64)

![get-empleado-jerarquia-2](https://github.com/gErsinho11/jerarquia-empleados-middle-fs/assets/90161649/ee9fa14a-b3d3-4b53-87c6-f1a16aa708be)

![get-empleado-jerarquia-3](https://github.com/gErsinho11/jerarquia-empleados-middle-fs/assets/90161649/64f6dd3c-4613-40d6-a69e-cebabff21f26)
	- http://127.0.0.1:3001/empleado/4 de tipo put, para realizar cambio de jefe a un empleado, causando al mismo tiempo variación en la estructura jerárquica del compañía. Se realizará como ejemplo el cambio de jefe del empleado 4, y se mostrará en las imágenes el cambio de jefeId, lugar en la estructura jerárquica y cambio de versionamiento con la fecha en que se realiza el cambio de jefe.
![put-empleado-jerarquia-1](https://github.com/gErsinho11/jerarquia-empleados-middle-fs/assets/90161649/8e26e540-dd92-4f5c-bf1e-2dd2b2ed4693)

![put-empleado-jerarquia-2](https://github.com/gErsinho11/jerarquia-empleados-middle-fs/assets/90161649/92be1976-ee73-496b-a11a-82662d6a472e)

![put-empleado-jerarquia-3](https://github.com/gErsinho11/jerarquia-empleados-middle-fs/assets/90161649/c71c6940-d33b-455d-9f2e-3980dce3e1a9)

#### Explicación de la solución
Se aborda el problema tratando de dar solución de la forma más eficiente posible, se realiza una aplicación en capas totalemente modularizada para seguir las buenas prácticas de programación. Se tiene en cuenta que tanto jefes como subordinados son empleados, entonces solo se debe tener una tabla con relaciones recursivas sobre ésta, las cuales evidencien la relación existente entre jefes y empleados y se pueda capturar la historia de los cambios de la relación jerárquica. Apoyándome del ORM Sequelize se realizan estas relaciones y el modelo de la tabla necesarias para poder tener las consultas solicitadas.

![modelo](https://github.com/gErsinho11/jerarquia-empleados-middle-fs/assets/90161649/789384d4-4a5e-4efe-a81e-3871039f8caf)

![relaciones](https://github.com/gErsinho11/jerarquia-empleados-middle-fs/assets/90161649/c2de6460-b764-4698-b8cc-a9443c6a13a8)
