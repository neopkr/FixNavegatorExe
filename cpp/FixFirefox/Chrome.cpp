#pragma warning(disable : 4996)
#include <iostream>
#include <chrono>
#include <windows.h>
#include <stdlib.h>
#include <cstdlib>
#include <cstdio>

using namespace std;

void Chrome()
{
	FILE* archivo;

	chrome:
	system("cls");
	int _CINT;
	string _YN;
	string _taskkill = "taskkill /f /im chrome.exe";
	string _shutdownR = "shutdown /r";
	cout << "Seleccione el problema: ";
	cout << "\n0.- Restart Chrome";
	cout << "\n1.- Restart PC\n";
	cin >> _CINT;
	switch (_CINT)
	{
	case 0:
		cout << "Restarting Chrome...";
		system(_taskkill.c_str());
		system("start chrome");
		goto chrome;
	case 1:
		
		cout << "Estas seguro? (Y/N)";
		cin >> _YN;
		if (_YN == "Y" || _YN == "y")
		{
			cout << "Restarting...";
			Sleep(5000);
			system(_shutdownR.c_str());
		}
		else if (_YN == "N" || _YN == "n")
		{
			system("cls");
			goto chrome;
		}
	}
	
}



