@echo off
echo Starting local server for Stichting Facts website...
echo.
echo Opening browser at http://localhost:8000
echo Press Ctrl+C to stop the server
echo.

REM Try Python first (most common)
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Using Python HTTP server...
    start http://localhost:8000
    python -m http.server 8000
    goto :end
)

REM Try Python 3
python3 --version >nul 2>&1
if %errorlevel% == 0 (
    echo Using Python 3 HTTP server...
    start http://localhost:8000
    python3 -m http.server 8000
    goto :end
)

REM Try Node.js http-server
where http-server >nul 2>&1
if %errorlevel% == 0 (
    echo Using Node.js http-server...
    start http://localhost:8080
    http-server -p 8080 -o
    goto :end
)

REM Try Node.js npx http-server
where node >nul 2>&1
if %errorlevel% == 0 (
    echo Using Node.js http-server (via npx)...
    start http://localhost:8080
    npx -y http-server -p 8080 -o
    goto :end
)

REM Fallback: just open the HTML file
echo No server found. Opening index.html directly...
start index.html
goto :end

:end
