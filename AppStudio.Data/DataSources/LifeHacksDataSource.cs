using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AppStudio.Data
{
    public class LifeHacksDataSource : DataSourceBase<YouTubeSchema>
    {
        private const long OAuthKey = 8841;

        protected override string CacheKey
        {
            get { return "LifeHacksDataSource"; }
        }

        public override bool HasStaticData
        {
            get { return false; }
        }

        public async override Task<IEnumerable<YouTubeSchema>> LoadDataAsync()
        {
            try
            {
                var youTubeDataProvider = new YouTubeDataProvider(YouTubeDataType.Playlist, "PLbDYIZ0o1HPIj9q1L_pfwDSdbXW3qSAjy", OAuthTokensRepository.GetTokens(OAuthKey));
                return await youTubeDataProvider.LoadAsync();
            }
            catch (Exception ex)
            {
                AppLogs.WriteError("LifeHacksDataSourceDataSource.LoadData", ex.ToString());
                return new YouTubeSchema[0];
            }
        }
    }
}
 
