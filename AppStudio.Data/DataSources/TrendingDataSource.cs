using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AppStudio.Data
{
    public class TrendingDataSource : DataSourceBase<RssSchema>
    {
        private const string _url =@"http://9gag-rss.com/api/rss/get?code=9GAG&format=2";

        protected override string CacheKey
        {
            get { return "TrendingDataSource"; }
        }

        public override bool HasStaticData
        {
            get { return false; }
        }

        public async override Task<IEnumerable<RssSchema>> LoadDataAsync()
        {
            try
            {
                var rssDataProvider = new RssDataProvider(_url);
                return await rssDataProvider.Load();
            }
            catch (Exception ex)
            {
                AppLogs.WriteError("TrendingDataSourceDataSource.LoadData", ex.ToString());
                return new RssSchema[0];
            }
        }
    }
}
