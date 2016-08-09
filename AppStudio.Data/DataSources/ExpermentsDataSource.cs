using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AppStudio.Data
{
    public class ExpermentsDataSource : DataSourceBase<YouTubeSchema>
    {
        private const long OAuthKey = 8841;

        protected override string CacheKey
        {
            get { return "ExpermentsDataSource"; }
        }

        public override bool HasStaticData
        {
            get { return false; }
        }

        public async override Task<IEnumerable<YouTubeSchema>> LoadDataAsync()
        {
            try
            {
                var youTubeDataProvider = new YouTubeDataProvider(YouTubeDataType.Playlist, "PLbDYIZ0o1HPI8dmQL9hZM0HbAmKJmDvhN", OAuthTokensRepository.GetTokens(OAuthKey));
                return await youTubeDataProvider.LoadAsync();
            }
            catch (Exception ex)
            {
                AppLogs.WriteError("ExpermentsDataSourceDataSource.LoadData", ex.ToString());
                return new YouTubeSchema[0];
            }
        }
    }
}
 
