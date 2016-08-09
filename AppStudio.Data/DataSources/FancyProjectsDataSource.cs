using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AppStudio.Data
{
    public class FancyProjectsDataSource : DataSourceBase<YouTubeSchema>
    {
        private const long OAuthKey = 8841;

        protected override string CacheKey
        {
            get { return "FancyProjectsDataSource"; }
        }

        public override bool HasStaticData
        {
            get { return false; }
        }

        public async override Task<IEnumerable<YouTubeSchema>> LoadDataAsync()
        {
            try
            {
                var youTubeDataProvider = new YouTubeDataProvider(YouTubeDataType.Playlist, "PLbDYIZ0o1HPK2Tz3FU4DbOU6gXv054iaI", OAuthTokensRepository.GetTokens(OAuthKey));
                return await youTubeDataProvider.LoadAsync();
            }
            catch (Exception ex)
            {
                AppLogs.WriteError("FancyProjectsDataSourceDataSource.LoadData", ex.ToString());
                return new YouTubeSchema[0];
            }
        }
    }
}
 
