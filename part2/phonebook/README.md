# Parte 2 - Phonebook

[Click](https://fullstackopen.com/es/part2/formularios) para ir a los ejercicios

## Ejercicio 2.6

Crear la agenda telefónica (como una SPA) y permitir la adicion de una persona.

## Ejercicio 2.7

Evita que el usuario pueda agregar nombres que ya existen en el directorio telefónico (mostrar con `alert`).

## Ejercicio 2.8

Ampliar la aplicación permitiendo a los usuarios agregar números de teléfono a la guía telefónica.

## Ejercicio 2.9

Implementar un campo de búsqueda que pueda usarse para filtrar la lista de personas por nombre.

## Ejercicio 2.10

Si ha implementado su aplicación en un solo componente, refactorice extrayendo las partes adecuadas en nuevos componentes. Mantenga el estado de la aplicación y todos los controladores de eventos en el componente raíz de `App`.

## Ejercicio 2.11

Modifique la aplicación de modo que el estado inicial de los datos se obtenga del servidor (`json-server`) mediante la librería `axios`.

## Ejercicio 2.15

Actualmente, los números que se agregan a la agenda no se guardan en un servidor backend. Arreglar esta situación.

## Ejercicio 2.16

Extraer el código que maneja la comunicación con el backend en su propio módulo siguiendo el ejemplo que se mostró anteriormente

## Ejercicio 2.17

Permitir que los usuarios eliminen entradas de la agenda. La eliminación se puede realizar a través de un botón dedicado para cada persona en la lista de la agenda.

## Ejercicio 2.18

Cambiar la funcionalidad de modo que si se agrega un número a un usuario ya existente, el nuevo número reemplazará al anterior.

## Ejercicio 2.19

Utilizar el ejemplo de mensaje de error mejorado de la parte 2 como guía para mostrar una notificación que dura unos segundos después de que se ejecuta una operación exitosa.

## Ejercicio 2.20

Abra su aplicación en dos navegadores. Si elimina a una persona en el navegador 1 un momento antes de intentar cambiar el número de teléfono de la persona en el navegador 2, obtendrá un mensaje de error.
Solucione el problema de acuerdo con el ejemplo que se muestra en promesa y errores en la parte 2. Modifique el ejemplo para que se muestre al usuario un mensaje cuando la operación no se realice correctamente. Los mensajes que se muestran para eventos exitosos y no exitosos deben verse diferentes.