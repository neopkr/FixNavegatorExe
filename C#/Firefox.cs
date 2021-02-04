using System;
using System.Collections.Generic;
using System.Text;
using System.Diagnostics;

namespace CMDFixNavegator
{
    class Firefox
    {
        public void openFirefox()
        {
            Process.Start("firefox", "www.google.com");
        }
        public void reloadFirefox()
        {
            
        }
    }
}
