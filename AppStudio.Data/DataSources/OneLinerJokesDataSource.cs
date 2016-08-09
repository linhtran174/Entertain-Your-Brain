using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AppStudio.Data
{
    public class OneLinerJokesDataSource : DataSourceBase<RssSchema>
    {
        private const string _url =@"http://www.jokespalace.com/category/one-liners/feed/rss2/";

        protected override string CacheKey
        {
            get { return "OneLinerJokesDataSource"; }
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
                AppLogs.WriteError("OneLinerJokesDataSourceDataSource.LoadData", ex.ToString());
                return new RssSchema[0];
            }
        }
    }
}
