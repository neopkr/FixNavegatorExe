using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Diagnostics;

namespace CMDFixNavegator
{
    class Config
    {
        public string title = "CMDFixNavegator";
        public void configTitleConsole()
        {
            Console.Title = title;
        }
        public void cursorVisible()
        {
            Console.CursorVisible = false;
        }
        public void KillByNameTask(string taskName)
        {
            try
            {
                foreach (Process proc in Process.GetProcessesByName(taskName))
                {
                    proc.Kill();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
