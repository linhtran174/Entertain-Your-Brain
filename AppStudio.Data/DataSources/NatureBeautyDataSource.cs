using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AppStudio.Data
{
    public class NatureBeautyDataSource : DataSourceBase<FacebookSchema>
    {
        private const long OAuthKey = 8823;
        private const string UserId = "480863325265144";

        protected override string CacheKey
        {
            get { return "NatureBeautyDataSource"; }
        }

        public override bool HasStaticData
        {
            get { return false; }
        }

        public async override Task<IEnumerable<FacebookSchema>> LoadDataAsync()
        {
            try
            {
                var facebookDataProvider = new FacebookDataProvider(UserId, OAuthTokensRepository.GetTokens(OAuthKey));
                return await facebookDataProvider.LoadAsync();
            }
            catch (Exception ex)
            {
                AppLogs.WriteError("NatureBeautyDataSourceDataSource.LoadData", ex.ToString());
                return new FacebookSchema[0];
            }
        }
    }
}
