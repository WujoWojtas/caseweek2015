using RestSharp;
using System;
using System.Threading;

namespace UsersGenerator
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            RestClient rc = new RestSharp.RestClient("http://localhost:1337/user");
            int counter = 0;
            while (true)
            {
                try
                {
                    RestRequest req = new RestRequest(Method.POST);
                    var usr = new { firstName = "Jan" + counter, lastName = "Kowalsky" + counter };
                    req.AddJsonBody(usr);

                    string response = rc.Execute(req).Content;
                    if (!string.IsNullOrWhiteSpace(response))
                    {
                        Console.WriteLine(response);
                    }
                    counter++;
                }
                catch { }

                Thread.Sleep(2000);
            }
        }
    }
}