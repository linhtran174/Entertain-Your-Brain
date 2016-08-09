using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AppStudio.Data
{
    public class DirtyJokesDataSource : DataSourceBase<RssSchema>
    {
        private const string _url =@"http://www.jokespalace.com/category/dirty-jokes/feed/rss2/";

        protected override string CacheKey
        {
            get { return "DirtyJokesDataSource"; }
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
                AppLogs.WriteError("DirtyJokesDataSourceDataSource.LoadData", ex.ToString());
                return new RssSchema[0];
            }
        }
    }
}
