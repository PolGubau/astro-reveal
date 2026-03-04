# Contributing to @polgubau/astro-reveal

¡Gracias por tu interés en contribuir! 🎉

## Desarrollo Local

### Requisitos
- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Setup

```bash
# Clonar el repositorio
git clone https://github.com/polgubau/astro-reveal.git
cd astro-reveal

# Instalar pnpm si no lo tienes
npm install -g pnpm
# o
corepack enable

# Instalar dependencias
pnpm install

# Compilar en modo watch
pnpm run dev
```

### Scripts Disponibles

- `pnpm run build` - Compila el paquete
- `pnpm run dev` - Compila en modo watch
- `pnpm run typecheck` - Verifica tipos TypeScript
- `pnpm run lint` - Ejecuta ESLint
- `pnpm run lint:fix` - Corrige problemas de linting automáticamente
- `pnpm run format` - Formatea el código con Prettier
- `pnpm run format:check` - Verifica el formato del código
- `pnpm run validate` - Ejecuta todas las validaciones (typecheck, lint, format, build)
- `pnpm test` - Ejecuta los tests

### Workflow de Desarrollo

1. **Fork y clone** el repositorio
2. **Crea una rama** para tu feature: `git checkout -b feature/mi-feature`
3. **Haz tus cambios** siguiendo las guías de estilo
4. **Ejecuta validaciones**: `pnpm run validate`
5. **Crea un changeset**: `pnpm run changeset`
6. **Commit** tus cambios: `git commit -m "feat: descripción"`
7. **Push** a tu fork: `git push origin feature/mi-feature`
8. **Abre un Pull Request**

## Changesets

Usamos [Changesets](https://github.com/changesets/changesets) para gestionar versiones y changelog.

Cuando hagas cambios que afecten a los usuarios:

```bash
pnpm run changeset
```

Selecciona el tipo de cambio:
- **patch**: Bug fixes, cambios menores
- **minor**: Nuevas features, cambios compatibles
- **major**: Breaking changes

## Guías de Estilo

### TypeScript
- Usa tipos explícitos cuando sea necesario
- Evita `any`, usa `unknown` si es necesario
- Prefiere interfaces sobre types para objetos

### Commits
Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Cambios en documentación
- `style:` Formato, punto y coma, etc.
- `refactor:` Refactorización de código
- `test:` Añadir o modificar tests
- `chore:` Tareas de mantenimiento

### Código
- El código debe pasar `pnpm run validate`
- Mantén las funciones pequeñas y enfocadas
- Añade comentarios para lógica compleja
- Actualiza la documentación si es necesario

## Testing

Actualmente no hay tests implementados. ¡Las contribuciones para añadir tests son bienvenidas!

## Preguntas

Si tienes preguntas, abre un [issue](https://github.com/polgubau/astro-reveal/issues) o contacta a [@polgubau](https://github.com/polgubau).

