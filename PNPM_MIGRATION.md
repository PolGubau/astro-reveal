# Migración a pnpm

Este proyecto usa **pnpm** como gestor de paquetes por su velocidad y eficiencia.

## ✅ Cambios Realizados

### 1. GitHub Actions
- ✅ Todos los workflows usan `pnpm` en lugar de `npm`
- ✅ Añadido `pnpm/action-setup@v3` en todos los jobs
- ✅ Cache configurado para `pnpm`

### 2. Configuración
- ✅ `.npmrc` - Configuración de pnpm
- ✅ `pnpm-workspace.yaml` - Workspace config
- ✅ `.gitignore` - Ignora `pnpm-lock.yaml`

### 3. Scripts
- ✅ `package.json` scripts actualizados para usar `pnpm`
- ✅ Toda la documentación actualizada

### 4. Documentación
- ✅ SETUP.md
- ✅ CONTRIBUTING.md
- ✅ RELEASE.md

## 🚀 Cómo Usar

### Instalar pnpm

**Opción 1: Con npm**
```bash
npm install -g pnpm
```

**Opción 2: Con Corepack (recomendado)**
```bash
corepack enable
corepack prepare pnpm@latest --activate
```

**Opción 3: Script de instalación**
```bash
# Windows (PowerShell)
iwr https://get.pnpm.io/install.ps1 -useb | iex

# macOS/Linux
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

### Comandos Equivalentes

| npm | pnpm |
|-----|------|
| `npm install` | `pnpm install` |
| `npm install <pkg>` | `pnpm add <pkg>` |
| `npm install -D <pkg>` | `pnpm add -D <pkg>` |
| `npm uninstall <pkg>` | `pnpm remove <pkg>` |
| `npm run <script>` | `pnpm run <script>` o `pnpm <script>` |
| `npm ci` | `pnpm install --frozen-lockfile` |
| `npm publish` | `pnpm publish` |

### Primeros Pasos

```bash
# 1. Instalar pnpm
npm install -g pnpm

# 2. Instalar dependencias
pnpm install

# 3. Compilar
pnpm run build

# 4. Validar
pnpm run validate
```

## 🎯 Ventajas de pnpm

### 1. **Más Rápido**
- Instalación hasta 2x más rápida que npm
- Usa enlaces simbólicos en lugar de copiar archivos

### 2. **Ahorra Espacio**
- Almacén global de paquetes
- Los paquetes se comparten entre proyectos
- Puede ahorrar GBs de espacio en disco

### 3. **Más Seguro**
- Estructura de `node_modules` estricta
- Previene acceso a dependencias no declaradas
- Mejor aislamiento de paquetes

### 4. **Mejor Gestión de Monorepos**
- Soporte nativo para workspaces
- Mejor manejo de dependencias compartidas

## 📝 Notas Importantes

### pnpm-lock.yaml
- **NO** commitear `pnpm-lock.yaml` en este proyecto (está en `.gitignore`)
- En proyectos de aplicación SÍ deberías commitearlo
- Para librerías/paquetes npm, es mejor no incluirlo

### CI/CD
- GitHub Actions usa `pnpm install --frozen-lockfile`
- Esto asegura instalaciones reproducibles
- Falla si el lockfile no está sincronizado

### Compatibilidad
- pnpm es compatible con todos los paquetes de npm
- Usa el mismo registro (registry.npmjs.org)
- Los usuarios pueden instalar tu paquete con npm, yarn o pnpm

## 🔧 Troubleshooting

### "pnpm: command not found"
```bash
npm install -g pnpm
```

### Limpiar caché
```bash
pnpm store prune
```

### Reinstalar todo
```bash
rm -rf node_modules
pnpm install
```

### Ver información del store
```bash
pnpm store status
pnpm store path
```

## 📚 Recursos

- [Documentación oficial de pnpm](https://pnpm.io/)
- [Comparación con npm/yarn](https://pnpm.io/feature-comparison)
- [Benchmarks](https://pnpm.io/benchmarks)
- [Migración desde npm](https://pnpm.io/installation#using-npm)

