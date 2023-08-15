# LetsTalk
Discord type platform.
If you've found this, congratulations. In the future, when actual work is uploaded here, this will be privated. This project is not open source.
I'm note sure what language I feel like doing this in, but I'll likley just end up using electron.

- https://www.electronjs.org/




Notes to self:
https://stackoverflow.com/questions/57238680/how-to-compile-lua-into-windows-exe
Also, looks like electron is cross platform. Possibly could change WindowsClient into DesktopClient, as long as there are no performance issues I would need to change for 1 client. (Ex. Windows needs some specific patch code, but the mac and linux versions don't. That would be damn annoying to fix)


* Using lua (as a client) is probably a horrible, horrible idea. Unless that stack overflow thread can compile the lua code to an exe, the source code will be very easy to steal. Not only that, but that link is for lua to *windows exe*, meaning it wont work on other platforms (ios, android, mac, etc) using electron however, would make it easy to port code to different devices. 
