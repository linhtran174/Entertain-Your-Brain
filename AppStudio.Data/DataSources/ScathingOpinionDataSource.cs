using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AppStudio.Data
{
    public class ScathingOpinionDataSource : DataSourceBase<RssSchema>
    {
        private const string _url =@"http://www.jokespalace.com/category/scathing-opinion/feed/rss2/";

        protected override string CacheKey
        {
            get { return "ScathingOpinionDataSource"; }
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
                AppLogs.WriteError("ScathingOpinionDataSourceDataSource.LoadData", ex.ToString());
                return new RssSchema[0];
            }
        }
    }
}
