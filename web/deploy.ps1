$ErrorActionPreference = "Stop"

$AppName = "lorem-ipsum"
$Image = "lorem-ipsum-web:latest"
$RemoteHost = "root@89.167.25.230"
$KeyPath = "C:\Users\User\.ssh\id_rsa"
$RemotePath = "/opt/$AppName"

Write-Host "Building image locally..."
docker build -t $Image .

Write-Host "Shipping image to server..."
docker save $Image | ssh -i $KeyPath $RemoteHost "docker load"

Write-Host "Deploying on server..."
ssh -i $KeyPath $RemoteHost "cd $RemotePath && git pull && docker compose up -d --force-recreate"

Write-Host "Done."
