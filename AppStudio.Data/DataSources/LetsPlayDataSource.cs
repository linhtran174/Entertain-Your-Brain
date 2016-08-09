using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AppStudio.Data
{
    public class LetsPlayDataSource : DataSourceBase<MenuSchema>
    {
        private const string _file = "/Assets/Data/LetsPlayDataSource.json";

        protected override string CacheKey
        {
            get { return "LetsPlayDataSource"; }
        }

        public override bool HasStaticData
        {
            get { return true; }
        }

        public async override Task<IEnumerable<MenuSchema>> LoadDataAsync()
        {
            try
            {
                var serviceDataProvider = new StaticDataProvider(_file);
                return await serviceDataProvider.Load<MenuSchema>();
            }
            catch (Exception ex)
            {
                AppLogs.WriteError("LetsPlayDataSource.LoadData", ex.ToString());
                return new MenuSchema[0];
            }
        }

    }
}
