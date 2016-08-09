using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AppStudio.Data
{
    public class RomanticSongsDataSource : DataSourceBase<YouTubeSchema>
    {
        private const long OAuthKey = 8841;

        protected override string CacheKey
        {
            get { return "RomanticSongsDataSource"; }
        }

        public override bool HasStaticData
        {
            get { return false; }
        }

        public async override Task<IEnumerable<YouTubeSchema>> LoadDataAsync()
        {
            try
            {
                var youTubeDataProvider = new YouTubeDataProvider(YouTubeDataType.Playlist, "PLAF4280944B04178B", OAuthTokensRepository.GetTokens(OAuthKey));
                return await youTubeDataProvider.LoadAsync();
            }
            catch (Exception ex)
            {
                AppLogs.WriteError("RomanticSongsDataSourceDataSource.LoadData", ex.ToString());
                return new YouTubeSchema[0];
            }
        }
    }
}
 
