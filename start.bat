@echo off
title TrendRadar AI Local Server
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
