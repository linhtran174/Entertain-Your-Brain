using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AppStudio.Data
{
    public class SurvivalTechniquesDataSource : DataSourceBase<YouTubeSchema>
    {
        private const long OAuthKey = 8841;

        protected override string CacheKey
        {
            get { return "SurvivalTechniquesDataSource"; }
        }

        public override bool HasStaticData
        {
            get { return false; }
        }

        public async override Task<IEnumerable<YouTubeSchema>> LoadDataAsync()
        {
            try
            {
                var youTubeDataProvider = new YouTubeDataProvider(YouTubeDataType.Playlist, "PLbDYIZ0o1HPKxy-eHH-ZVRvbHn9y16X1d", OAuthTokensRepository.GetTokens(OAuthKey));
                return await youTubeDataProvider.LoadAsync();
            }
            catch (Exception ex)
            {
                AppLogs.WriteError("SurvivalTechniquesDataSourceDataSource.LoadData", ex.ToString());
                return new YouTubeSchema[0];
            }
        }
    }
}
 
