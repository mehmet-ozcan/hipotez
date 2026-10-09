@echo off
REM Hipotez MCP'yi Claude Desktop'a kaydeder.
REM ONEMLI: Bu dosyayi calistirmadan once Claude Desktop'i TAMAMEN kapatin
REM (sistem tepsisinden de cikin). Sonra bu dosyaya cift tiklayin.

where node >nul 2>nul
if %ERRORLEVEL%==0 (
  node "%~dp0register-claude.js"
) else (
  "C:\Program Files\nodejs\node.exe" "%~dp0register-claude.js"
)

echo.
pause
