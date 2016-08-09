using System;
using System.Windows;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AppStudio.Data
{
    public class MinionMashDataSource : DataSourceBase<TouchDevelopSchema>
    {
        private const string LocalDataSource = "/Assets/Data/MinionMashDataSource.json";
        private const string ScriptId = "mchsa";

        protected override string CacheKey
        {
            get { return "MinionMashDataSource"; }
        }

        public override bool HasStaticData
        {
            get { return false; }
        }

        public async override Task<IEnumerable<TouchDevelopSchema>> LoadDataAsync()
        {
            try
            {
                var serviceDataProvider = new TouchDevelopDataProvider(LocalDataSource, ScriptId);
                return await serviceDataProvider.Load();
            }
            catch (Exception ex)
            {
                AppLogs.WriteError("MinionMashDataSourceDataSource.LoadData", ex.ToString());
                return new TouchDevelopSchema[0];
            }
        }
    }
}
