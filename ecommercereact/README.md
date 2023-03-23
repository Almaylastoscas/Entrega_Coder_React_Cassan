# Proyecto de react para curso de coderHouse

## Este proyecto fue desarrollado siguiendo los parametros de los desafios planteados en cada clase .

### En este proyecto se realizo una tienda ecommerce de zapatillas , variando en tres categorias Deportivas , Urbanas y vestir .

** Para inicializar este proyecto debe : **

1. clonar el repositorio de github
2. corree el comando npm i para instalar las dependencias
3. correr el comando npm start
4. abrir el navegador en el puerto 3001

** en la realizacion de este proyecto se utilizaron las siguientes librerias **

- Para la navegacion entre las distintas secciones React ruter dom

### Componentes utilizados

1. Ruetes
2. Route
3. Link
4. Hook UseNavigate

- Para el maquetado y estilado

1. algunas clases de css
2. Tailwind CSS

- FireBase - FireStore Como base de datos
- sweet alert 2 para mensajes de alerta y modales .

# En este proyecto se cumplieron los siguientes lineamientos

1. Convenciones

> Respeta todas las convenciones propuestas y lo hace en todas las
> instancias según lo propuesto.
> Es consistente con sus declaraciones del readme.
> Trata de afiliarse a las convenciones del ecosistema de React.
> Presenta un linting consistente con espaciados que favorezcan la lectura

2. Container patterns

> todo el proyecto.
> No se deja comentarios, debuggers, o TODO’s olvidados.
> No deja piezas de código inutilizadas, no referenciadas o sin sentido.

3. Navegabilidad

> Respeta las convenciones y los routings
> Puede implementar patrones adicionales
> Ejecuta navegaciones programáticas
> Utiliza NavLinks para ubicar al usuario y les da un styling que valide que yaestá en una ruta
> Si ya se encuentra en una ruta y navega a la misma ruta no re-ejecuta
> llamados

4. Catálogo y detalle

> Respeta las convenciones de naming
> Separa el key / id de categoría de su respectiva descripción
> internacionalizada
> Filtra por categorías implementando correctamente el useParams(:catId).
> aprovecha un useEeffect para detectar sus cambios de ruta y vuelve adisparar las tareas asincrónicas.
> Separa correctamente las responsabilidades.
> Toda la información solicitada se muestra.
> Usa loaders.
> No sobre-optimiza y se mantiene simple.

5. CartProvider/CartContext

> Mantiene las responsabilidades limpias
> No lleva cosas de UI al context
> No genera subestados para guardar totalizaciones o counts / summary
> Puede crear otras variaciones de las sub-funcionalidades y adicionar
> funciones simples que mantienen la consistencia con el resto

6. CartWidget/Cart

> No hay lógicas de cálculo de cantidades dentro del widget .
> Puede separar el widget del rendering del icon.
> Aparte de dividir responsabilidades es capaz de desarrollar un flow claro yreactivo de deshabilitación de campos.
> Valida correctamente los inputs y sus tipos de datos.

# Enlace del repositorio

[link](https://github.com/Almaylastoscas/Entrega_Coder_React_Cassan.git)
