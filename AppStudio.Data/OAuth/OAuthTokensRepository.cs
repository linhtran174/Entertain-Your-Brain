using System.Collections.Generic;

namespace AppStudio.Data
{
    public static class OAuthTokensRepository
    {
        private static Dictionary<long, OAuthTokens> Tokens { get; set; }

        static OAuthTokensRepository()
        {
            Tokens = new Dictionary<long, OAuthTokens>();


            Tokens.Add(8823, new OAuthTokens
                            {
                                { "AppId", "1629559133943564" },
                                { "AppSecret", "7a18c0d8c7dea7cfba07947a2bd98917" }
                            });

            Tokens.Add(8841, new OAuthTokens
                            {
                                { "ApiKey", "AIzaSyAHzyP27sPqTuoR2o7Z17BBkZ9ruvFkUKY" }
                            });

        }

        public static OAuthTokens GetTokens(long key)
        {
            if (Tokens.ContainsKey(key))
            {
                return Tokens[key];
            }
            return null;
        }

    }
}
