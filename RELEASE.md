# Release Process

Este documento describe cómo publicar nuevas versiones de `@polgubau/astro-reveal`.

## Proceso Automático (Recomendado)

El paquete usa **Changesets** y **GitHub Actions** para automatizar releases.

### 1. Durante el desarrollo

Cada vez que hagas un cambio que afecte a los usuarios, crea un changeset:

```bash
pnpm run changeset
```

Esto creará un archivo en `.changeset/` describiendo el cambio.

### 2. Merge a main

Cuando hagas merge de tu PR a `main`:

1. GitHub Actions detectará los changesets pendientes
2. Creará automáticamente un **"Version Packages" PR**
3. Este PR contendrá:
   - Versión actualizada en `package.json`
   - `CHANGELOG.md` actualizado
   - Changesets consumidos

### 3. Publicar

1. Revisa el "Version Packages" PR
2. Haz merge del PR
3. GitHub Actions automáticamente:
   - Ejecutará tests
   - Compilará el paquete
   - Publicará a npm
   - Creará un GitHub Release

## Proceso Manual (Emergencias)

Si necesitas publicar manualmente:

### Requisitos previos

1. Tener permisos de publicación en npm
2. Estar autenticado: `pnpm login`
3. Estar en la rama `main` actualizada

### Pasos

```bash
# 1. Asegúrate de que todo está limpio
git status

# 2. Ejecuta validaciones
pnpm run validate

# 3. Actualiza la versión
pnpm version patch  # o minor, o major

# 4. Compila
pnpm run build

# 5. Publica
pnpm publish

# 6. Push de tags
git push --follow-tags
```

## Versionado

Seguimos [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0 → 2.0.0): Breaking changes
- **MINOR** (1.0.0 → 1.1.0): Nuevas features compatibles
- **PATCH** (1.0.0 → 1.0.1): Bug fixes

## Checklist Pre-Release

Antes de publicar, verifica:

- [ ] Todos los tests pasan
- [ ] La documentación está actualizada
- [ ] El CHANGELOG refleja los cambios
- [ ] No hay cambios sin commitear
- [ ] La versión es correcta
- [ ] Has probado el paquete localmente (`pnpm pack` y probar el .tgz)

## Configuración de Secrets

Para que funcione la publicación automática, necesitas configurar en GitHub:

### NPM_TOKEN

1. Ve a [npmjs.com](https://www.npmjs.com/)
2. Settings → Access Tokens
3. Generate New Token → Automation
4. Copia el token
5. En GitHub: Settings → Secrets → Actions → New repository secret
6. Nombre: `NPM_TOKEN`
7. Valor: tu token de npm

## Troubleshooting

### "npm ERR! 403 Forbidden"
- Verifica que estás autenticado: `pnpm whoami`
- Verifica que tienes permisos en el paquete

### "Version already exists"
- Incrementa la versión en `package.json`
- O usa `pnpm version patch/minor/major`

### GitHub Actions falla
- Revisa los logs en la pestaña "Actions"
- Verifica que el secret `NPM_TOKEN` está configurado
- Asegúrate de que el token tiene permisos de publicación

