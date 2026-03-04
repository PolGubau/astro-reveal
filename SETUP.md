# Setup del Paquete npm

Este documento te guía para configurar el paquete y prepararlo para publicación.

## ✅ Configuración Completada

El paquete ya tiene configurado:

- ✅ **GitHub Actions CI/CD** - Testing, build y publicación automática
- ✅ **ESLint + Prettier** - Calidad y formato de código
- ✅ **TypeScript** - Compilación y tipos
- ✅ **Changesets** - Gestión automática de versiones
- ✅ **Scripts pnpm** - Desarrollo, testing, validación
- ✅ **Configuración de publicación** - package.json optimizado

## 🚀 Primeros Pasos

### 1. Instalar pnpm (si no lo tienes)

```bash
npm install -g pnpm
# o
corepack enable
```

### 2. Instalar Dependencias

```bash
pnpm install
```

### 3. Compilar el Paquete

```bash
pnpm run build
```

Esto generará los archivos en `dist/`:
- `dist/index.js` - Código compilado
- `dist/index.d.ts` - Definiciones de tipos
- `dist/reveal.js` - Lógica de reveal
- `dist/reveal.d.ts` - Tipos de reveal

### 4. Validar Todo

```bash
pnpm run validate
```

Esto ejecuta:
- Type checking
- Linting
- Format checking
- Build

## 📦 Preparar para Publicación

### Configurar npm Token en GitHub

Para publicación automática, necesitas configurar el token de npm:

1. **Crear token en npm**:
   - Ve a https://www.npmjs.com/settings/YOUR_USERNAME/tokens
   - Click en "Generate New Token" → "Automation"
   - Copia el token

2. **Añadir a GitHub Secrets**:
   - Ve a tu repo en GitHub
   - Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: pega tu token
   - Click "Add secret"

### Verificar package.json

Asegúrate de que estos campos son correctos:

```json
{
  "name": "@polgubau/astro-reveal",
  "version": "1.0.0",
  "author": "polgubau <hola@polgubau.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/polgubau/astro-reveal"
  }
}
```

## 🔄 Workflow de Desarrollo

### Desarrollo Local

```bash
# Modo watch - recompila automáticamente
pnpm run dev
```

### Hacer Cambios

1. Crea una rama: `git checkout -b feature/mi-feature`
2. Haz tus cambios
3. Valida: `pnpm run validate`
4. Crea changeset: `pnpm run changeset`
5. Commit y push

### Publicar Nueva Versión

El proceso es **automático**:

1. Haz merge de tu PR a `main`
2. GitHub Actions creará un PR "Version Packages"
3. Revisa y haz merge del PR
4. Se publicará automáticamente a npm

Ver [RELEASE.md](./RELEASE.md) para más detalles.

## 🧪 Testing

Actualmente el paquete no tiene tests implementados. Para añadirlos:

```bash
# Instalar framework de testing (ejemplo con Vitest)
pnpm add -D vitest @vitest/ui

# Actualizar package.json scripts
"test": "vitest run",
"test:watch": "vitest",
"test:ui": "vitest --ui"
```

## 📝 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `pnpm run build` | Compila TypeScript a JavaScript |
| `pnpm run dev` | Compila en modo watch |
| `pnpm run typecheck` | Verifica tipos sin compilar |
| `pnpm run lint` | Ejecuta ESLint |
| `pnpm run lint:fix` | Corrige problemas de linting |
| `pnpm run format` | Formatea código con Prettier |
| `pnpm run format:check` | Verifica formato |
| `pnpm run validate` | Ejecuta todas las validaciones |
| `pnpm run changeset` | Crea un changeset para release |
| `pnpm test` | Ejecuta tests (placeholder) |

## 🔍 Verificar Antes de Publicar

```bash
# 1. Validar todo
pnpm run validate

# 2. Empaquetar localmente
pnpm pack

# 3. Inspeccionar contenido
tar -tzf polgubau-astro-reveal-*.tgz

# 4. Probar en otro proyecto
cd /path/to/test-project
pnpm add /path/to/polgubau-astro-reveal-*.tgz
```

## 📚 Documentación Adicional

- [CONTRIBUTING.md](./CONTRIBUTING.md) - Guía de contribución
- [RELEASE.md](./RELEASE.md) - Proceso de release
- [README.md](./README.md) - Documentación del usuario
- [USAGE.md](./USAGE.md) - Ejemplos de uso

## ❓ Troubleshooting

### Error: "Cannot find module"
```bash
pnpm run build
```

### Error: "Linting failed"
```bash
pnpm run lint:fix
```

### Error: "Format check failed"
```bash
pnpm run format
```

### Build funciona pero tipos no
```bash
# Limpiar y reconstruir
rm -rf dist
pnpm run build
```

