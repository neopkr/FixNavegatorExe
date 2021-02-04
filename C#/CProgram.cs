using System;

namespace CMDFixNavegator
{
    class Program
    {
        static void Main(string[] args)
        {
            menu:
            int election;
            Console.WriteLine("Welcome to CMDFixNavegator - C# Edition");
            Console.WriteLine("Select the browser: ");

            Console.WriteLine("1.- Firefox");
            Console.WriteLine("2.- Google Chrome");
            Console.WriteLine("3.- Microsoft Egde");
            election = Convert.ToInt32(Console.ReadLine());
            switch (election)
            {
                case 1:
                    firefox:
                    int eledd;
                    Firefox firefox = new Firefox();
                    Console.WriteLine("Firefox: ");
                    Console.WriteLine("1.- Open");
                    Console.WriteLine("2.- Reload");
                    Console.WriteLine("3.- SafeMode");
                    Console.WriteLine("4.- Profiles");
                    eledd = Convert.ToInt32(Console.ReadLine());
                    switch(eledd)
                    {
                        case 1:
                            firefox.openFirefox();
                            goto firefox;
                    }
                    goto menu;
            }
            
        }
    }
}
