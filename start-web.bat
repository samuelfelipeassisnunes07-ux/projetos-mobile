@echo off
setlocal

set "NODE_DIR=C:\Program Files\nodejs"
if exist "%NODE_DIR%\node.exe" (
  set "PATH=%NODE_DIR%;%PATH%"
)

where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js/npm nao encontrado. Instale o Node.js ou coloque C:\Program Files\nodejs no PATH.
  pause
  exit /b 1
)

npm run web
