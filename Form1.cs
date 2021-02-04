using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading;
using System.Windows.Forms;
using System.Diagnostics;
using System.IO;
using Microsoft.VisualBasic;

namespace FixNavegator
{
    public partial class Formd : Form
    {
        string Title = "FixNavegator";
        public Formd()
        {
            InitializeComponent();
        }

        private void Formd_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            ExecuteCommand("taskkill /f /im chrome.exe");
            Thread.Sleep(2000);
            Process.Start("chrome");
            MessageBox.Show("Reinicio completado con éxito", Title);
        }

        public void ExecuteCommand(string _Command)
        {
            System.Diagnostics.ProcessStartInfo procStartInfo = new System.Diagnostics.ProcessStartInfo("cmd", "/c " + _Command);
            procStartInfo.RedirectStandardOutput = true;
            procStartInfo.UseShellExecute = false;
            procStartInfo.CreateNoWindow = false;
            System.Diagnostics.Process proc = new System.Diagnostics.Process();
            proc.StartInfo = procStartInfo;
            proc.Start();
            string result = proc.StandardOutput.ReadToEnd();
            Console.WriteLine(result);
        }
        public void KillTaskByName(string taskName)
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
                MessageBox.Show(ex.Message);
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            ExecuteCommand("taskkill /f /im firefox.exe");
            Thread.Sleep(2000);
            Process.Start("firefox");
            MessageBox.Show("Reinicio completado con éxito", Title);
        }

        private void button3_Click(object sender, EventArgs e)
        {
            MessageBox.Show("We are working in this", Title, MessageBoxButtons.OK, MessageBoxIcon.Error);
            /*
            const string message = "Are you sure want delete all cache of Chrome?";
            const string caption = "Cache Deleting";
            var result = MessageBox.Show(message, caption, MessageBoxButtons.OKCancel, MessageBoxIcon.Question);
            if (result == DialogResult.OK)
            {
                MessageBox.Show("Deleting", caption);
                List<string> strDirectories = Directory.GetDirectories(@"C:\Users\neopk\AppData\Local\Google\Chrome\User Data\Default\Cache", "*.*", SearchOption.AllDirectories).ToList();

                foreach (string fichero in strDirectories)
                {
                    File.Delete(fichero);
                }
            }
            else if (result == DialogResult.Cancel)
            {
                MessageBox.Show("Cancelled", caption);
                
            }
            */
        }
            
        private void button4_Click(object sender, EventArgs e)
        {
            Process.Start("chrome", "www.google.com");
        }

        private void button5_Click(object sender, EventArgs e)
        {
        }

        private void button5_Click_1(object sender, EventArgs e)
        {
            Process.Start("firefox", "www.google.com");
        }

        private void button6_Click(object sender, EventArgs e)
        {
            FirefoxProfilesIssues();
        }

        public void FirefoxProfilesIssues()
        {
            object myValue;
            string message, title, defaultValue;
            message = "Username: ";
            title = "FixNavegator";
            defaultValue = "Insert a User Profile Name";
            myValue = Interaction.InputBox(message, title, defaultValue);
            if((string)myValue == "")
            {
                myValue = defaultValue;
                Interaction.MsgBox("MyValue = " + myValue.ToString(),
                    MsgBoxStyle.OkOnly | MsgBoxStyle.Information, "Enter a UserProfile Name!");
            }
            else
            {
                Interaction.MsgBox("UserProfile Created Succefully" + Environment.NewLine + " New UserProfile = " + myValue.ToString() + "!", MsgBoxStyle.OkOnly | MsgBoxStyle.Information);
            }
            string _PROFILENAME = myValue.ToString();
            Process.Start("firefox", "-CreateProfile " + _PROFILENAME);
            Process.Start("firefox", "-p");
        }

        public void FirefoxSafeMode()
        {
            string message, title;
            message = "Opening Firefox in Safe Mode";
            title = "FixNavegator";
            MessageBox.Show(message, title);
            Process.Start("firefox", "-safe-mode -console");
        }

        private void button7_Click(object sender, EventArgs e)
        {
            FirefoxSafeMode();
        }

        private void button8_Click(object sender, EventArgs e)
        {
            object myValue;
            string message, title, defaultValue;
            message = "Profile Name: " + Environment.NewLine + "Note: Exist 2 default profile: " + Environment.NewLine + "1.- default-release" + Environment.NewLine + "2.- default";
            title = "FixNavegator";
            defaultValue = "Insert a User Profile Name";
            myValue = Interaction.InputBox(message, title, defaultValue);
            if ((string)myValue == "")
            {
                myValue = defaultValue;
                Interaction.MsgBox("MyValue = " + myValue.ToString(),
                    MsgBoxStyle.OkOnly | MsgBoxStyle.Information, "Enter a UserProfile Name!");
            }
            else
            {
                Interaction.MsgBox("UserProfile Selected: " + myValue.ToString() + "!", MsgBoxStyle.OkOnly | MsgBoxStyle.Information);
            }
            string _PROFILENAME = myValue.ToString();
            char comilla = '"';
            Process.Start("firefox", "-p " + comilla + _PROFILENAME + comilla);
        }

        private void button9_Click(object sender, EventArgs e)
        {
            Process.Start("firefox", "-p");
        }

        private void button10_Click(object sender, EventArgs e)
        {
            KillTaskByName("chrome");
            KillTaskByName("firefox");
            KillTaskByName("opera");
            KillTaskByName("msedge");
        }

        private void button11_Click(object sender, EventArgs e)
        {
            Process.Start("msedge");
        }

        private void button12_Click(object sender, EventArgs e)
        {
            Process.Start("chrome", "/incognito");
        }

        private void label5_Click(object sender, EventArgs e)
        {

        }

        private void linkLabel3_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            Process.Start("https://fixnavegator.herokuapp.com/");
        }

        private void button13_Click(object sender, EventArgs e)
        {
        }

        public void Picture()
        {
        }

        private void folderBrowserDialog1_HelpRequest(object sender, EventArgs e)
        {

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            Process.Start("https://www.youtube.com/watch?v=egYTYpleY0U&ab_channel=Macsi");
        }

        public void textBox1_TextChanged(object sender, EventArgs e)
        {
            
        }

        public void button13_Click_1(object sender, EventArgs e)
        {
        }
    }
}
