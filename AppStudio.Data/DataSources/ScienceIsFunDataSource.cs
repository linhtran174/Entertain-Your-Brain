using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AppStudio.Data
{
    public class ScienceIsFunDataSource : DataSourceBase<MenuSchema>
    {
        private const string _file = "/Assets/Data/ScienceIsFunDataSource.json";

        protected override string CacheKey
        {
            get { return "ScienceIsFunDataSource"; }
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
                AppLogs.WriteError("ScienceIsFunDataSource.LoadData", ex.ToString());
                return new MenuSchema[0];
            }
        }

    }
}
