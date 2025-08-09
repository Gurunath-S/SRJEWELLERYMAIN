@echo off

REM Get the IPv4 address
for /f "tokens=14 delims= " %%i in ('ipconfig ^| findstr /r /c:"IPv4 Address"') do set ipv4=%%i

REM Remove any carriage return characters (sometimes present in Windows output)
for /f "delims=" %%i in ("%ipv4%") do set ipv4=%%i

REM Append port 5000 to the IP address
set server_address=%ipv4%:5000

REM Output the complete address to confirm
echo Your server address is: %server_address%


REM Open a new terminal window for SERVER and run npm start
start cmd /k "cd SERVER && npm run dev"

pause
