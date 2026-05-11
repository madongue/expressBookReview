$zipUrl = 'https://nodejs.org/dist/latest/node-v26.1.0-win-x64.zip'
$outZip = Join-Path $env:TEMP 'node-lts.zip'
$tmp = Join-Path $env:TEMP 'nodejs-extract'
$dest = Join-Path $env:LOCALAPPDATA 'Programs\nodejs'

Write-Output "Downloading $zipUrl to $outZip"
Invoke-WebRequest -Uri $zipUrl -OutFile $outZip -UseBasicParsing -ErrorAction Stop

Write-Output "Extracting to $tmp"
Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
Expand-Archive -Path $outZip -DestinationPath $tmp -Force

Write-Output "Moving extracted Node.js to $dest"
Remove-Item -Recurse -Force $dest -ErrorAction SilentlyContinue
Move-Item -Force (Join-Path $tmp 'node-v26.1.0-win-x64') $dest

Write-Output "Extraction completed"
Write-Output "Node path exists: $(Test-Path (Join-Path $dest 'node.exe'))"
Write-Output "Node version: $(& (Join-Path $dest 'node.exe') -v)"
Write-Output "NPM version: $(& (Join-Path $dest 'npm.cmd') -v)"
