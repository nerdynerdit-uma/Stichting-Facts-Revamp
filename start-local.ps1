# PowerShell script to start local server
Write-Host "Starting local server for Stichting Facts website..." -ForegroundColor Green
Write-Host ""

# Try Python first
try {
    $python = Get-Command python -ErrorAction SilentlyContinue
    if ($python) {
        Write-Host "Using Python HTTP server..." -ForegroundColor Yellow
        Start-Process "http://localhost:8000"
        python -m http.server 8000
        exit
    }
} catch {}

# Try Python 3
try {
    $python3 = Get-Command python3 -ErrorAction SilentlyContinue
    if ($python3) {
        Write-Host "Using Python 3 HTTP server..." -ForegroundColor Yellow
        Start-Process "http://localhost:8000"
        python3 -m http.server 8000
        exit
    }
} catch {}

# Try Node.js http-server
try {
    $httpServer = Get-Command http-server -ErrorAction SilentlyContinue
    if ($httpServer) {
        Write-Host "Using Node.js http-server..." -ForegroundColor Yellow
        Start-Process "http://localhost:8080"
        http-server -p 8080 -o
        exit
    }
} catch {}

# Try Node.js via npx
try {
    $node = Get-Command node -ErrorAction SilentlyContinue
    if ($node) {
        Write-Host "Using Node.js http-server (via npx)..." -ForegroundColor Yellow
        Start-Process "http://localhost:8080"
        npx -y http-server -p 8080 -o
        exit
    }
} catch {}

# Fallback: open HTML file directly
Write-Host "No server found. Opening index.html directly..." -ForegroundColor Yellow
Start-Process "index.html"
