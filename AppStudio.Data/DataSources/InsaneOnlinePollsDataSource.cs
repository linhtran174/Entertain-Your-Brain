using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AppStudio.Data
{
    public class InsaneOnlinePollsDataSource : DataSourceBase<RssSchema>
    {
        private const string _url =@"http://www.jokespalace.com/category/online-polls/feed/rss2/";

        protected override string CacheKey
        {
            get { return "InsaneOnlinePollsDataSource"; }
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
                AppLogs.WriteError("InsaneOnlinePollsDataSourceDataSource.LoadData", ex.ToString());
                return new RssSchema[0];
            }
        }
    }
}
